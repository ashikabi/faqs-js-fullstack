# FAQ for a JS Fullstack Dev

The present Repo is aimed for all the Devs who claimed themselves Javascriopt FullStack using ReactJS, React Native and NodeJS who know how to work, but sometimes forgot the technical concepts behind of the things.


## FrontEnd
-------------

* What is Javascript?

  Javascript is a program language following the specification of EcmaScript is the standard and that rules the correct way to write javascript code. Nowadays Javascript runs on both, client side (web browsers) and server side (nodejs)

* What is ReactJS? 

  ReactJS is library to work with javascript to create websites using JSX and Virtual DOM

* What is JSX?

  JSX stands for Javascript Extension. This functionality it comes in ReactJS library and allow modify the DOM of the HTML using Javascript, and of course mixing javascript code in the HTML, hence with JSX you can modify the DOM of the HTML using kavascript.

* What is DOM?

  DOM stands for Document Object Model: and is the representation of the HTML tree.

* What is Virtual DOM?

  The action of use JSX to modify HTML using DOM with reactJS is called virtual DOM

* What is a component?

  Are block of JSX codes that returns a React Element to represents a part of the UI, and either a component can be a class type or a function type.
    
    * Class component: requires extends from React.Component and create a Render Function which Return a React Element. So you will have a constructor and a local state, and the lifecycle methods. On the other hand...
    * Functional component / stateless component: Because they are just functions, you don't have a constructor hence, you don't have a local state. That's why the are also called stateless components.

* What are the lifecycle methods?
  
  * render(): the first method called, and print the HTML elements of the component.

  * componentDidMount(): invoked right after component is mounted (aftert the tree of the virtual DOM is created). Initialization that requires DOM nodes should go here. If you need to load Data from an external API, this is the best place according the official documentation. Create subscriptions.

  * componentDidUpdate(): is invoked after updating happens, so you can modify DOM here, and you can also fetch Data from API and also you can compare the previous values with the new ones before re-render.

  * componentWillUnmount(): invoked before a component is unmounted and destroyed, so you could unsubscribe to listeners, stop timers, stop fetching from APIs etc.

* What are the hooks lifecycle?

  * useState(): manipulate a local state of the component. Equivalent of this.state/this.setState

  * useEffect(): Equivalent of the lifecycle methods, is called anytime a change on the state is made. So you can manipulate DOM, fetching data from API's here.

  * Alternative of Redux:
    * createContext(): is to Pass data, states, props between components, with createContext you define what data or props are needed to share for others components. Is aimed for global purpose. But if you want to pass certain data to another component, just pass the data to it, instead create a context.
    
    * useContext(): once a context is defined you can use their props by calling them.

    * useReducer(): alternative to useState only if the if the state logic is complex. And they usually come together with createContext using dispatch

* Where is the best place to call an API and render the result?

    * componentDiMount() and useEffect(): because both are called after the initial render and after any update.

* What is Hoisting in JS?

    Is the behavior of JS to move the declarations to the top. So then variables and functions can be used before their declaration. BUT... just the declarations, not the initialization.

* What is EcmaScript?

    is the standard of javascript the gives the rules of use it.

* What is Redux and How does it works?

  is a javascript library to manage the state of the whole app. And it is conformed by a unique storage, that it changed after invoke / dispatch actions, which has the logic of the new values that we want to update in the storage, by using reducer. And Reducers has the specification to update a especific state. Basically Redux is the new version of the Flux Architecture.

* What is FlexBox?

  Is a web layout model to allow responsive elements within a container to be automatically arranged upon screen size. 

* What is SaSS?

  is a Preprocessor scripting language that is compiled into CSS stylesheet. So you can use variables, and functions, nesting, mixing, inheritance, etc.

* Differences between HTML vs HTML5?

  start with `<!doctype html>` support canvas and SVG tags, support new tagas like `<menu>` element, change of cookies by using local storage.

* Difference between ReactJS and React Native?

  React Native is a mobile aplication javascript framework that uses React Library that is compiled to native code, and React is a library of JS.
  `LocalStorage` for React and `AsyncStorage` for React Native. `dimension` in React, `import { Dimensions } from 'react-native';` then `const { height, width } = Dimensions.get('window');`



## BackEnd
-------------

* ### Javascript ES6

  Is the Javascript standard to write the script and ensure the interoperability syntax to be working in all the browsers.

  * Difference between a normal Function and arrow => function?

    *In Normal Functions* the word `this` (aka execution context) is dynamic. It means that the value of this it depends of how the function was invoked. (if we use strict mode will be undefined)
      ```
      //SIMPLE INVOCATION
      function myFunction() {
        console.log(this);
      }

      // Simple invocation
      myFunction(); // logs global object (window)

      //METHOD INVOCATION
      const myObject = {
        method() {
          console.log(this);
        }
      };
      // Method invocation
      myObject.method(); // logs myObject
      ```

    *In Arrow Functions* `this` is always going to take the outer value function.

    * Regular Functions can be used as a constructor of a new object. Let's say can be used as a class, since you can create new object using the work `new` before the name of the function.
    
    * With the arrow function the above is not possible for the `this` context.

    * Regular functions can be defined without arguments and yet, you can still pass arguments and inside the function you can use the word `arguments` to get the params as an array

    * The arrow functions instead can access the rest arguments `...args`

    * With normal Functions, if you create a class and define normal functions as methods, you need to bind them to make it works.

    * With arrow functions, you don't need to bind the method anymore.

  * How to use async/await?

  * What are and how does it works Promises?

  * Difference between map, and forEach, and Reduce?

  * Difference between find and filter?

  * Difference between slice vs splice?

  * Difference some and every?

  * Difference between pop and shift?

  * Difference between push and unshift?

  * Difference between const, let?

  * Difference between == and ===?

  * What is the result of typeof [] === typeof {}

  * Difference between SetTimeOut and SetInterval?

  * What is a CallBack?

  * What is a Callback Hell?

* ### NodeJS

  * What is NodeJS?

  * Mention some internal libraries that you have used with nodejs? 

    `http` to create a http-server, is the native version of express. `events` to send and receive events eventEmitters. `fs` to manipulate files.
  
  * What are some frameworks of NodeJS?

  * Is NodeJS MultiThread or a single Thread?

  * What is express?

  * Using express what is a middleware?

  * in express how does it work the function next();

  * What is HTTP verbs diff between put and patch?

* ### OOP

    * What is a Class?

    * What is an object?

    * Difference between a Function Class and an Actual Class in JS?

    * How it is used static keyword in JS/Classes?

    * What is an Abstract Class?

    * What is an Interface in JS?

    * How does it works the inheritance?

    * How does it works polymorphism and overload functions in JS?

    * What is a Thread?

    * What is a Process?

    * What is the difference between a Thread and a Process?

* ### Functional Programming:
  
  * How to implement/use/work with functional programming in JS?

  * What is a lambda function?

  * What is a high level function?

* ### Miscelanious
  
  * What are the Design Patterns?

  * What are the common desging patterns used?

  * What it means S.O.L.I.D.?

  * What it means A.C.I.D.?
  
  * event-driven programming mean?

  * What is a RestFull API?



## CI/CD

* What is Git?

* What is Docker?

* What is Kubernetes?

* What is Jenkins?

* What is Scrum?