# Express Node MongoDb Application
This project is an Express.js application integrated with MongoDB, providing a simple structure for user authentication, admin management, and course management. The application includes middleware for both admin and user authentication and supports several routes for different functionalities.

# Features
- User Authentication: Middleware to authenticate users.
- Admin Management: Middleware to manage admin functionalities.
- Course Management: Routes to handle course creation, listing, and purchasing.
- MongoDB Integration: MongoDB used for data storage with Mongoose ODM.
# Prerequisites
Node.js
MongoDB
npm (Node Package Manager)



# Install dependencies
```

npm install
```
# Set up MongoDB

Ensure MongoDB is installed and running.
Create a MongoDB database named genai.
Update the MongoDB connection string in the db.js file if necessary.
# Run the application

```
node index.js
```

```

/db
  - user.js
  - course.js
/middleware
  - user.js
  - admin.js
/router
  - user.js
  - admin.js
index.js
db.js
Middleware
```
# User Middleware
Ensures that the user is authenticated based on headers.

File: /middleware/user.js

# Admin Middleware
Ensures that the admin is authenticated based on headers.

File: /middleware/admin.js

Routes
User Routes
File: /router/user.js

GET /courses: List all courses.
POST /signup: Sign up a new user.
# Admin Routes
File: /router/admin.js

GET /admin/courses: Admin route to list all courses.
POST /admin/courses: Admin route to create a new course.
GET /admin/courses/
: Admin route to get a specific course by ID.
POST /admin/    purchasecourse: Route to purchase a course.
Models
# User Model
File: db/user.js

# Course Model
File: db/course.js

# Database Connection
MongoDB Connection
File: db.js

# Running the Application
Start the server by running the following command:

```
node index.js

```

The application will be available at http://localhost:3000.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This README provides a structured overview of the project, including setup instructions, directory structure, middleware, routes, and models. Adjust the paths and other details as per your actual project structure.






