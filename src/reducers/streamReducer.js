import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from '../actions/types';

// if we set state as array

// export default (state = [], action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             return state.map(stream => {
//                 if (stream.id === action.payload.id) {
//                     return action.payload;
//                 } else {
//                     return stream;
//                 }
//             });
//         default:
//             return state;
//     }
// };


// if we set state as Object

// export default (state = {}, action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             const newState = { ...state };
//             newState[action.payload.id] = action.payload;
//             return newState
//         default:
//             return state;
//     }
// };

// if we set state as Object
// reduced code for object with key interpolation 

// export default (state = {}, action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             return { ...state, [action.payload.id]: action.payload };
//         default:
//             return state;
//     }
// };


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    };
};