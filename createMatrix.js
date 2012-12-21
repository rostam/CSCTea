function createMatrix(arr) {
	var str="<table class='matrix'>";
	str+="<tr class='first'><td class='first'> &nbsp; </td>";
	for(var i=0;i<arr.length;i++) { 
		str+="<td class='first'>" + i + "</td>";
	}
	str+="</tr>";
	for(var i=0;i<arr.length;i++) {
		str+="<tr><td class='first'>" + i + "</td>";
		for(var j=0;j<arr[i].length;j++) {
        		str += "<td>" + arr[i][j] + "</td>";
	    	}
		str+="</tr>";
	}
	return str+"</table>";
}
