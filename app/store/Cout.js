Ext.define('HotelApp.store.Cout', {
    extend: 'Ext.data.Store',

    alias: 'store.cout',

    model: 'HotelApp.model.Cout',

    data: { items: [
      { cin: '01.02.2017', inhour: '17:00', cout: '02.02.2017', outhour: '12:00', agency: 'A-Agency', resno: '1234', name: 'Kadir Ronahi', room: '101' },
      { cin: '02.03.2017', inhour: '16:00', cout: '03.03.2017', outhour: '12:00', agency: 'C-Agency', resno: '1244', name: 'Nuri Şiha', room: '201' },
      { cin: '03.04.2017', inhour: '15:00', cout: '05.04.2017', outhour: '12:00', agency: 'X-Agency', resno: '1238', name: 'Hüseyin Polat', room: '301' },
      { cin: '04.05.2017', inhour: '14:00', cout: '07.05.2017', outhour: '12:00', agency: 'G-Agency', resno: '1534', name: 'Eymen Engin', room: '401' },
      { cin: '05.06.2017', inhour: '13:00', cout: '09.06.2017', outhour: '12:00', agency: 'U-Agency', resno: '2234', name: 'Ömer Ergan', room: '501' }
    ]},

    proxy: {
      type: 'memory',
      reader: {
        type: 'json',
        rootProperty: 'items'
      }
    }
});
