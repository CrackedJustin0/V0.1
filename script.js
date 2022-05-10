var url = "https://api.minetools.eu/ping/craftingempire.de";


$.getJSON(url, function(r) {
 if(r.error){
   $('#playercount').html('<p>Offline</p> <style> .serverinfoplayers { color: red;} </style>');
   return false;
 
  }
 
 $('#playercount').html(r.players.online + '/' + r.players.max);

 let spieleranzahl1 = r.players.online - 1;
 let spieleranzahl2 = r.players.online;
 let test = document.getElementById("all");



 for (let i = 0; i < spieleranzahl2; i++) {
  console.log(spieleranzahl2)
  console.log(i)

    test.innerHTML += `
    ${r.players.sample[i].name}
    <img src="https://mc-heads.net/avatar/${r.players.sample[i].id}/100/helm" alt="">
    <br></br>
    `

  console.log(i)
}







});