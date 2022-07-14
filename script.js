const price = 4.2;
const package = 50;
const pal = 2800;
const developerPricePerLitre = 0.0005;
const gumPricePerLitre = 0.001;

const ryobiSize = [760,605];
const heidiSize = [1055,811];

function calcInfos() {

    let machine = document.querySelector("#printingmachine").value;
    let pcs = document.querySelector("#quantity").value;
    
    if (pcs <= 0 || pcs%1 !== 0 || machine === "unselected"){
        let alert = document.querySelector("#alert");
        alert.innerHTML = "Please, choose a machine and insert a positive whole number!";
        alert.setAttribute("class" , "alert alert-danger");
        return;
    } else {
        let alert = document.querySelector("#alert");
        alert.setAttribute("class", "visually-hidden")
    }
    
    let height = null;
    let length = null;
    let gum = 0.03;
    let developer = 0.085;

    switch (machine) {
        case "Ryobi":
            length = ryobiSize[0];
            height = ryobiSize[1];
            break;
        case "Heidi":
            length = heidiSize[0];
            height = heidiSize[1];
            break;
        default:
            console.error()
            break;
    }

    let m2PerPcs = (height * length) / 1000000;
    let pricePerPcsValue = (m2PerPcs * price).toFixed(2);
    let pricePerPackage = (pricePerPcsValue * package).toFixed(2)
    let piecesPerPal = package * pal
    let pricePerPal = (pricePerPcsValue * piecesPerPal).toFixed(2)

    let showMachineName = document.querySelector("#machineName");
    showMachineName.innerHTML = "Machine's name: " + machine + "<br>" + " Amount: " + pcs + "<br>";

    let showHeight = document.querySelector("#height");
    showHeight.innerHTML = height;
    let showLength = document.querySelector("#length");
    showLength.innerHTML = length;
    let showPrice = document.querySelector("#price");
    showPrice.innerHTML = price;
    let showgumm2PerPcs = document.querySelector("#m2PerPcs");
    showgumm2PerPcs.innerHTML = m2PerPcs;
    let showPricePerPcsValue = document.querySelector("#pricePerPcsValue");
    showPricePerPcsValue.innerHTML = pricePerPcsValue;
    let showpricePerPackage = document.querySelector("#pricePerPackage");
    showpricePerPackage.innerHTML = pricePerPackage;
    let showpiecesPerPal = document.querySelector("#piecesPerPal");
    showpiecesPerPal.innerHTML = piecesPerPal;
    let showpricePerPal = document.querySelector("#pricePerPal");
    showpricePerPal.innerHTML = pricePerPal;

    developer = (developer*pcs).toFixed(2);
    gum =(gum*pcs).toFixed(2);

    let gumNeededBottle = Math.ceil((gum / 10)).toFixed(2);
    let gumTotalPrice = (gumPricePerLitre * gumNeededBottle*10).toFixed(2);
    let gumNeededBottleLitre = gumNeededBottle * 10;

    let developerNeededBottle = Math.ceil((developer / 20)).toFixed(2);
    let developerTotalPrice = (developerPricePerLitre * developerNeededBottle*20).toFixed(2);
    let developerNeededBottleLitre = gumNeededBottle * 20;


    let showGum = document.querySelector("#gum");
    showGum.innerHTML = gum;
    let showgumNeededBottle = document.querySelector("#gumNeededBottle");
    showgumNeededBottle.innerHTML = gumNeededBottle;
    let showgumNeededBottleLitre = document.querySelector("#gumNeededBottleLitre");
    showgumNeededBottleLitre.innerHTML = gumNeededBottleLitre;
    let showgumPricePerLitre = document.querySelector("#gumPricePerLitre");
    showgumPricePerLitre.innerHTML = gumPricePerLitre;
    let showgumTotalPrice = document.querySelector("#gumTotalPrice");
    showgumTotalPrice.innerHTML = gumTotalPrice;

    let showdeveloper = document.querySelector("#developer");
    showdeveloper.innerHTML = developer;
    let showdeveloperNeededBottle = document.querySelector("#developerNeededBottle");
    showdeveloperNeededBottle.innerHTML = developerNeededBottle;
    let showdeveloperNeededBottleLitre = document.querySelector("#developerNeededBottleLitre");
    showdeveloperNeededBottleLitre.innerHTML = developerNeededBottleLitre;
    let showdeveloperPricePerLitre = document.querySelector("#developerPricePerLitre");
    showdeveloperPricePerLitre.innerHTML = developerPricePerLitre;
    let showdeveloperTotalPrice = document.querySelector("#developerTotalPrice");
    showdeveloperTotalPrice.innerHTML = developerTotalPrice;
}