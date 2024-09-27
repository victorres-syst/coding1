
//comando para desativar a linha
/* comando para desativar a coluna finalizando com o comando novamente so que invertido /*/

console.log ("Atividade"+"De"+"Tereza")

//Apresentação
const nome = ("Victor Torres");
var idade = ("27 Anos");
console.log (`Olá meu nome é ${nome} eu tenho ${idade}`);

//Localização
var cidade = ("Recife");
console.log (`Victor é de ${cidade}`)

// Variavel soma
var soma = (1500 + 1600);
console.log (`A soma de 1500 + 1600 é ${soma}`);

// Variavel multiplicação
var multiplicar = (400 * 30);
console.log (`A multiplicação 400 vezes 30 é ${multiplicar}`);

// Variavel vivisão
var dividir = (20 / 10);
console.log (`A divisão de 20 para 10 é ${dividir}`);


// Variavel subtração
var menos = (30 - 10);
console.log (`A Subtração de 20 - 10 é ${menos}`);

// Calculo da área do triagulo
var base = 100;
var altura = 200;
var valor = base * altura / 2
console.log (`A área do triangulo é ${valor}`);

//Calculo de média
var nota1 = (8);
var nota2 = (9);
var nota3 = (5);
var media = (nota1 + nota2 + nota3 / 3);
console.log (`O resultado da média é ${media}`);

//Calculo de desconto
var valor  = (3500);
var desconto = (15); //porcentagem
var valorfinal = valorfinal = valor - (valor * (desconto / 100));
console.log(`O produto no valor de 3.500 com desconto de 15% fica no total de ${valorfinal.toFixed(2)}`);

//Imposto de renda 
let salarioBruto = 5000; // Salario

let imposto; // Calculo do imposto de renda

// Definindo as alíquotas baseado no dia de hoje
if (salarioBruto <= 2000) {
    imposto = 0; // Isento
} else if (salarioBruto <= 5000) {
    imposto = salarioBruto * 0.15; // Se fo 15% maior 
} else {
    imposto = salarioBruto * 0.25; // Se for 25% maior
}

console.log("O imposto de renda a ser pago é: R$ " + imposto.toFixed(2));


//Conversor de moedas
function converterMoeda(valor, taxaCambio){
const valorConvertido = valor * taxaCambio;
return (`R$ ${valor} é equivalente a $ ${valorConvertido.toFixed(2)}.`);
}
const valorEmReais = 100; // Valor em Reais
const taxaCambio = 0.20; // Taxa de câmbio (1 REAL = 0.20 DOLAR AMERICANO)
const resultado = converterMoeda(valorEmReais, taxaCambio);
console.log(resultado);

//Conversor de Celcius para Fahrenheit
var temperaturaCelsius = 25; // Variável para a temperatura em Celsius que esta 25°
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32; // Conversão para Fahrenheit
console.log(`${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(2)}°F.`);

//Calculadora de IMC
var peso = 70; // Peso em kg
var alt = 1.75; // Altura em metros
var imc = peso / (alt * alt); // Cálculo do IMC
console.log("O IMC é: " + imc.toFixed(2));

console.log ("FINISH !!!")
