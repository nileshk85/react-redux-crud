import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem.jsx';

export default class EmployeeList extends Component {
    render() {
        let employees = this.props.employeeList;
        const trItem = employees.map( (item,index) => <EmployeeItem key={index} employee={item} index={index} editEmployeeSubmit={this.props.editEmployeeSubmit} deleteEmployee={this.props.deleteEmployee}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }