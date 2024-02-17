console.log("Hello from Node!");
//Node is a javaScript runtime.
//Native Modules

//File System
//Writing a File
const fs = require("fs");//creating the file handle
fs.writeFile("message.txt", "Hello to Shashank from NodeJS!", (err) =>{
    if(err) throw err;
    else console.log("The file has been saved");
});

//Reading a File
// async function readFiles(){
//     const file = await readFile("./message.txt");//when we use await without any async function, it throws error
//     console.log(file);
// }

// readFiles();
fs.readFile("./message.txt",{encoding: 'utf-8'}, (err,data)=>{
    if (!err) {
        console.log('received data: ' + data);
    } else {
        console.log(err);
    }
});


