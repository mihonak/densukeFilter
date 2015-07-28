(function(f, s){
	s = document.createElement("script");
	s.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
	s.onload = function() {
		f(jQuery.noConflict(true));
	};
	document.body.appendChild(s);
})(function($){
	$('<style type="text/css">td.hover{background:#ff0 !important;}</style>').appendTo('head');
	var $table = $('div.regist').children('table'),
		$statusCols = $table.find('tr:gt(0)').find('td:nth-child(2), td:nth-child(3), td:nth-child(4)'),
		$td = $('td');
	$statusCols.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
	});
	$statusCols.click(function(){
		var row = $(this).closest('tr').index(),
			status = $(this).index(),
			blanks = [],
			statusClass;
		$td.show();
		switch (status){
			case 1 : statusClass = '.col3'; break;
			case 2 : statusClass = '.col2'; break;
			case 3 : statusClass = '.col1'; break;
			default : break;
		}
		$table.find('tr:eq('+ row +') td:gt(3)').each(function(index,elm){
			if($(elm).has(statusClass).length == 0){
				blanks.push(index);
			}
		});
		for(var i = 0; i < blanks.length; i++){
			var num = blanks[i] + 5;
			$table.find('td:nth-child('+ num +')').hide();
		}
	});
});
