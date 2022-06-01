import { ADD_ADDRESS } from "../../types";

export const addAddress = (formdata) => {
    console.log(formdata);
    dispatch({
        type: ADD_ADDRESS,
        payload: formdata
    })
}