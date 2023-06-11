let button = document.getElementById('btn')
let num1 = document.getElementById('numero-1')
let num2 = document.getElementById('numero-2')
let valid1 = document.getElementById('valid')
let invalid1 = document.getElementById('invalid')
let same1 = document.getElementById('same')

button.addEventListener('click', function () {
    if (num1.value < num2.value) {
        valid1.style.display = 'block'
        invalid1.style.display = 'none'
        same1.style.display = 'none'
        valid1.innerHTML = `<p><b>Válido</b> - O número ${num2.value} é maior que o número ${num1.value}<p>`
    } else if (num1.value > num2.value) {
        invalid1.style.display = 'block'
        valid1.style.display = 'none'
        same1.style.display = 'none'
        invalid1.innerHTML = `<p><b>Inválido</b> - O número ${num2.value} é menor que o número ${num1.value}<p>`
    } else {
        same1.style.display = 'block'
        valid1.style.display = 'none'
        invalid1.style.display = 'none'
        same1.innerHTML = `<p><b>Iguais</b> - O número ${num2.value} é igual ao número ${num1.value}<p>`
    }
})