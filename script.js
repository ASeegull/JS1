// Task 1
function fortuneTelling() {
    var person = 'You';
    var time = 'soon';
    var event = prompt('What event are you curious about?', 'Please, type in your event here');
    var place = 'just around the corner...';
    alert(event + ' is waiting for ' + person+ ' ' + time + ' ' + place);
}
document.getElementById("fortuneTelling").addEventListener("click", fortuneTelling);




// Task 2
function converter() {
    //Get data from user
    var euros = prompt('How much euro would you like to convert?', 'Example: 1000 euro');
    var dollars = prompt('And how much dollars would you like to convert?', 'Example: 1000 dollars');
    //Exchange rates
    var exchRateEuro = 29.373;
    var exchRateDollars = 26.393;
    var exchRateEuroToDollars = 1.113;
    //Conversion
    var getEuroInHryvnia = euros * exchRateEuro;
    var getDollarsInHryvnia = dollars * exchRateDollars;
    //Output
    alert(euros + ' euros are equal ' + getEuroInHryvnia + ' grns, ' + dollars + ' dollars are equal ' + getDollarsInHryvnia +
    ', one euro is equal ' + exchRateEuroToDollars + ' dollars');
    document.querySelector('img.dollar').setAttribute("src", '61289079.jpg');
    document.querySelector('.task2 p').textContent="Thank you for yor visit!";
}

document.getElementById("converter").addEventListener("click", converter);