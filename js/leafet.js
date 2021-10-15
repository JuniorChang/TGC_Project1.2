
// // // Start of Custom icons
// const hereicon = L.icon({
//     iconUrl: './assets/hereicon.jpg',
//     iconSize: [70, 70],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// });
// const rmglogo = L.icon({
//     iconUrl: './assets/rLogo.png',
//     iconSize: [70, 70],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// })

// const publicHospitalLogo = L.icon({
//     iconUrl: '../assets/publicHospitalLogo.png',
//     iconSize: [70, 70],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// })
// const privateHospitalLogo = L.icon({
//     iconUrl: '../assets/privateHospitalLogo.png',
//     iconSize: [70, 70],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// })
// // // End of Custom icons

// // get own location
// navigator.geolocation.getCurrentPosition(position => {
//     const { coords: { latitude, longitude } } = position;
//     var marker = new L.marker([latitude, longitude], {
//         icon: hereicon,
//         draggable: true,
//         autoPan: true
//     }).addTo(map);
// })

// // let markerCluster = L.markerClusterGroup();
// // markerCluster.addTo(mymap)

// // function rmgdata(mymap) {
// //     window.addEventListener('DOMContentLoaded', async function () {
// //         let response = await axios.get("../geojson/rmg.geojson");
// //         let rmg = response.data.features[0].geometry.coordinates
// //         // console.log(rmg)
// //         // console.log(response.data);
// //         let rmgLayer = L.geoJson(response.data, {
// //             onEachFeature: function (feature, layer) {
// //                 layer.bindPopup(feature.properties.Description);
// //             }

// //         })
// //            rmgLayer.addTo(mymap)
// //         return rmgLayer;
// //     })
// // }

// // rmgdata(mymap);

// // let group = L.layerGroup();
// // L.marker(rmgdata(mymap)).addTo(group);
// // group.addTo(mymap);

// // let group2 = L.layerGroup();
// // L.circle(rmgdata(mymap), {
// //     color: 'red',
// //     fillColor: "orange",
// //     fillOpacity: 0.5,
// //     radius: 500
// // }).addTo(group2);

// // let group3 = L.layerGroup();
// // L.circle(rmgdata(mymap), {
// //     color: 'red',
// //     fillColor: "green",
// //     fillOpacity: 0.5,
// //     radius: 250
// // }).addTo(group3);



// // let baselayers = {
// //     'Markers': group,
// //     'Circles': group2
// // }
// // let overlays = {
// //     'Green Circle': group3
// // }

// // L.control.layers(baselayers, overlays).addTo(mymap);

// // document.querySelector('#toggle-btn').addEventListener('click', function () {
// //     if (mymap.hasLayer(group2)) {
// //         mymap.removeLayer(group2);
// //     } else {
// //         map.addLayer(group2);
// //     }
// // })

// let map = L.map("map", { fullScreenControl: true, zoomSnap: 0.2 }).setView(
//     [1.36739, 103.83014],
//     11.5
// );

// let mapboxTiles = new L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
// }).addTo(map);

// L.control
//     .scale({ metric: false, imperial: true, position: "bottomright" })
//     .addTo(map);

// const fsControl = L.control.fullscreen();
// map.addControl(fsControl);

// map.on("enterFullscreen", function () { });
// map.on("exitFullscreen", function () { });

// let popupStyle = {
//     maxWidth: "300",
//     closeButton: false,
// };

// let circleMarkerPublic = {
//     color: "#000000",
//     fillColor: "#ff0000",
//     fillOpacity: 1,
//     opacity: 1,
//     radius: 6,
//     weight: 2,
// };

// let circleMarkerPrivate = {
//     color: "#000000",
//     fillColor: "#00ff00",
//     fillOpacity: 1,
//     opacity: 1,
//     radius: 6,
//     weight: 2,
// };

// let circleMarkerOther = {
//     color: "#000000",
//     fillColor: "#0000ff",
//     fillOpacity: 1,
//     opacity: 1,
//     radius: 6,
//     weight: 2,
// };

// let circleMarkerRmg = {
//     color: "#000000",
//     fillColor: "#ff00ff",
//     fillOpacity: 1,
//     opacity: 1,
//     radius: 6,
//     weight: 2,
// };

// function onEachMarker(feature, layer) {
//     let popupContent =
//         '<p class="popup-title">' +
//         feature.properties.name +
//         "</p>" +
//         '<p class="popup-text">Address: ' +
//         feature.properties.address +
//         "</p>" +
//         '<p class="popup-text">Phone: ' +
//         feature.properties.phone +
//         "</p>";

//     layer.bindPopup(popupContent, popupStyle);
// }

// let layerPublicHospitals = L.geoJson(publicHospitals, {
//     onEachFeature: onEachMarker,
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, circleMarkerPublic);
//     },
// }).addTo(map);

// let layerPrivateHospitals = L.geoJson(privateHospitals, {
//     onEachFeature: onEachMarker,
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, circleMarkerPrivate);
//     },
// });

// let layerOtherClinics = L.geoJson(otherClinics, {
//     onEachFeature: onEachMarker,
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, circleMarkerOther);
//     },
// }).addTo(map);

// let layerRmg = L.geoJson(rmg, {
//     onEachFeature: onEachMarker,
//     pointToLayer: function (feature, latlng) {   
//         return L.circleMarker(latlng, circleMarkerRmg);
//     }
// }).addTo(map);

// let baseLayers = {
//     "Public Hospitals": layerPublicHospitals,
//     "Private Hospitals": layerPrivateHospitals,
// };

// let overlays = {
//     "Other Clinics ": layerOtherClinics,
//     "RMG ": layerRmg,
// };

// L.control
//     .layers(baseLayers, overlays, { collapsed: false, position: "bottomleft" })
//     .addTo(map);


// let parentDom = document.getElementById("map");
// const checkbox = parentDom.getElementsByClassName("leafet-control-layers-selector")

// console.log(checkbox);


// let otherClinics = new L.LayerGroup();
// let rmg = new L.LayerGroup();
// let privateHospitals = new L.LayerGroup();
// let publicHospitals = new L.LayerGroup();

// let map = L.map('map', {
//     center: [1.29, 103.85],
//     minZoom: 8,
//     zoom: 9,
// });

// // Start of custom icon

// const otherClinicLogo = L.icon({
//     iconUrl: '../assets/otherclinicLogo.png',
//     iconSize: [50, 30],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// });
// const rmglogo = L.icon({
//     iconUrl: '../assets/rLogo.png',
//     iconSize: [50, 30],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// });
// const publicHospitalLogo = L.icon({
//     iconUrl: '../assets/publicHospitalLogo.png',
//     iconSize: [50, 30],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// });
// const privateHospitalLogo = L.icon({
//     iconUrl: '../assets/privateHospitalLogo.png',
//     iconSize: [50, 30],
//     iconAnchor: [0, 0],
//     popupAnchor: [0, 0]
// })

// // Setting up base map layer with open street map

// let maplink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
// let maplayer = L.tileLayer(
//     'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//     attribution: 'Map data &copy; ' + maplink,
//     maxZoom: 19
// }).addTo(map);
// let maplink2 = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
// let maplayer2 = L.tileLayer(
//     'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; ' + maplink2,
//     maxZoom: 19
// }).addTo(map);

// let style = {
//     radius: 10,
//     fillOpacity: 1,
//     stroke: false,
//     weight: 1,
//     opacity: 1,
//     fill: true,
//     clickable: true
// }

// jQuery.getJson('../geojson/data.geojson', function (geojsonData) {
//     var categories = {},
//         Type;

//     let allPoints = L.geoJson(geojsonData, {
//         pointToLayer: function (feature, latlng) {
//             switch (feature.properties.Type) {
//                 case 'Other Clinic': return L.marker(latlng, { icon: otherClinicLogo }).addTo(Other_Clinic);
//                 case 'rmg': return L.marker(latlng, { icon: rmglogo }).addTo(Rmg);
//                 case 'Private Hospital': return L.marker(latlng, { icon: privateHospitalLogo }).addTo(Private_Hospital);
//                 case 'Public Hospital': return L.marker(latlng, { icon: publicHospitalLogo }).addTo(Public_Hospital);
//             }
//         },

//         onEachFeature: function (feature, layer) {
//             layer.bindPopup(feature.properties.Name);
//             Type = feature.properties.Type;
//             if (typeof categories[Type] === 'undefined') {
//                 categories[Type] = [];
//             }
//             categories[Type].push(layer);
//         }
//     });
//     markerCluster.addLayer(Other_Clinic);
//     markerCluster.addLayer(Rmg);
//     markerCluster.addLayer(Private_Hospital);
//     markerCluster.addLayer(Public_Hospital);


//     let groupedOverlays = {
//         "Hospitals": {
//             "Private": Private_Hospital,
//             "Public": Public_Hospital
//         },
//         "Random": {
//             "Rmg": Rmg,
//             "Other_Clinic": Other_Clinic
//         }
//     };

//     let options = {
//         exclusiveGroups: ["Hospitals"],
//     };

//     // doing the light and dark layer for control
//     let baseLayers = {
//         "Light": maplayer,
//         "Dark": maplayer2
//     };

//     let overlay = {
//         "All Hospital": markerCluster
//     },
//         TypeName,
//         TypeArray,
//         TypeLG

//     for (TypeName in categories) {
//         TypeArray = categories[TypeName];
//         TypeLG = L.LayerGroup(TypeArray);
//         TypeLG.TypeName = TypeName;
//         overlay[TypeName] = TypeLG;
//     }

//     // creating empty layergroup to be used to emulate add/remove all

//     let layerControl = L.layerControl.groupedLayers(baseLayers, groupedOverlays, options, overlay, {
//         collapsed: false
//     });
//     map.addControl(layerControl);
// });

// Define map
var parentDOM = document.getElementById("map");
const checkbox = parentDOM.getElementsByClassName("leaflet-control-layers-selector")

console.log(checkbox);



//var markerCluster = L.markerClusterGroup();
var markerCluster = L.markerClusterGroup();



var Other_Clinic = new L.LayerGroup();
var Rmg = new L.LayerGroup();
var Private_Hospital = new L.LayerGroup();
var Public_Hospital = new L.LayerGroup();

var map = L.map('map', {
    center: [1.29, 103.85],
    minZoom: 8,
    zoom: 9,
    //layers: [groups.LayerGroups.Private_Hospital]
});




var otherclinicLogo = L.icon({
    iconUrl: '../assets/otherclinicLogo.png',
    iconSize: [50, 30],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
});
var rmglogo = L.icon({
    iconUrl: '../assets/rLogo.png',
    iconSize: [50, 30],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
});
var publicHospitalLogo = L.icon({
    iconUrl: '../assets/publicHospitalLogo.png',
    iconSize: [50, 30],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
})
var privateHospitalLogo = L.icon({
    iconUrl: '../assets/privateHospitalLogo.png',
    iconSize: [50, 30],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0]
})
//// DEFINE BASE MAP LAYERS
//
// Open StreetMap
var osmlink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmLayer = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; ' + osmlink,
    maxZoom: 19
}).addTo(map);
var osmlink1 =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmLayer1 = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; ' + osmlink1,
    maxZoom: 19
}).addTo(map);

var myStyle = {
    radius: 10,
    fillOpacity: 1,
    stroke: false,
    weight: 1,
    opacity: 1,
    fill: true,
    clickable: true
};

jQuery.getJSON('../geojson/data.geojson', function (geojsonData) {

    var categories = {},
        Type;





    var allPoints = L.geoJson(geojsonData, {
        pointToLayer: function (feature, latlng) {
            switch (feature.properties.Type) {
                case 'Other Clinic': return L.marker(latlng, { icon: otherclinicLogo }).addTo(Other_Clinic);
                case 'Rmg': return L.marker(latlng, { icon: rmglogo }).addTo(Rmg);
                case 'Private Hospital': return L.marker(latlng, { icon: privateHospitalLogo }).addTo(Private_Hospital);
                case 'Public Hospital': return L.marker(latlng, { icon: publicHospitalLogo }).addTo(Public_Hospital);
            }
        },





        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Name);
            Type = feature.properties.Type;
            // Initialize the category array if not already set.
            if (typeof categories[Type] === "undefined") {
                categories[Type] = [];
            }
            categories[Type].push(layer);
        }
    });
    markerCluster.addLayer(Other_Clinic);
    markerCluster.addLayer(Rmg);
    markerCluster.addLayer(Private_Hospital);
    markerCluster.addLayer(Public_Hospital);



    // Overlay layers are grouped
    var groupedOverlays = {
        "Hospitals": {
            "Private": Private_Hospital,
            "Public": Public_Hospital
        },
        "Random": {
            "Rmg": Rmg,
            "Other_Clinic": Other_Clinic
        }
    };

    var options = {
        // Make the "Landmarks" group exclusive (use radio inputs)
        exclusiveGroups: ["Hospitals"],
        // Show a checkbox next to non-exclusive group labels for toggling all

    };

    // Use the custom grouped layer control, not "L.control.layers"



    //// Map Control 
    // Basemaps for control
    var baseLayers = {
        "Light": osmLayer1,
        "Dark": osmLayer
    };

    // Feature layers for control	

    var overlaysObj = {
        "All Hospital": markerCluster
    },
        TypeName,
        TypeArray,
        TypeLG



    for (TypeName in categories) {
        TypeArray = categories[TypeName];
        TypeLG = L.layerGroup(TypeArray);//.addTo(map);
        TypeLG.TypeName = TypeName;
        overlaysObj[TypeName] = TypeLG;
    }



    // Create an empty LayerGroup that will be used to emulate adding / removing all categories.
    /*var allPointsLG = L.layerGroup();
    overlaysObj["All Points"] = allPointsLG;*/

    var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, options, overlaysObj, {
        collapsed: false
    });
    map.addControl(layerControl);
});