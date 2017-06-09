/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('HotelApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemCin: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Check-In -> Are you sure?', 'onCinConfirm', this);
    },

    onCinConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onItemCout: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Check-Out -> Are you sure?', 'onCoutConfirm', this);
    },

    onCoutConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    addNewRes: function () {
      alert('You added :) ');
    }
});
