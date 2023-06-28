const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");

// function to write SVG file using user's input
function writeToFile(fileName, answers) {

  let svgString = "";

  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    svgString += "<g>";

  // users input for shape choice 
  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgString += "</g>";

  svgString += "</svg>";

  //an operator that logs errors or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log(" You have generated your logo.svg file");
  });
}

// prompt for user input
function promptUser() {
  inquirer
    .prompt([

      {
        type: "input",
        message:
          "What text would you like your logo to say? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Please choose your text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "checkbox",
        message: "What shape would you like your logo to be?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Please choose the color of your shape (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // prompt telling user they must enter between 1-3 charachters
      if (answers.text.length > 3) {
        console.log("You must enter a test value between 1-3 characters");
        promptUser();
      } else {
        // fs write file function to generate SVG file/logo
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();