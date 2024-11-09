/*
#Modules in Node.js
 - Module : collection code which can be reuse.
 - Benefits : 
    - DRY principle
    - Maintanability
    - Code Reusabilityy
    - Code Organization

-----------------------------------------------------------------------------------------------------------    

Modules Syntaxes : 

    - CommonJS Module (default)
        - Export : 
        const sum = (a, b) => a+b
        const diff = (a, b) => a-b
        module.export = { sum }

        - Import : 
        const  {sum, diff} = require('./path.js')

    - ES6 syntax
        - Export : 
        const sum = (a, b) => a+b
        const diff = (a, b) => a-b
        export {sum, diff}

        - Import : 
        import {sum, diff} from 'path'

-----------------------------------------------------------------------------------------------------------------------------------

Types of modules : 
    - Core modules/ In-built modules : Build basic functionalities of node.js
        Ex : http,fs, etc
    - User defined modules/ Local modules : Done by the developer to follow DRY principle 
    - Third-party modules : External modules, installed using npm (Node Package Module)

------------------------------------------------------------------------------------------------------------------------------------

# NPM
 - npm : node package module
 - package : collection of code/ modules

 - commands : 
    npm init : initialize a node server project
        - package name:
        - will create a package.json file
        - package.json wil have metadata
        - -y flag: default values

    npm install : 
    

------------------------------------------------------------------------------------------------------

#Third party packages
    - nodemon: Nodemon - provides you with a command to run your server and apply changes while saving the file     (Live server)
*/