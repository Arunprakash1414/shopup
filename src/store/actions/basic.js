import { SET_BUILDING_TYPES } from "./types";


export const setBuildingTypes = () => {
    return async dispatch => {

        dispatch({ type: SET_BUILDING_TYPES, loading: true });
        let data = [
            { name: "Building 1" },
            { name: "Building 2" },
            { name: "Building 3" },
            { name: "Building 4" },
        ];
        let allData = [
            { building: "Building 1", name: "Infinity", floor: "1", status: "0" },
            { building: "Building 1", name: "War", floor: "2", status: "0" },
            { building: "Building 1", name: "Twinkle", floor: "3", status: "0" },
            { building: "Building 1", name: "Wonderland", floor: "4", status: "0" },
            { building: "Building 1", name: "Gold Bath", floor: "5", status: "0" },
            { building: "Building 1", name: "Oreo", floor: "6", status: "0" },

            { building: "Building 2", name: "Green Tag", floor: "1", status: "0" },
            { building: "Building 2", name: "Zwart", floor: "2", status: "0" },
            { building: "Building 2", name: "Space", floor: "3", status: "0" },
            { building: "Building 2", name: "Ship", floor: "4", status: "0" },

            { building: "Building 3", name: "Asgard", floor: "1", status: "0" },
            { building: "Building 3", name: "Starship", floor: "2", status: "0" },
            { building: "Building 3", name: "Black Hawk", floor: "3", status: "0" },
            { building: "Building 3", name: "Twister", floor: "4", status: "0" },

            { building: "Building 4", name: "Winnings", floor: "1", status: "0" },
            { building: "Building 4", name: "One Way", floor: "2", status: "0" },
            { building: "Building 4", name: "Mount Eve", floor: "3", status: "0" },
            { building: "Building 4", name: "Western Ghats", floor: "4", status: "0" },
            { building: "Building 4", name: "Rayons", floor: "5", status: "0" },



        ]
        await localStorage.setItem("building", JSON.stringify(data));
        await localStorage.setItem("meetingrooms", JSON.stringify(allData));
        dispatch({ type: SET_BUILDING_TYPES, loading: false, value: JSON.parse(localStorage.getItem("building")) });

    }
}

