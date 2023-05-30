// Untuk button saat di klik form login akan muncul
document.getElementById('loginButton').addEventListener('click', function () {
  var loginForm = document.getElementById('loginForm');
  loginForm.classList.toggle('hidden');
});
// untuk button saat di klik form register akan muncul
document.getElementById('regis').addEventListener('click', function () {
  var loginForm = document.getElementById('registrasi');
  loginForm.classList.toggle('missing');
});
