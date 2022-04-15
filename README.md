# Genshin Unit Tracker API

This is the back-end of Genshin Unit Tracker.

This is a light program allows the user to store their character units from the game Genshin Impact. Each unit contain information regarding to the unit itself such as name, element, rarity, and region. The goal is to allow the user to have an index of character/units they own in the game and in later version allow the user to attach weapon and artifacts(equipments) to each character.

## Important Links

  - [Client repo](https://github.com/ruzheng/genshin-client)
  - [API repo](https://github.com/ruzheng/genshin-api)
  - [Deployed Client](https://ruzheng.github.io/genshin-client/)
  - [Deployed API](https://arcane-meadow-67008.herokuapp.com/)

***

## Planning Story

1. Designing my ERD and figuring what can I continuously add to this program to make it seem more robust.
2. Test the user routes and their CURL scripts. Making sure they all (get, post, patch, delete) work. 
3. Test unit routes and their CURL script.
4. Move to connecting with Client side.

### User Stories

  - As a user I want to sign in/up
  - As a user I want to sign out
  - As a user I want to change the password
  - As a user I want to see my units
  - As a user I want to add my units
  - As a user I want to delete a unit
  - As a user I want to edit a unit
  
### Technologies Used

- Javascript
- JQuery
- Mongoose
- MongoDB
- Express
- Passport

<!-- ### Unsolved Problems

... -->

***

## ERD

![Genshin API ERD](https://i.imgur.com/TP1xRws.png)
