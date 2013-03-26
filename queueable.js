var Queueables = new Queueables();
function Queueables(){
	if(typeof(Storage)!=="undefined")
	  {
	  	if(!localStorage.queuedForms){
	  		localStorage.queuedForms = [];
	  	}
	  	this.forms = localStorage.queuedForms;
	  	this.serializeForm = serializeForm;
	  	//Console.log("Queueables init.");
	  }
	else
	  {
	  	//Console.log("Your browser does not support local storage. Using queueables is not possible.");
	  }
}
function serializeForm(){

}

(function( $ ){

  var methods = {
    init : function( options ) { 
      // THIS 
    }
  };

  $.fn.queueable = function(method) {
  

  	// Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.queueable' );
    }   
    // there's no need to do $(this) because
    // "this" is already a jquery object

    // $(this) would be the same as $($('#element'));
        
    
  };
})( jQuery );