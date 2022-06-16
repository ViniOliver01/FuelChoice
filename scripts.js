const gasPrice = document.getElementById('gas-price');
const gasEfficiency = document.getElementById('gas-efficiency');
const etanolPrice = document.getElementById('etanol-price');
const etanolEfficiency = document.getElementById('etanol-efficiency');

const pricePerKmGas = document.getElementById('price-per-km-gas');
const pricePerKmEtanol = document.getElementById('price-per-km-etanol');



gasPrice.addEventListener("keyup", () => {
    calcEfficiencyGas()
});
gasEfficiency.addEventListener("keyup", () => {
    calcEfficiencyGas()
});
etanolPrice.addEventListener("keyup", () => {
    calcEfficiencyEtanol()
});
etanolEfficiency.addEventListener("keyup", () => {
    calcEfficiencyEtanol()
});




function calcEfficiencyGas(){
    const calcGas = Number(gasPrice.value)/Number(gasEfficiency.value)
    if(calcGas!=Infinity && calcGas!=NaN){
        pricePerKmGas.innerText = "R$: "+calcGas.toFixed(2)+" por KM"
    }else{
        pricePerKmGas.innerText = "R$: - por KM"
    }
}
function calcEfficiencyEtanol(){
    const calcEtanol = Number(etanolPrice.value)/Number(etanolEfficiency.value)
    if(calcEtanol!=Infinity && calcEtanol!=NaN){
        pricePerKmEtanol.innerText = "R$: "+calcEtanol.toFixed(2)+" por KM"
    }else{
        pricePerKmEtanol.innerText = "R$: - por KM"
    }
}


