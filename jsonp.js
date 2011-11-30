var JSONp = {
	
	callbacks : {},
	callbackCount : 0,
	
	buildQueryString : function( params ){
		
		var qsArray = new Array();
		
		// Build query string from JSON
		for (var key in params.opts) {
			if (params.opts.hasOwnProperty(key)) {
				qsArray.push(key + "=" + encodeURIComponent(params.opts[key]));
			}
		}
		
		// Append callback name
		var cbFunc = 'JSONp.callbacks.' + params.cbID;
		var cbName = params.callbackName || 'callback';
		qsArray.push(cbName + "=" + cbFunc);
		
		return qsArray.join('&');
	},
	
	get : function( params ){
		
		// Generate call ID
		var d = new Date();
		JSONp.callbackCount++;
		params.cbID = 'cb' + d.getTime() + '_' + JSONp.callbackCount;
		
		// Assign callback function
		JSONp.callbacks[params.cbID] = function(json){
			params.success(json);
			
			// Cleanup script tags
			var head = document.getElementsByTagName('head')[0];
			var el = document.getElementById(params.cbID);
			head.removeChild(el);
		};
		
		// Create script tag
		var el = document.createElement('script');
		el.src = params.url + '?' + JSONp.buildQueryString(params);
		el.id = params.cbID;
	    
		// Write into head tags
		var head = document.getElementsByTagName('head')[0];
		head.insertBefore(el, head.firstChild);
	}
	
}