SELECT
	d.NAME AS Department,
	e.NAME AS Employee,
	e.Salary AS Salary 
FROM
	Employee e
	JOIN Department d ON e.DepartmentId = d.Id 
WHERE
	( SELECT count( DISTINCT Salary ) FROM Employee WHERE Salary > e.Salary AND DepartmentId = e.DepartmentId ) < 3 
ORDER BY
	d.NAME,
	e.Salary DESC;