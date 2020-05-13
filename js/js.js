alert('Thank you for your visiting')
var Day = prompt('what is the day?+First letter capital')
var Today ;
switch (Day)
{
    case "Sunday":
      Today =("Sunday")
       break

    case "Monday":
        Today =("Monday")
        break

    case "Tuesday":
        Today =("Tuesday")
        break

    case "Wednesday":
        Today =("Wednesday")
        break

    default:
        Today =( 'Anotherday')
        break 
    
}

document.write('<h4>'+' Today is '+"  "+ Today+'</h4>')


console.log(Today)
confirm("Press a button!\nEither OK or Cancel.");
