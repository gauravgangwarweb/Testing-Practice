const capitalize = (str1) => {
    var capStr = "";
    capStr = str1.toLowerCase()
    capStr = capStr.charAt(0).toUpperCase();
    const str2 = str1.slice(1);
    capStr += str2
    return capStr;
}

module.exports = capitalize