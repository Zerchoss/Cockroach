// EmailJS ініціалізація
emailjs.init('28UkpXf41z9b-IH7P');

// Відправка даних з форми
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_gptd0vg', 'template_zqidkp9', this)
    .then(function () {
      alert('Санітарів відправлено!');
      document.getElementById('contactForm').reset();
    }, function (error) {
      alert('Сталася помилка. Спробуйте ще раз.');
      console.error('Помилка:', error);
    });
});

// Відправка відгуків
let button = document.querySelector("#send-button");

button.addEventListener("click", function () {
  let name2 = document.querySelector("#name2").value;
  let text1 = document.querySelector("#text1").value;

  if (name2 === "" || text1 === "") {
    alert("Будь ласка, заповни всі поля!");
    return;
  }

  let comment = `<div class='comment'><b>${name2}:</b> ${text1}</div>`;
  document.querySelector("#result").innerHTML += comment;

  document.querySelector("#name2").value = "";
  document.querySelector("#text1").value = "";
});
