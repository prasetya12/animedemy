/* Reducer berfungsi untuk memanggil function di action dengan dimana ini logika yang diterapkan */

const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false
}

function videoReducers(state = initialState, action) {
    switch (action.type) {

        case "ALL_VIDEOS":
            return { ...state, isLoading: true, results: action.payload }
        case "ALL_VIDEOS_PENDING":
            return { ...state, isLoading: true, results: action.payload }
        case "ALL_VIDEOS_FULFILLED":
            return { ...state, isLoading: false, results: action.payload.data }
        case "ALL_VIDEOS_REJECTED":
            return { ...state, isLoading: false, isError: true }

        case "GET_VIDEO_PENDING":
            return { ...state, isLoading: true, data: action.payload }
        case "GET_VIDEO_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "GET_VIDEO_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state
    }
}

export default videoReducers