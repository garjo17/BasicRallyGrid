Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log('Hola cara de Bola');

        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success) {
                    console.log('ya estamos cargado datos....', myStore, myData, success);

                    var myGrid = Ext.create('Rally.ui.grid.Grid', {
                        store: myStore,
                        columnCfgs: [
                            'FormattedID',
                            'Name',
                            'Owner'
                        ]

                    });

                    console.log('my Grid', myGrid);
                }
            },
            fetch: ['FormattedID','Name', 'ScheduleState']
        });
    }
});
