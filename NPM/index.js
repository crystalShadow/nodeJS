console.log("Two tasks in this small project : \
1. Generate Silly Names using a module called 'sillyname' from NPM. \
2. Generate superhero names using a module from NPM");

console.log("Learning from this project : \
1. how to init node modules inside your project \
2. understand the difference between CJS and ESM \
3. transition from using CJS syntax to ESM syntax \
4. understand how to import packages from nvm to your project");

console.log("Why to initiate npm? for your project to render on a computer(different), \
it will throw error if you don't include the module beforehand \
command : npm init");

console.log("after using the above command, it will ask for some metadata information and generates a package.json file \
which has the project information")

console.log("const fs = require('fs') . This type of syntax is known as CJS or comman JS syntax \
import {readFile} from 'node:fs'. This type of syntax is known as ECMA script modules. \
for changing the syntax type from CJS to ECMA, we will have to change the package.json file to include 'type' : 'module'")

console.log("installing npm modules : npm install moduleName (or) npm i moduleName")
//after installation of the module, a seperate node_modules directory will be created inside your project 
//which will contain the src code of module you have installed.

//following ESM syntax for importing the module
//Geneating random names task
import generateName from 'sillyname';

const sillyName = generateName();
console.log("My Name is",sillyName);

//Generating superhero names task
//All packages have different usage guidelines. Kindly check before using it.
import pkg from 'superheroes';
const superheroName = pkg.random();
console.log(`My Superhero Name is ${superheroName}`);




