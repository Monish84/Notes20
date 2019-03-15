Ext.application({
	
	name : 'Test',
	appFolder : 'app',   
	controllers:["MyController"],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit', 
			items: {
				xtype: 'reg' 
					} 
		}); 
	    }
	});