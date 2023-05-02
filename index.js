const inquirer = require("inquirer");
const fs = require("fs"); 
const Triangle = require('./lib/Triangle')
const Square = require('./lib/Square')  
const Circle = require('./lib/Circle')  



inquirer
  .prompt([
    {
      type: "input",
      message: "What letters would you like on your logo? (up to 3)",
      name: "logoText",
      validate: (answer) => {
        if (answer.length > 3 || answer === '' ){
            return 'Please enter 3 or less letters';
        } 
        return true;
      }
    },
    {
      type: "input",
      message: "What color would you like your text to me?",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "logoShape",
      choices: [
        {
          name: "Circle",
          value:{
            name: "Circle",
            badge:"ENTER SHAPE SIZE",
          }
        },
        {
          name: "Square",
          value: {
            name: "Square",
            badge:"ENTER SHAPE SIZE",
          }
        },
        {
          name: "Triangle",
          value:{
            name: "Triangle",
           badge:"ENTER SHAPE SIZE",
          }
        },
      ],
    },
    {
      type: "input",
      message: "What color would you like your shape to be?",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    let newShape = generateShape(response); 

    console.log({response});
    console.log(newShape)
    fs.writeFile("logo.svg", newShape, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );  
 
  });

  const generateShape = ({logoText, textColor, logoShape, shapeColor}) => {
    let shape; 

    if (logoShape.name === "Triangle"){
        shape = new Triangle(shapeColor);
    }  else if(logoShape.name === "Square"){
        shape = new Square(shapeColor);
    } else {
        shape = new Circle(shapeColor);
    } 

    return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
 
    ${shape.render()} 
    <text x="114" y="125" fill="${textColor}" stroke = "black" font-size="3em">${logoText}</text>
    
    </svg>
 
  `; 
  }

 
  

 