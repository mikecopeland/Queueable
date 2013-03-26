var Queueables = new Object();
Queueables.forms = [];
Queueables.serializeForm = serializeForm;
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