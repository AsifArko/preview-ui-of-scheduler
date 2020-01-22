import {combineReducers} from "redux";

import {statisticsReducer} from "./components/Statistics/StatisticsReducer";
import {jobListReducer} from "./components/Jobs/JobList/JobListReducer";

export default combineReducers({
    statisticsRemoteData: statisticsReducer,
    completeJobListRemoteData: jobListReducer
});