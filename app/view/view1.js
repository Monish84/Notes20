Ext.define('Test.view.view1', {
 
	extend : 'Ext.panel.Panel',
	alias : 'widget.reg',
	
	
	items:[
		{
			xtype:"textfield",
			fieldLabel:"Name",
			name:"name",
			id:"userName",
			margin:"20 10 10 50",
			labelSeparator:"",
					
		},
		{
			xtype:"textfield",
			fieldLabel:"Password",
			margin:"10 10 10 50",
			name:"pass",
			id:"userPass",
			inputType:"password",
			labelSeparator:"",
		},
		{
			xtype:"button",
			text:"Login",
			margin:"10 10 10 50",
			action : "login"
		}
	],
         
    });