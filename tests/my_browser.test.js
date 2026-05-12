const { Builder, By } = require('selenium-webdriver');
require('geckodriver');
const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});
afterAll(async () => { await driver.quit(); });

test('Check that the main header is correct', async () => {
    let header = await driver.findElement(By.tagName('h1')).getText();
    expect(header).toBe('Här kan vi leka med en stack'); // Detta är också rätt
});