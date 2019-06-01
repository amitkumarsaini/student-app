
import React from 'react';
import { connect } from 'react-redux'

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course_name: '' };
  }

  handleSubmit(event) {
    let course = {
      id: this.props.courses.length,
      course_name: this.state.course_name
    }
    let hasMatch = false;
    for (var index = 0; index < this.props.courses.length; ++index) {
      var obj = this.props.courses[index];
      if (obj.course_name === this.state.course_name) {
        hasMatch = true;
        alert(this.state.course_name + ' already exist')
        break;
      }
    }
    if (!hasMatch) {
      this.setState({
        course_name: ''
      })
      this.props.addCourse(course);
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="col-md-12 mainComponent">
        <h3>Add Course</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label className="text-left" htmlFor="firstname">Course Name</label>
            <input type="text" className="form-control" value={this.state.course_name} onChange={(e) => this.setState({ course_name: e.target.value })} id="course_name" placeholder="Course Name" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {this.props.courses.length ? <div className="courseList">
          <h6>Available courses</h6>
          {this.props.courses.map((course, index) => (
            <span key={course.id}>{course.course_name}{this.props.courses.length > index + 1 ? ', ' : ''}</span>
          ))}
        </div> : ''
        }

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count,
    courses: state.courses
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addCourse: (course) => {
      const action = { type: 'ADDCOURSE', course: course };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Course)