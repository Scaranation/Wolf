<!DOCTYPE html>
<html lang="en">
<head>
    <title>Google Maps</title>
    <script src="https://maps.googleapis.com/maps/api/js?key={{ config('services.google_maps.key') }}"></script>
    <script>
        function initMap() {
            const location = { lat: -7.350272172250071, lng: 112.7884812662679 }; // Contoh koordinat Jakarta
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: location,
            });
            new google.maps.Marker({
                position: location,
                map: map,
            });
        }
    </script>
</head>
<body onload="initMap()">
    <div id="map" style="height: 500px; width: 100%;"></div>
</body>
</html>
