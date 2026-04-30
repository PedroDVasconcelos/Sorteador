

// Função  para gerar o número
    function generateNumber1to59() {
        return Math.floor(Math.random() * 59) + 1;
    }

    //pegando os elementos do html
    const valor_Usu_Input = document.getElementById("input-pergunta-usuario");
    const elementoComp = document.getElementById("valor-comp");
    const elementoResultado = document.getElementById("result-final");

    //função para pegar o valor do usuário
    function catchUserValue() {
    //pegar o valor que o usuário digitou
   const valor_Usu = parseInt(valor_Usu_Input.value)

    //para verificar possíveis erros no valor do usuario
    if (isNaN(valor_Usu) || valor_Usu < 1 || valor_Usu > 59) {
        alert("Por favor, digite um número válido entre 1 e 59.");
        return; 
    }
    //funçao de generar número sendo utilizada em uma variavel
    const valorComputador = generateNumber1to59();

    //atrelando o valor gerado pela função de gerar número a uma tag html
    elementoComp.textContent = valorComputador;
    
    //verificando se o resultado do usuario e o numero gerado são iguais ou não
    if (valor_Usu === valorComputador) {
        elementoResultado.textContent = "Parabéns, você acertou!";
    } else {
        elementoResultado.textContent = "Você errou. Tente novamente!";
    }
    }
    //função para limpar todas as informações
    function limpar(){
        
        valor_Usu_Input.value = ""; 
        elementoComp.textContent = "";
        elementoResultado.textContent = "";
    }
