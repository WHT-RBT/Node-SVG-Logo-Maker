const inquirer = require("inquirer");
const fs = require("fs");

class Shape {
  constructor() {
    this.color = "";
    this.borderColor = "";
    this.borderWidth = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
  setBorderColor(borderColorVar) {
    this.borderColor = borderColorVar;
  }
  setBorderWidth(borderWidthVar) {
    this.borderWidth = borderWidthVar;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="125" r="80" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
  }
}
class Star extends Shape {
  render() {
    return `<path d="M150,0 L183,69 L258,79 L199,130 L221,205 L150,165 L79,205 L101,130 L42,79 L117,69 Z" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
  }
}
class Heart extends Shape {
  render() {
    return `<path d="M150,233 C150,233 41,174 41,107 C41,76 63,53 94,53 C117,53 141,71 150,85 C159,71 183,53 206,53 C237,53 259,76 259,107 C259,174 150,233 150,233 Z" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
  }
}

function writeToFile(fileName, answers, shapeChoice) {
  let svgString = '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";

  svgString += shapeChoice.render();

  svgString += `<text x="150" y="120" text-anchor="middle" dominant-baseline="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("You have generated your logo.svg file");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What text would you like your logo to say? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message: "Please choose your text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "checkbox",
        message: "What shape would you like your logo to be?",
        choices: ["Triangle", "Square", "Circle", "Star", "Heart"],
        name: "shape",
      },
      {
        type: "input",
        message: "Please choose the color of your shape (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
      {
        type: "input",
        message: "Please choose the color of the shape border (Enter color keyword OR a hexadecimal number)",
        name: "shapeBorderColor",
      },
      {
        type: "input",
        message: "Please choose the width of the shape border (in pixels)",
        name: "shapeBorderWidth",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("You must enter a text value between 1-3 characters");
        promptUser();
      } else {
        let shapeChoice;
        if (answers.shape.includes("Triangle")) {
          shapeChoice = new Triangle();
        } else if (answers.shape.includes("Square")) {
          shapeChoice = new Square();
        } else if (answers.shape.includes("Circle")) {
          shapeChoice = new Circle();
        } else if (answers.shape.includes("Star")) {
          shapeChoice = new Star();
        } else if (answers.shape.includes("Heart")) {
          shapeChoice = new Heart();
        }

        shapeChoice.setColor(answers.shapeBackgroundColor);
        shapeChoice.setBorderColor(answers.shapeBorderColor);
        shapeChoice.setBorderWidth(answers.shapeBorderWidth);

        writeToFile("logo.svg", answers, shapeChoice);
      }
    });
}
promptUser();