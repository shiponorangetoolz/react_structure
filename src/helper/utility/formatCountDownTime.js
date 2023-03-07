export const formatCountDownTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    if (minutes === 0) {
        if (seconds < 10) {
            return "00:" + "0" + seconds;
        } else {
            return "00:" + seconds;
        }
    } else {
        const sec = seconds - minutes * 60;
        if (minutes < 10) {
            return "0" + minutes + ":" + `${sec < 10 ? "0" + sec : sec}`;
        } else {
            return minutes + ":" + `${sec < 10 ? "0" + sec : sec}`;
        }
    }
};
