import axios from "./AxiosWrapper";
import {createAction} from "redux-starter-kit";

export const REQUEST = "REQUEST";
export const RECEIVE = "RECEIVE";
export const FAILED = "FAILED";

const url = "http://localhost:8080";

export function loadData(params, path, type) {
    const request = createAction(REQUEST + type.name);
    const receive = createAction(RECEIVE + type.name);
    const failed = createAction(FAILED);

    return dispatch => {
        dispatch(request());
        return axios.get(url)
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