let form = document.getElementById('form')
let num1 = document.getElementById('numero-1')
let num2 = document.getElementById('numero-2')
let valid1 = document.getElementById('valid')
let invalid1 = document.getElementById('invalid')
let same1 = document.getElementById('same')

function validaNumero() {

    let n1 = parseFloat(num1.value)
    let n2 = parseFloat(num2.value)

    if (n1 < n2) {
        valid1.style.display = 'block'
        invalid1.style.display = 'none'
        same1.style.display = 'none'
        valid1.innerHTML = `<p><b>Válido</b> - O número ${num2.value} é maior que o número ${num1.value}<p>`
    } else if (n1 > n2) {
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
    console.log(typeof(n1))
}

form.addEventListener('submit', function(e){
    e.preventDefault();   
    validaNumero()
})