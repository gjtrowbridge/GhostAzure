(function($){
	function escapeCode(){
		var html;
		$('.prettyprint').each(function(){
			html = $(this).html().replace(/</g,'&lt;').replace(/>/g,'&gt;');
			$(this).html(html);
		});
	}
	$(document).ready(escapeCode);

})(jQuery);