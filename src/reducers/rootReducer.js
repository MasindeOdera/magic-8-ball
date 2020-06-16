
const initialState = {
    prediction: {},
    text: '',
    fail: {},
    loading: false,
    visibility: false,
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
        case 'LOADING':
            return { 
                ...state,
                loading: action.payload,
            }
        case 'VISIBILITY':
            return { 
                ...state,
                visibility: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;