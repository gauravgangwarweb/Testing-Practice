const stringLength = (string) => {
    if(string.length == 0 || string.length > 9){
        return "Input should be at least 1 character long and not longer than 10 characters";
    } else {
        return string.length;
    }
}

module.exports = stringLength;