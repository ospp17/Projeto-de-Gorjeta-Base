let conta = 0


const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", recebervalorconta )

function recebervalorconta(evento) {
    conta = number(evento.target.value) 
}

const pessoaInput = document.querySelector("#pessoa")
pessoaInput.addEventListener("input", receberquantidadepessoas )

function receberquantidadepessoas(evento) {
    const paragrafoerro = document.querySelector(".pessoa #erro")
    const diverro = document.querySelector(".pessoa .input-box")

    if(evento.target.value === "0") {
        paragrafoerro.style.display = "block"
        diverro.setAttribute("id", "erro-div")
    } else {
        const diverro = document.querySelector(".pessoa")
        diverro.setAttribute("id","erro-div")
        pessoas = number(evento.target.value    )
    }
}

const botoesgorjeta = document.querySelectorAll(".gorjet input[type='number'")
botoesgorjeta.forEach(botao => {   
    botao.addEventListener("click", receberporcentagembotao)
})

function receberporcentagembotao(evento){
    botoesgorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativos")
        }
    })
    
    if(evento.target.value !== ""){
        porcentagem =parseFloat(evento.target.value) /100
    } else { 
        porcentagem = 0
    }

    console.log(porcentagem)
}

const gorjetainput = document.querySelector("#outra")
gorjetainput.addEventListener("input",receberporcentagembotao)

function calcular(){
    if(contan !==0 && gorjeta !== 0  && pessoa  !==0) {
        const stronggorjetatotal =document.querySelector(".gorjeta-total > strong")
        stronggorjetatotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`

        const strongtotal = document.querySelector(".total > strong")
        stronggorjetatotal.innerHTML = `R$ ${((conta + (conta*porcentagem)) /pessoas).toFixed(2)}`
    }
}

const botaolimpar = document.querySelector(".resultados button")
botaolimpar.addEventListener("click",limpar)

function limpar() {
    contaInput.value = ""

    botoesgorjeta.forEach(botao=>{
        botao.classList.remove("botao-ativo")
    })

    gorjetainput.value = ""

    pessoas.value = ""

    document.querySelector(".gorjeta-total  > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total  > strong").innerHTML = "R$ 0.00"
}