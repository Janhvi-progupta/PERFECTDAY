

let starButton = document.getElementById("starButton");

if (starButton) {

    starButton.onclick = function() {

        window.location.href = "relief.html";

    };

}




let perfectButton = document.getElementById("perfectButton");

let thankYou = document.getElementById("thankYou");

if (perfectButton) {

    perfectButton.onclick = function() {

        thankYou.style.display = "block";

        perfectButton.style.display = "none";

    };

}