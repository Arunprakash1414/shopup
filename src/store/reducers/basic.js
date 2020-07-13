import { SET_BUILDING_TYPES } from "../actions/types";
const initialState = {
    buildingTypes: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case SET_BUILDING_TYPES:
            return {
                ...newState,
                buildingTypes: action.value,
                loading: action.loading
            }
    }

    return newState;
}

export default reducer;