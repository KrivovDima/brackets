module.exports = function check(str, bracketsConfig) {
    const parseBracketsConfig = bracketsConfig.map((item) => {
        return `${item[0]}${item[1]}`
    });

    let strCounter = str.length;

    while (str !== '') {
        parseBracketsConfig.forEach(element => {
            str = str.replace(element, '');
        });
        if (strCounter === str.length) {
            return false;
        }
        strCounter = str.length;
    }
    return true;

}







