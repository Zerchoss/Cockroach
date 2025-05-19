surname = document.querySelector("#surname").value;
name1 = document.querySelector("#name").value;
city = document.querySelector("#City").value;
house = document.querySelector("#House").value;
"https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"





    // Ініціалізація EmailJS
    emailjs.init('28UkpXf41z9b-IH7P');

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_gptd0vg', 'template_zqidkp9', this)
        .then(function() {
            alert('Санітарів відправлено!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Сталася помилка. Спробуйте ще раз.');
            console.error('Помилка:', error);
        });
    });
