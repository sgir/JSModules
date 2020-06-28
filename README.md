# JSModules

1. Type "npm install".
3. Type "npm start".
4. Open a browser and visit http://localhost:8080.



| Implementation Pattern | Native JS Support | Pros | Cons | 
| :--- |:---:| :--- | :--- |
| IIFE  | Yes | Encapsulation by Function Scoped Vars & Doesn't pollute Global Scope | No Dependency Management|
| Revealing Module Pattern - Singleton  | Yes | Encapsulation by Function Scoped Vars & Adds a single var to global scope (if needs to be used in another file) | No Dependency Management|
| Revealing Module Pattern - Constructor  | Yes | Encapsulation by Function Scoped Vars & Adds a single var to global scope (if needs to be used in another file) | No Dependency Management|
| AMD Syntax/ RequireJS | No |  Adds a single var to global scope (require) |  Manages dependencies|
| Common JS Syntax | No |  Adds a single var to global scope (require) |  Manages dependencies|




