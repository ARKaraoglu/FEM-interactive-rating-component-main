/* RATING STATE START */
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");

const ratingBtn1 = document.querySelector(".rating-1");
const ratingBtn2 = document.querySelector(".rating-2");
const ratingBtn3 = document.querySelector(".rating-3");
const ratingBtn4 = document.querySelector(".rating-4");
const ratingBtn5 = document.querySelector(".rating-5");

const submitBtn = document.querySelector(".submit-btn");

const form = document.querySelector("#form");

const ratingValue = document.querySelector(".rating-value");

ratingBtn1.addEventListener("click", function () {
    ratingBtn1.classList.toggle("rating-btn");
    ratingBtn1.classList.toggle("rating-btn-clicked");
    if (ratingBtn2.classList.contains("rating-btn-clicked")) {
        ratingBtn2.classList.toggle("rating-btn");
        ratingBtn2.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn3.classList.contains("rating-btn-clicked")) {
        ratingBtn3.classList.toggle("rating-btn");
        ratingBtn3.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn4.classList.contains("rating-btn-clicked")) {
        ratingBtn4.classList.toggle("rating-btn");
        ratingBtn4.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn5.classList.contains("rating-btn-clicked")) {
        ratingBtn5.classList.toggle("rating-btn");
        ratingBtn5.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn1.classList.contains("rating-btn-clicked")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    } else {
        submitBtn.classList.remove("submit-btn-enabled");
        submitBtn.classList.add("submit-btn-disabled");
    }
});

ratingBtn2.addEventListener("click", function () {
    ratingBtn2.classList.toggle("rating-btn");
    ratingBtn2.classList.toggle("rating-btn-clicked");

    if (ratingBtn1.classList.contains("rating-btn-clicked")) {
        ratingBtn1.classList.toggle("rating-btn");
        ratingBtn1.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn3.classList.contains("rating-btn-clicked")) {
        ratingBtn3.classList.toggle("rating-btn");
        ratingBtn3.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn4.classList.contains("rating-btn-clicked")) {
        ratingBtn4.classList.toggle("rating-btn");
        ratingBtn4.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn5.classList.contains("rating-btn-clicked")) {
        ratingBtn5.classList.toggle("rating-btn");
        ratingBtn5.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn2.classList.contains("rating-btn-clicked")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    } else {
        submitBtn.classList.remove("submit-btn-enabled");
        submitBtn.classList.add("submit-btn-disabled");
    }
});

ratingBtn3.addEventListener("click", function () {
    ratingBtn3.classList.toggle("rating-btn");
    ratingBtn3.classList.toggle("rating-btn-clicked");

    if (ratingBtn1.classList.contains("rating-btn-clicked")) {
        ratingBtn1.classList.toggle("rating-btn");
        ratingBtn1.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn2.classList.contains("rating-btn-clicked")) {
        ratingBtn2.classList.toggle("rating-btn");
        ratingBtn2.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn4.classList.contains("rating-btn-clicked")) {
        ratingBtn4.classList.toggle("rating-btn");
        ratingBtn4.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn5.classList.contains("rating-btn-clicked")) {
        ratingBtn5.classList.toggle("rating-btn");
        ratingBtn5.classList.toggle("rating-btn-clicked");
    }
    if (!submitBtn.classList.contains("submit-btn-enabled")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    }
    if (ratingBtn3.classList.contains("rating-btn-clicked")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    } else {
        submitBtn.classList.remove("submit-btn-enabled");
        submitBtn.classList.add("submit-btn-disabled");
    }
});

ratingBtn4.addEventListener("click", function () {
    ratingBtn4.classList.toggle("rating-btn");
    ratingBtn4.classList.toggle("rating-btn-clicked");

    if (ratingBtn1.classList.contains("rating-btn-clicked")) {
        ratingBtn1.classList.toggle("rating-btn");
        ratingBtn1.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn2.classList.contains("rating-btn-clicked")) {
        ratingBtn2.classList.toggle("rating-btn");
        ratingBtn2.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn3.classList.contains("rating-btn-clicked")) {
        ratingBtn3.classList.toggle("rating-btn");
        ratingBtn3.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn5.classList.contains("rating-btn-clicked")) {
        ratingBtn5.classList.toggle("rating-btn");
        ratingBtn5.classList.toggle("rating-btn-clicked");
    }
    if (!submitBtn.classList.contains("submit-btn-enabled")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    }
    if (ratingBtn4.classList.contains("rating-btn-clicked")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    } else {
        submitBtn.classList.remove("submit-btn-enabled");
        submitBtn.classList.add("submit-btn-disabled");
    }
});

ratingBtn5.addEventListener("click", function () {
    ratingBtn5.classList.toggle("rating-btn");
    ratingBtn5.classList.toggle("rating-btn-clicked");

    if (ratingBtn1.classList.contains("rating-btn-clicked")) {
        ratingBtn1.classList.toggle("rating-btn");
        ratingBtn1.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn2.classList.contains("rating-btn-clicked")) {
        ratingBtn2.classList.toggle("rating-btn");
        ratingBtn2.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn3.classList.contains("rating-btn-clicked")) {
        ratingBtn3.classList.toggle("rating-btn");
        ratingBtn3.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn4.classList.contains("rating-btn-clicked")) {
        ratingBtn4.classList.toggle("rating-btn");
        ratingBtn4.classList.toggle("rating-btn-clicked");
    }
    if (ratingBtn5.classList.contains("rating-btn-clicked")) {
        submitBtn.classList.add("submit-btn-enabled");
        submitBtn.classList.remove("submit-btn-disabled");
    } else {
        submitBtn.classList.remove("submit-btn-enabled");
        submitBtn.classList.add("submit-btn-disabled");
    }
});

/* RATING STATE END */

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (ratingBtn1.classList.contains("rating-btn-clicked")) {
        ratingValue.textContent = "1";
    }
    if (ratingBtn2.classList.contains("rating-btn-clicked")) {
        ratingValue.textContent = "2";
    }
    if (ratingBtn3.classList.contains("rating-btn-clicked")) {
        ratingValue.textContent = "3";
    }
    if (ratingBtn4.classList.contains("rating-btn-clicked")) {
        ratingValue.textContent = "4";
    }
    if (ratingBtn5.classList.contains("rating-btn-clicked")) {
        ratingValue.textContent = "5";
    }

    ratingContainer.classList.add("content-hidden");
    thankYouContainer.classList.remove("content-hidden");
});
