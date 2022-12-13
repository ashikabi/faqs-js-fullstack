# FAQ for a JS Fullstack Dev

The present Repo is aimed for all the Devs who claimed themselves Javascript FullStack using ReactJS, React Native and NodeJS who know how to work, but sometimes forgot the technical concepts behind of the things.


## FrontEnd
-------------

* What is Javascript?

  Javascript is a program language following the specification of EcmaScript is the standard and the rules of the correct way to write javascript code. Nowadays Javascript runs on both, client side (web browsers) and server side (nodejs)

* What is ReactJS? 

  ReactJS is javascript library to build UI components create websites using JSX and Virtual DOM

* What is JSX?

  - JSX stands for Javascript Extension, that in React allows you create React elements. 

  - This functionality comes in ReactJS library and allows you modify the indirectly DOM in runtime, by modifying the virtual DOM.

* What is DOM?

  DOM stands for Document Object Model: and is the representation of the HTML tree.

* What is Virtual DOM?

  - Virtual DOM is a copy in memory of the real DOM and the copy happen the first time the component is rendered (for the life cycle methods), this functionality comes in ReactDOM Library,
    and that library makes comparisson against the both DOMs if they are different then, the ReactDOM copy the Virtual DOM into the real DOM and this process is a re-render of the component.

  - which means that is the action of modifying HTML with jsx in reactJS and the application compares the DOM with the Virtual DOM, and if there are changes the componente is re rendered,
    and apply the changes. [Reference](https://latteandcode.medium.com/y-eso-del-virtual-dom-de-react-qu%C3%A9-es-3feed6366925)

* What is a component?

  Are blocks of JSX codes that returns a React Element to represents a part of the UI, and either a component can be a class component type or a function type (also know as stateless component).
    
    * Class component: requires extends from React.Component and create a Render Function which Return a React Element. So you will have a constructor and a local state, and the lifecycle methods. On the other hand...
    * Functional component / stateless component: Because they are just functions, you don't have a constructor hence, you don't have a local state. That's why the are also called stateless components.

* Difference between use Component, PureComponent and Fragment

    * PureComponent: Implements `shouldComponentUpdate()` what is does to make a comparisson with the previous props and state to next i the case of the primitives types of values, they compare the values, but in the case of objects they compared the references instead of the values. Improving the performance of the app , rendering the components faster than the Normal components.

    * Fragment: Is a component that return multiple elements in the render without a wrapper or an aditional DOM element

* What are the lifecycle methods?
  Mounting:
    * constructor()

    * render(): the first method called, and print the HTML elements of the component.
  
    * componentDidMount(): invoked right after component is mounted (aftert the tree of the virtual DOM is created). Initialization that requires DOM nodes should go here. If you need to load Data from an external API, this is the best place according the official documentation. Create subscriptions.
  
  Updating:

    * componentDidUpdate(): is invoked after updating happens, so you can modify DOM here, and you can also fetch Data from API and also you can compare the previous values with the new ones before re-render. This component is not called the in the first render

  Unmounting:
  
    * componentWillUnmount(): invoked before a component is unmounted and destroyed, so you could unsubscribe to listeners, stop timers, stop fetching from APIs etc.

  Error Handling

    * ComponentDidCatch()

* What are the hooks lifecycle?

  * useState(): Returns a stateful value and a function to update it. Manipulate a local state of the component. Equivalent of this.state/this.setState

  * useEffect(): Works as a ComponentDidMount, ComponentDidUpdate and ComponentWillUnmount. Is Called after the render of the component.

    - without a second argument: it will have the behavior and ComponentDidMount + ComponentDidUpdate. It menas it will be invoked after every render.
    - with a second argument: with an empty array it will have the behavior of the componentDidMount
    - with a second argument: with an array with elements, it will be invoked just when a change on the element of the array happen,

  * useLayoutEffect():

  * useContext(): accepts a context object. To work with useContext first of all you need to create a Context. `createContext()` and also create a `contextProvider` with the values you want to share across the 

    - the `contextProvider` is a function that accepts props and returns a wrapper provider, wrapping up all the children. It means if you wrap up a set of components with a context provider, all the component can have access to the values defined in the context Provider.

  * useReducer(): 

* What is a higher order component HOC?

  - is a function that takes a component as argument and return a new component.

  - common example is when you connect you component with redux. `export default connect(MyComponent)`

* What is Hoisting in JS?

    Is the behavior of JS to move the declarations of functions and variables to the top. So then functions can be called and their declaration can be after the called. BUT... just the declarations, not the initialization.

* What is EcmaScript?

    is the standard of javascript the gives the rules of use it.

* What are pure functions?

  you can not mutate the paremeter, instead you need to return a new value

* What is Redux and How does it works?

  is a state mangament library for javascript apps to manage the whole state of the app. 
  
  Redux store the application state in a single javascript object which called store which is the single source of truth for the application state.
  
  Basically Redux is the new version of the Flux Architecture Pattern for manage states.

  * Redux Dev Tools:

    - for debugging you can recreate the scenarios easily
    
    - you can have a nice view of the actions and state in certain point in time

* What is FlexBox?

  Is a web layout model to allow responsive elements within a container to be automatically arranged upon screen size. 

* What is SaSS?

  is a Preprocessor scripting language that is compiled into CSS stylesheet. So you can use variables, and functions, nesting, mixing, inheritance, etc.

* Differences between HTML vs HTML5?

  start with `<!doctype html>` support canvas and SVG tags, support new tagas like `<menu>` element, change of cookies by using local storage.

* Difference between ReactJS and React Native?

  React Native is a mobile aplication javascript framework that uses React Library that is compiled to native code, and React is a library of JS.
  `LocalStorage` for React and `AsyncStorage` for React Native. `dimension` in React, `import { Dimensions } from 'react-native';` then `const { height, width } = Dimensions.get('window');`

* Difference between use Component vs PureComponent in React
  The main difference is that PureComponent handles automatically `shouldComponentUpdate` where compares the current state and props with the next props, and so it has the advantage in terms of performance because the pureComponents doesn't re render always, just when the props and states changes. If they don't have any change they don't re render, and so the app it has a better performance. [source](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)



## BackEnd
-------------

* ### Javascript ES6

  Is the Javascript standard to write the script and ensure the interoperability syntax to be working in all the browsers and in server side with nodejs

  * Difference between a normal Function and arrow => function?

    *In Normal Functions* the word `this` (aka execution context) is dynamic. It means that the value of this it depends of how the function was invoked. (if we use strict mode will be undefined)

    *In Arrow Functions* `this` is always going to take the outer value function.

    * Regular Functions can be used as a constructor of a new object. Let's say can be used as a class, since you can create new object using the work `new` before the name of the function.
    
    * With the arrow function the above is not possible for the `this` context.

    * Regular functions can be defined without arguments and yet, you can still pass arguments and inside the function you can use the word `arguments` to get the params as an array

    * The arrow functions instead can access the rest arguments `...args`

    * With normal Functions, if you create a class and define normal functions as methods, you need to bind them to make it works.

    * With arrow functions, you don't need to bind the method anymore.

  * How to use async/await?

    Are used to make asynchronous programming in Javascript:
      
      * `async` is the keyword used for declaration of the functions, it means the function will return a promise.

      * `await` is used before calling a function, to indicate that the process will wait until the promise get the value

      * `.then()` we also can use .then() to wait until the promise is resolved

  * What are and how does it works Promises?

    Is an object that may produce a single value in the future. A promise can be in 3 possibles states: fullfilled, rejected and pending

  * Difference between map, and forEach, and Reduce?

    * `map()` : return an array with the result of applying a function to every element of the original array.
    * `forEach()` : Execute a function on every element of the current array. But it doesn't return anything.
    * `reduce()` : Applies a function simultaneosly against two values of the array from left to right as to reduce it into a single value.

  * Difference between find and filter?

    * `find()` : given a callback function as parameter it is applied to every element of the array, and return the first element that satisfied or match the conditions in the function.  

    * `filter()` : similar to find, a callback function is passed as parameter and it is applied to every element of the array and gets only those elements that match the condition of the function and return all the elements that matches in a new array.

  * Difference between slice vs splice?

    * `slice()` : extracts a section of an array and return a new array. Accept up to 2 parameters, but the first (start) is required. The second (end) is optional.
    * `splice()` : Adds/Removes an element of an array. can receive at least 2  params: 1. index (where to start), 2. how many elements are going to be removed from the array. If zero is passed then no elements are removed. 3. or more params indicates the new elements to be added in the array. BTW return an element or an array of elements removed from the array or nothing, if zero.

  * Difference some and every?

    * `some`: return true if at least one element of the array matches the condition in the callback function passed.
    * `every`: return true if all the elements in the array matches the condition in the callback function passed

  * Difference between pop and shift?

    * `pop()` : removes the last element of the array and return that element.
    * `shift()`: removes the first element of the array and return that element.

  * Difference between push and unshift?

    * `push()` : Adds one or more elements to the end of the array, and return the new length.
    * `unshift()`: adds one or more elements to the front of the array and return the new length 

  * Difference between const, let?

    * `const` : declaring variables as const, the value can't be reassigned.
    * `let`:  the value of the variable can be reassigned

  * Difference between == and ===?

    * `==` compare just the values
    * `===` compare the values and the types

  * What is the result of typeof [] === typeof {}

    Since an array is not a primiteve type [] is considered as an object same as {}. So that comparisson is true. Not the case of `1 === '1'` the result is false, because the 2nd parameter is a char, but `1 == '1'` is true, because only verify the values and not the type.

  * !! ?
    
    Return the boolean value of the value.

  * Difference between SetTimeOut and SetInterval?
    This 2 functions are called timer functions so you can scheduling a call of any other function using those timers

    * `setTimeout` executes the callback function that is passed as first argument after the time especified in milliseconds in the second parameter has passed.
      To track the timeout the `setTimeout` function returns a timeout ID that is commonly used with `clearTimeout` and basically after call the setTimeout we can call the clearTimeout to stop the timer in the setTimeout. *The expression or callback function passed to the setTimeout is executed just once. Until the time specified in the setTimeout is reached*

    * `setInterval` : basically has the same functionallity of setTimeout, with the difference of the callback function passed is executed always everytime the especified time in the setInterval is reached. Unless you call the stop by using `clearTimeout` 

  * What is a CallBack?

    A callback is a function that is executed after another function has finished executing.
    In JS functions are object, since functions can take functions as arguments and can be returned by other functions.(those functions are called `higher-order functions`)
    So any function passed as an argument is called *callback function*

  * What is a Callback Hell?

    Is when you have a bunch of nested callbacks because bad practice and read the code can be such a hard time.

    * One way to fix that issue it depends, but use async await and assign the callback functions to variables and call the functions in a sequancial order using `await`

    * Splitting out the functions in different files by modulurazing using `module.exports`

  * What are the higher-order functions?

    Are functions that either receives a function as an argument or returns a function as output.

  * What are closures in JS? 

    Is the possibility of create a inner function inside of another (outter) function, and all the elements declared in the outer function can be used in the inner function.
    Because is in the same scope of the outer function.

* ### NodeJS

  * What is a closure?

    - is a block of that wrap a scope and context. For example whenever you create a function you are creating a closure for that function, it means everything inside that function has a context that you can accessed via `this` keyword and if you can a sub function inside the master function the subfunction is enclosured for the main function.

    - so the inner function will have access to the varibles or properties of the outer function

  * What is NodeJS?

    is a javascript runtime environment and same as the javacript in browsers, nodejs also run on the V8 Javascript runtime engine.
    Which takes the javascript code and converted it into machine code.

    Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient: It means that the flow of the execution of the program doesn't wait to continue, 

  * What means that Javascript/nodejs is an "event driven language" ?

    It means that by default JS doesn't waiting for a response before moving on.  
    example:
    ```
    function first(){
      // Simulate a code delay
      setTimeout( function(){
        console.log(1);
      }, 500 );
    }function second(){
      console.log(2);
    }first();
    second();

    .........
    // result: 
    first();
    second();
    // 2
    // 1
    ```  

    In order to fix this issue Javascript has the `callbacks` that are functions, that are executed after another function has finished the execution.   

  * Mention some internal libraries that you have used with nodejs? 

    `http` to create a http-server, is the native version of express. `events` to send and receive events eventEmitters. `fs` to manipulate files.
  
  * Is NodeJS MultiThread or a single Thread?

    NodeJs has an event-loop architecture that means that a single thread run and it will be executed until every tasks has finished, then exit the event loop.
    Nodejs is a single thread language which in background uses multi threads to execute asynchronous code.
    Nodejs is a non-blocking that means tha all functions/callbacks are delegate to the event loop and they can be executed by different thread.

  * What is a Process?

    A process is a program under execution. A process can have multiple threads

  * What is a Thread?

    A thread is the smallest sequence of programmed instructions. Here the BIG difference.
    Threads within the same process run on a shared memory space, while every process has a separate memory space. 
  
  * What are some frameworks of NodeJS?

      - nestjs
      - expressjs

  * What is express?

    - expressjs is node module sometimes is called a framework, but at the end of the day is a module to help you creating a RestFul API.

  * Using express what is a middleware?

    - A middleware is a interceptor function that takes the request apply some logic and if it the logic is passed well, the flow execution continues calling the `next()` function, otherwise you need to finish the logic with a response with the correct error code.

  * in express how does it work the function next();

    - Well basically is used to continue the flow execution of the logic inside of an endpoing. In overall is used in middleware functions where the request is taken and is applied some logic, if the condition is satisfied the instruction to continuie with the next middleware of with the next logic is using the `next()` function.

  * What is HTTP verbs diff between put and patch?

    - PUT : is used for updates, but it refers to a whole update over an object on the other hand
    - PATCH: is used for update a some attributes of an object, not the whole object.

  * What is a JWT, how does it work?

    - JSON WEB TOKEN: is a token used to create an id with an expiration time, and usually is used to make secure the communication between the front-end and backend.
      basically the backend creates the jwt and defines an expiration time for that token and that token is passed to the front end which will be using it to make all the API calls,
      which means that for some reason the front end sends an expired token or not send any token, the api call is rejected.

* ### OOP

    * what is a OOP programming?

      - is a programming paradignm in which objects are used to represent things

    * What is a Class?

      - Let's say is a code template for creating objects, providing initial values for states, using a constructor, Implementing behaviors using methods.

    * What is an object?

      - is the instance of an class: whichs is an element created by a class that has attributes, behaviors, and in overall the object is a representation a class.

    * How it is used static keyword in JS/Classes?

      - First of all whenever you use the `static` keywork the variable or the method is going to be declared once in the memory, which means.
      - The `static` keywork is commonly used to share a variable or a method across all the instances of the class, is not tied to any particular object, in fact is tied to the class.

    * What is an Abstract Class?

      - An Abstract class can not be instantiated, but can have a constructor The idea behind an abstract class is to be a template for classes so abstract classes can have implemented methods or just declared methods, are designed to be inherited by subclasses. 
      
      - The classes that inherit from the abstract classes commonly implements or override their methods.

      - in Abstract you just can extends

    * What is an Interface in JS?

      - is a Class with only declaration of their methods, without any implementation, and without a constructor, can not be instantiated just inherited. They are like a blueprint for a general purpose.

      - in Interface you need to implements

    * How does it works the inheritance?

      - There is a class that acts as a master class where subclasses extends(or inherited) the behaviors and attributes of a master class, they also can override or implements theirs methods

    * How do we use `super()` in classes

      - The `super()` keyword is used in subclasses whenever we extends from a master class and is used to refer to the master class which means whenever we create an instance of the subclass, automatically we will have an instance of their master class as well.

      - is used to refere to inmediate parent class variable
      - is used to refer to inmediate parent class methods
      - is used to refer to inmediate parent class constructor 

    * How does it works polymorphism and overload functions in JS?

      -  Is when an object can have multi forms what it means is for example we have 3 classes, the class C is a subclass of the Class B and class B implements from class A.

      - the sub class C can override a method from the class B whichs means the same the same method can have different implementation/behavior and the parent method can be called using the super keyword.

      - Allow us to perform a single action in different ways

    * overload/overcharged funcitons?

      - you can define the same method multiple times and you can call them with different parameter list

* ### Functional Programming:

  * What is a functional programming?

    Is a form of programming in which you can pass functions as parameters to other functions and also return them as values.

    is a programming paradigm: In functional programming the idea is to avoid change values, or mutate data
  
  * How to implement/use/work with functional programming in JS?

    - First Class Functions: are functions aimed to be passed around to others functions, and they should be accomplish a specific thing, and be called by the other functions.

    - The functions that accept a functions as parameter are called "higher order functions" that also can return a function.

    - The functions that are passed as parameter are also called callback.

    - [reference here](https://medium.com/@olinations/first-class-functions-higher-order-functions-callback-functions-4daad4856242)

  * What is a lambda function?

    - is an annonymous function that consists in only one expression and can take one or multiple parameters to other functions,

    - in javascript is achieved using the arrow function `=>` (annonymous functions)

  * How can you achieved Unit test in nodejs?

    - Mocha: is a testing framework for NodeJS ==>  I have worked with Jest with is a library to make unit tests in React, and I have seen a little bit of Mocha and pretty much works the same,
        where you describe the test and then describe any unit  test case making assertions. 

    - Chai

    - Jest:  Describe the test, then describe the specific unit test and expect a value / or assert

    - Jasmine

  * What is Typescript?

    - is an opensource programming language built on javascript, I would say is an extension of javascript that allows define types for variables and objects. 
    So allows you to describe in a better way a class, objects and functions. Which makes a code more readable, and and because has a superior layer it has a validation before compiling the code

    - typescript code is transformed to javascript via the typescript compiler or babel

    - Babel: 
      is javascript compiler and in the case of React Babel convert JSX into javascript

* ### Miscelanious

  * What is a Microservice:

    - has the style of SOA services (Service oriented architecture): where the app is created with multi connected services with specific functions.

    - the idea behind the microservices is to breaking down the whole app in smalles pieces of services with their own functionality but working in harmony,

    - achieving modularity

    - with beneficts of high scalability, flexibility for teamwork and development

    - With microservices you are not tied to one framework, or language, since they are monolitic you only need to build a restful API in any languagem that can be nodejs, java, python, etc.

  * Benefits of using nodejs:

    - Single threaded: in short terms the main thread used in nodejs called event loop is the one that handles and allows the non blocking input/outputs, so the executiong flow is not waiting for aany response, that makes a quick execution alongside with the V8 javascript runtime engine.
    
    - the event loop handles the asyncronous request moving the request from the call stack to the nodejs API, and the call stack continuos the execution without waiting, once the request is resolved,
      the event loop moves the reslved request in the tasks queue until the call stack finish the execution, then the event loop moves the response to the call stack.

    - because is an event-driven  model.

  * SOAP vs Rest:

    - SOAP: Simple Object Access Protocol and it was the first approach for a communication between 2 platforms with differenct technology, and the commonly interaction it was with XML/XHTML
       - This is a protocol
       - Requires a Service interface to expose its functionality to client application, expose the WSDL. 
       - Requires a WSDL (has the required information on what the web service does. The Definition of the web service)
       - only works with XML/XHTML
       - the messages or response are greater in size than REST since it is using XML and has more verbose tags/schema
       - so it requires more bandwidth

    - Restful API: the new approach to achieve the same idea os SOAP. Representational State Transfer
      - This is an Architectural pattern
      - Doesn't need to expose interfaces, just the endpoints
      - can work with JSON, XML, XHTML, HTML
      - the messages or response are lighter, it doesn't required much bandwidth
      - All that SOAP can do, RestFul API also can do, but not viceversa.

    - API: Application Program Interface: allows the communication between to application

  
  * What are the Design Patterns?

    - or is a way to create a solution
    
    - Creational Patterns:
      Abstract Factory, builders, factory methods, prototype, singleton

    - Structural Patterns:
      Adapter, Bridge, decorator, facade, private class/static/mutators

    - Behavioral patterns:
      change of resposibility, command, interpreter, iterator, mediator, memento, null object, template methods

  * What are the common desging patterns used?

    - creational patter for OOP

    - Behavioral patter for functional programming

  * What it means S.O.L.I.D.?

    - are the 5 principles of oop

    - Single Responsibility :  a Class should have one purpose, one job, one responsibility
    - Open Closed: The class should be easily extandable without modifying the class itself
    - Liskov substitution : Basically is the polymorphisim approach, that every subclass should be substitutable by the parent class 
    - interface segregation: the ability to create interface and not necessary create classes that implements from the interface
    - dependency inversion: it means that low level classes shouldn't depend on high level classes. Both should depend on abstraction so they should depend on interfaces.

  * What it means A.C.I.D.?

    - Atomicity: Database transactions should be broken down in smaller parts. If one part of the transaction fails the whole transaction should fail as well.
    - Consistency: when a transaction comes and the result is not the expected, a rollback should be called to keep the consistency
    - Isolation: one transaction shouldn't affect others transacttion if they are being executing concurrently
    - Durability:
  
  * event-driven programming mean? 
    - is a program paradigm  in which the flow of program execution is determined by events. Events are any user interaction

  * What is a RestFull API?

  * Design Patterns



## CI/CD

* What is Git?

* What is Docker?

* What is Kubernetes?

* What is Jenkins?

* What is Scrum?