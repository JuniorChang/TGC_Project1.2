const mymap = L.map('map').setView([ 1.29,103.85], 13);
const hereicon = L.icon({
    iconUrl:'../assets/hereicon.jpg',
    iconSize: [70,70],
    iconAnchor:[0,0],
    popupAnchor:[0,0]
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(mymap);



// get own location
navigator.geolocation.getCurrentPosition(position => {
    const { coords: { latitude, longitude }} = position;
    var marker = new L.marker([latitude, longitude], { icon:hereicon,
      draggable: true,
      autoPan: true
    }).addTo(mymap);
})

let markerCluster = L.markerClusterGroup();
markerCluster.addTo(mymap)

window.addEventListener('DOMContentLoaded', async function() {
    let response = await axios.get("../geojson/rmg.geojson");
    let rmg = response.data.features[0].geometry.coordinates
    console.log(rmg)

    
    // console.log(response.data);
    // let rmgLayer = L.geoJson(response.data,{
    //     onEachFeature: function(feature, layer){
    //         layer.bindPopup(feature.properties.Description); 
    //     }
    // })
//    rmgLayer.addTo(mymap)
    // return rmgLayer;
    
})