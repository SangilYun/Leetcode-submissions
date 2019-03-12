select 
    Department.Name as 'Department',
    Employee.Name as 'Employee',
    Employee.Salary
from 
    Employee, Department
where 
    employee.Departmentid = department.id
and
    (employee.salary, employee.departmentId)
        in 
    (
    select 
        max(salary), 
        departmentId 
     from 
        employee 
     group by departmentId
    )
    