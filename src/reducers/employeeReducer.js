const employeeReducer = (state = [],action) => {
let stateCopy = [...state,action.payload];

switch(action.type){

case 'ADD_EMPLOYEE':
localStorage.setItem('employees',JSON.stringify(stateCopy));
return stateCopy

case 'DELETE_EMPLOYEE':
stateCopy = state.filter( x => x.id !== action.payload);
localStorage.setItem('employees',JSON.stringify(stateCopy));
return stateCopy
    
case 'UPDATE_EMPLOYEE':

stateCopy = state.map((employee) => {
    const {id,name,grade,dept} = action.payload;
    if(employee.id === id)
    {
    employee.name = name;
    employee.grade = grade;
    employee.dept = dept;
    }
    return employee;
})
localStorage.setItem('employees',JSON.stringify(stateCopy));
return stateCopy

default:
    return state;
}

}
export default employeeReducer;