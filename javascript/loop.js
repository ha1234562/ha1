var haris = [
    {
    name: "haris",
    age: 20,
    isstudent: true,
    marks: [85, 87, 90]
    
    },
    {
        name: "ahmad",
        age: 20,
        isstudent: false,
        marks: [85, 87, 90]
        
        },
        {
            name: "akbar",
            age: 20,
            isstudent: true,
            marks: [85, 87, 90]
            
            },
    
]
for(var i = 0; i < haris.length; i++){

    console.log("name : " + haris[i].name)
    

    if(haris[i].isstudent){
        for(var m=0; m<haris[i].marks.length; m++){
            console.log(haris[i].marks[m])
        }
        console.log("age : " + haris[i].age)
    }

}
    

