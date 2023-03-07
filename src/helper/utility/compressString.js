const compressString = (str = "", length = 10) => {
    if (str.length > length) {
        return str.slice(0, length) + "...";
    } else {
        return str;
    }
};

export default compressString;
