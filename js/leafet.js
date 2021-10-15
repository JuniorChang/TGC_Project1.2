
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



// Define the map
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