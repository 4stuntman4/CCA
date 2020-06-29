const selectorCnt = require ('./../data/selectors.json').counter;

module.exports = {
    inputNumber: function (selector, value) {
if (selector.isDisplayed()) {
selector.click();
    browser.keys('Backspace');
    browser.keys(value);

} else {
    if ()

}
    }

}


const button = $(selectorCnt.lowerLimitField);
button.click();
const input = $(selectorCnt.lowerInputField);
input.click();
browser.keys('Backspace');
browser.keys(expectedDCF.inputMin.toString());
const result = $(selectorCnt.errorMsg).isDisplayed();
expect(result).toEqual(false);