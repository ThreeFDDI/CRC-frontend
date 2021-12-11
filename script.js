const apiUrl = "https://api.threefddi.net/visitor/";

fetch(apiUrl)
.then(response => response.json())
.then(result => document.getElementById('visitor_counter').innerHTML = result + ' people checked out this resume.')
.catch(error => console.log('error', error));



