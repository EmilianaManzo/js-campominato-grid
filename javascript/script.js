const emContainer = document.querySelector('.em-container');
const btn = document.getElementById('bottoncino');

reset();
btn.addEventListener('click', start);









// FUNZIONI

// funzione per resettare e pulire 
function reset(){
  emContainer.innerHTML= '';
}

// funzione per creare i quadrati e aggiungere la classe 
function creation (numeroi){
  const squareC = document.createElement('div');
  squareC.className = 'square';

  squareC.sqId = numeroi;

  squareC.addEventListener('click', function(){
    /** 
    metodo classico 
    if(this.innerHTML === ''){
      this.innerHTML = this.sqId;
    }
    */

    
    // metodo ternario parlante 
    this.innerHTML === '' ? this.innerHTML = this.sqId :  this.innerHTML === ''; 

    squareC.sqId.classList.toogle('lightblue');

  })


  return squareC;

  
}

// funzione per il click del bottone per far partire tutto 
function start (){
  for (let i = 1; i <= 100; i++){
    const square = creation(i) ;
    emContainer.append(square);
  }

}