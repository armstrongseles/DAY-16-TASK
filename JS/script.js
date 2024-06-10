document.addEventListener("DOMContentLoaded", function () {
    var countdownElement = document.getElementById("countdown");

    setTimeout(function () {
        countdownElement.textContent = "10";
        setTimeout(function () {
            countdownElement.textContent = "9";
            setTimeout(function () {
                countdownElement.textContent = "8";
                setTimeout(function () {
                    countdownElement.textContent = "7";
                    setTimeout(function () {
                        countdownElement.textContent = "6";
                        setTimeout(function () {
                            countdownElement.textContent = "5";
                            setTimeout(function () {
                                countdownElement.textContent = "4";
                                setTimeout(function () {
                                    countdownElement.textContent = "3";
                                    setTimeout(function () {
                                        countdownElement.textContent = "2";
                                        setTimeout(function () {
                                            countdownElement.textContent = "1";
                                            setTimeout(function () {
                                                countdownElement.textContent = "Happy Independence Day";
                                                countdownElement.style.fontSize = "3em";
                                                countdownElement.style.color = "#ffde00";
                                                countdownElement.style.backgroundColor = "#282c34";
                                                countdownElement.style.borderColor = "#ffde00";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
