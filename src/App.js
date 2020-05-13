import React, { Component } from 'react';
import './App.css';
import EmployeeList from './EmployeeList.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addEmployee,deleteEmployee,updateEmployee} from './actions/employeeActions'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
  }
  componentWillMount(){

  }
  addNewEmployee()
  {
    this.props.addEmployee({id:Math.max(...this.props.employeeList.map(function(o){return o.id})) + 1,name:'',grade:1,dept:''});
  }

  deleteEmployee(id)
  {
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
    {
    this.props.deleteEmployee(id);
   
  }
  }
  editEmployeeSubmit(id,name,grade,dept)
  {
this.props.updateEmployee({id:id,name:name,grade:grade,dept:dept});
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row mt-3"><div className="col-lg-12">
      <div className="card">
  <div className="card-header">
    Employee Master
  </div>
  <div className="card-body">
  <table className="table table-hover">
          <thead className="thead-dark"><tr><th>Name</th><th>Grade</th><th>Department</th><th>Edit/Save</th><th>Delete</th></tr></thead>
          <EmployeeList deleteEmployee={this.deleteEmployee} employeeList={this.props.employeeList} editEmployeeSubmit={this.editEmployeeSubmit}/>
        </table>
        <button className="btn btn-dark pull-left" onClick={this.addNewEmployee}>Add New</button>
      </div></div></div></div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeeList : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addEmployee:addEmployee,
    deleteEmployee:deleteEmployee,
    updateEmployee:updateEmployee
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
