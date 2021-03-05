# communityAdvent2

## Community Advent API BE

### Link to hosted version

https://community-advent2.herokuapp.com/api

### Project summary

This repo contains the backend for an organizational and navigational tool to assist with community run village advent calendars. Each year during advent villages run there own village wide advent calendars where each day a different house reveals a wide display that gets kept up until the end of twelfth night. The aim of this project to make a mobile application that displays all the different houses that have ben revealed and the users location on a map. I then intend add functionality to let the user 'tick off' houses when they are near by.

Current functionality only lets a user get information on existing calendars and the houses in them.

### How to run this repo

1. Make a copy of this repo by using the big green clone button at the top of this GitHub page

2. Open up the terminal on your computer (Ctrl+t)

3. Paste the repo into the desired folder using the command 'git clone <repo-url>', use the commands 'ls' and 'cd file_name' to navigate to the desired folder

4. Make sure you have Visual Studio Code (VS code) downloaded on your computer (or similar coding program)

5. When in the new file in the terminal run the command 'code .' to open the repo

6. Open a new terminal in VS code and run the command 'npm install' to install everything needed to run repo

7. If you are using a linux operating system you will need to make a loginData.js file as detailed below.

8. Before being able to use this repo you will need to get it to create a database by using the command 'npm seed'. Run this command again to revert the database back to its default setting.

9. To check that everything in the repo is working correctly before starting run the command 'npm test'. If you get a message indicating that any of the tests have failed check that you have followed all the previous steps correctly. After checking that you have followed all the previous steps if tests are still failing then check you have not accidentally made any of your own changes to the repo.

10. Finally you will be able to run the repo by using the command 'npm run' in the projects terminal. You will need to send your own requests as this repo only contains the backend.

### Making a loginData.js file

1. Make a blank file titled loginData.js in the main folder for the repo

2. Copy the code below into the new file:

```javascript
const loginData = { username: "yourUserName", password: "yourPassword" };

module.exports = loginData;
```

3. Replace yourUserName and yourPassword to your computers database username and password

### Requirements

This repo has been designed to be run on a windows or OS operating system.

This repo has been built using Node.js v14.4.0, earlier versions of Node.js may not be compatible.
