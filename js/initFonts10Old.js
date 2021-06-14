function LoadGFonts(families, comp) {				
	var lib=comp.getLibrary();				
	var googleObject = {type: "Google", loadedFonts: 0, totalFonts: families.length, callOnLoad: lib.gfontAvailable};				
	for(var i =0; i < families.length; i++)				
		isFontAvailable(gFontsFamilies[i], googleObject);				
}
function isFontAvailable(font, obj) {				
	var timeOut = 5000;				
	var delay = 200;				
	var interval = 0;				
	var timeElapsed = 0;				
	function checkFont() {				
		var node = document.createElement("span");				
		node.innerHTML = "giItT1WQy@!-/#";				
		node.style.position      = "absolute";				
		node.style.left          = "-1000px";				
		node.style.top           = "-1000px";				
		node.style.fontSize      = "300px";				
		node.style.fontFamily    = "sans-serif";				
		node.style.fontVariant   = "normal";				
		node.style.fontStyle     = "normal";				
		node.style.fontWeight    = "normal";				
		node.style.letterSpacing = "0";				
		document.body.appendChild(node);				
		var width = node.offsetWidth;				
		node.style.fontFamily = font+","+node.style.fontFamily;				
		var returnVal = false;				
		if((node && node.offsetWidth != width) || timeElapsed >=timeOut) {				
			obj.loadedFonts++;				
			if(interval)				
				clearInterval(interval);				
			obj.callOnLoad(font, obj.totalFonts);				
			returnVal = true;				
		}				
		if(node) {				
			node.parentNode.removeChild(node);				
			node = null;				
		}				
		timeElapsed += delay;				
		return returnVal;				
	}				
	if(!checkFont()) {				
		interval = setInterval(checkFont, delay);				
	}				
}