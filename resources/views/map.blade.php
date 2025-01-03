<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lokasi Google Maps</title>
    @vite('resources/css/app.css')
    <script src="https://maps.googleapis.com/maps/api/js?key={{ config('services.google_maps.key') }}"></script>
    <script>
        function initMap() {
            const location = { lat: -7.350272172250071, lng: 112.7884812662679 }; // Contoh koordinat Surabaya
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
<body onload="initMap()" class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-blue-600 text-white py-4 shadow-md">
        <div class="container mx-auto px-4">
            <h1 class="text-lg md:text-2xl font-semibold">Peta Lokasi</h1>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-6 flex-grow">
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-4">Lokasi Anda</h2>
            <p class="text-gray-700 mb-6">
                Berikut adalah lokasi pada peta berdasarkan koordinat yang telah ditentukan. Anda dapat menyesuaikan lokasi sesuai kebutuhan.
            </p>
            <div id="map" class="w-full h-96 rounded-lg shadow-md"></div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; 2025 Lokasi Peta. Semua hak dilindungi.</p>
        </div>
    </footer>
</body>
</html>
