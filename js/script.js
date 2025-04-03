//recupero gli elementi del dom
const emailList = document.getElementById("email-list");


//mi dichiaro le variabili
let items = 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail?items=${items}`;

axios.get(endpoint).then((response) => {
    console.log(response.data.response);

});
