
const mymap = L.map('map').setView([ 1.29,103.85], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(mymap);



// get own location
// navigator.geolocation.getCurrentPosition(position => {
//     const { coords: { latitude, longitude }} = position;
//     var marker = new L.marker([latitude, longitude], {
//       draggable: true,
//       autoPan: true
//     }).addTo(map);
// })



window.addEventListener('DOMContentLoaded', async function() {
    let response = await axios.get("../geojson/rmg.geojson");
    console.log(response.data);
    let rmgLayer = L.geoJson(response.data,{
        onEachFeature: function(feature, layer){
            layer.bindPopup(feature.properties.Description); 
        }
        
    })
//    rmgLayer.addTo(mymap)
})


        
    

function countrisk(){
    const inputElems = document.getElementsByTagName("input");
    
    
   
    count = 0
    for ( var i =0; i < inputElems.length; i++) {
        var x = inputElems[i]
        if (x.value == 'yes' && (x.checked ) ) {
            count++;
            // console.log(x.value)
        }
      
        // if(inputElems[i].type === "radio" && inputElems[i].checked === true){
        //     count++;
        //     console.log(count);
        // }
    }
    console.log(count)
}

