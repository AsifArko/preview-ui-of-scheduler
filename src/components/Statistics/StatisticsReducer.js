import {createReducer} from "redux-starter-kit";
import {FAILED, RECEIVE, REQUEST} from "./ActionCreators";

export const StatisticsReducer = (spec) => (
    createReducer(
        {},
        {
            [REQUEST + spec.name]: (state, action) => {
                return Object.assign({}, state, {
                    isFetching: true,
                    response: null,
                    error: null
                });
            },
            [RECEIVE + spec.name]: (state, action) => {
                return Object.assign({}, state, {
                    isFetching: false,
                    response: action.payload,
                    error: null
                });
            },
            [FAILED]: (state, action) => {
                return Object.assign({}, state, {
                    isFetching: false,
                    response: null,
                    error: action.payload
                });
            }
        }
    )
);