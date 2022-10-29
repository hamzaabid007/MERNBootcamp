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

let EmpObj = {}
Employee.forEach(element => {
    if(element.Employee_Name=='Hamza'){
        return EmpObj = element;
    }
    else{
        return false;
    }
});

console.log(EmpObj);



const Array = [2,3,6,9,15,30,33,40,51]

let c= Array.filter((ele)=>(ele%2==0))
console.log(c);

const arr = [1,2,3,4,5]

let d=arr.map(el=>{
    return el*2
})

console.log(d)

for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0)
    {console.log("FUZZBUZZ")}
    else if(i%5==0 && i%7==0)
    {console.log("DUZZBUZZ")}
    else if(i%3==0 && i%7==0)
    {console.log("DUZZFUZZ")}
    else if(i%3==0)
    {console.log("FUZZ")}
    else if(i%5==0)
    {console.log("BUZZ")}
    else if(i%7==0)
    {console.log("DUZZ")}
    else
    console.log(i);

}