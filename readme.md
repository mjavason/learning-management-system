# Learning Management System (LMS)

A simple Learning Management System (LMS) to manage educational materials and assignments.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Short Sample Usage](#short-sample-usage)
- [Documentation](#documentation)
- [Design Choices](#design-choices)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Introduction

This is a Learning Management System (LMS) that allows teachers to manage educational materials and assignments. The LMS provides features for uploading learning materials, creating assignments, and handling student submissions. The API for this LMS is currently hosted live at [lms](https://learning-management-system-5tgu.onrender.com).

## Installation

To run the Learning Management System locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file in the project's root folder and fill it with the appropriate URI values.
   - Example `.env` file:
     ```env
     APP_NAME=TemplateApp
     JWT_SECRET=user
     MONGO_DB_URL=db_uri
     USERNAME=user@mail.com
     ACCESS_TOKEN_SECRET=access_token
     REFRESH_TOKEN_SECRET=refresh_token
     ```
   - Make sure to replace `database_uri`, `access_token`, and `refresh_token` with your actual values.
4. Ensure you have Node.js installed on your computer.
5. Build the TypeScript code using `npm run build`.
6. Start the server locally using one of the following commands:

   - For local development with automatic code reloading (using nodemon):
     ```bash
     npm run dev
     ```
   - For running the production-ready build:
     ```bash
     npm start
     ```

7. Check the terminal output to ensure that the server is running, and the database is connected properly.

## Short Sample Usage

The API provides endpoints for various resources, including users, educational materials, assignments, and submissions. Below is a sample response for creating a user:

```json
{
  "success": true,
  "status_code": "10000",
  "message": "Successful",
  "data": {
    "firstname": "John",
    "lastname": "Doe",
    "username": "johndoe1234",
    "role": "student",
    "_id": "65109303a5b3205d9a54e166",
    "createdAt": "2023-09-24T19:50:27.808Z",
    "updatedAt": "2023-09-24T19:50:27.808Z",
    "__v": 0
  }
}
```

Once registered, you can log in by making a POST request to `/api/v1/auth/login` with your username and password. If correct, you'll receive a refresh token and access token, which should be passed as a bearer token in subsequent requests to access various other API resources.

## Documentation

[LMS/Postman](https://documenter.getpostman.com/view/29278179/2s9YJW7SRe)

## Design Choices

This app follows the _Layered (MVC)_ pattern for its folder structure. This choice was made for its readability, maintainability, and separation of concerns.

### Handling Deleted Resources

Deleted resources in this LMS are soft deleted, meaning they are not permanently removed. Deleted posts or assignments are hidden from regular users but can still be viewed by admins. Comments and submissions associated with deleted resources remain untouched. This approach allows for potential data recovery and accountability.

## Contributing

If you find any part of the app you can improve, just fork the project, work on your own copy then send me a pull request, i reply as soon as possible. Do try to make the pull request as small as possible, that way its easier to read through them.

## Acknowledgments

I had the assistance of colleagues, mentors and friends whilst building the project; in the way of coding, design, testing, data entry and advice. Thank you all.
