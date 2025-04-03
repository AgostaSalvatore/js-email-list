//recupero gli elementi del dom
const emailList = document.getElementById("email-list");

//mi dichiaro le variabili
const mails = [];
let items = 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`;

for (let i = 0; i < items; i++) {
    axios.get(endpoint).then((response) => {
        const mail = response.data.response;
        console.log(mail);

    });
}
