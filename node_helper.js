//node_helper.js

var NodeHelper = require("node_helper");
module.exports = NodeHelper.create({
        socketNotificationReceived: function(notification, payload){
                if(notification === "RFID_MODULE_CONN"){ }
        },

        /* Here starts the parent script*/

        start: function(){
                const cp = require('child_process'); 
                const n = cp.fork(`${__dirname}/rc522.js`);
                self = this;
                n.on('message', (m) => {
                        self.sendSocketNotification("RFID_RECEIVED", m);
                });
        }
});