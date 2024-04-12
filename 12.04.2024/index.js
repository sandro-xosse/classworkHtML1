// alert(window.innerWidth+' and '+ window.innerHeight)
// const btn1=document.querySelector('#btn1')
// const btn2=document.querySelector('#btn2')

// btn1.addEventListener('click',()=>{
//     window.open("","",'width:600,height: 400');
// })

// btn2.addEventListener('click',()=>{
//     window.resizeTo(400,500);
// })



let map = L.map('map').setView([51.505, -0.09], 13);
let marker = L.marker([51.5, -0.09]).addTo(map);




L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// function showPosition(position) {
//   latlon = position.coords.latitude + "," + position.coords.longitude;
// }  

function findLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }



  
// showPosition(marker)

// alert(getCurrentPosition(marker))

