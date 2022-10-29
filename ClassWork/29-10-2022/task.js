Employee = [ {
    Employee_ID : 01,
    Employee_Name : 'Hamza',
    Employee_Company : 'Bitsol',
    Islam: true,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 12000

},
{
    Employee_ID : 02,
    Employee_Name : 'Asad',
    Employee_Company : 'Bitsol',
    Islam: true,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 14000

},
{
    Employee_ID : 03,
    Employee_Name : 'Hammad',
    Employee_Company : 'Afinity',
    Islam: true,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 5000

},
{
    Employee_ID : 04,
    Employee_Name : 'Raza',
    Employee_Company : 'Afinity',
    Islam: false,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 18000

},
{
    Employee_ID : 05,
    Employee_Name : 'Zain',
    Employee_Company : 'VS Sights',
    Islam: true,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 19000

},
{
    Employee_ID : 06,
    Employee_Name : 'Haider',
    Employee_Company : 'VS Sights',
    Islam: true,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 25000

},
{
    Employee_ID : 07,
    Employee_Name : 'Qaiser',
    Employee_Company : 'Bitsol',
    Islam: false,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 6000

},
{
    Employee_ID : 08,
    Employee_Name : 'Amir',
    Employee_Company : 'Bitsol',
    Islam: false,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 8000

},
{
    Employee_ID : 09,
    Employee_Name : 'Babar',
    Employee_Company : 'Afinity',
    Islam: false,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 14000

},
{
    Employee_ID : 10,
    Employee_Name : 'Rizwan',
    Employee_Company : 'VS Sights',
    Islam: true,

    Employee_Company_Address : {
        City : 'Islamabad',
        Country : 'Pakistan', 

    },

    Employee_Address : {
        City : 'Rawalpindi',
        Country : 'Pakistan', 

    },

    Employee_Salary : 2000

}
]


let a=Employee.filter((ele)=>ele.Islam==true) //Filter shows all values and find shows only the first value
console.log(a);

let b=Employee.filter((ele)=>ele.Employee_Salary<5000); 
console.log(b);

