function countdownTimer(targetDate) {
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        if (difference <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown complete!");
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 *24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        console.log('Days: ' + days + ', Hours: ' + hours + ', Minutes: ' + minutes + ', Seconds: ' + seconds);
    }
}

const targetDate = new Date("2023-12-31T23:59:59");
countdownTimer(targetDate);