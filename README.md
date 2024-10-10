# SVG Logo Maker


SVG Logo Generator Description SVG Logo Generator is a command-line application (CLI) developed in Node.js that allows users to generate custom logos and save them as SVG files. This project uses an Object Oriented Programming (OOP) approach to structure the code and offers an efficient way to create scalable vector graphics that can be used in websites, documents, or any project that requires high-quality images.


### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

#### Features

Generates SVG files from custom data provided by the user.
Customizes colors, shapes, and text in the logo.
Uses Object Oriented Programming (OOP) to organize the code and handle the different entities (shapes, colors, text).
Easy to use interface through an interactive CLI that prompts the user for preferences.
Automatic saving of the logo in SVG format.

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:


```bash
node index.js
```

## Technologies 

Used Technologies: 

Node.js: Server-side JavaScript runtime environment.

Inquirer.js: Tool for creating an interactive command-line interface.

SVG: Scalable vector graphics file format that is lightweight and easy to integrate into the web.

JavaScript (ES6+): Programming language used.

Node.js: Server-side JavaScript runtime environment.

Inquirer.js: Tool for creating an interactive command-line interface.

SVG: Scalable vector graphics file format that is lightweight and easy to integrate into the web.

JavaScript (ES6+): Programming language used.


## Project structure
It is recommended that you start with a directory structure that looks like the following example:

```md
├── Assets/
    ├── circle.svg
├── Images/            
    ├──10-oop-homework-demo.png
├── lib/               
    ├── shapes.js       
    ├── shapes.test.js  
    └── more...         
├── circle.svg         
├── index.js            
├── logo.svg   
├── package-lock.json        
├── package.json
└── README.md          

## Contacto

Tu Nombre : Miryan Christopher

Correo Electrónico: melena0816@gmail.com

GitHub: github.com/Mielion
```
