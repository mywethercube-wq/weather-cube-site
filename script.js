const weather = {
  sunny: ['Sunny skies', 'The Capitol glows beneath a bright, clear Madison sky.'],
  rain: ['Rainy day', 'Soft clouds and rainfall bring a different mood to the skyline.'],
  snow: ['Snowfall', 'A winter-inspired scene turns the city into a miniature snow globe.'],
  storm: ['Thunderstorm', 'Lightning flashes over the Capitol as the sky turns electric.']
};
const demo = document.getElementById('weatherDemo');
document.querySelectorAll('[data-scene]').forEach(button => {
  button.addEventListener('click', () => {
    const scene = button.dataset.scene;
    demo.dataset.weather = scene;
    document.getElementById('weatherTitle').textContent = weather[scene][0];
    document.getElementById('weatherDescription').textContent = weather[scene][1];
    document.querySelectorAll('[data-scene]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  });
});
document.getElementById('year').textContent = new Date().getFullYear();

// SETUP REQUIRED: Replace the empty value with the email address that should receive waitlist entries.
// FormSubmit will request email verification on the first submission.
// Do NOT use FormSubmit for sensitive information. This is for email signup only.
const WAITLIST_RECEIVER_EMAIL = '';
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!WAITLIST_RECEIVER_EMAIL) {
    signupMessage.textContent = 'The waitlist is not connected yet. Please check back soon.';
    return;
  }
  const email = document.getElementById('email').value.trim();
  if (!email || !document.getElementById('email').checkValidity()) return;
  const button = signupForm.querySelector('button');
  button.disabled = true;
  button.textContent = 'Sending…';
  try {
    const response = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(WAITLIST_RECEIVER_EMAIL), {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({email, _subject:'New Weather Cube launch signup', _captcha:'false'})
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw Error('Submission failed');
    signupMessage.textContent = 'Thanks for your interest! Please watch your inbox for future updates.';
    signupForm.reset();
  } catch {
    signupMessage.textContent = 'We could not submit your email. Please try again later.';
  } finally {
    button.disabled = false;
    button.textContent = 'Join the list ↗';
  }
});
