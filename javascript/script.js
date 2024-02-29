const emContainer = document.querySelector('.em-container');
const btn = document.getElementById('bottoncino');

reset();

for (let i = 1; i <= 100; i++){
  const square = creation(i) ;
  emContainer.append(square);
}











// FUNZIONI

function reset(){
  emContainer.innerHTML= '';
}


function creation (numeroi){
  const squareC = document.createElement('div');
  squareC.className = 'square';
  return squareC;
  
}