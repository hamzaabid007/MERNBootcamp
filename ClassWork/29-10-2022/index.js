 
    function example(){
        var obj = 123;

        for(i=0; i<10; i++){
            console.log(i);
        } 
        console.log(i);
    }

    example();

    student = {
        name : 'hamza',
        age : 12,
        rollnum : 1546, 

        address : {
            city : "rawalpindi",
            country : "pakistan"
        }
    }
    
    console.log(student.address.city);
    console.log(student["address"]['country']);


    Employee = {
        Employee_ID : 05,
        Employee_Name : 'Hamza',
        Employee_Company : 'Bitsol',

        Employee_Company_Address : {
            City : 'Islamabad',
            Country : 'Pakistan', 

        },

        Employee_Address : {
            City : 'Rawalpindi',
            Country : 'Pakistan', 

        },

        Employee_Salary : 1000

    }
    console.log(Employee.Employee_Company_Address.City);
    console.log(Employee.Employee_Address.City);