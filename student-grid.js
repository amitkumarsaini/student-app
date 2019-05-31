import React from 'react';
import { connect } from 'react-redux'
class StudentGrid extends React.Component {
  render() {
    return <div className="col-md-12 mainComponent">
      <h3>Student Table</h3>
      <p>Counts : {this.props.count}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>

  }
}
function mapStateToProps(state) {
  console.log('mapStateToProps : ' + state)
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(StudentGrid)