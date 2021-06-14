var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("E70C097AA1D5884498497A61E8101AAF");
	var lib=comp.getLibrary();
	try {
		if(!(typeof gFontsFamilies === 'undefined' || gFontsFamilies === null))
			LoadGFonts(gFontsFamilies, comp);		
		if(!(typeof totalTypekitFonts === 'undefined' || totalTypekitFonts === null)) {			
			var typekitObject = {type: 'Typekit', loadedFonts: 0, totalFonts: totalTypekitFonts, callOnLoad: lib.tfontAvailable};		
			Typekit.load({
			async: true,
			'fontactive': function(family) {
				isFontAvailable(family, typekitObject);
				}
			});
		}
	} catch(e) {};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	var preloaderDiv = document.getElementById("_preload_div_");
	preloaderDiv.style.display = 'none';
	dom_overlay_container.style.display = 'block';
	canvas.style.display = 'block';
	exportRoot = new lib.MissingSocksCoJS10();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'width',true,2,[canvas,preloaderDiv,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}