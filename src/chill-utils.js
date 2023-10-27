const CHILL = {

	cookie : {
		set : function(name, value, days) {
			let expires = '';
			if(days) {
				let date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			} else {
				expires = '';
			}
			document.cookie = name+"="+value+expires+"; path=/";
		},
		get : function(name) {
			let nameEQ = name + "=";
			let ca = document.cookie.split(';');
			for(let i=0;i < ca.length;i++) {
				let c = ca[i];
				while(c.charAt(0)===' ') {
					c = c.substring(1,c.length);
				}
				if(c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length,c.length);
				}
			}
			return null;
		},
		remove : function(name) {
			CHILL.cookie.set(name,"",-1);
		}
	},

	local : {
		set : function(name, value) {
			localStorage.setItem(name, value);
		},
		get : function(name) {
			localStorage.getItem(name);
		},
		remove : function(name) {
			localStorage.removeItem(name);
		}
	},

	popupWindow : function(url, title, w, h) {
		let left = (screen.width/2)-(w/2);
		let top = (screen.height/2)-(h/2);
		return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	},

	getPosition : function(selector) {
		let element = document.querySelector(selector);
		let xPosition = 0;
		let yPosition = 0;
		while(element) {
			xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
			yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
			element = element.offsetParent;
		}
		return { x: xPosition, y: yPosition };
	},

	windowWidth : function() {
		return window.innerWidth;
	},

	windowHeight : function() {
		return window.innerHeight;
	},

	hasUrlSegment : function(segment) {
		let res = false;
		let segments = window.location.pathname.split('/');
		segments.forEach((seg) => {
			if (seg === segment) {
				res = true;
			}
		});
		return res;
	},

	urlParams : function(param) {
		let queryString = window.location.search;
		let urlSearchParams = new URLSearchParams(queryString);
		let params = {};
		for (const [key, value] of urlSearchParams) {
			params[key] = value;
		}
		return (typeof params[param] !== 'undefined') ? params[param] : params;
	},

	resize : {
		init : function(callback) {
			if(typeof callback === 'function') {
				CHILL.resize.resizeTimeout='';
				CHILL.resize.set(callback);
				callback();
			}
		},
		set : function(callback) {
			window.addEventListener('resize', function() {
				clearTimeout(CHILL.resize.resizeTimeout);
				CHILL.resize.resizeTimeout = setTimeout(callback, 100);
			});
		}
	},

	matchHeight : function(fromSelector, toSelector) {
		if (fromSelector && toSelector) {
			let fromEl = document.querySelector(fromSelector);
			let toEl = document.querySelector(toSelector);
			if (fromEl && toEl) {
				let fromHeight = fromEl.offsetHeight;
				document.querySelector(toSelector).setAttribute("style", "height:"+fromHeight+"px;");
			}
		}
	},

	evenHeight : function(selector) {
		let maxH = 0;
		let test = 0;
		let els = document.querySelectorAll(selector);
		if (els) {
			els.forEach((el) => {
				test = el.offsetHeight;
				if (maxH < test) {
					maxH = test;
				}
			});
			els.forEach((el) => {
				el.setAttribute("style", "min-height:"+maxH+"px;");
			});
		}
	},

	copyToClipboard : function(selector) {
		document.querySelector(selector).select();
		document.execCommand("copy");
	},

	isVisible : function(selector) {
		let el = document.querySelector(selector);
		return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}

};