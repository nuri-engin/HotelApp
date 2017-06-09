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
    { text: 'Check-In', dataIndex: 'cin', flex:1, editor: 'datefield' },
    { text: 'Check-Out', dataIndex: 'cout', flex:1, editor: 'datefield' },
    { text: 'Agency', dataIndex: 'agency', flex:1, editor: 'textfield' },
    { text: 'Reservation No', dataIndex: 'resno', flex:1, editor: 'numberfield' },
    { text: 'Full Name', dataIndex: 'name', flex:2, editor: 'textfield' },
    { text: 'Phone', dataIndex: 'phone', flex:1, editor: 'textfield' }
  ],

  buttons: [
    {
      text: 'Add New Reservation',
      handler: function () {
        alert('Reservation saved successfully!')
      }
      //Listeners is not work :(
      /*listeners: {
        select: 'addNewRes'
      }*/
    }
  ]
});
