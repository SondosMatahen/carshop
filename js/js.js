alert('Thank you for your visiting')


var Day = prompt('what is the day (Sunday-Wednesday)?\nFirst letter capital')
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

    /*default:
        Today =( 'Holiday')
        break */  
    
}


/*while (!( == 'Sunday' || Day =='Monday' || Day =="Tuesday")) {
     Day = prompt (' You should choose from Sunday - Tuesday')
}
*/
while (!(Today == 'Sunday' || Today =='Monday' || Today =="Tuesday")) {
     Today = prompt (' You should choose from Sunday - Tuesday')
}
document.write('<h4>'+' Today is '+"  "+ Today+'</h4>')
console.log(Today)

var car ;
function carNum (){
    var Num = prompt ('How many car do you need ?')
    for (var i=0 ; i< Num ; i++){
  car ='<img src="https://www.market2cars.com/wp-content/uploads/2019/11/960x0.jpg">'
  document.write(car)}
    
}
carNum()
confirm("Press a button!\nEither OK or Cancel.");
