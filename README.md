# reduxSaga
Created with CodeSandbox

Step by Step:
1. npm install  --save redux-saga
2. create sagas folder and create rootSaga.js file and connect redux store to redux saga
3.  in the rootSaga.js ==> //Allow concurrent fetch of user.
    1. Create watcher saga: constantly watch dispagteched "USER_FETCH" action and call the handlerfunction
    2. create Worker saga: //actual handler; will be fired on USER_FETCH  action.
                           will call the api


//=====================================================================================
 To run Saga, need to connect saga to the Redux store to using the redux-saga middleware.  
 
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./ducks/user";

import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);
export default store;

                          
