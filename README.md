# DESCRIPTION

User can listen to soundtracks and get information about the most popular games from their favourite game categories.

# LIST OF MEMBERS

* Volkan Burhan Çebi
* Utku Özkan
* Muhammed Fatih Emecan
* Hamdi Umut Arıkan 

# PRECONDITIONS 

1. User must have internet connection.
2. Web browser that supports WebStorage API.
3. The home page of the web application has been opened in the browser.

# The event that started the use case

User opens the home page.

# Success Scenario

1. Depending on whether user has an account or not, they either click on login or register.
2. If they don't have an account, after clicking register button system displays register page, where system asks for first name, last name, password and email. After everything is filled in, clicking the register button will pop up a alert that lets user know that their account has been created. The information will be stored in WebStorage API. Then they can click on the login button and go to the login page for the usual procedure.
3. Login page will ask the user to enter their email and password. Then they can click login and get directed to the openpage. If they don't have an account, they can click the register button and go to the register page (2.step) and continue the procedure from there.
4. At openpage, user can find different game categories that they can click on to find games and information about them. Once you click on a game category you will be directed to the relative game category page.
5. At game category page you will find games that will have the name of the game, the name of the soundtrack, a photo of the game, the artist(s), the album, information about the game and mp3 player to play the soundtracks in that order. At the header you will have a button to go back to the openpage for other game categories, or you can click the home button and go to the home page with logging out.

# Success Guarantee

The system creates a new user account, saves it to WebStorageAPI, shows the game pages with the soundtracks available.

# Exception Flows

## Exception Flow 1: Password confirmation is wrong

1. System displays the registiraton page.
2. System asks for first name, last name, password, confirm password and email.
3. System checks if the password and confirm password if matched.
4. System finds discrepancy between them.
5. System throws an alert "Passwords do not match"

## Exception Flow 2: E-mail already in use

1. System displays the registiraton page.
2. System asks for first name, last name, password, confirm password and email.
3. System checks if the email is in use.
4. System finds the email in local storage.
5. System throws an alert "The same email is in use. Try again with another email"

# Additional Libraries Used

No need for additional libraries.

# Responsibilities of each project member

1. Utku Özkan: homepage.html, openpage.html, homepage.css, openpage.css, moba.html , battleroyal.html, rts.html, readmore.js
2. Muhammed Fatih Emecan: register.html, login.html, login.js, styles.css, register.js
3. Volkan Burhan Çebi: Desing of game pages, fps.html, tps.html, openworld.html, games.css, README.md
4. Hamdi Umut Arıkan: Images and soundtracks

