var map = L.map('map').setView([50.900760785285, 14.62497761563909], 18);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.900760785285, 14.62497761563909], {
    title: "Vzdělávací středisko VDF",
}).addTo(map);

function menu(){
    document.getElementById("navMenu").classList.toggle("menuOpened");
    document.getElementById("menu").classList.toggle("menuTurned");
}