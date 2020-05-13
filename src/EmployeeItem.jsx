import React, { Component } from 'react';


export default class EmployeeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editEmployee = this.editEmployee.bind(this);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  deleteEmployee()
  {
    const {id} = this.props.employee;
    this.props.deleteEmployee(id);
  }
  editEmployee()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editEmployeeSubmit()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editEmployeeSubmit(this.props.employee.id,this.nameInput.value,this.gradeInput.value,this.deptInput.value);
  }
    render() {
        const {name,grade,dept} = this.props.employee;
      return (
        this.state.isEdit === true ? 

        <tr className="bg-warning" key={this.props.index}><td><input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/></td><td><input defaultValue={grade} ref={gradeInput => this.gradeInput = gradeInput}/></td><td><input ref={deptInput => this.deptInput = deptInput} defaultValue={dept}/></td><td><i className="far fa-save" onClick={this.editEmployeeSubmit}></i></td><td><i className="fas fa-trash"></i></td></tr>
 :
        <tr key={this.props.index}><td>{name}</td><td>{grade}</td><td>{dept}</td><td><i className="far fa-edit" onClick={this.editEmployee}></i></td><td><i className="fas fa-trash" onClick={this.deleteEmployee}></i></td></tr>
      );
    }
  }