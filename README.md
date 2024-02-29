Title: Griglia Campo Minato
===
**Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

# Svolgimento:
1. creo un un header dove andrà inserito il bottone, un main con un contenitore per i quadratini e un footer 
2. importo il contenitore e il bottone in js
3. creo una funzione reset che sarà il primo elemento effettivo del codice.
4. creo un ciclo for per creare i quadratini 100 volte. 
5. creo la funzine di generazione dei quadratini 
5. al click del bottone apparirà la griglia.
6. nella stessa funzione della creazione dei quadratini ne creo una nuova
7. all'interno della nuova funzione al click dell' elemento creo un ciclo if che controlla se all'interno del quadratino è scritto qualcosa e se è vuoto al momento del click scrive il numero corrispondente al numero indice del ciclo for usato per stamparli in pagina.


