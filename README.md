# mern-stack
Learning journey of MERN stack courses on YT.
 ```
  NOTE: I have already made a nodejs-scaler repo for MongoDB, Express & Node.js.
  This repo is only for React.js now.
```

### What is a tech stack?
The tech stack is a combination of programming languages, frameworks, and tools that developers use to build a web or mobile app.
- Server Side: Web Framework, Programming Language, Database, Web Server, Operating System
- Client Side: JS, HTML, CSS, React etc.

<hr>

#### MEAN: MongoDB, ExpressJs, AngularJs, NodeJs
  - Angular is a framework developed by Google
  - Uses TS(TypeScript)
  - Flow is bi-directional (Changes in View part is reflected in Model as well)
  - Better learning curve
  - Better for enterprises and larger projects

### MERN: MongoDB, ExpressJs, ReactJs, NodeJs
  - React is a JavaScript library.
  - Uses JS and JSX(Javascript Extended Syntax)
  - Here uni-directional (Changes go through Models first)
  - Excellent Documentation
  - Quicker and for smaller projects in general
  - Backend of MERN is REST API/ RESTful API which is an interfact that two computer systems use to exchange information securely over the internet.
  - Backend will receive requests from the frontend. Classified into CRUD(Create = Post, Read = Get, Update = Patch/Put, Delete = Delete)

<hr>

### React
  - JS library for building fast and interactive user interfaces for the web as well as mobile applications
  - Open Source, Reusable component based front-end library
  - Developed at Facebook for View part in an application

#### Why React?
  - Easy creation of dynamic web app
  - Performance enhancements
  - Reusable components
  - Unidirectional data flow
  - Small learning curve
  - Can be used for mobile apps

#### Features of React
  - JSX:
      - Syntax extensions to JS. Used with React to describe what the UI should look like
      - By using JSX, one can write HTML structures in the same file that contains JS code
      - Easier to understand and debug as VirtualDOM is used rather than actual one.
      - e.g.
        ```js
        const simple = <h1>Hello World!</h1>;
        ```
  - Virtual DOM:
      - Creates a copy of Real DOM and compares previous snapshot of VDOM to identify changes which makes it faster
  - Performance and one-way data binding
      - Components are functional in nature that is they may depend on arguments and may return a value
  - Extensions
      - Provides server side rendering
      - Supports mobile app development using React Native
      - Extended with Flux and Redux
  - Debugging
      - Easy to debug because of huge community

  #### React Tutorial for Beginners (By - [`Programming with Mosh`]("https://www.youtube.com/watch?v=SqcY0GlETPk&t=426s"))
  - Components are used for modular, organized and reusable code.
  - ##### Creating a React app
    - CRA (Create React App) - Official tool by the React team.
    - Vite (by Vue.js) - Faster than CRA.
    - `$ npm create vite@latest` To install latest.
    - `$ npm create vite@4.1.0` Used by the instructor.
    - Choose what you want. Then `$ cd <project_directory>` then `$ npm install`
    - Run the project with `$ npm run dev`.

  - ##### Creating a React Component
    - Typescript files have either .ts or .tsx file extension.
    - `.ts` for plain Typescript and `.tsx` for React components.
  - ##### Library vs Framework
    - Library(React) is a tool that provides specific functionality.
    - Framework(Angular.js, Vue.js) is a set of tools and guidelines for building apps.
  - ##### React Components
    - By convention they are grouped in `components`.
    - In React we cannot return multiple elements from a component.
    - If we don't want to wrap elements in a single div we can use `Fragments`.
