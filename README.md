JSONp (library-less)
====================

Sometimes you need to make JSONp calls without including a full third party library. 

For example, creating an embed script for websites that you don't have control over which libraries are being used (this may be jQuery, Mootools or something else!)


Usage
-----

Include the json.js file (or copy the code and incorporate it into your application)

You can make calls like so:

    // Flickr example
    JSONp.get({
    	url : 'http://api.flickr.com/services/feeds/photos_public.gne', // URL of the service
    	callbackName : 'jsoncallback', // Optional - use if the callback name isn't "callback"
    	opts : { tags: "cat", tagmode: "any", format: "json" }, // Processed into a query string and appended to the service URL
    	success : function( json ){ 
    		// Do something with the returned JSON
    	} 
    });


Limitations
-----------

This is a very basic piece of code intended to be used without a third party library. 
You can use the code as it is, or take it as a template for something a bit more spectacular!


Authors
-------

**David Grayston**

+ http://twitter.com/davidgrayston
+ http://github.com/davidgrayston



Copyright and license
---------------------

Use as you will
