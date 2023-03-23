Feature('Clear trip');

Scenario('Clear trip', ({ I }) => {
    I.amOnPage('https://www.cleartrip.com/');
    I.click(".px-1.flex.flex-middle.nmx-1.pb-1")
    I.click('a[href="/hotels"]')
    I.waitInUrl('/hotels', 2);
    console.log(I.grabTitle());
})