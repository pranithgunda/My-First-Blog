const backButton = document.getElementById('back');

// navigate back to form on click of back button
backButton.addEventListener('click',function (event) {
    event.preventDefault();
    location.href = "index.html";
});

const toggleButton = document.getElementById('darklightmode-toggle');
console.log(toggleButton);