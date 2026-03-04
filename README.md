# Redis Concurrent Ticket Booking System

## Overview
This project implements a Concurrent Ticket Booking System using Node.js, Express.js, and Redis. It demonstrates how to handle multiple booking requests safely using Redis-based seat locking to prevent race conditions.

## Technologies Used
- Node.js
- Express.js
- Redis
- Postman

## Features
- Concurrent ticket booking
- Redis-based seat locking
- REST API implementation
- Real-time seat availability management

## Project Structure
ticket-booking-system/
│
├── booking-system.js
├── package.json
└── node_modules

## API Endpoint

### Book Ticket
POST /api/book

Example Request:
POST http://localhost:3000/api/book

Example Response:
{
 "success": true,
 "bookingId": 1772649109770,
 "remaining": 98
}

## How to Run Locally

1. Install dependencies
npm install

2. Start Redis server

3. Run the application
node booking-system.js

4. Test API using Postman
POST http://localhost:3000/api/book

## Result
The system successfully prevents race conditions during concurrent ticket booking using Redis locking mechanisms.

## Author
Shaman Sharma  
B.Tech CSE (AML)  
Chandigarh University
