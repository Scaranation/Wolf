<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stripe Payment Gateway</title>
    @vite('resources/css/app.css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <style>
        #card-element {
            height: 50px;
            padding-top: 12px;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
        }

        #card-element:focus {
            outline: 2px solid #4f46e5;
            border-color: #4f46e5;
        }
    </style>
</head>

<body class="bg-gray-50">
    <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="{{ route('welcome') }}" class="flex items-center">
                <img src="./Logo/Logo.png" alt="logo" class="h-16 w-16 mr-2">
                <span class="text-xl font-bold text-blue-600 hover:text-blue-800">ScaraPlay</span>
            </a>
        </div>
    </nav>

    <main class="container mx-auto max-w-lg mt-10">
        <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Complete Your Payment</h2>
            <p class="text-center text-gray-500 mb-6">Secure payment powered by Stripe</p>

            <div class="border-t border-gray-200 pt-4 mb-6">
                <p class="text-lg font-medium text-gray-700 text-center mb-4">Payment Details</p>
                <div class="flex justify-between text-lg font-medium text-gray-700 mb-1">
                    <span><strong>Size:</strong></span>
                    <span>{{ $productName }}</span>
                </div>
                <div class="flex justify-between text-lg font-medium text-gray-700 mb-1">
                    <span><strong>Details:</strong></span>
                    <span>{{ $details }}</span>
                </div>
                <div class="flex justify-between text-lg font-medium text-gray-700">
                    <span><strong>Price:</strong></span>
                    <span>Rp {{ number_format($price, 0, ',', '.') }}</span>
                </div>
            </div>

            @if (session('success'))
                <div class="bg-green-100 text-green-800 p-4 rounded mb-6">
                    {{ session('success') }}
                </div>
            @endif

            <form id="checkout-form" method="post" action="{{ route('stripe.post') }}">
                @csrf
                <input type="hidden" name="amount" id="amount" value="{{ $price }}">
                <input type="hidden" name="stripeToken" id="stripe-token-id">

                <div id="card-element" class="mb-6"></div>

                <button id="pay-btn" type="button" onclick="createToken()"
                    class="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
                    Pay Rp {{ number_format($price, 0, ',', '.') }}
                </button>
            </form>
        </div>
    </main>

    <footer class="mt-12 text-center text-gray-600">
        <p>&copy; {{ date('Y') }} ScaraPlay. All Rights Reserved.</p>
    </footer>

    <script src="https://js.stripe.com/v3/"></script>
    <script>
        var stripe = Stripe('{{ env('STRIPE_KEY') }}');
        var elements = stripe.elements();
        var cardElement = elements.create('card', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': {
                        color: '#a0aec0',
                    },
                },
            }
        });

        cardElement.mount('#card-element');

        function createToken() {
            document.getElementById("pay-btn").disabled = true;
            stripe.createToken(cardElement).then(function(result) {
                if (result.error) {
                    alert(result.error.message);
                    document.getElementById("pay-btn").disabled = false;
                } else {
                    document.getElementById("stripe-token-id").value = result.token.id;
                    document.getElementById("checkout-form").submit();
                }
            });
        }
    </script>
</body>

</html>
