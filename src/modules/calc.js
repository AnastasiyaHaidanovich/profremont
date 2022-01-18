export const calc = () => {
    const calcBlock = document.getElementById("calc");
    const calcType = document.getElementById("calc-type");
    const calcSquare = document.getElementById("calc-input");
    const calcTypeMaterial = document.getElementById("calc-type-material");
    const total = document.getElementById("calc-total");
    
    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        const calcSquareValue = calcSquare.value;
        let totalValue = 0;

        if (calcTypeValue && calcTypeMaterialValue && calcSquareValue){
            totalValue =  calcTypeValue * calcSquareValue * calcTypeMaterialValue;
            console.log(totalValue);
            total.placeholder = Math.round(totalValue) + " $";
        } 

        // let count = 0;
        // let timeId = setInterval(() => {
        //     total.textContent = count;
        //     if (count >= totalValue){
        //         clearInterval(timeId);
        //     }
        //     count += 10;
        // }, 10);


    };
    
    if (calcBlock){
        calcBlock.addEventListener("input", (e) =>{
            countCalc();
        });
    }
};