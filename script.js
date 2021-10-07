

// let singapore = [1.29, 103.85];
 // Singapore latlng
// let map = L.map('map').setView(singapore, 13);
// map.setMaxBounds(map.getBounds());
// map.setMinZoom(12);

const mymap = L.map('map').setView([ 1.29,103.85], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(mymap);


// window.addEventListener('DOMContentLoaded'), async() =>{
//     let response = await axios.get('/geojson/rmg.geojson');
//     console.log(response);
// }

// Loading Raffles medical data
const rmgfile = "../geojson/rmg.geojson";
console.log("loading Raffles Medical Data");
async function rmgdata(){
    const response = await fetch(rmgfile);
    const data = await response.json();
    console.log("RMG data loaded");
    console.log(data);       
}
rmgdata();

// Loading Public hospital data
const publichospital = "../geojson/hospital.geojson";
console.log("loading Public hospital data");
async function phospital(){
    const response = await fetch(publichospital);
    const data = await response.json();
    console.log("Public hospital data loaded");
    console.log(data);
}
phospital();


