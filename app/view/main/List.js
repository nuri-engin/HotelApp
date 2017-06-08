Ext.define('HotelApp.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',

  requires: [
    'HotelApp.store.Reservation'
  ],

  plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 1
    }],

  title: 'Reservation',

  store: {
    type: 'reservation'
  },

  columns: [
    { text: 'Check-In', dataIndex: 'cin', editor: 'datefield' },
    { text: 'Check-Out', dataIndex: 'cout', editor: 'datefield' },
    { text: 'Agency', dataIndex: 'agency', editor: 'textfield' },
    { text: 'Reservation No', dataIndex: 'resno', editor: 'numberfield' },
    { text: 'Full Name', dataIndex: 'name', editor: 'textfield' },
    { text: 'Phone', dataIndex: 'phone', editor: 'textfield' }
  ],

});
