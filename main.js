const SampleObject = {
    name : "Jayde",
    age : 20,
    gender: "Male",
    course: "BSIT"
}

// two ways to display an properties
console.log(SampleObject.age);
document.write("Gender: ",SampleObject["gender"]);

// delete object properties
delete SampleObject.course

