const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    /*Previne o comportamento padrão do 'evento submit' do JS, ou seja, impede o recarregamento da página.*/
    event.preventDefault();

    /*Variaveis para pegar o valor digitado no input*/
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    /*Calculo */
    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)){ /*Verifica se o valor NAN (Not-A-Number (não é um número)) */
        /*Mostra o resultado do cálculo */
        const value = document.getElementById('value');
        let description = '';

        /*Adiciona a class css attention */
        value.classList.add('attention');

        /*Remove a class 'hidden' */
        document.getElementById('infos').classList.remove('hidden');

        /* condições */

        if(bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!'
        }
        else if(bmi >= 18.5 && bmi <= 25){
            description = 'Você está no peso ideal!'
            /*Remove a class 'attention' */
            value.classList.remove('attention');
            /*Adiciona a class 'normal' */
            value.classList.add('normal');
        }
        else if(bmi > 25 && bmi <= 30){
            description = 'Cuidado! Você está com sobrepeso!'
        }
        else if(bmi > 30 && bmi <= 35){
            description = 'Cuidado! Você está com obesidade morderada!'
        }
        else if(bmi > 35 && bmi <= 40){
            description = 'Cuidado! Você está com obesidade severa!'
        }
        else{
            description = 'Cuidado! Você está com obesidade morbida!'
        }
        
        /*coloca o resultado do calculo no <span id="value"></span>  para ser mostrado em tela */
        value.textContent = bmi.replace('.',',');
        /*Mostra o texto da description */
        document.getElementById('description').textContent = description;
    }
});
/*Registra uma única espera de evento em um único alvo. 
(ao pressionar o botão, acione a function(event))
*/
form.addEventListener('keypress', function(event){
    if (event.key === 'press'){
        document.getElementById('calculate').click()
        /* click simula o click do mouse */
    }
});