var articles = [];

var ArticleNYT = function(){
	var args = Array.prototype.slice.call(arguments);
	
	this.container = document.createElement("div");
	this.container.classList.add("articleContainer");
	
	this.imageContainer = document.createElement("div");
	this.imageContainer.classList.add("articleImageContainer");
	
	this.img = document.createElement("img");
	this.img.classList.add("articleImage");
	this.img.src = args[0] || "../images/placeholder.png";
	
	this.imageContainer.appendChild(img);
	
	this.textContainer = document.createElement("div");
	this.textContainer.classList.add("articleTextContainer");
	
	this.articleTitle = document.createElement("h3");
	this.articleTitle.classList.add("articleTitle");
	this.articleTitle.textContent = args[1] || "Placeholder title";
	this.articleCredit = document.createElement("p");
	this.articleCredit.classList.add("articleCredit");
	this.articleCredit.textContent = args[2] || "Placeholder credit";
	this.articleDate = document.createElement("p");
	this.articleDate.classList.add("articleDate");
	this.articleDate.textContent = args[3] || (new Date()).getDate();
	this.articleSource = document.createElement("a");
	this.articleSource.classList.add("articleTitle");
	this.articleSource.href = args[4] || "#";
	
	this.textContainer.appendChild(articleTitle);
	this.textContainer.appendChild(articleCredit);
	this.textContainer.appendChild(articleDate);
	this.textContainer.appendChild(articleSource);
	
	this.container.appendChild();
	
	this.getProduct = function(){
		return this.container;
	}
	
}