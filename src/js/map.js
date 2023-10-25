// https://stackoverflow.com/a/52783932

var map = L.map('map').setView([49.2595092, 3.5204334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var startmarkers = [
    ['London', 51.5097076, -0.1327514, 1, './London/index.html', 'UK'],
];

mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
}).addTo(map);

let arrayOfMarkers = [];
for (let i = 0; i < startmarkers.length; i++) {
    marker = new L.marker([startmarkers[i][1], startmarkers[i][2]])
        .bindPopup('<a href=\"' + startmarkers[i][4] + '\">' + startmarkers[i][0] + '<br>' + startmarkers[i][5])
        .addTo(map);
    arrayOfMarkers.push([startmarkers[i][1], startmarkers[i][2]])
}
console.log(arrayOfMarkers)

/* var arrayOfMarkers = [
    [48.8581817, 2.3454923],
    [51.5097076, -0.1327514],
    [52.3723963, 4.8954506],
    [50.8455315, 4.3554069],
] */
var bounds = new L.LatLngBounds(arrayOfMarkers);
map.fitBounds(bounds);