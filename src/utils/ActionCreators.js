import axios from "./AxiosWrapper";
import {createAction} from "@reduxjs/toolkit";
import {BASE_URL} from "./constants";

export const REQUEST = "REQUEST";
export const RECEIVE = "RECEIVE";
export const FAILED = "FAILED";

export function loadData(params, path, type) {
    const request = createAction(REQUEST + type.name);
    const receive = createAction(RECEIVE + type.name);
    const failed = createAction(FAILED);

    return dispatch => {
        dispatch(request());
        return axios.get(BASE_URL + path)
            .then(function (response) {
                dispatch(receive(response.data));
            }).catch(function (error) {
                let code = error.message.split(" ", -1)[error.message.split(" ", -1).length - 1];
                if (code === "400") {
                    dispatch(failed({
                        message: error.response.data.error,
                        status: error.response.status
                    }))
                }
                dispatch(failed({error: "error"}));
            })
    }
}

export function postData(path, json, type) {
    const request = createAction(REQUEST + type.name);
    const receive = createAction(RECEIVE + type.name);
    const failed = createAction(FAILED);
    const url = BASE_URL + path;
    return dispatch => {
        dispatch(request());
        return axios
            .post(url, json)
            .then(function (response) {
                dispatch(receive(response.data));
            })
            .catch(function (error) {
                dispatch(failed({
                    message: error.response.data.error,
                    status: error.response.status
                }));
            });
    };
}