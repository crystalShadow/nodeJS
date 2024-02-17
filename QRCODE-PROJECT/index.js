import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { type } from 'node:os';


inquirer
  .prompt([
    /* Pass your questions in here */
    //do not forget to put curly braces to it as question also is a type of object.
    {type : 'input',
    name : 'url',
    message : 'Provide your URL : '
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var qr_svg = qr.image(answers.url);//png is default so we don't require to mention the type specifically
    qr_svg.pipe(fs.createWriteStream('qr_svg.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

