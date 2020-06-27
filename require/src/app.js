define(function (require) {
	"use strict";
    
    var utils = require('./utils');
    

	/**
	 * @param 
	 * @constructor 
	 */
	function App() {
        
    }
    
    return {
        GetName: function() {
            return utils.GetName();
        }
    };
});