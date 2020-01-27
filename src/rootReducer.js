import {combineReducers} from "redux";

import {statisticsReducer} from "./components/Statistics/StatisticsReducer";
import {jobListReducer} from "./components/Jobs/JobList/JobListReducer";
import {jobDetailsReducer} from "./components/Jobs/JobDetails/JobDetailsReducer";
import {retryJobReducer} from "./components/Jobs/FailedList/FailedListReducer";

export default combineReducers({
    statisticsRemoteData: statisticsReducer,
    jobListRemoteData: jobListReducer,
    jobRemoteData: jobDetailsReducer,
    jobRetryRemoteData: retryJobReducer
});