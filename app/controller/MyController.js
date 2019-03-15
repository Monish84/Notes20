Ext.define('Test.controller.MyController', {
    extend : 'Ext.app.Controller',
   
     views : [ 
         'view1' 
        ],
     init : function() {
     this.control({
    	 	
    	'reg button[action=login]' : {
    	click : this.onLoginClick
    	}
    	});
     },
    
    	onLoginClick: function(button) {
    		
    		var a=Ext.getCmp("userName").getValue();
    		var b=Ext.getCmp("userPass").getValue();
    		
    		Ext.Ajax.request({
        		url : 'login',
        		method : 'POST',
        		params : {
        			name:a,
        			pass:b
        		},
        		scope : this,
        		success : function(response){
        			var response=response;
        			//console.log(response.responseText);
        			this.onLogin(response);
        		},
        		failure:function(response){
        			
        		}
        		});
    		},
    		onLogin	:function(response){
    			//console.log("I made it");
    			console.log(response.responseText);
    			var response=response.responseText;
    			//var msg = Ext.create('Ext.window.MessageBox');
    			//msg.alert('Successful Registration', 'Valid User');
    			console.log(response.indexOf('Success'));
    				    			
    			if(response.indexOf('Success')>-1){
    				var msg = Ext.create('Ext.window.MessageBox');
    				msg.alert('Successful Registration', 'Valid User');
    			}else{
    				var msg = Ext.create('Ext.window.MessageBox');
    				msg.alert('Unsuccessful Registration', 'Invalid User');
    			}
			
    		},
    		onError	:function(){
    			console.log("Not Well");
    			
    			
    		}
    		
    });