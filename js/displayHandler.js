

var article = function(){
	var args = Array.prototype.slice.call(arguments);
	
	this.articleTitle = args[0] || "Placeholder title";
	this.credit = args[1] || "Placeholder credit";
	this.date = args[2] || (new Date()).getDate();
	
	this.img = document.createElement("img");
	this.img.src = args[3] || "../images/placeholder.png";
	
	
	
}