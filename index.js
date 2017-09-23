require('chromedriver');
var webdriver = require('selenium-webdriver'),
    phantomjs = require('selenium-webdriver/phantomjs')
    assert = require('assert'),
    by = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .withCapabilities(webdriver.Capabilities.phantomjs())
    .build();
// var driver = new phantomjs.Driver();
var test = require('selenium-webdriver/testing');

var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));

test.describe('x', function () {
    this.timeout(15000);
    test.it('bar', function () {
        driver.get('https://lpmotor.ru/admin/auth/logout');
        driver.getTitle().then(function (title) {
            //chai.expect(title).to.equal('Ex');
            assert.equal(title, 'Вход | LPmotor');
        });

    });

    test.it('bar2', function () {
        driver.findElement(by.css('#frmlogin__username')).sendKeys('hicudet@p33.org');
        driver.findElement(by.css('#frmlogin__fake_pass')).sendKeys('123456');
        driver.findElement(by.css('#frmlogin__btn_submit')).click();
        driver.wait(until.elementLocated(by.css('.btn-pay-balance')), 5000);

        driver.findElement(by.css('.btn-pay-balance')).getText().then(function (text) {
            assert.equal(text, 'Подключить тариф');
        });

        driver.quit();
    });
});





// driver.get('https://lpmotor.ru/admin/auth/login');
// driver.findElement(by.css('#frmlogin__username')).sendKeys('hicudet@p33.org');
// driver.findElement(by.css('#frmlogin__fake_pass')).sendKeys('123456');
// driver.findElement(by.css('#frmlogin__btn_submit')).click();
// driver.wait(until.elementLocated(by.css('.btn-pay-balance')), 5000);
//
// driver.wait(function() {
//     return driver.findElements(by.css('.locker-background')).then(function(el) {
//         return el.length == 0;
//     });
// }, 5000);
//
// // driver.wait(until.findElements(by.css('#site_preview_link')).count == 0, 5000);
//
// driver.findElement(by.css('.btn__site-editor')).click();
// driver.wait(until.elementLocated(by.css('#site_preview_link')), 5000);
//
// driver.getTitle().then(function (title) {
//     assert.ok(false, 'err! '+title);
// });
//
// driver.quit();
