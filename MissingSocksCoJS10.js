(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"MissingSocksCoJS10_newAtlas_1", frames: [[0,0,1600,368],[1813,117,32,32],[702,370,680,800],[1602,117,147,47],[1813,151,32,32],[1602,166,32,32],[1275,1172,400,600],[1636,166,32,32],[0,1444,1000,140],[0,370,700,800],[1670,166,32,32],[0,1172,1273,270],[1751,117,60,38],[1602,0,375,115],[1384,370,620,800],[1704,166,32,32]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._32x32 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Angr2 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btn_buynowCC_LG = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.email_32 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.facebook = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.GoldTie400 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.google_32 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.image55 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Lapto = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.myspace = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.OrderHereBitmap = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PayPal_mark_60x38 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.sockPal = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Thinking2 = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.twitter = function() {
	this.initialize(ss["MissingSocksCoJS10_newAtlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.twit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.twitter();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.twit, new cjs.Rectangle(0,0,32,32), null);


(lib.thinkin2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Thinking2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thinkin2, new cjs.Rectangle(0,0,620,800), null);


(lib.t17bb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF8000").beginStroke().moveTo(-223.5,49).lineTo(-223.5,-49).lineTo(223.5,-49).lineTo(223.5,49).closePath();
	this.shape.setTransform(220.0196,49,0.9845,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t17bb, new cjs.Rectangle(0,0,440,98), null);


(lib.t17b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF8000").beginStroke().moveTo(-221,42.5).lineTo(-221,-42.5).lineTo(221,-42.5).lineTo(221,42.5).closePath();
	this.shape.setTransform(220.975,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t17b, new cjs.Rectangle(0,0,442,85), null);


(lib.sockPall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sockPal();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sockPall, new cjs.Rectangle(0,0,375,115), null);


(lib.shopp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image55();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shopp, new cjs.Rectangle(0,0,1000,140), null);


(lib.orderBit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.OrderHereBitmap();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orderBit, new cjs.Rectangle(0,0,1273,270), null);


(lib.nop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EEEEEE").beginStroke().moveTo(-196.9,75).lineTo(-196.9,-75).lineTo(196.9,-75).lineTo(196.9,75).closePath();
	this.shape.setTransform(187.489,50.0086,0.9521,0.6669);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nop, new cjs.Rectangle(0,0,375,100), null);


(lib.my = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.myspace();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.my, new cjs.Rectangle(0,0,32,32), null);


(lib.menBut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000099").beginStroke().moveTo(-75,15).lineTo(-75,-15).lineTo(75,-15).lineTo(75,15).closePath();
	this.shape.setTransform(75,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menBut, new cjs.Rectangle(0,0,150,30), null);


(lib.mail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.email_32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mail, new cjs.Rectangle(0,0,32,32), null);


(lib.lapto2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lapto();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lapto2, new cjs.Rectangle(0,0,700,800), null);


(lib.goog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.google_32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goog, new cjs.Rectangle(0,0,32,32), null);


(lib.gg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GoldTie400();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gg, new cjs.Rectangle(0,0,400,600), null);


(lib.fac = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.facebook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fac, new cjs.Rectangle(0,0,32,32), null);


(lib.env = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.env, new cjs.Rectangle(0,0,800,184), null);


(lib.bu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btn_buynowCC_LG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bu, new cjs.Rectangle(0,0,147,47), null);


(lib.bla2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFF999").beginStroke().moveTo(-236.1,236.1).lineTo(-236.1,-236.1).lineTo(236.1,-236.1).lineTo(236.1,236.1).closePath();
	this.shape.setTransform(245.0181,200.004,1.0376,0.847);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bla2, new cjs.Rectangle(0,0,490,400), null);


(lib.b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PayPal_mark_60x38();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b, new cjs.Rectangle(0,0,60,38), null);


(lib.angr2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Angr2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angr2, new cjs.Rectangle(0,0,680,800), null);


(lib.aad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._32x32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aad, new cjs.Rectangle(0,0,32,32), null);


// stage content:
(lib.MissingSocksCoJS10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
				
				
				//  >>>>>>>*****************************************************
				
				var adjustThis = 0.0;
				
				
				
				
				
						var isPC = isWindows();
						
						function isWindows(){
				    return navigator.userAgent.indexOf('Win') > -1
				}
				
				
				
				
				
				var isMAC = isMac();
				
				function isMac(){
				    return navigator.userAgent.indexOf('Mac') > -1
				}
				
				
				
				
				var isLINUX = isLinux();
				
				function isLinux(){
				    return navigator.userAgent.indexOf('Linux') > -1
				}
			
				
				
				
				
				var isiPad = isipad();
		
		function isipad(){
			return navigator.userAgent.indexOf('iPad') > -1
		}
		
		
		
				var isiPhone = isiphone();
		
		function isiphone(){
			return navigator.userAgent.indexOf('iPhone') > -1
		}
		
		
		
				var isAndroid = isandroid();
				
				
				console.log("ispc 2   " + isPC);
		
		function isandroid(){
			return navigator.userAgent.indexOf('Android') > -1
		}
				
				
						var ua = navigator.userAgent.toLowerCase();
						var check = function(r) {
						    return r.test(ua);
							};
							
						
						var ua2 = navigator.userAgent;
						var check2 = function(r2) {
						    return r2.test(ua2);
							};
						
						var isChrome = check(/chrome/);
						var isFirefox = check(/firefox/);
						var isOpera = check(/opr/); 
						var isYandex = check(/yabrowser/);  
						var isEdge = check(/edg/);
						var isSafari = check(/safari/);
						
						var isCrOS = check2(/CrOS/);  //  Chromium OS
						
				console.log("ispc 3   " + isPC);
if (isPC && isChrome){if (!isEdge){if (!isOpera && !isYandex){adjustThis = .18}}};  //  Chrome
if (isPC && isChrome){if (isEdge){adjustThis = .18}};   //  Edge 
if (isPC && isChrome){if (isOpera){adjustThis = .18}};   //  Opera 
if (isPC && isChrome){if (isYandex){adjustThis = .18}};   //  Yandex 
if (isPC && isFirefox){adjustThis = 0.15};            //  Firefox
			
if (isMAC && isChrome){adjustThis = .18};    //  Chrome Opera Yandex
if (isMAC && isFirefox){adjustThis = .18};   //  Firefox
if (isMAC && isSafari){if (!isChrome){adjustThis = .01}};  //  Safari
			
	//  Not Chrome OS
if (isLINUX && !isCrOS){if (isFirefox){adjustThis = .2}};  //  Firefox
if (isLINUX && !isCrOS){if (isChrome){if (!isOpera && !isYandex){adjustThis = 0}}};  //  Chrome
if (isLINUX && !isCrOS){if (isChrome){if (isOpera){adjustThis = .18}}};  //  Opera
if (isLINUX && !isCrOS){if (isChrome){if (isYandex){adjustThis = .18}}};  //  Yandex
			

    //  Chrome OS
if (isCrOS){if (isChrome){if (!isOpera && !isYandex){adjustThis = .18}}};  //  Chrome


console.log("ispc 4   " + isPC);

				
				console.log("isMAC    " + isMAC + "   isChrome   " + isChrome + "   isFirefox   " + isFirefox + "   isOpera   " + isOpera + "   isYandex   " + isYandex + "    isEdge    " + isEdge + "    isPC     " + isPC + "    isLINUX    " + isLINUX + "    navigator.platform    " + navigator.platform + "    isCrOS    " + isCrOS);
				
				
				
				var isIOS = false;
				if (isiPhone || isiPad){isIOS = true};
				
				console.log("isAndroid   " + isAndroid + "    isIOS    " + isIOS);
				
				console.log("navigator user agent     " + navigator.userAgent);
				
				console.log("isEdge    " + isEdge + "    isSafari   " + isSafari);
				
				
				
//  <<<<<<<<<<<<<<****************************************************
				
				
				
				
				
				if (adjustThis < 0.0 || adjustThis > 0.0){if (createjs){
				
					
				createjs.Text.prototype._drawTextLine = function(ctx, text, y){
				
				  // Adjust text position only if textBaseline is "top"
				
				  if (this.textBaseline === "top"){
				
				  var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
				
					  // decrease number to move font up and increase to move down
				  y += lineHeight * adjustThis; 
					  
				
				  }
				
				  // Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:
				
				  if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
				
				  else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
				
				  }; //  createjs.Text.prototype._drawTextLine
				
				}}  //  if (adjustThis < 0.0 || adjustThis > 0.0){if (createjs){
				
				
			
				
				
				
				var frequency = 24;
				//if (isMobile == 1){frequency = 6};
				stage.enableMouseOver(frequency);
				
				
				
				
				//  ****************************************************
				
		
		
		
		
		var page = 0;page = 1;
		
		
		// page 1
		var thinking = this.thinking;
		var t1sec = this.t1sec;
		var t2 = this.t2;
		var t2a = this.t2a;
		var t3 = this.t3;
		
		//  page 2
		var haha = this.haha;
		var t8a = this.t8a;
		var t9a = this.t9a;
		var t10a = this.t10a;
		var t11a = this.t11a;
		var t12a = this.t12a;
		
		//  page 3
		var bla2 = this.bla2;
		var t13a = this.t13a;
		var t14a = this.t14a;
		var t15a = this.t15a;
		
		
		//  page 4
		var angry = this.angry;
		var t16a = this.t16a;
		var t17a = this.t17a;
		var t18a = this.t18a;
		var t17b = this.t17b;
		var t18b = this.t18b;
		var t17aa = this.t17aa;
		var t17bb = this.t17bb;
		
		//  page 5
		var t19a = this.t19a;
		var t20a = this.t20a;
		var t21a = this.t21a;
		var t22a = this.t22a;
		var t23a = this.t23a;
		var t24a = this.t24a;
		var t27a = this.t27a;
		var t28a = this.t28a;
		var te11 = this.te11;
		var te22 = this.te22;
		
		
		//  page 6
		var laptop = this.laptop;
		var t29a = this.t29a;
		var t230a = this.t30a;
		
		
		var ww = 0;
		var hh = 0;
		
		
		
		
		
		
		
		
		//  page 2
		haha.visible = false;
		t8a.visible = false;
		t9a.visible = false;
		t10a.visible = false;
		t11a.visible = false;
		t12a.visible = false;
		
		//  page 3
		bla2.visible = false;
		t13a.visible = false;
		t14a.visible = false;
		t15a.visible = false;t15a.selectable = true;
		
		
		//  page 4
		angry.visible = false;
		t16a.visible = false;
		t17a.visible = false;
		t18a.visible = false;
		t17b.visible = false;
		t18b.visible = false;
		t17aa.visible = false;
		t17bb.visible = false;
		
		//  page 5
		t19a.visible = false;
		t20a.visible = false;
		t21a.visible = false;
		t22a.visible = false;
		t23a.visible = false;
		t24a.visible = false;
		t27a.visible = false;
		t28a.visible = false;
		te11.visible = false;
		te22.visible = false;
		
		
		//  page 6
		laptop.visible = false;
		t29a.visible = false;
		t230a.visible = false;
		
		
		
		
		
		//var url:String = "https://www.paypal.com/cgi-bin/webscr";
		//var pal:URLRequest = new URLRequest(url);
		//var vari:URLVariables = new URLVariables();
		
		
		
		
		this.order.addEventListener("click", buyClick);
		this.buy.addEventListener("click", buyClick);
		
		function buyClick() {
			
			
			/*
			
			vari = new URLVariables();
			vari.cmd="_xclick";
			vari.business="contact@missingsocksco.com";
			vari.item_name="Missing Socks Co.";
			vari.amount = "1.99";
			vari.no_shipping = "2";
			vari.no_note = "1";
			vari.currency_code = "CAD";
			vari.lc = "CA";
			vari.bn = "PP-BuyNowBF";
			
			pal.data = vari;
			pal.method = URLRequestMethod.POST;
			navigateToURL(pal,"_blank");
		
			*/
			
			/*
			$.post(
		  "https://www.paypal.com/cgi-bin/webscr",
		  { cmd: "_xclick", business: "contact@missingsocksco.com", item_name: "Missing Socks Co.", amount: "1.99", no_shipping: "2", no_note: "1", currency_code: "CAD", lc: "CA", bn: "PP-BuyNowBF" },
		  function(data) {
		    alert("Response: " + data);
		  }
		);
			*/
			window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=contact@missingsocksco.com&item_name=Missing Socks Co.&amount=1.99&no_shipping=2&no_note=1&currency_code=CAD&lc=CA&bn=PP-BuyNowBF", "_blank");
			//window.open("http://www.adobe.com", "_blank");
			//console.log ("this pay button test");
		}
		
		
		
		
		t15a.addEventListener("click", mymailClick);
		function mymailClick() {
			window.open("mailto:contact@MissingSocksCo.com", "_blank");
			
		}
		
		
		
		this.fac_btn.addEventListener("click", facClick);
		function facClick() {
			
			window.open("http://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=http://www.missingsocksco.com", "_blank");
		}
		
		
		
		this.twit_bac.addEventListener("click", twitClick);
		function twitClick() {
			
			window.open("http://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=http://www.missingsocksco.com", "_blank");
		}
		
		
		
		this.my_btn.addEventListener("click", myClick);
		function myClick() {
			
			window.open("http://api.addthis.com/oexchange/0.8/forward/myspace/offer?url=http://www.missingsocksco.com", "_blank");
		}
		
		
		
		this.my_goog.addEventListener("click", googClick);
		function googClick() {
			
			window.open("http://api.addthis.com/oexchange/0.8/forward/google/offer?url=http://www.missingsocksco.com", "_blank");
		}
		
		
		
		this.mail_btn.addEventListener("click", mailClick);
		function mailClick() {
			
			window.open("http://api.addthis.com/oexchange/0.8/forward/email/offer?url=http://www.missingsocksco.com", "_blank");
		}
		
		
		
		this.aad_btn.addEventListener("click", aadClick);
		function aadClick() {
			
			window.open("http://api.addthis.com/oexchange/0.8/offer?url=http://www.missingsocksco.com", "_blank");
		}
		
		
		
		
		this.te11.addEventListener("click", seeLogoClick);
		function seeLogoClick() {
			
			window.open("http://www.missingsocksco.com/Envelope2.jpg", "_blank");
		}
		
		
		
		this.te22.addEventListener("click", seeLogoClick2);
		function seeLogoClick2() {
			
			window.open("http://www.missingsocksco.com/Envelope2.jpg", "_blank");
		}
		
		
		
		
		this.t30a.addEventListener("click", salesRepClick);
		function salesRepClick() {
			
			window.open("http://www.pandorabots.com/pandora/talk?botid=f0d4ab72ae344ee4", "_blank");
		}
		
		
		/*
		this.adcwd.addEventListener("click", amstudClick);
		function amstudClick() {
			
			window.open("https://click.linksynergy.com/fs-bin/click?id=9jRqgS9pZ30&offerid=523079.275&subid=0&type=4", "_blank");
		}
		*/
		
		
		
		
		this.shopp.addEventListener("mouseover", amstudOver.bind(this));
		function amstudOver() {
			this.shopp.alpha = .6;
		}
		
		this.shopp.addEventListener("mouseout", amstudOut.bind(this));
		function amstudOut() {
			this.shopp.alpha = 1;
		}
		
		
		
		
		this.shopp.addEventListener("click", amstudClick);
		function amstudClick() {
			
			window.open("http://shop.missingsocksco.com", "_self");
		}
		
		
		
		
		
		
		
		
		this.mis.addEventListener("mouseover", oneOver.bind(this));
		this.menBu1.addEventListener("mouseover", oneOver.bind(this));
		function oneOver() {
			this.mis.scale = 1.1;
		}  //  function oneOver
		
		
		this.mis.addEventListener("mouseout", oneOut.bind(this));
		this.menBu1.addEventListener("mouseout", oneOut.bind(this));
		function oneOut() {
			this.mis.scale = 1;
		}  //  function oneOut
		
		
		
		
		
		
		this.wh.addEventListener("mouseover", twoOver.bind(this));
		this.menBu2.addEventListener("mouseover", twoOver.bind(this));
		function twoOver() {
			this.wh.scale = 1.1;
		}  //  function oneOver
		
		
		this.wh.addEventListener("mouseout", twoOut.bind(this));
		this.menBu2.addEventListener("mouseout", twoOut.bind(this));
		function twoOut() {
			this.wh.scale = 1;
		}  //  function oneOut
		
		
		
		
		this.con.addEventListener("mouseover", threeOver.bind(this));
		this.menBu3.addEventListener("mouseover", threeOver.bind(this));
		function threeOver() {
			this.con.scale = 1.1;
		}  //  function oneOver
		
		
		this.con.addEventListener("mouseout", threeOut.bind(this));
		this.menBu3.addEventListener("mouseout", threeOut.bind(this));
		function threeOut() {
			this.con.scale = 1;
		}  //  function oneOut
		
		
		
		
		
		
		
		this.tei.addEventListener("mouseover", fourOver.bind(this));
		this.menBu4.addEventListener("mouseover", fourOver.bind(this));
		function fourOver() {
			this.tei.scale = 1.1;
		}  //  function oneOver
		
		
		this.tei.addEventListener("mouseout", fourOut.bind(this));
		this.menBu4.addEventListener("mouseout", fourOut.bind(this));
		function fourOut() {
			this.tei.scale = 1;
		}  //  function oneOut
		
		
		
		
		
		
		this.mer.addEventListener("mouseover", fiveOver.bind(this));
		this.menBu5.addEventListener("mouseover", fiveOver.bind(this));
		function fiveOver() {
			this.mer.scale = 1.1;
		}  //  function oneOver
		
		
		this.mer.addEventListener("mouseout", fiveOut.bind(this));
		this.menBu5.addEventListener("mouseout", fiveOut.bind(this));
		function fiveOut() {
			this.mer.scale = 1;
		}  //  function oneOut
		
		
		
		
		this.sal.addEventListener("mouseover", sixOver.bind(this));
		this.menBu6.addEventListener("mouseover", sixOver.bind(this));
		function sixOver() {
			this.sal.scale = 1.1;
		}  //  function oneOver
		
		
		this.sal.addEventListener("mouseout", sixOut.bind(this));
		this.menBu6.addEventListener("mouseout", sixOut.bind(this));
		function sixOut() {
			this.sal.scale = 1;
		}  //  function oneOut
		
		
		
		
		
		
		
		
		
		
		
		
		
		this.mis.addEventListener("click", m111);
		this.menBu1.addEventListener("click", m111);
		
		function m111() {
			page = 1;
			
			
		//  page 1
		thinking.visible = true;
		t1sec.visible = true;
		t2.visible = true;
		t2a.visible = true;
		t3.visible = true;
			
			
		
		
		//  page 2
		haha.visible = false;
		t8a.visible = false;
		t9a.visible = false;
		t10a.visible = false;
		t11a.visible = false;
		t12a.visible = false;
		
		//  page 3
		bla2.visible = false;
		t13a.visible = false;
		t14a.visible = false;
		t15a.visible = false;
		
		
		//  page 4
		angry.visible = false;
		t16a.visible = false;
		t17a.visible = false;
		t18a.visible = false;
		t17b.visible = false;
		t18b.visible = false;
		t17aa.visible = false;
		t17bb.visible = false;
		
		//  page 5
		t19a.visible = false;
		t20a.visible = false;
		t21a.visible = false;
		t22a.visible = false;
		t23a.visible = false;
		t24a.visible = false;
		t27a.visible = false;
		t28a.visible = false;
		te11.visible = false;
		te22.visible = false;
		
		
		//  page 6
		laptop.visible = false;
		t29a.visible = false;
		t230a.visible = false;
		
			
		//document.querySelector('iframe').setAttribute('width','0px');
		//document.querySelector('iframe').setAttribute('height', '0px');
		
		
				//$("iframe").css("width", '0px');
				//$("iframe").css("height", '0px');
		
								$("#framer2D").css('width', "0" + 'px');
								$("#framer2D").css('height', "0" + 'px');
								$("#iframe2D").css("transform", "translateY(" +  ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('width', "0" + 'px');
								$("#iframe2D").css('height', "0" + 'px');
						
			
		}  //  function m111   menBu1 click
		
		
		
		
		
		
		
		this.wh.addEventListener("click", m222);
		this.menBu2.addEventListener("click", m222);
		
		function m222() {
			
			page = 2;
			
		//  page 1
		thinking.visible = false;
		t1sec.visible = false;
		t2.visible = false;
		t2a.visible = false;
		t3.visible = false;
			
			
		
		
		//  page 2
		haha.visible = true;
		t8a.visible = true;
		t9a.visible = true;
		t10a.visible = true;
		t11a.visible = true;
		t12a.visible = true;
		
		//  page 3
		bla2.visible = false;
		t13a.visible = false;
		t14a.visible = false;
		t15a.visible = false;
		
		
		//  page 4
		angry.visible = false;
		t16a.visible = false;
		t17a.visible = false;
		t18a.visible = false;
		t17b.visible = false;
		t18b.visible = false;
		t17aa.visible = false;
		t17bb.visible = false;
		
		//  page 5
		t19a.visible = false;
		t20a.visible = false;
		t21a.visible = false;
		t22a.visible = false;
		t23a.visible = false;
		t24a.visible = false;
		t27a.visible = false;
		t28a.visible = false;
		te11.visible = false;
		te22.visible = false;
		
		
		//  page 6
		laptop.visible = false;
		t29a.visible = false;
		t230a.visible = false;
		
			
		//document.querySelector('iframe').setAttribute('width','0px');
		//document.querySelector('iframe').setAttribute('height', '0px');
		
		
								$("#framer2D").css('width', "0" + 'px');
								$("#framer2D").css('height', "0" + 'px');
								$("#iframe2D").css("transform", "translateY(" +  ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('width', "0" + 'px');
								$("#iframe2D").css('height', "0" + 'px');
		}  //  function m111   menBu1 click
		
		
		
		this.t15a.addEventListener("click", m444t15a);
		
		function m444t15a() {
		       
				var email = 'contact@MissingSocksCo.com';
		        var subject = 'Sent From MissingSocksCo.com';
		        var emailBody = 'Hey, Missing Socks Company,';
		        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
		      
			
		}  //  function m444t15a()
		
		
		
		this.con.addEventListener("click", m333);
		this.menBu3.addEventListener("click", m333);
		
		function m333() {
			
			page = 3;
			
		//  page 1
		thinking.visible = false;
		t1sec.visible = false;
		t2.visible = false;
		t2a.visible = false;
		t3.visible = false;
			
			
		
		
		//  page 2
		haha.visible = false;
		t8a.visible = false;
		t9a.visible = false;
		t10a.visible = false;
		t11a.visible = false;
		t12a.visible = false;
		
		//  page 3
		bla2.visible = true;
		t13a.visible = true;
		t14a.visible = true;
		t15a.visible = true;
		
		
		//  page 4
		angry.visible = false;
		t16a.visible = false;
		t17a.visible = false;
		t18a.visible = false;
		t17b.visible = false;
		t18b.visible = false;
		t17aa.visible = false;
		t17bb.visible = false;
		
		//  page 5
		t19a.visible = false;
		t20a.visible = false;
		t21a.visible = false;
		t22a.visible = false;
		t23a.visible = false;
		t24a.visible = false;
		t27a.visible = false;
		t28a.visible = false;
		te11.visible = false;
		te22.visible = false;
		
		
		//  page 6
		laptop.visible = false;
		t29a.visible = false;
		t230a.visible = false;
		
		
		
				ww = $(canvas).width()/2;
				hh = $(canvas).width()/2.51;
				
					$('#iframe2D').css("pointer-events", "all"); // to get the scrollbar to respond
					$("#iframe2D").css('touch-action', 'none');
								//$("#framer2D").css('transform', "translate(" +  ($(canvas).width()*.005).toString() + "px, " + ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('transform', "translate(" +  ($(canvas).width()*.004).toString() + "px, " + ($(canvas).width()*.19).toString() + "px)");
								$("#iframe2D").css('width', ($(canvas).width()/2).toString() + 'px');
								$("#iframe2D").css('height', ($(canvas).width()/2.5).toString() + 'px');
						
		
		}  //  function m111   menBu1 click
		
		
		
		
		
		
		
		
		
		this.tei.addEventListener("click", m444);
		this.menBu4.addEventListener("click", m444);
		
		function m444() {
			
			page = 4;
			
		//  page 1
		thinking.visible = false;
		t1sec.visible = false;
		t2.visible = false;
		t2a.visible = false;
		t3.visible = false;
			
			
		
		
		//  page 2
		haha.visible = false;
		t8a.visible = false;
		t9a.visible = false;
		t10a.visible = false;
		t11a.visible = false;
		t12a.visible = false;
		
		//  page 3
		bla2.visible = false;
		t13a.visible = false;
		t14a.visible = false;
		t15a.visible = false;
		
		
		//  page 4
		angry.visible = true;
		t16a.visible = true;
		t17a.visible = true;
		t18a.visible = true;
		t17b.visible = true;
		t18b.visible = true;
		t17aa.visible = true;
		t17bb.visible = true;
		
		//  page 5
		t19a.visible = false;
		t20a.visible = false;
		t21a.visible = false;
		t22a.visible = false;
		t23a.visible = false;
		t24a.visible = false;
		t27a.visible = false;
		t28a.visible = false;
		te11.visible = false;
		te22.visible = false;
		
		
		//  page 6
		laptop.visible = false;
		t29a.visible = false;
		t230a.visible = false;
		
			
		//document.querySelector('iframe').setAttribute('width','0px');
		//document.querySelector('iframe').setAttribute('height', '0px');
		
		
			
								$("#framer2D").css('width', "0" + 'px');
								$("#framer2D").css('height', "0" + 'px');
								$("#iframe2D").css("transform", "translateY(" +  ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('width', "0" + 'px');
								$("#iframe2D").css('height', "0" + 'px');
		
		}  //  function m111   menBu1 click
		
		
		
		
		
		
		
		
		
		
		this.mer.addEventListener("click", m555);
		this.menBu5.addEventListener("click", m555);
		
		function m555 () {
			
			page = 5;
			
		//  page 1
		thinking.visible = false;
		t1sec.visible = false;
		t2.visible = false;
		t2a.visible = false;
		t3.visible = false;
			
			
		
		
		//  page 2
		haha.visible = false;
		t8a.visible = false;
		t9a.visible = false;
		t10a.visible = false;
		t11a.visible = false;
		t12a.visible = false;
		
		//  page 3
		bla2.visible = false;
		t13a.visible = false;
		t14a.visible = false;
		t15a.visible = false;
		
		
		//  page 4
		angry.visible = false;
		t16a.visible = false;
		t17a.visible = false;
		t18a.visible = false;
		t17b.visible = false;
		t18b.visible = false;
		t17aa.visible = false;
		t17bb.visible = false;
		
		//  page 5
		t19a.visible = true;
		t20a.visible = true;
		t21a.visible = true;
		t22a.visible = true;
		t23a.visible = true;
		t24a.visible = true;
		t27a.visible = true;
		t28a.visible = true;
		te11.visible = true;
		te22.visible = true;
		
		
		//  page 6
		laptop.visible = false;
		t29a.visible = false;
		t230a.visible = false;
		
			
		//document.querySelector('iframe').setAttribute('width','0px');
		//document.querySelector('iframe').setAttribute('height', '0px');
		
		
								$("#framer2D").css('width', "0" + 'px');
								$("#framer2D").css('height', "0" + 'px');
								$("#iframe2D").css("transform", "translateY(" +  ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('width', "0" + 'px');
								$("#iframe2D").css('height', "0" + 'px');
			
		}  //  function m111   menBu1 click
		
		
		
		
		
		
		
		
		
		this.sal.addEventListener("click", m666);
		this.menBu6.addEventListener("click", m666);
		
		function m666() {
			
			page = 6;
			
		//  page 1
		thinking.visible = false;
		t1sec.visible = false;
		t2.visible = false;
		t2a.visible = false;
		t3.visible = false;
			
			
		
		
		//  page 2
		haha.visible = false;
		t8a.visible = false;
		t9a.visible = false;
		t10a.visible = false;
		t11a.visible = false;
		t12a.visible = false;
		
		//  page 3
		bla2.visible = false;
		t13a.visible = false;
		t14a.visible = false;
		t15a.visible = false;
		
		
		//  page 4
		angry.visible = false;
		t16a.visible = false;
		t17a.visible = false;
		t18a.visible = false;
		t17b.visible = false;
		t18b.visible = false;
		t17aa.visible = false;
		t17bb.visible = false;
		
		//  page 5
		t19a.visible = false;
		t20a.visible = false;
		t21a.visible = false;
		t22a.visible = false;
		t23a.visible = false;
		t24a.visible = false;
		t27a.visible = false;
		t28a.visible = false;
		te11.visible = false;
		te22.visible = false;
		
		
		//  page 6
		laptop.visible = true;
		t29a.visible = true;
		t230a.visible = true;
		
			
		//document.querySelector('iframe').setAttribute('width','0px');
		//document.querySelector('iframe').setAttribute('height', '0px');
		
		
								$("#framer2D").css('width', "0" + 'px');
								$("#framer2D").css('height', "0" + 'px');
								$("#iframe2D").css("transform", "translateY(" +  ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('width', "0" + 'px');
								$("#iframe2D").css('height', "0" + 'px');
			
		}  //  function m111   menBu1 click
		
		
		
		
		
		
		
		
		
		
		//document.querySelector('iframe').setAttribute('width','0px');
		//document.querySelector('iframe').setAttribute('height', '0px');
		
		
				$("iframe").css("width", '0px');
				$("iframe").css("height", '0px');
		
		
		
		
		
		window.addEventListener('resize', resizeCanvas2);			
				function resizeCanvas2() {
					//alert("resize2");
					
					if (page == 3){
		           // document.querySelector('iframe').setAttribute('width', $(window).width()/2 + 'px');
		           // document.querySelector('iframe').setAttribute('height', $(window).width()/2.51 + 'px');
						
					
						
						
			        // Code for Safari
		           // document.getElementById("framer").style.WebkitTransform = "translateY(" +  $(window).width()*.10 + "px)"; 
		            // Code for IE9
		           // document.getElementById("framer").style.msTransform = "translateY(" +  $(window).width()*.10 + "px)"; 
		            // Standard syntax
		            //document.getElementById("framer").style.transform = "translateY(" +  $(window).width()*.10 + "px)";
		                /*
								$("#iframe2D").css("transform", "translateY(" +  $(window).width()*.10 + "px)");
								$("#iframe2D").css('width', $(window).width()/2 + 'px');
								$("#iframe2D").css('height', $(window).width()/2.51 + 'px');
								*/
								$("#iframe2D").css('transform', "translate(" +  ($(canvas).width()*.004).toString() + "px, " + ($(canvas).width()*.19).toString() + "px)");
								$("#iframe2D").css('width', ($(canvas).width()/2).toString() + 'px');
								$("#iframe2D").css('height', ($(canvas).width()/2.5).toString() + 'px');
						
								
								
						
						}  //  if page == 3
					
					
				}  //  function resizeCanvas2()
				
				
				
								$("#framer2D").css('width', "0" + 'px');
								$("#framer2D").css('height', "0" + 'px');
								$("#iframe2D").css("transform", "translateY(" +  ($(canvas).width()*.10).toString() + "px)");
								$("#iframe2D").css('width', "0" + 'px');
								$("#iframe2D").css('height', "0" + 'px');
		
		/*
		this.butt.addEventListener("click", fl_ClickToPosition.bind(this));
		
		
		var isvis = 0;
		function fl_ClickToPosition()
		{console.log("isvis   " + isvis);
			if (isvis == 0){
				isvis++;
			
		//document.querySelector('iframe').setAttribute('width', '250px');
		document.querySelector('iframe').setAttribute('visible', 'false');
			
			document.querySelector('iframe').setAttribute('width', '0px');
		document.querySelector('iframe').setAttribute('height', '0px');
			}  //  isvis
			else{
				isvis = 0;
				document.querySelector('iframe').setAttribute('visible', 'false');
			
			document.querySelector('iframe').setAttribute('width', '250px');
		document.querySelector('iframe').setAttribute('height', '250px');
		document.querySelector('iframe').setAttribute('align', 'right');
			}
		} //  function 
		*/
		
		/*
		var map = document.getElementById("map");
		console.log(map);
		map.on("mousedown", mouseDown.bind(this));  
		function mouseDown(e)  
		{  
		    //clickedX = stage.mouseX;  
		   //clickedY = stage.mouseY;  
		    //isDragging = true;  
		    //console.log(this.map);
			console.log(map);
			console.log("**********************");
		}  
		*/
		
		
		
		
		
		
		//  *******************************************************           ************************************************
		
		
		
		
		
		
		
		
		this.order.addEventListener("mouseover", buyOver.bind(this));
		//this.buy.addEventListener("mouseover", buyOver.bind(this));
		
		function buyOver() {
			this.order.scale = this.order.scale * 1.05;//this.buy.scale = 1.05;
		}
		
		
		
		
		this.fac_btn.addEventListener("mouseover", facOver.bind(this));
		function facOver() {
			this.fac_btn.scale = 1.1;
			
		}
		
		
		
		this.twit_bac.addEventListener("mouseover", twitOver.bind(this));
		function twitOver() {
			
			this.twit_bac.scale = 1.1;
		}
		
		
		
		this.my_btn.addEventListener("mouseover", myOver.bind(this));
		function myOver() {
			
			this.my_btn.scale = 1.1;
		}
		
		
		
		this.my_goog.addEventListener("mouseover", googOver.bind(this));
		function googOver() {
			
			this.my_goog.scale = 1.1;
		}
		
		
		
		this.mail_btn.addEventListener("mouseover", mailOver.bind(this));
		function mailOver() {
			
			this.mail_btn.scale = 1.1;
		}
		
		
		
		this.aad_btn.addEventListener("mouseover", aadOver.bind(this));
		function aadOver() {
			
			this.aad_btn.scale = 1.1;
		}
		
		
		
		
		this.te11.addEventListener("mouseover", seeLogoOver.bind(this));
		function seeLogoOver() {
			
			this.te11.alpha = .6;
		}
		
		
		
		this.te22.addEventListener("mouseover", seeLogoOver2.bind(this));
		function seeLogoOver2() {
			
			this.te22.alpha = .6;
		}
		
		
		
		
		this.t30a.addEventListener("mouseover", salesRepOver.bind(this));
		function salesRepOver() {
			
			this.t30a.alpha = .6;
		}
		
		
		
		
		t15a.addEventListener("mouseover", mymailOver);
		function mymailOver() {
			
			t15a.alpha = .6;
		}
		
		
		//  ***********************************************************************
		
		
		
		
		
		
		
		this.order.addEventListener("mouseout", buyOut.bind(this));
		//this.buy.addEventListener("mouseout", buyOut.bind(this));
		
		function buyOut() {
			this.order.scale = this.order.scale / 1.05;//this.buy.scale = 1;
		}
		
		
		
		
		this.fac_btn.addEventListener("mouseout", facOut.bind(this));
		function facOut() {
			
			this.fac_btn.scale = 1;
		}
		
		
		
		this.twit_bac.addEventListener("mouseout", twitOut.bind(this));
		function twitOut() {
			
			this.twit_bac.scale = 1;
		}
		
		
		
		this.my_btn.addEventListener("mouseout", myOut.bind(this));
		function myOut() {
			this.my_btn.scale = 1;
			
		}
		
		
		
		this.my_goog.addEventListener("mouseout", googOut.bind(this));
		function googOut() {
			
			this.my_goog.scale = 1;
		}
		
		
		
		this.mail_btn.addEventListener("mouseout", mailOut.bind(this));
		function mailOut() {
			
			this.mail_btn.scale = 1;
		}
		
		
		
		this.aad_btn.addEventListener("mouseout", aadOut.bind(this));
		function aadOut() {
			this.aad_btn.scale = 1;
			
		}
		
		
		
		
		this.te11.addEventListener("mouseout", seeLogoOut.bind(this));
		function seeLogoOut() {
			
			this.te11.alpha = 1;
		}
		
		
		
		this.te22.addEventListener("mouseout", seeLogoOut2.bind(this));
		function seeLogoOut2() {
			
			this.te22.alpha = 1;
		}
		
		
		
		
		this.t30a.addEventListener("mouseout", salesRepOut.bind(this));
		function salesRepOut() {
			
			this.t30a.alpha = 1;
		}
		
		
		
		
		t15a.addEventListener("mouseout", mymailOut);
		function mymailOut() {
			
			t15a.alpha = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.shopp = new lib.shopp();
	this.shopp.name = "shopp";
	this.shopp.setTransform(747.5,60.4,0.463,0.4629,0,0,0,500,70);

	this.timeline.addTween(cjs.Tween.get(this.shopp).wait(1));

	// Page_6
	this.t30a = new cjs.Text("Chat with 24 hour sales representative now", "normal 400 36px 'tk-gooddog-new'", "#000099");
	this.t30a.name = "t30a";
	this.t30a.lineHeight = 49;
	this.t30a.lineWidth = 430;
	this.t30a.parent = this;
	this.t30a.setTransform(20.05,468.7);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t30a);
	}

	this.t29a = new cjs.Text("Clicking the link below will redirect you to a 24 hour sales representative", "normal 400 36px 'tk-gooddog-new'");
	this.t29a.name = "t29a";
	this.t29a.lineHeight = 49;
	this.t29a.lineWidth = 402;
	this.t29a.parent = this;
	this.t29a.setTransform(22,212);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t29a);
	}

	this.laptop = new lib.lapto2();
	this.laptop.name = "laptop";
	this.laptop.setTransform(744.95,420,0.7,0.7,0,0,0,349.9,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.laptop},{t:this.t29a},{t:this.t30a}]}).wait(1));

	// Page_5
	this.te22 = new cjs.Text("Click here to view logo sideways", "normal 400 48px 'tk-gooddog-new'", "#000099");
	this.te22.name = "te22";
	this.te22.lineHeight = 64;
	this.te22.lineWidth = 928;
	this.te22.parent = this;
	this.te22.setTransform(17,732);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.te22);
	}

	this.te11 = new cjs.Text("Click here to view logo", "normal 400 48px 'tk-gooddog-new'", "#000099");
	this.te11.name = "te11";
	this.te11.lineHeight = 64;
	this.te11.lineWidth = 656;
	this.te11.parent = this;
	this.te11.setTransform(17,652);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.te11);
	}

	this.t28a = new cjs.Text("Apply logo to clean T-shirt, or coffee mug according to the directions on your printable decal package.", "normal 400 30px 'tk-gooddog-new'");
	this.t28a.name = "t28a";
	this.t28a.lineHeight = 41;
	this.t28a.lineWidth = 896;
	this.t28a.parent = this;
	this.t28a.setTransform(12,862);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t28a);
	}

	this.t24a = new cjs.Text("Resize and print your Missing Socks Company logo onto your printable decal.  Remember to test your print out on a blank piece of paper.", "normal 400 30px 'tk-gooddog-new'");
	this.t24a.name = "t24a";
	this.t24a.lineHeight = 41;
	this.t24a.lineWidth = 948;
	this.t24a.parent = this;
	this.t24a.setTransform(12,562);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t24a);
	}

	this.t22a = new cjs.Text("Tell your mom to pick up some printable iron on or water slides for T-shirts or coffee cups, available at computer stationery stores.", "normal 400 30px 'tk-gooddog-new'");
	this.t22a.name = "t22a";
	this.t22a.lineHeight = 41;
	this.t22a.lineWidth = 952;
	this.t22a.parent = this;
	this.t22a.setTransform(12,402);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t22a);
	}

	this.t27a = new cjs.Text("Step 3", "normal 400 42px 'tk-gooddog-new'", "#FF0000");
	this.t27a.name = "t27a";
	this.t27a.lineHeight = 57;
	this.t27a.lineWidth = 266;
	this.t27a.parent = this;
	this.t27a.setTransform(12,812);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t27a);
	}

	this.t23a = new cjs.Text("Step 2", "normal 400 42px 'tk-gooddog-new'", "#FF0000");
	this.t23a.name = "t23a";
	this.t23a.lineHeight = 57;
	this.t23a.lineWidth = 276;
	this.t23a.parent = this;
	this.t23a.setTransform(12,512);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t23a);
	}

	this.t21a = new cjs.Text("Step 1", "normal 400 42px 'tk-gooddog-new'", "#FF0000");
	this.t21a.name = "t21a";
	this.t21a.lineHeight = 57;
	this.t21a.lineWidth = 268;
	this.t21a.parent = this;
	this.t21a.setTransform(12,352);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t21a);
	}

	this.t20a = new cjs.Text("Make your own Missing Socks Company merchandise", "normal 400 40px 'tk-gooddog-new'", "#000099");
	this.t20a.name = "t20a";
	this.t20a.lineHeight = 54;
	this.t20a.lineWidth = 954;
	this.t20a.parent = this;
	this.t20a.setTransform(12,272);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t20a);
	}

	this.t19a = new cjs.Text("Missing Socks Company merchandise discontinued and replaced with these great less expensive and more fun ideas", "normal 400 36px 'tk-gooddog-new'");
	this.t19a.name = "t19a";
	this.t19a.lineHeight = 49;
	this.t19a.lineWidth = 925;
	this.t19a.parent = this;
	this.t19a.setTransform(12,172);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t19a);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t19a},{t:this.t20a},{t:this.t21a},{t:this.t23a},{t:this.t27a},{t:this.t22a},{t:this.t24a},{t:this.t28a},{t:this.te11},{t:this.te22}]}).wait(1));

	// Page_4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-0,1.9).curveTo(-1.4,1.8,-2,1.1).curveTo(-2.3,0.8,-2.3,0.5).curveTo(-2.4,0.1,-2.2,-0.3).curveTo(-1.9,-1.3,-1.6,-1.5).curveTo(-1.1,-1.8,-0.4,-1.7).lineTo(-0.4,-2).lineTo(1.1,-1.7).curveTo(1.9,-1.3,2.2,-0.8).curveTo(2.7,0.3,1.8,1.4).curveTo(1.4,1.8,0.9,1.9).lineTo(0.4,2).lineTo(-0,1.9).closePath();
	this.shape.setTransform(215.1446,449.175);

	this.t18b = new cjs.Text("(He) has what appeared to be grandiose delusions in terms having the location of people's missing socks downloaded to their desktop.", "normal 800 14px 'tk-quatro'");
	this.t18b.name = "t18b";
	this.t18b.lineHeight = 20;
	this.t18b.lineWidth = 434;
	this.t18b.parent = this;
	this.t18b.setTransform(22,397);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.t18b);
	}

	this.t17b = new cjs.Text("Dr. Carl Wiebe", "normal 800 16px 'tk-quatro'");
	this.t17b.name = "t17b";
	this.t17b.lineHeight = 22;
	this.t17b.lineWidth = 374;
	this.t17b.parent = this;
	this.t17b.setTransform(22,367);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.t17b);
	}

	this.t18a = new cjs.Text("Wow, what a great auction! Prompt receipt of goods. Great information. Thanks.", "normal 800 14px 'tk-quatro'");
	this.t18a.name = "t18a";
	this.t18a.lineHeight = 20;
	this.t18a.lineWidth = 435;
	this.t18a.parent = this;
	this.t18a.setTransform(22,302);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.t18a);
	}

	this.t17a = new cjs.Text("Aggronieszka - EBay auction winner", "normal 800 16px 'tk-quatro'");
	this.t17a.name = "t17a";
	this.t17a.lineHeight = 22;
	this.t17a.lineWidth = 435;
	this.t17a.parent = this;
	this.t17a.setTransform(22,272);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.t17a);
	}

	this.t16a = new cjs.Text("Let's hear what people are saying about Missing Socks Company", "normal 400 24px 'tk-gooddog-new'");
	this.t16a.name = "t16a";
	this.t16a.lineHeight = 33;
	this.t16a.lineWidth = 428;
	this.t16a.parent = this;
	this.t16a.setTransform(22,192);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t16a);
	}

	this.angry = new lib.angr2();
	this.angry.name = "angry";
	this.angry.setTransform(738,420.05,0.7,0.7,0,0,0,340,400.1);

	this.t17aa = new lib.t17b();
	this.t17aa.name = "t17aa";
	this.t17aa.setTransform(240.05,310.45,0.9956,1,0,0,0,221,42.5);

	this.t17bb = new lib.t17bb();
	this.t17bb.name = "t17bb";
	this.t17bb.setTransform(238.05,413.95,1,1,0,0,0,220,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t17bb},{t:this.t17aa},{t:this.angry},{t:this.t16a},{t:this.t17a},{t:this.t18a},{t:this.t17b},{t:this.t18b},{t:this.shape}]}).wait(1));

	// Page_3
	this.t15a = new cjs.Text("contact@MissingSocksCo.com", "normal 400 48px 'tk-gooddog-new'", "#AA9000");
	this.t15a.name = "t15a";
	this.t15a.lineHeight = 64;
	this.t15a.lineWidth = 664;
	this.t15a.parent = this;
	this.t15a.setTransform(7,732);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t15a);
	}

	this.t14a = new cjs.Text("Contact Us At:", "normal 400 44px 'tk-gooddog-new'");
	this.t14a.name = "t14a";
	this.t14a.lineHeight = 59;
	this.t14a.lineWidth = 408;
	this.t14a.parent = this;
	this.t14a.setTransform(12,672);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t14a);
	}

	this.t13a = new cjs.Text("Your Opininions are Important to Missing Socks Company", "normal 400 68px 'tk-gooddog-new'", "#FF0000");
	this.t13a.name = "t13a";
	this.t13a.lineHeight = 90;
	this.t13a.lineWidth = 476;
	this.t13a.parent = this;
	this.t13a.setTransform(512,202);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t13a);
	}

	this.bla2 = new lib.bla2();
	this.bla2.name = "bla2";
	this.bla2.setTransform(745,390,1,1,0,0,0,245,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bla2},{t:this.t13a},{t:this.t14a},{t:this.t15a}]}).wait(1));

	// Page_2
	this.t12a = new cjs.Text("And remember, this offer comes with the special bonus offer, the cure for the hiccups, plus how to remove a bandage without harming the patient, sent direct to you.", "normal 400 36px 'tk-gooddog-new'", "#000099");
	this.t12a.name = "t12a";
	this.t12a.lineHeight = 49;
	this.t12a.lineWidth = 966;
	this.t12a.parent = this;
	this.t12a.setTransform(12,572);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t12a);
	}

	this.t11a = new cjs.Text("Yes, there is a simple mechanism robbing people of their socks.  Find it now with secure online payment.", "normal 400 36px 'tk-gooddog-new'", "#000099");
	this.t11a.name = "t11a";
	this.t11a.lineHeight = 49;
	this.t11a.lineWidth = 966;
	this.t11a.parent = this;
	this.t11a.setTransform(12,472);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t11a);
	}

	this.t10a = new cjs.Text("Just think about it, if you lost 1 sock every month, that's $36 every year ($18 if you wear mismatched socks).", "normal 400 36px 'tk-gooddog-new'", "#000099");
	this.t10a.name = "t10a";
	this.t10a.lineHeight = 49;
	this.t10a.lineWidth = 966;
	this.t10a.parent = this;
	this.t10a.setTransform(12,372);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t10a);
	}

	this.t9a = new cjs.Text("The answer is simple - the money you'll save knowing where all your missing socks are.", "normal 400 36px 'tk-gooddog-new'", "#000099");
	this.t9a.name = "t9a";
	this.t9a.lineHeight = 49;
	this.t9a.lineWidth = 966;
	this.t9a.parent = this;
	this.t9a.setTransform(12,272);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t9a);
	}

	this.t8a = new cjs.Text("Why order the location of all the missing socks sent direct to your desktop?", "normal 400 36px 'tk-gooddog-new'", "#000099");
	this.t8a.name = "t8a";
	this.t8a.lineHeight = 49;
	this.t8a.lineWidth = 966;
	this.t8a.parent = this;
	this.t8a.setTransform(12,172);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t8a);
	}

	this.haha = new lib.gg();
	this.haha.name = "haha";
	this.haha.setTransform(510,750,2,2,0,0,0,200,300);
	this.haha.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.haha},{t:this.t8a},{t:this.t9a},{t:this.t10a},{t:this.t11a},{t:this.t12a}]}).wait(1));

	// Page_1
	this.t3 = new cjs.Text("That's A $36 Value Every Year", "normal 400 44px 'tk-gooddog-new'");
	this.t3.name = "t3";
	this.t3.lineHeight = 59;
	this.t3.lineWidth = 296;
	this.t3.parent = this;
	this.t3.setTransform(32,902);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t3);
	}

	this.t2a = new cjs.Text("$1.99  CAD", "normal 400 76px 'tk-gooddog-new'", "#000099");
	this.t2a.name = "t2a";
	this.t2a.lineHeight = 101;
	this.t2a.lineWidth = 384;
	this.t2a.parent = this;
	this.t2a.setTransform(587,992);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t2a);
	}

	this.t2 = new cjs.Text("Right Here", "normal 400 76px 'tk-gooddog-new'", "#000099");
	this.t2.name = "t2";
	this.t2.lineHeight = 101;
	this.t2.lineWidth = 396;
	this.t2.parent = this;
	this.t2.setTransform(587,832);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t2);
	}

	this.t1sec = new cjs.Text("Every Missing Sock You Will Ever Lose", "normal 400 76px 'tk-gooddog-new'", "#000099");
	this.t1sec.name = "t1sec";
	this.t1sec.lineHeight = 101;
	this.t1sec.lineWidth = 326;
	this.t1sec.parent = this;
	this.t1sec.setTransform(602,242);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t1sec);
	}

	this.thinking = new lib.thinkin2();
	this.thinking.name = "thinking";
	this.thinking.setTransform(360,540,1,1,0,0,0,310,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.thinking},{t:this.t1sec},{t:this.t2},{t:this.t2a},{t:this.t3}]}).wait(1));

	// Base
	this.aad_btn = new lib.aad();
	this.aad_btn.name = "aad_btn";
	this.aad_btn.setTransform(286,1231,1,1,0,0,0,16,16);

	this.mail_btn = new lib.mail();
	this.mail_btn.name = "mail_btn";
	this.mail_btn.setTransform(246,1231,1,1,0,0,0,16,16);

	this.my_goog = new lib.goog();
	this.my_goog.name = "my_goog";
	this.my_goog.setTransform(206,1231,1,1,0,0,0,16,16);

	this.my_btn = new lib.my();
	this.my_btn.name = "my_btn";
	this.my_btn.setTransform(166,1231,1,1,0,0,0,16,16);

	this.twit_bac = new lib.twit();
	this.twit_bac.name = "twit_bac";
	this.twit_bac.setTransform(126,1231,1,1,0,0,0,16,16);

	this.fac_btn = new lib.fac();
	this.fac_btn.name = "fac_btn";
	this.fac_btn.setTransform(86,1231,1,1,0,0,0,16,16);

	this.order = new lib.orderBit();
	this.order.name = "order";
	this.order.setTransform(198.2,1312.85,0.28,0.2798,0,0,0,636.6,135.2);

	this.sp = new lib.sockPall();
	this.sp.name = "sp";
	this.sp.setTransform(777.5,1287.5,1,1,0,0,0,187.5,57.5);

	this.notex3 = new cjs.Text("Browser's Address Bar When Using PayPal", "normal 400 16px 'tk-gooddog-new'");
	this.notex3.name = "notex3";
	this.notex3.lineHeight = 23;
	this.notex3.lineWidth = 352;
	this.notex3.parent = this;
	this.notex3.setTransform(602,1162);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.notex3);
	}

	this.notex2 = new cjs.Text("Always Ensure 'PayPal' is in  YOUR", "normal 400 16px 'tk-gooddog-new'");
	this.notex2.name = "notex2";
	this.notex2.lineHeight = 23;
	this.notex2.lineWidth = 339;
	this.notex2.parent = this;
	this.notex2.setTransform(602,1142);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.notex2);
	}

	this.notex = new cjs.Text("See Below for Secure Payment", "normal 400 16px 'tk-gooddog-new'");
	this.notex.name = "notex";
	this.notex.lineHeight = 23;
	this.notex.lineWidth = 329;
	this.notex.parent = this;
	this.notex.setTransform(602,1112);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.notex);
	}

	this.pay = new lib.b();
	this.pay.name = "pay";
	this.pay.setTransform(440,1249,1,1,0,0,0,30,19);

	this.buy = new lib.bu();
	this.buy.name = "buy";
	this.buy.setTransform(483.5,1303.5,1,1,0,0,0,73.5,23.5);

	this.t7 = new cjs.Text("How to Remove a Bandage Without Harming the Patient", "normal 400 20px 'tk-gooddog-new'");
	this.t7.name = "t7";
	this.t7.lineHeight = 28;
	this.t7.lineWidth = 474;
	this.t7.parent = this;
	this.t7.setTransform(32,1172);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t7);
	}

	this.t6 = new cjs.Text("Bonus Included:  The Cure For the Hiccups plus", "normal 400 20px 'tk-gooddog-new'");
	this.t6.name = "t6";
	this.t6.lineHeight = 28;
	this.t6.lineWidth = 480;
	this.t6.parent = this;
	this.t6.setTransform(32,1152);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t6);
	}

	this.t5 = new cjs.Text("A New Window Will Open Upon Completion of Payment", "normal 400 20px 'tk-gooddog-new'");
	this.t5.name = "t5";
	this.t5.lineHeight = 28;
	this.t5.lineWidth = 549;
	this.t5.parent = this;
	this.t5.setTransform(32,1122);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t5);
	}

	this.t4 = new cjs.Text("Purchase Order for Short 200 Word e-book", "normal 400 20px 'tk-gooddog-new'");
	this.t4.name = "t4";
	this.t4.lineHeight = 28;
	this.t4.lineWidth = 404;
	this.t4.parent = this;
	this.t4.setTransform(32,1102);
	if(!lib.properties.webfonts['tk-gooddog-new']) {
		lib.webFontTxtInst['tk-gooddog-new'] = lib.webFontTxtInst['tk-gooddog-new'] || [];
		lib.webFontTxtInst['tk-gooddog-new'].push(this.t4);
	}

	this.nop = new lib.nop();
	this.nop.name = "nop";
	this.nop.setTransform(777.5,1150,1,1,0,0,0,187.5,50);

	this.sal = new cjs.Text("24 hr sales rep", "normal 800 16px 'tk-quatro'", "#FFFFFF");
	this.sal.name = "sal";
	this.sal.textAlign = "center";
	this.sal.lineHeight = 22;
	this.sal.lineWidth = 100;
	this.sal.parent = this;
	this.sal.setTransform(870,115);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.sal);
	}

	this.mer = new cjs.Text("Merchandise", "normal 800 16px 'tk-quatro'", "#FFFFFF");
	this.mer.name = "mer";
	this.mer.textAlign = "center";
	this.mer.lineHeight = 22;
	this.mer.lineWidth = 108;
	this.mer.parent = this;
	this.mer.setTransform(691.7,115);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.mer);
	}

	this.tei = new cjs.Text("Testomonials", "normal 800 16px 'tk-quatro'", "#FFFFFF");
	this.tei.name = "tei";
	this.tei.textAlign = "center";
	this.tei.lineHeight = 22;
	this.tei.lineWidth = 100;
	this.tei.parent = this;
	this.tei.setTransform(541,115);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.tei);
	}

	this.con = new cjs.Text("Contact Us", "normal 800 16px 'tk-quatro'", "#FFFFFF");
	this.con.name = "con";
	this.con.textAlign = "center";
	this.con.lineHeight = 22;
	this.con.lineWidth = 100;
	this.con.parent = this;
	this.con.setTransform(389,114.95);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.con);
	}

	this.wh = new cjs.Text("Why", "normal 800 16px 'tk-quatro'", "#FFFFFF");
	this.wh.name = "wh";
	this.wh.textAlign = "center";
	this.wh.lineHeight = 22;
	this.wh.lineWidth = 100;
	this.wh.parent = this;
	this.wh.setTransform(262,115);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.wh);
	}

	this.mis = new cjs.Text("Missing Socks Co.", "normal 800 16px 'tk-quatro'", "#FFFFFF");
	this.mis.name = "mis";
	this.mis.textAlign = "center";
	this.mis.lineHeight = 22;
	this.mis.lineWidth = 157;
	this.mis.parent = this;
	this.mis.setTransform(110,115);
	if(!lib.properties.webfonts['tk-quatro']) {
		lib.webFontTxtInst['tk-quatro'] = lib.webFontTxtInst['tk-quatro'] || [];
		lib.webFontTxtInst['tk-quatro'].push(this.mis);
	}

	this.menBu6 = new lib.menBut();
	this.menBu6.name = "menBu6";
	this.menBu6.setTransform(870,125,1.3333,1,0,0,0,75,15);

	this.menBu5 = new lib.menBut();
	this.menBu5.name = "menBu5";
	this.menBu5.setTransform(693,125,1,1,0,0,0,75,15);

	this.menBu4 = new lib.menBut();
	this.menBu4.name = "menBu4";
	this.menBu4.setTransform(541,125,1,1,0,0,0,75,15);

	this.menBu3 = new lib.menBut();
	this.menBu3.name = "menBu3";
	this.menBu3.setTransform(389,125,1,1,0,0,0,75,15);

	this.menBu2 = new lib.menBut();
	this.menBu2.name = "menBu2";
	this.menBu2.setTransform(262,125,0.6667,1,0,0,0,75,15);

	this.menBu1 = new lib.menBut();
	this.menBu1.name = "menBu1";
	this.menBu1.setTransform(110,125,1.3333,1,0,0,0,75,15);

	this.en = new lib.env();
	this.en.name = "en";
	this.en.setTransform(256.65,59.8,0.65,0.6498,0,0,0,400,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.menBu1},{t:this.menBu2},{t:this.menBu3},{t:this.menBu4},{t:this.menBu5},{t:this.menBu6},{t:this.mis},{t:this.wh},{t:this.con},{t:this.tei},{t:this.mer},{t:this.sal},{t:this.nop},{t:this.t4},{t:this.t5},{t:this.t6},{t:this.t7},{t:this.buy},{t:this.pay},{t:this.notex},{t:this.notex2},{t:this.notex3},{t:this.sp},{t:this.order},{t:this.fac_btn},{t:this.twit_bac},{t:this.my_btn},{t:this.my_goog},{t:this.mail_btn},{t:this.aad_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(496.7,700,493.3,650.5999999999999);
// library properties:
lib.properties = {
	id: 'E70C097AA1D5884498497A61E8101AAF',
	width: 1000,
	height: 1400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images9/MissingSocksCoJS10_newAtlas_1.png", id:"MissingSocksCoJS10_newAtlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E70C097AA1D5884498497A61E8101AAF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;