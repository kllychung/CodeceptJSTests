Feature('Board Game Geek');

Scenario('Board Game Geek', ({ I }) => {
    I.amOnPage('https://www.boardgamegeek.com/advsearch/boardgame.com/');
    I.fillField("#advsearch-title", "Harry Potter and the Sorcerer's Stone Trivia Game")
    I.fillField("#advsearch-yearpublished-min", "1999")
    I.fillField("#advsearch-yearpublished-max", "2000")
    I.usePlaywrightTo('test', async ({ page }) => {
        await page.selectOption('#advsearch-min-playing-time', "15")
        await page.selectOption('#advsearch-max-playing-time', "90")
    });
    I.click('input[type="submit"]')
    I.see("Harry Potter and the Sorcerer's Stone Trivia Game (2000)")
    I.usePlaywrightTo('test', async ({ page }) => {
        const title = await page.title();
        console.log(title)
    });
})
