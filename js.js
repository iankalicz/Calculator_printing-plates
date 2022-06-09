//function
function calcAmount() {
    let price = 4.2;
    //selected the input from the form, saved it to a variable
    let quantityInput = document.querySelector("#quantity");
    //select the span element
    let showAmount = document.querySelector("span.show-amount");
    //calculate with the variable saved from the form
    let amount = parseInt(quantity.value) * price;
    //change the selected span with the amount variable
    showAmount.innerHTML = amount;
    
    
    
    /*
    //make an alert message
    alert("Price: " + amount + " Ft");
    
    HTML button for the function
    <button onclick="calcAmount()" type="button">Submit</button>
    */
}
