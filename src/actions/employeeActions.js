export function addEmployee(employee)
{
    return {
    type:'ADD_EMPLOYEE',
    payload:employee
    }
}

export function deleteEmployee(Id)
{
    return {
    type:'DELETE_EMPLOYEE',
    payload:Id
    }
}

export function updateEmployee(employee)
{
    return {
        type:'UPDATE_EMPLOYEE',
        payload:employee
        }

}