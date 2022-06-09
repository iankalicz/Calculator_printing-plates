function run() {

    const machine = "Heidi"
    const pcs = 2800


    const price = 4.2;
    const package = 50;
    const pal = 28;
    const developerPricePerLitre = 0.0005;
    const gumPricePerLitre = 0.001;

    const ryobiHeigth = 760;
    const ryobiLength = 605;
    const heidiHeigth = 1055;
    const heidiLength = 811;

    let height = null;
    let length = null;
    let gum = 0.03;
    let developer = 0.085;

    switch (machine) {
        case "Ryobi":
            length = ryobiLength;
            height = ryobiHeigth;
            break;
        case "Heidi":
            length = heidiLength;
            height = heidiHeigth;
            break;
        default:
            console.error(err)
            break;
    }


    let m2PerPcs = (height * length) / 1000000;
    let pricePerPcsValue = m2PerPcs * price;

    function basicInfos() {
        console.log("Basic infos for " + machine + ": ")
        console.log("")
        console.log("Height: " + height)
        console.log("Length: " + length)
        console.log("Price: " + price + " €/m2")
        console.log("Price: " + m2PerPcs + " m2/pc")
        console.log("Price: " + pricePerPcsValue + " €/pc")
        console.log("Price: " + pricePerPcsValue * package + " €/package")
        console.log("Pieces: " + package * pal + " pcs/pal")
        console.log("Price: " + pricePerPcsValue * package * pal + " €/pal")
        console.log("")
    }

    basicInfos()

    developer *= pcs
    gum *= pcs
    let gumNeededBottle = Math.ceil((gum / 10));
    let gumTotalPrice = (gumPricePerLitre * gumNeededBottle*20).toFixed(4);
    let developerNeededBottle = Math.ceil((developer / 20));
    let developerTotalPrice = (developerPricePerLitre * developerNeededBottle*20).toFixed(4);

    function chemicalInfos() {
        let mc = machine
        console.log("Chemical infos for " + mc + ": ");
        console.log("");
        console.log("Needed Agfa gum: " + gum + " litre");
        console.log("Needed Agfa gum bottle: " + gumNeededBottle + " bottle");
        console.log("Needed Agfa gum bottle in litre: " + gumNeededBottle * 10 + " litre");
        console.log("Agfa gum price: " + gumPricePerLitre + " €/bottle");
        console.log("Total price for Agfa gum: " + gumTotalPrice + " €");
        console.log("");
        console.log("Needed Saphire developer: " + developer + " litre");
        console.log("Needed Saphire developer bottle: " + developerNeededBottle + " bottle");
        console.log("Needed Saphire developer bottle in litre: " + developerNeededBottle * 20 + " litre");
        console.log("Saphire developer price: " + developerPricePerLitre + " €/bottle");
        console.log("Total price for Saphire developer: " + developerTotalPrice + " €");
        return;
    }

    chemicalInfos()
/*
}
const button = document.querySelector('submit');
button.addEventListener('click', submit);

function submit() {
    

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('submit').appendChild(table);
    
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Info";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Value";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);
    
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Height: ";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = height;
    
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    tbody.appendChild(row_2);

    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "Lenght: ";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = length;

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    tbody.appendChild(row_3);
    */
}
run()