const gasPrice = document.getElementById('gas-price');
const gasEfficiency = document.getElementById('gas-efficiency');
const etanolPrice = document.getElementById('etanol-price');
const etanolEfficiency = document.getElementById('etanol-efficiency');

const pricePerKmGas = document.getElementById('price-per-km-gas');
const pricePerKmEtanol = document.getElementById('price-per-km-etanol');
const resBestGas = document.getElementById('bestGas');

var gas = 0;
var efc = 0;

gasPrice.addEventListener("keyup", () => { printGas(), bestGas() });
gasEfficiency.addEventListener("keyup", () => { printGas(), bestGas() });

etanolPrice.addEventListener("keyup", () => { printEtanol(), bestGas() });
etanolEfficiency.addEventListener("keyup", () => { printEtanol(), bestGas() });

function printGas(){
    result = Number(calcEfficiency(gasPrice.value, gasEfficiency.value))
    let num = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result);
    pricePerKmGas.innerText = "Gasolina "+num+" por KM"
    return result
}
function printEtanol(){
    result = Number(calcEfficiency(etanolPrice.value, etanolEfficiency.value))
    let num = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result);
    pricePerKmEtanol.innerText = "Etanol "+num+" por KM"
    return result
}

function calcEfficiency(gas, efc){
    gas = parseFloat(gas.replace(',','.'));
    efc = parseFloat(efc.replace(',','.'));
    const calcGas = Number(gas)/Number(efc)
    let result =0;
    if(gas>0 && efc>0){
        result = calcGas.toFixed(2)
    }
    console.log(result/10);
    return result
}
function bestGas(){
    let resulta
    if(printGas()>0 && printEtanol()>0){
        printGas()<printEtanol() ? resulta = "Gasolina" : resulta = "Alcool"
    }
    if(resulta != undefined){
        resBestGas.style.opacity = 1;
        resBestGas.innerText = `${resulta} é mais Eficiente`
    }

}