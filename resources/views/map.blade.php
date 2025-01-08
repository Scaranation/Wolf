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
    <nav class="">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex flex-col text-2xl font-bold">
                <a href="{{ route('welcome') }}" class="flex items-center">
                    <img src="./Logo/Logo.png" alt="logo" class="h-20 w-20 mr-2">
                    <span class="text-2xl font-bold text-blue-600">ScaraPlay</span>
                </a>
            </div>
        </div>
    </nav>

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
