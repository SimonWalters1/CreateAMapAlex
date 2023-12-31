// https://stackoverflow.com/a/52783932

var map = L.map('map').setView([49.2595092, 3.5204334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var startmarkers = [
    ['Las igunas', 54.972150, -1.611960, 1, './venues/lasigunas.html', 'UK'],
    ['Man vs Food', 54.977890, -1.445310, 1, './venues/manvsfood.html', 'UK'],
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

var bounds = new L.LatLngBounds(arrayOfMarkers);
map.fitBounds(bounds);