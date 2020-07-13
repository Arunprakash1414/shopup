
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Basic from "./basic";
import MeetingRooms from "./meetingrooms";

const middleWare = applyMiddleware(thunk);


export const Init = () => {
    const reducer = combineReducers({
        home: Basic,
        meeting: MeetingRooms
    });

    const store = createStore(reducer, middleWare);

    return store;
}


