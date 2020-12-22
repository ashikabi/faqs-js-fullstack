# FAQ about Redux
[Official](https://redux.js.org/)
https://redux.js.org/tutorials/essentials/part-1-overview-concepts
https://redux.js.org/basics/basic-tutorial
https://redux.js.org/advanced/advanced-tutorial
https://egghead.io/courses/getting-started-with-redux
https://daveceddia.com/redux-tutorial/


## Redux toolkit
  [Official](https://redux-toolkit.js.org/)

## FAQ about React Redux
  [Official](https://react-redux.js.org/)


## Redux Dev Tools
  [Official](https://github.com/reduxjs/redux-devtools)


* What is Redux and How does it works?

  1. is a state mangament library for javascript apps to manage the whole state of the app. 
  
  2. Redux store the application state in a single javascript object which called store which is the single source of truth for the application state.

  3. In order to modify the state we need to use Pure functions in redux they are the reducers that takes 2 argument 1.the current state and an 2.action, is a JS Object the describes how the state is going to change.

  4. The store object has a dispatch method to dispatch actions, then the store is in charge to send the action to the appropiate reducer. So we don't call directly the reducer.

  5. The specific reducer return the new state and the store gets the state and update the store internaly and then the store notify the UI component so they can be updated and re-render the component if needed. 

  6. Redux-thunk is a library that works in between dispatched actions and the reducers. So in other words adding Redux thunk as a middleware in the create Store,
    allows dispatch thunk functions. where inside those functions you can make request to DB or API and wait for those response and dispatch a different action depending on the results.

  7. instead of using connect to connect the store and redux to our component we can use the redux hooks `useSelector()` and `useDispatch()` from `react-redux`

  7. Redux SAGAS. Is a middleware:

    - createSagaMiddleware from redux-saga ---> ApplyMiddleware(sagaMiddleware) ---> sagaMiddleware.run(rootSagas())

    - effects: takeEvery, takeLatest ==> takes 2 arguments: 1.an action type  and 2. a saga which is a function generator

    - put: ==> is a dispatch ; and call is a function that can return a promise

    - a Saga is a function Generator
      ```
      function* fetchCallToAPI(action){
        try{
          const response = yield call(api.fetchUser, action.payload)
          yield put({"REQUEST_SUCCESS"},response.data) //dispatch
        }catch(e){
          yield put({"REQUEST_FAILED"},e) //dispatch
        }
      }

      export default function* mySaga(){
        yield takeLatest("ACTION_TYPE_HERE", fetchCallToAPI)
      }
      ```

  
  Basically Redux is the new version of the Flux Architecture Pattern for manage states.

  * Redux Dev Tools:

    - for debugging you can recreate the scenarios easily
    
    - you can have a nice view of the actions and state in certain point in time