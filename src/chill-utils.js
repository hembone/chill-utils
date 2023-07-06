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

	popupWindow : function(url, title, w, h) {
		let left = (screen.width/2)-(w/2);
		let top = (screen.height/2)-(h/2);
		return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	},

	getPosition : function(element) {
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

	// CHILL.hasUrlSegment('segment-name');
	// Requires jQuery
	hasUrlSegment : function(segment) {
		let res = false;
		let segments = window.location.pathname.split('/');
		jQuery.each(segments, function(idx, val) {
			if (val === segment) {
				res = true;
			}
		});
		return res;
	},

	// let requestedParam = CHILL.urlParam('name');
	// let allParams = CHILL.urlParam();
	urlParam : function(param) {
		let vars = {};
		let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
			function(m,key,value) {
				vars[key] = value;
			});
		return (typeof vars[param] !== 'undefined') ? vars[param] : vars;
	},

	// CHILL.scrollTo('.contact-form', 200);
	// Requires jQuery
	scrollTo : function(selector, speed) {
		let offset = jQuery(selector).offset();
		jQuery('html, body').animate({
			scrollTop: offset.top
		}, speed);
	},

	// CHILL.isScrolled.init();
	// When scrolled, ".scroll-active" will be added to all elements with the ".is-scrolled" class.
	// The offset defaults to 10px. You can change it by adding a parameter: CHILL.isScrolled.init(20);
	// Requires jQuery
	isScrolled : {
		init : function(offset) {
			CHILL.isScrolled.check(offset);
			jQuery(window).scroll(function() {
				CHILL.isScrolled.check(offset);
			});
		},
		check : function(offset) {
			let os = 10;
			if (offset) {
				os = offset;
			}
			if (jQuery(window).scrollTop() > os) {
				jQuery('.is-scrolled').addClass('scroll-active');
			} else {
				jQuery('.is-scrolled').removeClass('scroll-active');
			}
		}
	},

	// Is the element visible in the viewport.
	// Requires jQuery
	isVisible : function(selector) {
		jQuery(window).scroll(function() {
			let top_of_element    = jQuery(selector).offset().top;
			let bottom_of_element = jQuery(selector).offset().top + jQuery(selector).outerHeight();
			let bottom_of_screen  = jQuery(window).scrollTop() + jQuery(window).innerHeight();
			let top_of_screen     = jQuery(window).scrollTop();
			return (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element);
		});
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

	// CHILL.matchHeight('.fromClass', '.toClass');
	// CHILL.matchHeight('#fromId', '#toId');
	// Match the height of the fromSelector to the toSelector.
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

	// CHILL.evenHeight('.elementClass');
	// Find all selected elements and match heights with the tallest one.
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

	// Requires jQuery
	copyToClipboard : function(selector) {
		jQuery(selector).select();
		document.execCommand("copy");
	}
};