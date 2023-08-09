// let obj1 = {
//     id:1,
//     name:"Shahbaz"
// };

// let obj2 = {
//     city:"New-Delhi",
//     Telephone:8076212415
// };

// console.log(obj1,obj2)


let obj = {
    firstName: "Shahbaz",
    lastName: "Ansari",
    age: 19,
    eyeColor: "black",

    info:function(){
        return "Welcome Mr." + this.firstName + " your age is "  + this.age;
    }
};
console.log(obj.info());
