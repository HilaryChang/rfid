//rc522.js

var rc522 = require("rc522/build/Release/rc522");
console.log('Ready!!!');

rc522(function(rfidSerialNumber){
        process.send({rfid: rfidSerialNumber});
});