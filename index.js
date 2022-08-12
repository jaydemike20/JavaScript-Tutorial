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


const submitButton = document.querySelector('#submit1')
const priceinput = document.querySelectorAll('.price')
const totalamount = document.querySelector('#total')

submitButton.addEventListener('click', (e) => {
    let sum = 0;

    for (let i = 0; i < priceinput.length; i++) {
        sum += Number(priceinput[i].value)
    }

    totalamount.value = sum


}) 