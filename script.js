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