import { createStore } from 'redux';
const initialState = {
    count: 8,
    courses: []
};
const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        case 'ADDCOURSE':
            return Object.assign({}, state, { courses: state.courses.concat(action.course) });
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;