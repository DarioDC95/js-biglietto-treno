// Chiedere i kilometri da percorrere
let kilometers = parseInt(prompt("Quanti chilometri desideri percorrere?"));

// Chiedere l'età del passeggero
let age = parseInt(prompt("Qual'è la sua età?"));

// Definisco la costante del costo a kilometro
const unit_prize = 0.21;

// Definisco il prezzo normale
let prize_ticket = kilometers * unit_prize;

// Definisco gli sconti
if (age < 18) {
    prize_ticket = prize_ticket * 0.8;
}

else if (age > 65) {
    prize_ticket = prize_ticket * 0.6;
}

else {
    prize_ticket = prize_ticket;
}

// setto il massimo di due decimali
let adjusted_prize_ticket = prize_ticket.toFixed(2);
console.log(adjusted_prize_ticket);

// Diamo il risultato all'HTML
document.getElementById("ticket_prize").innerHTML = " " + adjusted_prize_ticket;