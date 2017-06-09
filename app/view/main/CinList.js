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
    { text: 'Check-In', dataIndex: 'cin', flex:1, editor: 'datefield' },
    { text: 'Check-In Hour', dataIndex: 'inhour', flex:1, editor: 'textfield' },
    { text: 'Check-Out', dataIndex: 'cout', flex:1, editor: 'datefield' },
    { text: 'Check-Out Hour', dataIndex: 'outhour', flex:1, editor: 'textfield' },
    { text: 'Full Name', dataIndex: 'name', flex:1, editor: 'textfield' },
    { text: 'Room No', dataIndex: 'room', flex:1, editor: 'numberfield' }
  ],

  listeners: {
    select: 'onItemCin'
  }
});
