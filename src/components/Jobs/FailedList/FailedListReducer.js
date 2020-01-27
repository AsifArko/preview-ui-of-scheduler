import {createReducer} from "@reduxjs/toolkit";
import {FAILED, RECEIVE, REQUEST} from "../../../utils/ActionCreators";
import {contentType} from "../../../utils/ActionTypes";

const type = contentType.RETRY;
export const retryJobReducer = createReducer(
    {},
    {
        [REQUEST + type.name]: (state, action) => {
            return Object.assign({}, state, {
                isFetching: true,
                response: null,
                error: null
            });
        },
        [RECEIVE + type.name]: (state, action) => {
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
);