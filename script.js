const symbols = [
    { symbol: 'π', name: 'pi' },
    { symbol: '√', name: 'square root' },
    { symbol: '∑', name: 'summation' },
    { symbol: '∫', name: 'integral' },
    { symbol: '∆', name: 'delta' },
    { symbol: '∞', name: 'infinity' },
    { symbol: '≈', name: 'approximately equal' },
    { symbol: '∇', name: 'nabla' },
    { symbol: '⊥', name: 'perpendicular' },
    { symbol: '∂', name: 'partial derivative' }
];

let currentIndex = 0;

document.getElementById('submit-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    const currentSymbol = symbols[currentIndex];

    if (userInput === currentSymbol.name) {
        document.getElementById('result').innerText = 'Correct!';
        currentIndex++;
        if (currentIndex < symbols.length) {
            setTimeout(() => {
                document.getElementById('symbol').innerText = symbols[currentIndex].symbol;
                document.getElementById('user-input').value = '';
                document.getElementById('result').innerText = '';
            }, 1000);
        } else {
            document.getElementById('result').innerText = 'You have completed the test!';
        }
    } else {
        document.getElementById('result').innerText = 'Try again!';
    }
});
