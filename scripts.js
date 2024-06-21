document.addEventListener("DOMContentLoaded", function () {
    initializeMap();
});

let mapInitialized = false;
let map;

function initializeMap() {
    if (mapInitialized) {
        map.invalidateSize();
        return;
    }

    map = L.map("map").setView([5.0271, -73.5984], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var regions = [
        {
            name: "Parque Natural Chicaque",
            coordinates: [4.6782, -74.3285],
            info: "Una reserva natural con gran biodiversidad, bosques de niebla y numerosas especies de flora y fauna.",
            image: "{{ url_for('static', filename='images/Chicaque.jpg') }}"
        },
        {
            name: "Reserva Natural El Encenillo",
            coordinates: [4.8508, -73.9904],
            info: "Un ecosistema de páramo con especies endémicas y en peligro de extinción, así como una rica biodiversidad de plantas.",
            image: "{{ url_for('static', filename='images/Encenillo.jpg') }}"
        },
        {
            name: "Parque Nacional Natural Sumapaz",
            coordinates: [4.2607, -74.1247],
            info: "El páramo más grande del mundo, hogar de numerosas especies de flora y fauna únicas.",
            image: "{{ url_for('static', filename='images/Sumapaz.jpg') }}"
        },
        {
            name: "Laguna de Guatavita",
            coordinates: [4.9234, -73.7519],
            info: "Un sitio sagrado indígena con una rica historia y un ecosistema lacustre diverso.",
            image: "{{ url_for('static', filename='images/Guatavita.jpg') }}"
        },
        {
            name: "Santuario de Fauna y Flora Iguaque",
            coordinates: [5.696, -73.4322],
            info: "Un santuario con una amplia variedad de flora y fauna, incluyendo ecosistemas de páramo y bosques andinos.",
            image: "{{ url_for('static', filename='images/Iguaque.jpg') }}"
        },
        {
            name: "Parque Nacional Natural El Cocuy",
            coordinates: [6.4062, -72.4162],
            info: "Una de las reservas naturales más importantes del país, con glaciares, páramos y una gran diversidad biológica.",
            image: "{{ url_for('static', filename='images/Cocuy.jpg') }}"
        },
        {
            name: "Laguna de Tota",
            coordinates: [5.5596, -72.888],
            info: "El lago más grande de Colombia, con un ecosistema acuático diverso y zonas circundantes de gran biodiversidad.",
            image: "{{ url_for('static', filename='images/Tota.jpg') }}"
        },
        {
            name: "Parque Natural Regional Serranía de las Quinchas",
            coordinates: [5.45, -74.34],
            info: "Una reserva natural con selvas húmedas tropicales y una gran variedad de especies de flora y fauna.",
            image: "{{ url_for('static', filename='images/Quinchas.jpg') }}"
        }
    ];

    regions.forEach(function (region) {
        var popupContent = "<b>" + region.name + "</b><br>" + region.info + "<br><img src='" + region.image + "' alt='" + region.name + "' style='width:100%;height:auto;'>";
        var marker = L.marker(region.coordinates).addTo(map);
        marker.bindPopup(popupContent);
    });

    mapInitialized = true;
}
