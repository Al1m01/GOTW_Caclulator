document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const health = parseInt(document.getElementById('health').value);
        const int = parseInt(document.getElementById('int').value);

        // Calculate HP and MP based on provided values
        const hp = health * 50;
        const mp = int;

        // Display the result
        resultDiv.textContent = `HP: ${hp}, MP: ${mp}`;
    });
});
