'use strict';
const chai = require('chai');
const expect = chai.expect;

const { Given, When, Then } = require('cucumber');

Given('I am on page {string}', async string => {
    await browser.get(string);
    //await browser.driver.sleep(5000);
});
When('I click on {string} reference at the top of page',async  (string) => {
    await element(by.css('a[href="/login"]')).click();
});
Then('I see the {string} text', { timeout: 2 * 5000 }, async function (string) {
    const text = await element(by.css('form h1')).getText();
    expect(text).to.be.equal(string);
});
Then('I see the form with {string} fields', async function (string) {
    const fields = await element.all(by.css('form input[id]'));
    return expect(fields.length).to.be.equal(Number(string));
});
Then('I see the field {string} and the field {string}', async function (string, string2) {
    const textsAboveFields = [await element(by.css('label[for^=login]')).getText(), await element(by.css('label[for^=pass]')).getText()];
    await expect(textsAboveFields.indexOf(string)).to.not.is.equal(-1);
});

When('I login on the site with options', { timeout: 4 * 5000 }, async function (dataTable) {
    const data = dataTable.rowsHash();
    const nameField = await element(by.css('input[name=login]'));
    const passwordField = await element(by.css('input[name=password]'));
    await nameField.sendKeys(data.username);
    await passwordField.sendKeys(data.password);
    await element(by.css('input[value="Sign in"]')).click();
});
    Then('I see the homepage of the user with button {string}', async function (string) {
        const text = await element(by.css('a[href="/new"][class^=btn]')).getText();
        expect(text).to.be.equal(string);
    });
