
const bikes = [
  { bike: 'fzx', model: 'version-3', mileage: '52km/pl', rate: '1,00,000', qty: 0 },
  { bike: 'duke', model: 'duke-200', mileage: '35km/pl', rate: '1,50,000', qty: 0 },
  { bike: 'R15', model: 'version:3.0', mileage: '40km/pl', rate: '1,90,000', qty: 0 },
  { bike: 'pulsor', model: 'version-4', mileage: '45km/pl', rate: '1,20,000', qty: 0 },
];

let carts = [];

function userinputs() {
  let input = prompt("enter the value");
  var obj = getItem(input);
  carts.push(obj);
  document.getElementById("obj").innerText = "sggvg";

 }

 function getItem(input){
  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].bike == input) {
      return bikes[i];
    }
  }

 }

function userdel() {
  document.getElementById("obj").innerText = "";
}

function cal(opp){
  var flag = false;
  let input = prompt("enter the value");
  for (let i = 0; i < carts.length; i++) {
    if (carts[i].bike == input) {
      if(opp==="inc"){
        carts[i].qty+=1;
      } else{
        carts[i].qty-=1;
      }
      flag=true;
      break;
    }
  }

  if(!flag){
    carts.push(getItem(input));
  }
  console.log(carts);
}

function inc() {
  cal("inc");
}
function dec() {
  cal("dec");
}

