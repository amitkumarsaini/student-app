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
      <h3>Students</h3>
      <div className="row">
        <div className="col-md-4">
          <StudentGrid store={store} />
        </div>
        <div className="col-md-4">
          <AddStudent store={store} />
        </div>
        <div className="col-md-4">
          <Course store={store} />
        </div>
      </div>


    </div>
  );
}

export default App;
