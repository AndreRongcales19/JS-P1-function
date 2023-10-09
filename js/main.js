// opdr. 1
function greet() {
    console.log("Hallo wereld");
}

greet();

// opdr. 2 
function welcome() {
    document.body.textContent = "Welkom bij ROC Mondriaan";
}

welcome();

//opdr. 3 
function calculateSum(a, b) {
    console.log("de som van a & b is: ", a + b);
}

calculateSum(4, 10);

//opdr. 4 
function calculateDivision(a, b) {
    console.log("a gedeelt door b is, ", a / b);
}

calculateDivision(8, 2);

//opdr. 5 
function showArrayOfNumbers() {
    let array = [2, 3, 5, 7, 11];
    console.log(array);
}

showArrayOfNumbers();

//opdr 6. 
function showArrayOfBrands() {
    let array = ["Mercedes", "Volkswagen", "Peugeot", "Tesla", "Toyota"];

    for (let i = 0; i < array.length; i++) {
        const brand = array[i];
        
        console.log(brand);
    }
}

showArrayOfBrands();

//opdr. 7 
let yourNumber = 5;
let computerNumber = 7;
const choosePrompt = prompt("Typ hoger of lager in");
function lowerHigher () {
    if (choosePrompt == "Hoger") {
        alert("Je bent gewonnen!!");
    } else if (choosePrompt == "Lager") {
        alert("Je bent verloren!!");  
    } else {
        alert("TYP HOGER OF LAGER ALLEEN");
    }
}

lowerHigher();

//opdr. 8 

