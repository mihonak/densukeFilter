(function(f, s){
	s = document.createElement("script");
	s.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
	s.onload = function() {
		f(jQuery.noConflict(true))
	};
	document.body.appendChild(s)
})(function($){
	$('.regist tr:gt(0) td:nth-child(2), .regist tr:gt(0) td:nth-child(3), .regist tr:gt(0) td:nth-child(4)').hover(function(){
			$(this).css('background','#ecc');
		},function(){
			$(this).css('background','#fff');
		});
	$('.regist tr:gt(0) td:nth-child(2)').click(function(){
		densukeFilter($(this).closest('tr').index(),'ok');
	});
	$('.regist tr:gt(0) td:nth-child(3)').click(function(){
		densukeFilter($(this).closest('tr').index(),'mb');
	});
	$('.regist tr:gt(0) td:nth-child(4)').click(function(){
		densukeFilter($(this).closest('tr').index(),'ng');
	});
	function densukeFilter(row,status){
		$('td').show();
		var blanks = [],
			statusClass;
		if(status=='ok') statusClass = '.col3';
		if(status=='mb') statusClass = '.col2';
		if(status=='ng') statusClass = '.col1';
		$('.regist tr:eq('+row+') td:gt(3):not(:last-child)').each(function(index,elm){
			if($(elm).has(statusClass).length==0){
				blanks.push(index);
			}
		});
		for(var i=0; i<blanks.length; i++){
			var num = blanks[i] + 5;
			$('.regist td:nth-child('+ num +')').hide();
		}
	}
});
