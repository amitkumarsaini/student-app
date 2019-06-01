import React from 'react';
import { connect } from 'react-redux'

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', roll_number: '', course: '' };
  }

  handleSubmit(event) {
    if(!this.state.course){
      alert('Please select a course first!')
      event.preventDefault();
      return false;
    }
    let student = {
      id:this.props.students.length,
      name:this.state.name,
      age:this.state.age,
      roll_number:this.state.roll_number,
      course:this.state.course
    }
    console.log(student)
    this.props.addStudent(student);
    this.setState({
      name:'',
      age:'',
      roll_number:'',
      course:''
    })
    event.preventDefault();
  }
  render() {
    return (
      <div className="col-md-12 mainComponent">
        <h3>Add Student</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label className="text-left" htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} id="firstname" placeholder="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Age</label>
            <input type="number" className="form-control" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} id="lastname" placeholder="age" required />
          </div>
          <div className="form-group">
            <label htmlFor="roll_number">Roll number</label>
            <input type="number" className="form-control" value={this.state.roll_number} onChange={(e) => this.setState({ roll_number: e.target.value })} id="roll_number" placeholder="roll number" />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select class="form-control" id="course" value = {this.state.course} onChange={(e) => this.setState({ course: e.target.value })} required>
              <option >select course</option>
              {this.props.courses.map((course, index) => (
                <option key={course.id} value={course.id}>{course.course_name}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    courses: state.courses,
    students:state.students
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addStudent: (student) => {
      const action = { type: 'ADDSTUDENT',student:student };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)