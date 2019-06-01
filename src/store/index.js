import { createStore } from 'redux';
const initialState = {
    courses: [],
    students: []
};
const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADDCOURSE':
            return Object.assign({}, state, { courses: state.courses.concat(action.course) });
        case 'ADDSTUDENT':
            return Object.assign({}, state, { students: state.students.concat(action.student) })
        case 'DELETESTUDENT':
            var index = state.students.findIndex(obj => obj.id == action.studentId);
            return Object.assign({}, state, { students: state.students.splice(index, 1) })
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;