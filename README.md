# Our Recipes - Server
This is the backend of the app Our Recipe

Our recipe is an app that allows user to save and share their recipe with others. User can input the name of the their recipe, the cook time, description/direction, and the ingredients.

## Installation

1. Fork this repository.
2. Clone this repository within your desire directory using @git clone 
3. Change into the new directory.
4. Create and checkout a new dev branch.
5. Run npm install.

## Important Links

  - [Client repo](https://github.com/ruzheng/our-recipes-client)
  - [API repo](https://github.com/ruzheng/our-recipes-server)
  - [Deployed Client](https://ruzheng.github.io/our-recipes-client/)
  - [Deployed API](https://afternoon-journey-58527.herokuapp.com/recipes)

## Planning Story

1. Design ERD and Wire-frame 
2. Initialize the project
3. Design the model and schema
4. Create the routes for recipes
5. Set up the app in server.js

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Recipe

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/recipes`              | `recipes#index`    |
| POST   | `/recipes`             | `recipes#create`    |
| PATCH  | `/recipes/:id`         | `recipes#update`  |
| DELETE | `/recipes/:id`         | `recipes#delete`   |

### Technologies Used

- Javascript
- Visual Studio Code
- Mongoose
- MongoDB
- Express
- Passport
- JQuery
- AJAX
 
 ### Unsolved Problem

  - Search Bar
  - All recipe from all the user
  - Like feature
  - Comment feature

### ERD and Wireframe
![Recipe Wireframe](https://i.imgur.com/cTdIrUL.png)

![Recipe ERD](https://i.imgur.com/fxEZZQU.png)
