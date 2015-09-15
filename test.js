function Write99dan(_start, _end){
	var start= _start;
	var end=_end;
	for(var i=start;i<end+1;i++){
		document.writeln(i+"단");
		for(var j=1;j<10;j++){
			document.writeln(i+"X"+j+"="+ i*j);
		}
	}
}
Write99dan(2,14);