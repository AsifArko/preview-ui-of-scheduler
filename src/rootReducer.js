import {combineReducers} from "redux";

import {statisticsReducer} from "./components/Statistics/StatisticsReducer";
import {jobListReducer} from "./components/Jobs/JobList/JobListReducer";
import {jobDetailsReducer} from "./components/Jobs/JobDetails/JobDetailsReducer";

export default combineReducers({
    statisticsRemoteData: statisticsReducer,
    jobListRemoteData: jobListReducer,
    jobRemoteData: jobDetailsReducer
});