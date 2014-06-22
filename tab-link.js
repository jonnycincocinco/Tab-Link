
javascript: (function() {
	var ref = document.getElementsByTagName('a');
	for(var i=0;i<ref.length;i++){
    ref[i].target = "_blank"
   }
}());