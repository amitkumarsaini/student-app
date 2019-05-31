import React from 'react';
import { connect } from 'react-redux'

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '' };
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.firstname);
    event.preventDefault();
  }
  render() {
    return (
      <div className="col-md-12 mainComponent">
        <p>Counts : {this.props.count}</p>
        <button onClick={this.props.onIncrementClick}>increment</button>
        <h3>Add Student</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label className="text-left" htmlFor="firstname">Email address</label>
            <input type="text" className="form-control" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} id="firstname" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Password</label>
            <input type="text" className="form-control" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} id="lastname" placeholder="Last name" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('mapStateToProps : ' + JSON.stringify(state))
  return {
    count: state.count
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT' };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)