import React from 'react';
import { connect } from 'react-redux'
class StudentGrid extends React.Component {
  getCourseName =(id)=>{
    var course_name = null;
    for (var i = 0; i < this.props.courses.length; i++) {
        var element = this.props.courses[i];
        if (element.id == id) {
          course_name = element.course_name;
       } 
    }
    return course_name;
  }
  render() {
    return <div className="col-md-12 mainComponent">
      <h3>Student Table</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Roll Number</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {this.props.students.map((student, index) => (
             <tr key={student.id}>
             <td>{student.name}</td>
             <td>{student.age}</td>
             <td>{student.roll_number}</td>
             <td>{this.getCourseName(student.course)}</td>
             <td><button className="btn btn-danger" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this student?')) this.props.deleteStudent(student.id) } }>Delete</button></td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>

  }
}
function mapStateToProps(state) {
  console.log('mapStateToProps : ' + state)
  return {
    students: state.students,
    courses:state.courses
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteStudent: (studentId) => {
      console.log(studentId)
      const action = { type: 'DELETESTUDENT', studentId: studentId };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(StudentGrid)