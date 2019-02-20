fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
    .then(employees => employees.json())
    .then(parsedEmployees => {
        parsedEmployees.forEach(employee => {
       document.querySelector(".employeeContainer").innerHTML +=`<h3>${employee.name}</h3>
           <p>works in the ${employee.department.name} department and they use a ${employee.computer.model}</p>`;
        })
    })

