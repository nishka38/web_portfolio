const typingEffect = document.getElementById('typing-effect');
const toggleDarkMode = document.getElementById('toggle-dark-mode');

let i = 0;
let text = 'Hello, my name is TANISHKA RUSTAGI. I am a web developer.';

function typing() {
    if (i < text.length) {
        typingEffect.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
const quoteElement = document.getElementById('quote');
const generateQuoteButton = document.getElementById('generate-quote');

const quotes = [
  'Believe you can and you\'re halfway there. - Theodore Roosevelt',
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
];

generateQuoteButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
});

const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === '') {
    errorMessage.innerText = 'Please enter your name.';
    return;
  }

  if (email === '') {
    errorMessage.innerText = 'Please enter your email.';
    return;
  }

  if (!validateEmail(email)) {
    errorMessage.innerText = 'Please enter a valid email.';
    return;
  }

});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
