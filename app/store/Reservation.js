Ext.define('HotelApp.store.Reservation', {
  extend: 'Ext.data.Store',

  alias: 'store.reservation',

  model: 'HotelApp.model.Reservation',

  data: { items: [
    { cin: '01.02.2017', cout: '02.02.2017', agency: 'A-Agency', resno: '1234', name: 'Kadir Ronahi', phone: '0555' },
    { cin: '02.03.2017', cout: '04.03.2017', agency: 'B-Agency', resno: '1235', name: 'Nuri Engin', phone: '0444' },
    { cin: '03.04.2017', cout: '06.04.2017', agency: 'C-Agency', resno: '1236', name: 'Gökhan Ergan', phone: '0333' },
    { cin: '04.05.2017', cout: '08.05.2017', agency: 'D-Agency', resno: '1237', name: 'Yasemin Durmuş', phone: '0222' },
  ]},

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});
