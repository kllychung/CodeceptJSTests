Feature('Four Modules Scenario');
let assert = require('assert');

Scenario('Four Modules', ({ I }) => {
    I.amOnPage('https://www.fourmodules.com/');
    I.usePlaywrightTo('test', async ({ page }) => {
        await page.hover('a:text("CD-IELTS")')
    });
    I.see('About', '.link-page');
    I.see('Pricing & Package', '.link-page');
    I.click("About", '.link-page')
    assert(I.grabCurrentUrl(), 'https://www.fourmodules.com/ielts');
    I.seeElement('.btn.btn-green', 'span[text()="Any Questions?"]');
    I.click('//a/span[text()="Any Questions?"]')
    within('.modal-content', () => {
        I.see('How can we help?', 'h5');
        I.click('button.close')
    });
    I.click('//button/span[text()="Take Free Demo"]')
    assert(I.grabCurrentUrl(), 'https://www.fourmodules.com/signup');
});