'use strict';
const chai = require('chai');
const expect = chai.expect;

const {Given, When, Then} = require('cucumber');

    Given('I am on page {string}', string => {
        browser.get(string);
    });
    When('I click on {string} reference at the top of page',  (string) => {
        element(by.css('a[href="/login"]')).click();
    });
    Then('I see the {string} text',async function (string) {
        const text = await element(by.css('form h1')).getText();
        expect(text).to.be.equal(string);
    });
    Then('I see the form with {string} fields', async function (string) {
        const fields = await element.all(by.css('form input[id]'));
        return expect(fields.length).to.be.equal(Number(string));
    });
    // Then('I see the field {string} and the field {string}', function (string, string2) {
    //     console.log('Then I see the field {string} and the field {string}');// Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });
    // // When('I click on {string} reference at the top of page', function (string) {
    // //     console.log('When I click on {string} reference at the top of page');// Write code here that turns the phrase above into concrete actions
    // //     return 'pending';
    // // });
    // When('I login on the site with options', function (dataTable) {
    //     console.log('When I login on the site with options');// Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });
    // Then('I see the homepage of the user with text {string}', function (string) {
    //     console.log('Then I see the homepage of the user with text {string}');// Write code here that turns the phrase above into concrete actions
    //     return 'pending';
    // });
