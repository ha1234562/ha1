
var haris = [
    {
    name: "haris",
    age: 20,
    isstudent: true,
    marks: [60, 70, 80],
    subject:{
        html: 5,
        python: 6,
        c: 7,
        },

    sentence: " sentence no 1",
    },
    {
        name: "ahmad",
        age: 20,
        isstudent: true,
        marks: [46, 33, 22],
        subject:{
            html: 9,
            python: 8,
            c: 10,
            },
    
        sentence: " sentence no 1",
        }
]
function lessThan50(marks) {
    for (var j = 0; j < marks.length; j++) {
        if (marks[j] < 50) {
            console.log(j)
        }
    }
}

for (var i = 0; i < haris.length; i++) {
    
    console.log("student" + i)
    lessThan50(haris[i].marks)
    console.log(haris[i].marks)

}

// function marksSquare(mArray){
//     for(var i =0; i < mArray.length; i++){
//         mArray[i] = mArray[i] * mArray[i];

//     }
// }
// for (var j = 0; j < haris.length; j++) {
//     var mArray = haris[j].marks;
//     marksSquare(mArray);
//     console.log(mArray);
    
// }
// {
//     var count=0;
//     var vowel=0;
//     var sentence=0;
//     for(var i=0;i<haris[0].sentence.length;i++){
//         if(haris[0].sentence.charAt(i)==' ')
//             count++;
        
//     }
// }
// console.log(haris[0].sentence)
// console.log(haris[0].sentence.length)
//console.log("spaces = " +  count);
