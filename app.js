// 1. deposit Amount 
// 2. how many lines to bet
// 3. bet amount ?
// 4. create spin wheel
// 5. find any match  
// 6. try again 


const prmopt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};


const SYMBOL_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};



const deposite = () =>{
    while(true) {
    const depositeAmount = prmopt("How much money you want to deposit: ");
    const numberDepositeAmount = parseFloat(depositeAmount);

    if(isNaN(numberDepositeAmount) || numberDepositeAmount <= 0){
        console.log("Invalid amount. Try Again");
    } else{
        return numberDepositeAmount;
    }
}
}

const betLines = () =>{
    while(true) {
    const Lines = prmopt("How many lines you want to bet on: ");
    const linesTobeton = parseFloat(Lines);

    if(isNaN(linesTobeton) || linesTobeton <= 0 || linesTobeton > 3){
        console.log("Invalid amount. Try Again");
    } else{
        return linesTobeton;
    }
}
}

const betAmount = (balance, linesForbet) =>{
    while(true) {
    const amountTobet = prmopt("How much you want to  bet per line: ");
    const numberamountTobet = parseFloat(amountTobet);

    if(isNaN(numberamountTobet) || numberamountTobet <= 0 || numberamountTobet > balance / linesForbet){
        console.log("Invalid amount. Try Again");
    } else{
        return numberamountTobet;
    }
}
}


const spin = () =>{
    const symbolArray = [];
    for(const [symbols, count] of Object.entries(SYMBOL_COUNT)){
    for(let i = 0; i< count; i++ ){
    symbolArray.push(symbols);
   };
}

   const reelsymbol = [];
   for(let i=0; i< COLS; i++){
    reelsymbol.push([]);
    const reelsymbolArray = [...symbolArray];
    for(let j=0; j<ROWS; j++){
        const randomIndex = Math.floor(Math.random() * reelsymbolArray.length);
        const generatedsymbol = reelsymbolArray[randomIndex];
        reelsymbol[i].push(generatedsymbol);
        reelsymbolArray.splice(randomIndex, 1);
    }
   }
   return reelsymbol;
};

const reelsymbol = spin();
console.log(reelsymbol);

let balance = deposite();
const linesForbet = betLines();
const bet = betAmount(balance, linesForbet);
console.log(bet);