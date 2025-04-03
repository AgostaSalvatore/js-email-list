//recupero gli elementi del dom
const emailList = document.getElementById("email-list");
const button = document.getElementById("listAgain");

//mi dichiaro le variabili
const mails = [];
let items = 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail?count=${items}`;

//funzione evento bottone

const recreateList = () => {
    // Resetto l'array
    emailList.innerHTML = '';
    for (let i = 0; i < items; i++) {
        axios.get(endpoint).then((response) => {
            const mail = response.data.response;
            console.log(mail);
            
            // Aggiungo l'email all'array
            mails.push(mail);
    
            // Aggiungo l'email alla lista HTML
            emailList.innerHTML += `<li class="list-group-item">${mail}</li>`;
        });
    }
    console.clear();
}

button.addEventListener("click", recreateList);
recreateList();