const name = document.getElementById('name');

// to get the value "name.value"

// window.alert(`Name: ${name.value}`)


// getelementbyid , queryselector('#name/.name') # = id , . = class


const nameInput = document.querySelector('#name');
const AgeInput = document.querySelector('.age');
// arrow function

const changeName = (name) => {
    nameInput.value = name
}


// -------------------

const alertDetails = () => {
    alert(`
    Your name is : ${nameInput.value}
    Your age is : ${AgeInput.value}
    `
    )
}