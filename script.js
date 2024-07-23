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
    { symbol: '∂', name: 'partial derivative' },
    { symbol: '±', name: 'plus minus' },
    { symbol: '÷', name: 'division' },
    { symbol: '≤', name: 'less than or equal to' },
    { symbol: '≥', name: 'greater than or equal to' },
    { symbol: '∧', name: 'logical and' }
];

let currentIndex = 0;
let score = 0;

document.getElementById('submit-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    const currentSymbol = symbols[currentIndex];

    if (userInput === currentSymbol.name) {
        document.getElementById('result').innerText = 'Correct!';
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
        currentIndex++;
        if (currentIndex < symbols.length) {
            setTimeout(() => {
                document.getElementById('symbol').innerText = symbols[currentIndex].symbol;
                document.getElementById('user-input').value = '';
                document.getElementById('result').innerText = '';
            }, 1000);
        } else {
            setTimeout(() => {
                if (score < 10) {
                    document.getElementById('result').innerText = 'You got pretty decent maths!';
                } else {
                    document.getElementById('result').innerText = 'Bow down to the math king!';
                }
                document.getElementById('symbol').innerText = '';
                document.getElementById('user-input').style.display = 'none';
                document.getElementById('submit-btn').style.display = 'none';
            }, 1000);
        }
    } else {
        document.getElementById('result').innerText = 'Try again!';
    }
});
