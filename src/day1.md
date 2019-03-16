Browser  send request to localhost:4200
server response with index.html + scripts

browser send requests for scripts, 
    runtime - webpack loader
    polyfill - cross platform, ES6 lib/classes
    vendor
    styles
    main - application

Browser parse html, convert dom

execute the scripts
 loadModule(AppModule)
    Angular Framework, scans AppModule
        Dependent module
        all the declarations are scanned

        main.js contains es5/html (view)

        Convert Component HTML views to JS Code (JIT - Just In Time)
      
        Bootstrap components, get the selector for bootstrap component
        Search 'app-root' in DOM

        Create instance for AppComponent
        Put the View/JS inside app-root

AOT - Ahead of Time

During build time - node.js
    HTML => TS => JS ==> main.js bundle (No html file) +
                        no need to ship angular compiler to browser


ng build --prod
    always apply aot 