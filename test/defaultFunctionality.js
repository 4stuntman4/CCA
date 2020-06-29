const selectorCnt = require ('./../data/selectors.json').counter;

describe('Default counter functionality', function () {

    describe('Calculation works', function () {

        it('TC-021 Subtract 1 gives -1', function () {
            browser.url('https://likejean.github.io/homework-5/');
            const button = $$(selectorCnt.blackBtn)[0];
            button.click();
            const countValue = $('.badge').getText();
            expect(countValue).toEqual('-1');
        })

        it('TC-022 Add 3 gives 2', function () {

            const button = $$('.btn-black')[5];
            button.click();
            const countValue = $('.badge').getText();
            expect(countValue).toEqual('2');
        })

    });

});