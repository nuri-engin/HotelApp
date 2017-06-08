Ext.define('HotelApp.view.main.CinList', {
  extend: 'Ext.grid.Panel',
  xtype: 'cinlist',

  requires: [
    'HotelApp.store.Cin'
  ],

  title: 'Check-In List',

  store: {
    type: 'cin'
  },

  columns: [
    { text: 'Check-In', dataIndex: 'cin', editor: 'datefield' },
    { text: 'Check-In Hour', dataIndex: 'inhour', editor: 'textfield' },
    { text: 'Check-Out', dataIndex: 'cout', editor: 'datefield' },
    { text: 'Check-Out Hour', dataIndex: 'outhour', editor: 'textfield' },
    { text: 'Full Name', dataIndex: 'name', editor: 'textfield' },
    { text: 'Room No', dataIndex: 'room', editor: 'numberfield' }
  ],

  listeners: {
    select: 'onItemCin'
  }
});
