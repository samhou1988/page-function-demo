var page = require('webpage').create();
page.open('http://christmas.gift.sk80.com/gcard/19090', function () {
    page.render('gcard.png');
    phantom.exit();
}); 
