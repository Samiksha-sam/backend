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



*/