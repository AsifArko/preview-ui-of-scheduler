import {combineReducers} from "redux";

import {statisticsReducer} from "./components/Statistics/StatisticsReducer";

export default combineReducers({
    statisticsRemoteData: statisticsReducer
});