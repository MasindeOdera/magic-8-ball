
const initialState = {
    prediction: {},
    text: '',
    fail: {},
    loading: false,
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'PREDICTION':
            return { 
                ...state,
                prediction: action.payload || {},
             }
        case 'TEXT':
            return { 
                ...state,
                text: action.payload,
            }
        case 'FAIL':
            return { 
                ...state,
                fail: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;