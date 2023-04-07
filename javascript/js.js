// relativo ao tamanho da senha
let txtTamanhoSenha = document.querySelector('#valor');
let inputRange = document.querySelector('#tamanho-senha');

// bloco de senha e seus displays
let btnGerarSenha = document.querySelector('#btn-gerar');
let senhaGerada = document.querySelector('#senha-gerada');
let copiarSenha = document.querySelector('#copiar-senha');

// este é o algoritmo da geração de senha
let charset = "abcdefghijlmnopqurstuvxzABCDEFGHIJKLMNOPQRSTUVXZ0123456789!@-&*"
let pass = ""

txtTamanhoSenha.innerHTML = inputRange.value

function modificarRange() {
    txtTamanhoSenha.innerHTML = inputRange.value;
}

function gerarSenha() {
   senhaGerada.style.display = 'block';
   copiarSenha.style.display = 'none';

   let novaSenha = "";
   for(i = 0, n = charset.length; i < inputRange.value; i++){   
        novaSenha += charset.charAt(Math.random()*n)
    }
    console.log(senhaGerada.value = novaSenha)
    
}

function copiarCodigo() {
    senhaGerada.select()
}
