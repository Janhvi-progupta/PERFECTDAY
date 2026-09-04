```javascript
// ===============================
// STAR BUTTON
// ===============================

let starButton = document.getElementById("starButton");

if (starButton) {

    starButton.onclick = function() {

        window.location.href = "relief.html";

    };

}


// ===============================
// PERFECT DAY BUTTON
// ===============================

let perfectButton =
    document.getElementById("perfectButton");

let donationForm =
    document.getElementById("donationForm");


if (perfectButton) {

    perfectButton.onclick = function() {

        donationForm.style.display = "block";

        perfectButton.style.display = "none";

    };

}


// ===============================
// SUBMIT BUTTON
// ===============================

let submitButton =
    document.getElementById("submitButton");

let amount =
    document.getElementById("amount");

let message =
    document.getElementById("message");

let thankYou =
    document.getElementById("thankYou");


if (submitButton) {

    submitButton.onclick = function() {

        if (amount.value === "") {

            alert("Please enter a donation amount.");

            return;
        }


        if (message.value === "") {

            alert("Please write a small message.");

            return;
        }


        donationForm.style.display = "none";

        thankYou.style.display = "block";

    };

}
```


