// RFID Module
//rfid.js

Module.register('rfid',{
        notificationReceived: function(notification, payload, sender){
                if (notification=='DOM_OBJECTS_CREATED'){
                        this.sendSocketNotification("RFID_MODULE_CONN", { });
                }
        },
        socketNotificationReceived: function(notification, payload){
                if (notification === 'RFID_RECEIVED'){
                        this.sendNotification("SEND_RFID_MAPPER",payload);

                }
        },
});