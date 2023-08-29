
# Anne Mary Wynter's NoSQL Social Network API


## Description

Anne Mary Wynter's NoSQL Social Network API is a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them. This API is built using Node.js and Mongoose, providing a simple and scalable way to handle social networking data without the restrictions of traditional relational databases.

## Table of Contents

- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [Author](#Author)


## Overview

<img width="1277" alt="Screen Shot 2023-08-29 at 12 14 35 AM" src="https://github.com/annemarywynter1986/NoSQL_Challenge_Social_Network_API/assets/130412307/5745bfc0-05ae-4a33-9cf7-02764d89d7f3">

<img width="1311" alt="Screen Shot 2023-08-29 at 12 14 43 AM" src="https://github.com/annemarywynter1986/NoSQL_Challenge_Social_Network_API/assets/130412307/555e673b-cb62-44ce-8ca7-408f5fa94df5">

<img width="1289" alt="Screen Shot 2023-08-29 at 12 14 53 AM" src="https://github.com/annemarywynter1986/NoSQL_Challenge_Social_Network_API/assets/130412307/0aa7341a-ace4-4f2a-8fe3-579bf1eac1c1">

<img width="1306" alt="Screen Shot 2023-08-29 at 12 15 02 AM" src="https://github.com/annemarywynter1986/NoSQL_Challenge_Social_Network_API/assets/130412307/bfce73e0-be6d-4995-b140-4a2205d005bd">



## GitHub Repository:
https://github.com/annemarywynter1986/NoSQL_Challenge_Social_Network_API.git

## Walkthrough Video:
https://drive.google.com/file/d/1OjEM14FZfd70H_xPoiJvLD2z3iA9uKUU/view?usp=sharing


### The Challenge

The challenge was to build a RESTful API that allows a social media startup to perform CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API must be built using Node.js and Mongoose and provide endpoints that can handle large amounts of unstructured data.

The API allows users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

## Usage Instructions

1. Clone the repository from GitHub and open documentation.
2. Run 'npm install' to install dependencies and update '.env'.
3. Create a .env file in the root directory of the project and add the required variables.
4. Once the server is running, use a tool like Insomnia to test the API endpoints.

#### Available Endpoints

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

GET /api/users: Retrieve a list of all users from the database.

GET /api/users/:userId: Retrieve details of a specific user based on their unique user ID.

POST /api/users: Create a new user by sending user details in the request body.

PUT /api/users/:userId: Update an existing user's information based on their user ID.

DELETE /api/users/:userId: Delete a user from the database using their user ID.

GET /api/thought: Get a collection of all thoughts stored in the database.

GET /api/thought/:thoughtId: Fetch a specific thought using its unique thought ID.

POST /api/thought: Add a new thought to the collection by providing the thought's details in the request body.

PUT /api/thought/:thoughtId: Update an existing thought's content using its thought ID.

DELETE /api/thought/:thoughtId: Delete a thought using its thought ID.

POST /api/thought/:thoughtId/reactions: Add a reaction to a specific thought using the thought's ID. Include the reaction's details in the request body.

DELETE /api/thought/:thoughtId/reactions/:reactionId: Remove a specific reaction from a thought by providing both the thought ID and the reaction ID.

POST /api/users/:userId/friends/:friendId: Establish a friendship connection between two users. Provide both the user ID and the friend's ID in the request.

DELETE /api/users/:userId/friends/:friendId: Remove a friendship connection between two users. Provide both the user ID and the friend's ID in the request.

Please make sure to replace :userId, :thoughtId, and :friendId with the actual IDs when making requests to these endpoints.


## Installation Process

1. Clone the Repository from GitHub or Download the Zip Folder.
2. Open the repository in a source code editor.
3. Open the integrated terminal and run 'npm install' to install dependencies.
4. Follow the installation guides provided in the "Built With" section.

## Built With

- JSON: [JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Mongoose: [7.0.3](https://www.npmjs.com/package/mongoose)
- Express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Insomnia: [by Kong](https://insomnia.rest/)
- MongoDB: [Website](https://www.mongodb.com/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned

1. Built a RESTful API with Node.js and Mongoose.
2. Utilized a NoSQL database to handle unstructured data.
3. Created endpoints for CRUD operations on users, thoughts, and reactions data models.
4. Implemented endpoints to add and remove friends from a user's friend list.
5. Tested API endpoints using Insomnia.
6. Worked with HTTP requests and JSON formatted data.
7. Utilized environment variables and .env files for sensitive data.

### Continued Development

1. Implement additional features to enhance the user experience.
2. Improve error handling and response messaging for better user feedback.
3. Optimize database performance to handle large amounts of data efficiently.
4. Explore different types of NoSQL databases and evaluate their suitability for the project requirements.
5. Expand API documentation to assist developers with using the API.



© 2023 Anne Mary Wynter

## Author

Follow me on Github at [annemarywynter1986](https://github.com/annemarywynter1986)! Additional questions or concerns? Feel free to contact me at missannemary1@gmail.com

