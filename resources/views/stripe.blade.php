<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel 11 Stripe Payment Gateway Integration Example</title>
    @vite('resources/css/app.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <style type="text/css">
        #card-element {
            height: 50px;
            padding-top: 16px;
        }
    </style>
</head>

<body class="bg-white">
    <nav class="">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex flex-col text-2xl font-bold">
                <a href="{{ route('welcome') }}" class="flex items-center">
                    <img src="./Logo/Logo.png" alt="logo" class="h-20 w-20 mr-2">
                    <span class="text-2xl font-bold text-blue-600 hover:text-gray-200">ScaraPlay</span>
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto max-w-lg bg-white p-8 rounded-lg shadow-xl mt-12 mb-8">
        <h3 class="text-3xl font-semibold text-center text-gray-800 mb-6">Stripe Payment Gateway Integration</h3>

        <div class="mb-6">
            <p class="text-lg"><strong>Size :</strong> {{ $productName }}</p>
            <p class="text-lg"><strong>Details :</strong> {{ $details }}</p>
            <p class="text-lg"><strong>Price :</strong> Rp {{ number_format($price, 0, ',', '.') }}</p>
        </div>

        @session('success')
            <div class="alert alert-success bg-green-100 text-green-800 p-3 mb-4 rounded">
                {{ $value }}
            </div>
        @endsession

        <form id="checkout-form" method="post" action="{{ route('stripe.post') }}">
            @csrf

            <!-- Hidden input for amount -->
            <input type="hidden" name="amount" id="amount" value="{{ $price }}">

            <input type="hidden" name="stripeToken" id="stripe-token-id">

            <div id="card-element" class="form-control mb-6 border border-gray-300 rounded-md p-4"></div>

            <button id="pay-btn"
                class="w-full py-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none"
                type="button" onclick="createToken()">
                <span>PAY</span>
                <span id="price-display" class="block text-lg mt-2">Rp {{ number_format($price, 0, ',', '.') }}</span>
            </button>
        </form>
    </div>

</body>

<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
    var stripe = Stripe('{{ env('STRIPE_KEY') }}')
    var elements = stripe.elements();
    var cardElement = elements.create('card');
    cardElement.mount('#card-element');

    /*------------------------------------------
    --------------------------------------------
    Create Token Code
    --------------------------------------------
    --------------------------------------------*/
    function createToken() {
        document.getElementById("pay-btn").disabled = true;
        stripe.createToken(cardElement).then(function(result) {
            if (typeof result.error != 'undefined') {
                document.getElementById("pay-btn").disabled = false;
                alert(result.error.message);
            }
            /* creating token success */
            if (typeof result.token != 'undefined') {
                document.getElementById("stripe-token-id").value = result.token.id;
                document.getElementById('checkout-form').submit();
            }
        });
    }
</script>

</html>
