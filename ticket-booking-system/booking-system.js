const express = require("express");
const redis = require("redis");

const app = express();
app.use(express.json());

const client = redis.createClient();

client.connect();

let TOTAL_SEATS = 100;

// Ticket booking API
app.post("/api/book", async (req, res) => {

    const lockKey = "seat_lock";

    const lock = await client.set(lockKey, "locked", {
        NX: true,
        EX: 5
    });

    if (!lock) {
        return res.status(429).json({
            success: false,
            message: "Another booking in progress"
        });
    }

    let remaining = await client.get("remaining_seats");

    if (!remaining) {
        remaining = TOTAL_SEATS;
        await client.set("remaining_seats", TOTAL_SEATS);
    }

    remaining = parseInt(remaining);

    if (remaining <= 0) {
        return res.json({
            success: false,
            message: "No seats available"
        });
    }

    remaining--;

    await client.set("remaining_seats", remaining);

    await client.del(lockKey);

    res.json({
        success: true,
        bookingId: Date.now(),
        remaining: remaining
    });
});

app.listen(3000, () => {
    console.log("Booking system running on port 3000");
});