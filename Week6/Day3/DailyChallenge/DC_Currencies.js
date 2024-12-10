const API_KEY = 'ff5df091db3875c530445c5c';
const API_BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');
const resultDiv = document.getElementById('result');

// To Fetch supported currencies
async function fetchCurrencies() {
    try {
        const response = await fetch(API_BASE_URL);
        const data = await response.json();
        
        // API response for debugging
        console.log('API Response:', data);

        if (!data || !data.conversion_rates) {
            throw new Error('Failed to load currencies or rates not available');
        }

        const currencies = Object.keys(data.conversion_rates);
        console.log(`Currencies loaded: ${currencies.length}`); 

        // The select dropdowns with currencies
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrencySelect.appendChild(option2);
        });

        // The default selections
        fromCurrencySelect.value = 'USD';
        toCurrencySelect.value = 'EUR';

    } catch (error) {
        console.error(error);
        resultDiv.textContent = 'Error loading currencies. Please try again later.';
    }
}

// To Fetch conversion rate
async function fetchConversionRate(fromCurrency, toCurrency, amount) {
    try {
        const response = await fetch(API_BASE_URL);
        const data = await response.json();

        if (!data || !data.conversion_rates) {
            throw new Error('Conversion rate not available');
        }

        const fromRate = data.conversion_rates[fromCurrency];
        const toRate = data.conversion_rates[toCurrency];

        if (fromRate && toRate) {
            return (amount * toRate) / fromRate;
        } else {
            throw new Error('Invalid currency codes');
        }
    } catch (error) {
        throw new Error('Error fetching conversion rate');
    }
}

// Handling the conversion button click
convertBtn.addEventListener('click', async () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    try {
        const convertedAmount = await fetchConversionRate(fromCurrency, toCurrency, amount);
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        resultDiv.textContent = error.message || 'Error fetching conversion rate.';
    }
});

// Handling the switching currencies
switchBtn.addEventListener('click', () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fromCurrencySelect.value = toCurrency;
    toCurrencySelect.value = fromCurrency;
});

fetchCurrencies();




