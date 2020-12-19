import {
    FORM_INPUTS,
    CARD_REQUEST,
    HANDLE_DELETE
} from "./actionType";

const initState = {
    holder: "",
    cardNo: "",
    month: "",
    year: "",
    cvc: "",
    usersCard: []
}

export const reducer = (
    state = initState,
    { type, payload }
) => {
    switch (type) {
        case FORM_INPUTS:
            return {
                ...state,
                holder: payload.holder,
                cardNo: [...payload.cardNo],
                month: payload.month,
                year: payload.year,
                cvc: payload.cvc
            };

        case CARD_REQUEST:
            return {
                ...state,
                usersCard: [...state.usersCard, payload].reverse(),
            };

        case HANDLE_DELETE:
            let filteredTask = state.usersCard.filter((item) => item.id !== payload)
            return {
                ...state,
                usersCard: filteredTask,
            };

        default: {
            return state
        }
    }
};