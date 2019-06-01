import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentGrid from './components/student-grid'
import Course from './components/course'
import AddStudent from './components/add-student'
import store from './store/index'
function App() {
  return (
    <div className="App">
      <h3 className="mainHeader">Students</h3>
      <div className="row">
        <div className="col-md-6">
          <StudentGrid store={store} />
        </div>
        <div className="col-md-3">
          <AddStudent store={store} />
        </div>
        <div className="col-md-3">
          <Course store={store} />
        </div>
      </div>


    </div>
  );
}

export default App;
