import { MEETING_ROOMS } from "../actions/types";
const initialState = {
    meetingRooms: []
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case MEETING_ROOMS:
            return {
                ...newState,
                meetingRooms: action.value,
            }
    }

    return newState;
}

export default reducer;