
// // Start of Custom icons
const hereicon = L.icon({
    iconUrl: './assets/hereicon.jpg',
    iconSize: [70, 70],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
});
const rmglogo = L.icon({
    iconUrl: './assets/rLogo.png',
    iconSize: [70, 70],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
})

const publicHospitalLogo = L.icon({
    iconUrl: '../assets/publicHospitalLogo.png',
    iconSize: [70, 70],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
})
const privateHospitalLogo = L.icon({
    iconUrl: '../assets/privateHospitalLogo.png',
    iconSize: [70, 70],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
})
// // End of Custom icons

// get own location
navigator.geolocation.getCurrentPosition(position => {
    const { coords: { latitude, longitude } } = position;
    var marker = new L.marker([latitude, longitude], {
        icon: hereicon,
        draggable: true,
        autoPan: true
    }).addTo(map);
})

// let markerCluster = L.markerClusterGroup();
// markerCluster.addTo(mymap)

// function rmgdata(mymap) {
//     window.addEventListener('DOMContentLoaded', async function () {
//         let response = await axios.get("../geojson/rmg.geojson");
//         let rmg = response.data.features[0].geometry.coordinates
//         // console.log(rmg)
//         // console.log(response.data);
//         let rmgLayer = L.geoJson(response.data, {
//             onEachFeature: function (feature, layer) {
//                 layer.bindPopup(feature.properties.Description);
//             }

//         })
//            rmgLayer.addTo(mymap)
//         return rmgLayer;
//     })
// }

// rmgdata(mymap);

// let group = L.layerGroup();
// L.marker(rmgdata(mymap)).addTo(group);
// group.addTo(mymap);

// let group2 = L.layerGroup();
// L.circle(rmgdata(mymap), {
//     color: 'red',
//     fillColor: "orange",
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(group2);

// let group3 = L.layerGroup();
// L.circle(rmgdata(mymap), {
//     color: 'red',
//     fillColor: "green",
//     fillOpacity: 0.5,
//     radius: 250
// }).addTo(group3);



// let baselayers = {
//     'Markers': group,
//     'Circles': group2
// }
// let overlays = {
//     'Green Circle': group3
// }

// L.control.layers(baselayers, overlays).addTo(mymap);

// document.querySelector('#toggle-btn').addEventListener('click', function () {
//     if (mymap.hasLayer(group2)) {
//         mymap.removeLayer(group2);
//     } else {
//         map.addLayer(group2);
//     }
// })

let map = L.map("map", { fullScreenControl: true, zoomSnap: 0.2 }).setView(
    [1.36739, 103.83014],
    11.5
);

let mapboxTiles = new L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);

L.control
    .scale({ metric: false, imperial: true, position: "bottomright" })
    .addTo(map);

const fsControl = L.control.fullscreen();
map.addControl(fsControl);

map.on("enterFullscreen", function () { });
map.on("exitFullscreen", function () { });

let popupStyle = {
    maxWidth: "300",
    closeButton: false,
};

let circleMarkerPublic = {
    color: "#000000",
    fillColor: "#ff0000",
    fillOpacity: 1,
    opacity: 1,
    radius: 6,
    weight: 2,
};

let circleMarkerPrivate = {
    color: "#000000",
    fillColor: "#00ff00",
    fillOpacity: 1,
    opacity: 1,
    radius: 6,
    weight: 2,
};

let circleMarkerOther = {
    color: "#000000",
    fillColor: "#0000ff",
    fillOpacity: 1,
    opacity: 1,
    radius: 6,
    weight: 2,
};

let circleMarkerRmg = {
    color: "#000000",
    fillColor: "#ff00ff",
    fillOpacity: 1,
    opacity: 1,
    radius: 6,
    weight: 2,
};

function onEachMarker(feature, layer) {
    let popupContent =
        '<p class="popup-title">' +
        feature.properties.name +
        "</p>" +
        '<p class="popup-text">Address: ' +
        feature.properties.address +
        "</p>" +
        '<p class="popup-text">Phone: ' +
        feature.properties.phone +
        "</p>";

    layer.bindPopup(popupContent, popupStyle);
}

let layerPublicHospitals = L.geoJson(publicHospitals, {
    onEachFeature: onEachMarker,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, circleMarkerPublic);
    },
}).addTo(map);

let layerPrivateHospitals = L.geoJson(privateHospitals, {
    onEachFeature: onEachMarker,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, circleMarkerPrivate);
    },
});

let layerOtherClinics = L.geoJson(otherClinics, {
    onEachFeature: onEachMarker,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, circleMarkerOther);
    },
}).addTo(map);

let layerRmg = L.geoJson(rmg, {
    onEachFeature: onEachMarker,
    pointToLayer: function (feature, latlng) {   
        return L.circleMarker(latlng, circleMarkerRmg);
    }
}).addTo(map);

let baseLayers = {
    "Public Hospitals": layerPublicHospitals,
    "Private Hospitals": layerPrivateHospitals,
};

let overlays = {
    "Other Clinics ": layerOtherClinics,
    "RMG ": layerRmg,
};

L.control
    .layers(baseLayers, overlays, { collapsed: false, position: "bottomleft" })
    .addTo(map);