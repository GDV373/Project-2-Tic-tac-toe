# Tic-Tac-Toe Charizard edition  

Tic-Tac-Toe Charizard edition is a single-page HTML, CSS and JavaScript project. The goal for the website is a simple tic-tac-toe game that can be played with 2 players on both a computer web-browser or on mobile.

# Demo  

<a href="https://gdv373.github.io/Project-2-Tic-tac-toe/">Click here for a live demo</a>

Several screenshots of the website can be found below illustrating the progression of the site before and after user use.


## Page on load
This screenshot is what a user will see before they start the game to give some instructions on what the game is, how to start and what the first player will have as his Charizard.

![Screenshot of website on page load](/assets/images/README_images/Start-Screen.png "Website screenshot on page load")<br> 

## Page Start Game
This screenshot is taken after a user has started the game and players started to pace there Charizards for battle.

![Screenshot of website on page load](/assets/images/README_images/Blank-Game-Screen.png "game start screenshot")<br> 

![Screenshot of website on page load](/assets/images/README_images/Partly-Filled-Game-Screen.png "game start with players playing screenshot")<br> 

## Page win screen
This screenshot is when one of the players wins. The same screen will toggle by changing the winners name or draw if there is no winner

![Screenshot of website on page load](/assets/images/README_images/Win-Screen.png "game won screenshot")<br> 

# Technologies Used
HTML, CSS, JavaScript

# UX
## User Stories
The idea is to make a twist on the original Tic-Tac-Toe game but using the iconic Charizard X and Charizard Y instead of the traditional X's and O's.

## Strategy
The strategic aim is to create a site that can run this game on any web browser. 

## Scope
This version is intended to offer a quick fun 2 player game using HTML, CSS and Javascript.

## Structure
The single page structure is built using  togglescreen functions so that the user can progress from one point to another with out needing to go back or refreshing to keep playing.

## Skeleton (insert wirefames)

Before beginning development, a wireframe was mocked up. The idea behind the design was to keep the flow and structure consistent between the desktop and mobile versions while maintaining a similar layout. Because of this, distinct wireframes for each type of device were not made. This is a wireframe that shows the results message (post submission).  <br>  

![Screenshot of website starting page](/assets/images/README_images/WireFrame-Game-Start-Screen.png  "Start Screen Wireframe")<br>  

![Screenshot of website starting page](/assets/images/README_images/WireFrame-Game-Screen.png  "Game Screen Wireframe")<br>  

![Screenshot of website starting page](/assets/images/README_images/WireFrame-End-Screen.png  "End Screen Wireframe")<br>  



## Surface
The game runs on screens to cover the starting image background of the game. This will change once the player starts the game and reveals the game to start playing.The same type of screen will cover it again with an end screen of win or draw and a restart button to start the game again.


## Features
### Features included in this current version
The START screen menu shows the name of the game, in this case Tic-Tac-Toe: Charizard Edition. The START screen also includes some information on how the game starts, with player one starting with Charizard X (the blue) and also the START GAME button. Once the START GAME button is clicked, the game begins. The game screen starts with a blank grid. Player 1 (blue) starts the game by clicking on one of the empty grids and then player 2 (orange) will follow, following the rules of a classic Tic-Tac-Toe game. The game ends when a player connects three of the same character (either blue or orange). The WIN screen will show which winning character won (Player X or Player Y). If no one wins the game, a DRAW screen will appear. A RESTART button will appear once the game is finished to start another new game. 


### Features planned for later versions
Pokemon music is planned to be added in different screens in a later version with the winning character to be presented in the winning screen.

# Deployment
The site can be deployed by navigating to the repository site on GitHub (https://github.com/GDV373/Project-2-Tic-tac-toe) and then selecting 'Settings' tab. From here, select 'Pages'. Set branch to 'main' and click save. From within the Code tab, confirm that  'Environments' now lists an active github-page with date of deployment. 

When using Gitpod, files can be added to staging by using 'git add .' on the bash terminal. Commit files by using 'git commit -m "" '. "git push" will push files to Github. The website is deployed to GitHub Pages and the home page is index.html. 

# Testing
All tests performed on 'github.com/GDV373/Project-2-Tic-tac-toe' on Chrome, Safari and Firefox browsers on multiple computer screens and sizes. Different mobile screen and browsers were also tested. The exception to this is the Lighthouse accessibility test which was performed on Chrome only.

## 1. Functionality Testing
### Test label: Testing start screen 
| Test step | Outcome |
| --- | --- |
| Test action | Testing start screen toggle, Loading Chartizard's on each side with text and buttons .  |
| Expected outcome | Page should load with all images and start game button. The Button should work to toggle  the screen and only work when pressed inside it.  |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Testing players rules of input 
| Test step | Outcome |
| --- | --- |
| Test action | Enter Characters (with valid or invalid input positions) into the designated boxes.  |
| Expected outcome | Only 1 Character at a time can place a move and cannot replace any used boxes by other players or waste moves by placing again on the same one used.  |
| Notes | None to add |
| Test outcome | PASS |  

### Test label: Testing winning and draw screens 
| Test step | Outcome |
| --- | --- |
| Test action | Testing the outcome of the screens when the rules of the game have been met, and loading of restart button.  |
| Expected outcome | The winning screen should change to the winning character's name or to a draw screen with all screens loading a restart button for the players to start a new game.  |
| Notes | None to add |
| Test outcome | PASS |  

## 2. Browser Compatibility testing
| Test step | Outcome |
| --- | --- |
| Test action | Testing all the functionalitry testing on different browsers|
| Expected outcome | Multiple browser such as Chrome, Firefox and Safari were tested on all the functionality including Mobile browsers.    |
| Notes | None to add |
| Test outcome | PASS |  


## 4. Validator Testing
### CSS validator testing
| Test step | Outcome |
| --- | --- |
| Test action | Test code using W3S CSS validation service|
| Expected outcome | Validation passed with no errors, PDF of the service is also attached here (/workspace/Project-2-Tic-tac-toe/PDF-Docs/CSS-Validation.pdf) |
| Notes | None to add |
| Test outcome | PASS |  


### HTML validator testing
| Test step | Outcome |
| --- | --- |
| Test action | Test code using W3 Nu Html Checker|
| Expected outcome | Validation passed with no errors, PDF of the service is also attached here (/workspace/Project-2-Tic-tac-toe/PDF-Docs/HTML-Validation.pdf) |
| Notes | None to add |
| Test outcome | PASS |  

### Javascript validator testing
| Test step | Outcome |
| --- | --- |
| Test action | Test code using Online Javascript Validator - BeautifyTools.com|
| Expected outcome | Validation passed with no errors, PDF of the service is also attached here (/workspace/Project-2-Tic-tac-toe/PDF-Docs/JavaScript-Validation.pdf) |
| Notes | None to add |
| Test outcome | PASS |  


# Acknowledgements and Copyright

Icon used as favicon from static.wikia.nocookie.net, Charizard gif from tenor.com and background of gameplay image from img.freepik.com.

README structure based on Code Institute's example. The structure and approach to Testing reflects guidance from Brian Macharia.  

Mentoring from Brian Macharia. All errors and omissions  the responsibility of George Attard.

All content is written by George Attard.

ENDS

-------------------------