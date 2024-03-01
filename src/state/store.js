import { applyMiddleware, createStore } from "redux";
import {thunk} from 'redux-thunk';
import reducers from "./reducers";

//we are creating our store here
const store = createStore(
    reducers, //here we specify all our reducers
    {}, //this object represent initialState
    applyMiddleware(thunk) //applyMiddleWare helps to apply
                            //midlle which helps to take care of async functions
);

export default store;
