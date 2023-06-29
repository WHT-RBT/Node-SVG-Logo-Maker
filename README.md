# Week-10 Challenge: SVG Logo Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

 * [Description](#description)

 * [Technologies-Used](#technologies-used)

  * [Installation](#installation)

 * [Test-Instructions](#test-instructions)
 
  * [Examples of Generated Logos](#examples-of-generated-logos)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [License](#license)

 * [Contact-Info](#contact-info)

## Description

This application is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file to an external site. The application prompts the user to enter up to three characters, then select a color, shape and border for the logo, and saves the generated SVG to a "logo.svg" file. Future development on this application will be adding more polygons and font styles for users to choose from.   
<br>
## Technologies Used

This project is powered by Node.js v16, utilizes inquirer v8.2.4 (node package manager), and file system module (node package manager). It also employs jest v29.5.0 (node package manager) for the unit testing conducted in this application. 

<br>

## Installation

1. Clone the repo in the command line with:
   git clone git@github.com:WHT-RBT/Node-SVG-Logo-Maker.git

2. Open in VS Code using the command:  code .

3. Install node.js v16

4. In the terminal use command: 
   npm init -y to create your package.json files

5. Use the terminal to run the command: 
   npm i to install the dependencies 

6. Use the terminal to run the command: 
   npm i inquirer@8.2.4 to install v8.2 4 of inquirer

7. Use the terminal to run the command: 
   npm i jest to install the latest version of jest

8. Use the terminal to run the index.js file using the command: 
   node index.js, then follow the prompts to create your logo

<br>

## Test Instructions

Test run using the command npm run test checking for a render() method.

![npm run test](lib/test.gif)


<br>

## Examples of Generated Logos

![heart](example-logos/heart.png)

![triange](example-logos/triangle.png)

![star](example-logos/star.png)



<br>
<br>

## Live Screen Recording of Application in Use

![Recorded Walk Through](lib/walkthrough.gif)

<br>

## License

NOTICE: This application is covered under the MIT License

<br>

## Contact Info

Use the links below to reach me through GitHub or by email:

[Github Link](https://github.com/WHT-RBT)

<a href="mailto:the.whiterabbit@yahoo.com">Email me 🐇</a>