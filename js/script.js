
const bikes = [
    { bike: 'fzx', model: 'version-3', mileage: '52km/pl', rate: '1,00,000',qty:0 },
    { bike: 'duke', model: 'duke-200', mileage: '35km/pl', rate: '1,50,000',qty:0  },
    { bike: 'R15', model: 'version:3.0', mileage: '40km/pl', rate: '1,90,000',qty:0 },
    { bike: 'pulsor', model: 'version-4', mileage: '45km/pl', rate: '1,20,000',qty:0 },
  ];
 
let inputs = [];

function userinputs(){
  let inputs = prompt("enter the value");
  output = bikes.find( function(add){
    return add.bike === inputs ;
  });
 document.getElementById("obj").innerHTML=bikes;

 }
 