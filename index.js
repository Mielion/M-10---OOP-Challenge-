// importing required packages and modules
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");

// decalring questions prompts
const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Please enter the logo text between 1-3 characters",
    validate: (input) =>
      input.length <= 3 || "Please enter only up to 3 characters",
  },
  {
    type: "input",
    name: "logoColor",
    message:
      "Please enter the color of the logo(name or hexadecimal number of the code)",
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Please choose a shape color(name or hexadecimal number)",
  },
];

const generateSvg = (svgElement, logoText, logoColor) => {
  let newSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${svgElement}
  <text x="150" y="135" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>
</svg>`;
return newSvg;
}

// after prompting the questions,  genearting the logo file
inquirer.prompt(questions).then((answers) => {
  let logoText = answers.logoText;
  let logoColor = answers.logoColor;
  let shape = answers.shape;
  let shapeColor = answers.shapeColor;
  let shapeSelected;
  switch (shape) {
    case "triangle":
      shapeSelected = new Triangle();
      break;
    case "circle":
      shapeSelected = new Circle();
      break;
    case "square":
      shapeSelected = new Square();
      break;
  }

  shapeSelected.setColor(shapeColor);
  const svgLogo = generateSvg(shapeSelected.render(), logoText, logoColor);

  fs.writeFile("logo.svg",svgLogo, (err) => {
    if(err) {
      console.error(err)
    } else {
      console.log("Generated the svg successfully")
    }
  } )

});