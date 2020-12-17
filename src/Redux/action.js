import {
    FORM_INPUTS,
    CARD_REQUEST,
    HANDLE_DELETE
} from "./actionType";

export const formInputs = (payload) => {
    return {
        type: FORM_INPUTS,
        payload,
    };
};
export const cardRequest = (payload) => {
    return {
        type: CARD_REQUEST,
        payload,
    };
};
export const deleteCard = (payload) => {
    return {
        type: HANDLE_DELETE,
        payload,
    };
};