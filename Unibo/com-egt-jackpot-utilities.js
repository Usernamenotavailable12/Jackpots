var imageLoaded = !1, isWaitingToLoadImage = !1;


function maskUsername(username) {
	// Return early if username is null, undefined or empty
	if (!username) return '';
	if (username.length <= 2) return username;

	// Get first and last characters
	const firstChar = username.charAt(0);
	const lastChar = username.charAt(username.length - 1);

	// Return masked string with exactly 5 asterisks between first and last char
	return firstChar + '*****' + lastChar;
}

function PopUp(h, w, d) {
	var b = this;
	CENTER = "com-egt-jackpot-html-center";
	LOGO = "com-egt-jackpot-html-logoPopUp";
	h = $(h);
	LOGO_HTML = $('<div class="com-egt-jackpot-html-logoPopUp"></div>');
	DIV_HTML = '<div class="com-egt-jackpot-html-div"></div>';
	MASK_HTML = '<div class="com-egt-jackpot-html-popUpMask"></div>';
	LAST_PRICE_HTML = '<span id="com-egt-jackpot-html-lastPrice"></span>';
	b.box = $('<div class="com-egt-jackpot-html-popUp"></div>').css({
		opacity: 0, width: d, borderWidth: w.borderWidth,
		borderStyle: "solid", borderColor: w.borderColor
	});
	b.topWinText = $('<span id="com-egt-jackpot-html-topWin"></span>');
	b.topWinDate = $('<span id="com-egt-jackpot-html-topWinDate"></span>').addClass("com-egt-jackpot-html-date").addClass("com-egt-jackpot-html-right").css({ color: w.dateColor });
	b.box.append($(DIV_HTML).append(b.topWinText).append(b.topWinDate));
	b.topPrice = $('<span id="com-egt-jackpot-html-topPrice"></span>').addClass("com-egt-jackpot-html-price");
	b.box.append($(DIV_HTML).addClass(CENTER).append(b.topPrice).append('<span class="com-egt-jackpot-html-cur"></span>'));
	b.box.append('<span class="com-egt-jackpot-html-divider"></span>');
	b.countWinsText = $('<span id="com-egt-jackpot-html-countWins"></span>');
	b.countWinsNumber = $('<span id="com-egt-jackpot-html-countWinsNumber"></span>').addClass("com-egt-jackpot-html-count").addClass("com-egt-jackpot-html-right");
	b.box.append($(DIV_HTML).append(b.countWinsText).append(b.countWinsNumber));
	b.box.append('<span class="com-egt-jackpot-html-divider"></span>');
	b.lastWinText = $('<span id="com-egt-jackpot-html-lastWin"></span>');
	b.lastWinDate = $('<span id="com-egt-jackpot-html-lastWinDate"></span>').addClass("com-egt-jackpot-html-date").addClass("com-egt-jackpot-html-right").css({ color: w.dateColor });
	b.box.append($(DIV_HTML).append(b.lastWinText).append(b.lastWinDate));
	b.lastWinner = $('<span id="com-egt-jackpot-html-lastWinner"></span>').css({ color: w.lastWinnerUsernameColor });
	b.box.append($(DIV_HTML).append(b.lastWinner));
	b.lastPrice = $(LAST_PRICE_HTML).addClass("com-egt-jackpot-html-price");
	b.box.append($(DIV_HTML).addClass(CENTER).append(b.lastPrice).append('<span class="com-egt-jackpot-html-cur"></span>'));
	b.currency = $(".com-egt-jackpot-html-cur");
	b.box.append($('<span class="com-egt-jackpot-html-divider"></span>').addClass("com-egt-jackpot-html-last"));
	w.logoPopUp && (b.logo = $(LOGO_HTML).css({ height: 25 }));
	b.box.append(b.logo);
	b.before = $('<span class="com-egt-jackpot-html-before"></span>');
	b.box.prepend(b.before);
	b.after = $('<span class="com-egt-jackpot-html-after"></span>');
	b.box.append(b.after);
	b.position = w.popUpBoxPosition;
	b.generateArrow = function (c, d, q, x, m, z) {
		var l = c + 2 * m;
		switch (q) {
			case "bottom":
				b.after.css({
					bottom: "100%",
					left: x,
					marginLeft: -c,
					borderLeft: c + "px solid transparent",
					borderRight: c + "px solid transparent",
					borderBottom: c + "px solid " + d
				});
				b.before.css({
					bottom: "100%",
					left: x,
					marginLeft: -l,
					borderLeft: l + "px solid transparent",
					borderRight: l + "px solid transparent",
					borderBottom: l + "px solid",
					borderBottomColor: z
				});
				break;
			case "top":
				b.after.css({
					top: "100%",
					left: x,
					marginLeft: -c,
					borderLeft: c + "px solid transparent",
					borderRight: c + "px solid transparent",
					borderTop: c + "px solid " + d
				});
				b.before.css({
					top: "100%",
					left: x,
					marginLeft: -l,
					borderLeft: l + "px solid transparent",
					borderRight: l + "px solid transparent",
					borderTop: l + "px solid",
					borderTopColor: z
				});
				break;
			case "left":
				b.after.css({
					left: "100%",
					top: x,
					marginTop: -c,
					borderTop: c + "px solid transparent",
					borderBottom: c + "px solid transparent",
					borderLeft: c + "px solid " + d
				});
				b.before.css({
					left: "100%",
					top: x,
					marginTop: -l,
					borderTop: l + "px solid transparent",
					borderBottom: l + "px solid transparent",
					borderLeft: l + "px solid",
					borderLeftColor: z
				});
				break;
			case "right":
				b.after.css({
					right: "100%",
					top: x,
					marginTop: -c,
					borderTop: c + "px solid transparent",
					borderBottom: c + "px solid transparent",
					borderRight: c + "px solid " + d
				}), b.before.css({
					right: "100%",
					top: x,
					marginTop: -l,
					borderTop: l + "px solid transparent",
					borderBottom: l + "px solid transparent",
					borderRight: l + "px solid",
					borderRightColor: z
				})
		}
		return l - m
	};
	b.updatePopUpWidth = function (c) {
		b.box.css({ width: c })
	};
	b.hideAllPopups = function () {
		b.box.css({ opacity: 0 })
	};
	b.visible = function (c) {
		"undefined" == typeof c || c ? b.box.css("display", "block") : b.box.css("display",
			"none")
	};
	return this
}; function RollingComponent(h, w, d, b) {
	var sadasdlas, f = this;
	f.id = w;
	f.resourceURL = "";
	void 0 !== d.resourceURL && d.resourceURL && 0 < d.resourceURL.length && (f.resourceURL = d.resourceURL + "/");
	f.resourceURL = f.resourceURL.replace(/\/+$/img, "/");
	BOX_HTML = '<div class="com-egt-jackpot-html-box"><div class="range"></div></div>';
	DUMMY_IMG_HTML = '<img src="' + f.resourceURL + 'img/dummy.webp" class="com-egt-jackpot-html-dummyImg" usemap="#' + w + '">';
	MAP_HTML = '<map name="' + w + '"></map>';
	AREA_HTML = '<area shape="poly" href="javascript: void(0);">';
	LEVEL_HTML = '<div class="com-egt-jackpot-html-level"></div>';
	CURRENCY_TEXT = '<span class="com-egt-jackpot-html-currencyText"></span>';
	sadasdlas = '<div class="com-egt-jackpot-html-currency">' + CURRENCY_TEXT + "</div>";
	f.generateLevels = function (b, c) {
		$(this.level).css({ width: c, height: c, backgroundImage: 'url("' + this.resourceURL + "img/" + b + '.png")' })
	};
	f.box = $(BOX_HTML);
	$(h).css({ padding: d.boxPadding + "px 0", position: "relative" });
	h.append(f.box.addClass("class-md com-egt-jackpot-html-" + w));
	d.logo || f.box.addClass("com-egt-jackpot-html-no-logo");
	d.boxWidthEqual && f.box.addClass("com-egt-jackpot-html-equal");
	f.box.css({
		borderWidth: d.borderWidth,
		borderRadius: d.borderRadius,
		borderStyle: "solid",
		borderColor: d.borderColor,
	});
	f.dummyImg = $(DUMMY_IMG_HTML);
	f.dummyImg.map = $(MAP_HTML);
	f.dummyImg.map.area = $(AREA_HTML);
	f.level = $(LEVEL_HTML).css({
		left: -(d.levelSize / 2 + d.borderWidth / 2) + "px",
		top: (d.boxHeight - d.levelSize) / 2 - d.borderWidth,
	});
	f.level.attr("width", f.id == "II" ? 28 : d.levelSize);
	f.level.attr("height", f.id == "II" ? 36 : d.levelSize);
	f.generateLevels(w, d.levelSize);
	f.currency = $(sadasdlas).css({
		lineHeight: d.boxHeight / 4 + "px", fontSize: 14 + "px"
	});
	f.box.height = 900

	f.jackpotBox = new RollingNumberView(f.box, d, b);
	f.box.x = f.box.offset().left - h.offset().left;
	f.box.y = f.box.position().top;
	f.box.width = f.box.outerWidth();
	f.box.height = f.box.outerHeight();
	f.box.border = (f.box.outerWidth() - f.box.innerWidth()) / 2;
	f.showPopUpTween = null;
	f.hidePopUpTween = null;
	f.isPopUpOpen = null;
	f.append = function () {
		f.box.append(f.level);
		f.box.append(f.jackpotBox);
		f.box.append(f.currency);
		f.box.append(f.dummyImg);
		f.box.append(f.dummyImg.map);
		f.dummyImg.map.append(f.dummyImg.map.area);
		f.setClickableArea()
	};
	f.setCurrency = function (b) {
		f.currency.children().html(b)
	};
	f.visible = function (b) {
		"undefined" == typeof b || b ? f.box.css("display", "block") : f.box.css("display", "none")
	};
	f.setClickableArea = function () {
		f.updateProps();
		f.dummyImg.css({ top: -f.box.border, left: -f.box.border, width: f.box.width, height: f.box.height });
		f.dummyImg.map.area.coords = [0, 0, f.box.width, 0, f.box.width, f.box.height, 0, f.box.height];
		f.dummyImg.map.area.attr("coords", [0, 0, f.box.width,
			0, f.box.width, f.box.height, 0, f.box.height])
	};
	f.updateProps = function () {
		f.box.x = f.box.offset().left - h.offset().left;
		f.box.y = f.box.position().top;
		f.box.width = f.box.outerWidth();
		f.box.height = f.box.outerHeight();
		f.box.border = (f.box.outerWidth() - f.box.innerWidth()) / 2
	};
	f.updateClickableArea = function (b, c, d, z) {
		var l = f.dummyImg.map.area.coords, g = f.box.width, n = f.box.height, e = [];
		if ("bottom" == z) var D = (g - b) / 2, a = 0, u = 0; else "top" == z ? (D = (g - b) / 2, a = c + d, u = 0) : "right" == z ? (a = D = (c - n) / 2, u = 0) : "left" == z && (a = D = (c - n) / 2, u = b + d);
		for (var J = 0; J < l.length; J++) {
			0 == J && "left" == z && (e.push(0), e.push(0), e.push(b), e.push(0));
			if (2 == J && "top" == z) for (var r = 0; 4 > r; r++)2 > r ? e.push(D) : e.push(g - D), 0 < r && 3 > r ? e.push(0) : e.push(a);
			if (4 == J && "right" == z) for (r = 0; 4 > r; r++)0 < r && 3 > r ? e.push(g + d + b) : e.push(g + d), 2 > r ? e.push(0) : e.push(c);
			if (6 == J && "bottom" == z) for (r = 0; 4 > r; r++)2 > r ? e.push(g - D) : e.push(D), 0 < r && 3 > r ? e.push(n + d + c) : e.push(n);
			0 != J % 2 ? e.push(l[J] + a) : 2 != J && 4 != J || "right" != z ? 0 != J && 6 != J || "left" != z ? e.push(l[J] + u) : e.push(l[J] + u - d) : e.push(l[J] + u + d);
			J == l.length - 1 &&
				"left" == z && (e.push(b), e.push(c), e.push(0), e.push(c))
		}
		f.dummyImg.map.area.attr("coords", e)
	}
}; function RollingNumberView(h, w, d) {
	var b = this;
	height = w.boxHeight - 2 * w.borderWidth;
	_finalValue = _finalCentValue = _totalTime = _timePerCent = _oldDirection = _direction = _delta = b._currValue = 0;
	b.maxDigits = 21;
	b._numbers = [];
	b._digitTweens = [];
	b._digitTweens.alpha = 0;
	b._failSafeTween;
	b._dummyObject = { value: 0 };
	b.value = $('<div class="com-egt-jackpot-html-value"></div>');
	h.append(b.value);
	b.value.append($('<div class="com-egt-jackpot-html-numbers"></div>').addClass("com-egt-jackpot-html-first"));
	b._numbers.comma = [];
	for (h = 0; h < b.maxDigits; h++) {
		w = $('<span class="com-egt-jackpot-html-old"></span>');
		d = $('<span class="com-egt-jackpot-html-new"></span>');
		var c = $('<span class="com-egt-jackpot-html-digit"></span>'), f = $('<div class="com-egt-jackpot-html-numbers"></div>').append(c.append(w).append(d)).css({ display: "none" });
		f.css({ lineHeight: height + "px" });
		f.visible = !1;
		b.value.append(f);
		b._numbers.push(f);
		b._numbers[h].digits = c;
		b._numbers[h].digits.oldNum = w;
		b._numbers[h].digits.oldNum.text(0);
		b._numbers[h].digits.newNum = d;
		h == b.maxDigits - 3 && (
			w = $('<div class="com-egt-jackpot-html-numbers"></div>').addClass("com-egt-jackpot-html-dot").append($("<span>.</span>")).css({ display: "none" }), w.css({ lineHeight: height + "px" }), b.value.append(w), b._numbers.dot = w
		)

		for (let i = 6, index = 0; i < b.maxDigits; i += 3, index++) {
			if (h === b.maxDigits - i) {
				let w = $('<div class="com-egt-jackpot-html-numbers"></div>')
					.addClass("com-egt-jackpot-html-dot")
					.append($("<span>,</span>"))
					.css({ display: "none", lineHeight: height + "px" });
		
				b.value.append(w);
				b._numbers.comma[index] = w;
			}
		}
		
	}
	b.isAnimating = function () {
		for (var c = b._digitTweens.length, d = 0; d < c; d++)if (b._digitTweens[d]) return !0;
		return b._failSafeTween ? !0 : !1
	};
	b.complete = function (c) {
		b.isAnimating() && TweenMax.to(c, .3, { alpha: 0, ease: Linear.easeNone, onComplete: onFadeOutComplete })
	};
	b.setValue = function (c, d, f) {
		b._finalCentValue = c;
		b._finalValue = c;
		b._totalTime = f;
		d ? (b._delta = b._currValue - c, 0 != b._delta && (d = b._direction, b._direction = 0 > b._delta ? -1 : 1, b._oldDirection = b._direction, b._timePerCent = Math.abs(f / b._delta), b.isAnimating() ? (d != b._direction && (b._oldDirection = d), b._failSafeTween && (b._failSafeTween.kill(), b._failSafeTween = null, b._finalValue = b._dummyObject.value, b.setFinalValue(), b._finalValue = c, b.animateDigit(b.maxDigits - 1))) : b.animateDigit(b.maxDigits - 1))) : b.setFinalValue()
	};
	b.setFinalValue =
		function () {
			var c = this._currValue = this._finalValue, b = this._numbers.length;
			c > Math.pow(10, b) - 1 && (c %= Math.pow(10, b));
			var c = c.toString(), d = c.length;
			1 >= d ? c = "00" + c : 2 >= d && (c = "0" + c);
			for (var d = c.length, f = 0; f < b; f++)f >= b - d ? (this._numbers[f].css({ display: "block" }).digits.oldNum.html(c[f - (b - c.length)]), this._numbers[f].visible = !0) : (this._numbers[f].css({ display: "none" }), this._numbers[f].visible = !1);
			this._digitTweens.alpha = 1;
			this._numbers.dot.css({ display: "block" })
			let thresholds = [100000, 100000000, 100000000000, 100000000000000, 100000000000000000];

			thresholds.forEach((threshold, index) => {
				if (this._finalValue >= threshold) {
					this._numbers.comma[index].css({ display: "block" });
				}
			});
			
		};
	b.animateDigit = function (c) {
		var b = this;
		if (0 != c) if (b._digitTweens[c] &&
			b.complete(b._digitTweens[c]), .02 > b._timePerCent) b._dummyObject.value = b._currValue, b._dummyObject.finalValue = b._finalValue, b._failSafeTween = TweenMax.to(b._dummyObject, b._totalTime, {
				value: b._finalCentValue,
				ease: Linear.easeNone,
				roundProps: ["value"],
				onUpdate: b.onFailSaveTweenUpdate,
				onComplete: function () {
					b._failSafeTween = null
				}
			}); else {
			var d = b._numbers[c].digits, f = d.oldNum, l = d.newNum, g = parseInt(f.text()), n = g - 1 * b._direction;
			-1 == b._direction ? (9 < n && (n = 0), l.html(n.toString())) : (0 > n && (n = 9), l.html(g.toString()),
				f.html(n.toString()));
			if (-1 == b._direction && 9 == g || 1 == b._direction && 0 == g) b._numbers[c - 1].visible || (b._numbers[c - 1].css({ display: "block" }), b._numbers[c - 1].visible = !0), b.animateDigit(c - 1);

			b._digitTweens[c] = TweenMax.to(d, b._timePerCent, {
				top: (80 * b._direction) + '%',
				ease: Linear.easeNone,
				onComplete: b.onCentAnimationComplete,
				onCompleteParams: [c]
			});
		}
	};
	b.onCentAnimationComplete = function (c) {
		b._digitTweens[c] = null;
		var d = b._numbers[c].digits;
		-1 == b._oldDirection && (d.css("top", 0), d.oldNum.html(d.newNum.text()));
		c == b.maxDigits -
			1 && (b._currValue += -1 * b._oldDirection, b._oldDirection = b._direction, b._currValue != b._finalValue && b.animateDigit(b.maxDigits - 1))
	};
	b.onFailSaveTweenUpdate = function () {
		b._finalValue = b._dummyObject.value;
		b.setFinalValue()
	};
	b.onFadeOutComplete = function () {
		b._failSafeTween && (b._finalValue = b._dummyObject.finalValue);
		b.killTweens();
		setFinalValue()
	};
	b.killTweens = function () {
		for (var c = b._digitTweens.length, d = 0; d < c; d++)b._digitTweens[d] && b._digitTweens[d].kill(), b._digitTweens[d] = null;
		b._failSafeTween && b._failSafeTween.kill();
		b._failSafeTween = null
	}
}; (function () {
	function h() {
		var a = $(window).height();
		d.removeClass();
		a < l && d.toggleClass("com-egt-jackpot-html-md"); //"com-egt-jackpot-html-xsm"
		a >= l && a < g && d.toggleClass("com-egt-jackpot-html-md"); //"com-egt-jackpot-html-sm"
		a >= g && a < n && d.toggleClass("com-egt-jackpot-html-xsm"); //"com-egt-jackpot-html-md"
		a >= n && a < e && d.toggleClass("com-egt-jackpot-html-xsm"); //"com-egt-jackpot-html-lg"
		a >= e && d.toggleClass("com-egt-jackpot-html-xsm") //"com-egt-jackpot-html-xlg"
	}


	var w, d, b, c, f, q, x, m, z, l, g, n, e;
	testRandom = !1;
	var D = {
		LargestWinner: {
			EN: "Largest Winner",
		},
		NumberOfWinners: {
			EN: "Number of  winners:",
		}, LastWinner: {
			EN: "Last Winner:",
		}
	}, a = "", u = [], J = [], r = [], Y = 0, B, P, G, N = {
		LargestWinner: "",
		DateOfLargestWin: "",
		NumberOfWinners: "",
		LastWinner: "",
		DateOfLastWinner: "",
		LastWinnerAmount: "",
		Currency: ""
	}, y = {
		LargestWinner: "",
		DateOfLargestWin: "",
		NumberOfWinners: "",
		LastWinner: "",
		DateOfLastWinner: "",
		LastWinnerAmount: "",
		Currency: ""
	};
	$.ajaxSetup({ cache: !1 });
	var E = document.all && !document.addEventListener, A = document.all && !window.atob;
	EgtJackpotComponent = function () {
		function H(a) {
			this.first = !0;
			a.logo = !0;
			a.autoUpdate = !0;
			a.logoPopUp = !1;
			a.boxWidthEqual = !1;
			a.levelSize = 32;
			a.boxHeight = 34;
			a.boxPadding = 10;
			a.borderWidth = 1;
			a.borderRadius = 6;
			a.borderColor = "#FC9502";
			a.dateColor = "#b2dcea";
			a.lastWinnerUsernameColor = "#aac1cf";
			a.popUpBoxPosition = "top";
			a.popUpBoxBackground = "#000000";
			a.popUpBoxWidth = 300;
			a.buttonURL = "";
			a.buttonText = "Play now!";
			a.buttonWidth = 150;
			a.buttonHeight = 30;
			a.buttonBackground = "#ff8000";
			a.buttonBorderColor = "#ff0000";
			a.buttonColor = "#ffffff";
			w = a.URL;
			d = $("#com-egt-jackpot-html-jackpotBanner");
			b = "/";
			c = a.lang;
			f = a.requestInterval;
			x = a.popUpBoxPosition;
			m = a.popUpBoxWidth;
			q = a.autoUpdate;
			l = a.xtra_small;
			g = a.small;
			n = a.medium;
			e = a.large;
			this.resourceURL = "";
			void 0 !== a.resourceURL && a.resourceURL && 0 < a.resourceURL.length && (this.resourceURL = a.resourceURL + "/");
			this.resourceURL = this.resourceURL.replace(/\/+$/img, "/");
			if (E) z = "Oops your browser is not supported!", this.appendIE8Box(a.boxHeight); else {
				h();
				this.Club;
				this.Diamond;
				this.Diamond = new RollingComponent(d, "II", a, { maxDigits: a.maxDigits[1] });
				this.Club = new RollingComponent(d, "I", a, { maxDigits: a.maxDigits[0] });
				this.createDiv(d).addClass("com-egt-jackpot-html-clear-fix");
				a.buttonURL && d.append($("<a></a>").attr({
					href: a.buttonURL,
					alt: a.buttonText
				}).addClass("com-egt-jackpot-html-button").css({
					color: a.buttonColor,
					backgroundColor: a.buttonBackground,
					borderColor: a.buttonBorderColor,
					width: a.buttonWidth,
					height: a.buttonHeight,
					lineHeight: a.buttonHeight + "px"
				}).html(a.buttonText));
				B = "undefined" != typeof m || this.Club.box.outerWidth() > m ? new PopUp(d, a, this.Club.box.outerWidth() - 20) : new PopUp(d, a, m);
				B.visible(!1);
				P = B.generateArrow(10, a.popUpBoxBackground, a.popUpBoxPosition, "50%", a.borderWidth, a.borderColor);
				G = "left" == x && d.width() >= l ? a.levelSize / 2 + a.borderWidth : 0;
				borderWidth = a.borderWidth;
				r.push(this.Club);
				r.push(this.Diamond);
				for (a = 0; 2 > a; a++)if (r[a].visible(!0), r[a].isPopUpOpen = !1, r[a].append(), A && r[a].level.css({ left: 0 }), "ontouchstart" in window) r[a].box.on("touchstart",
					{
						self: this,
						target: r[a]
					}, this.showPopUp); else r[a].dummyImg.map.area.on("mouseenter", {
						self: this,
						target: r[a]
					}, this.showPopUp);
				this.getLanguage();
				this.getJackpot(w)
			}
		}

		H.prototype.getLanguage = function () {
			var a = this;
			a.setLanguageFromDefaultJson(D);
			//$.ajax({
			//	url: a.resourceURL + "Languages.xml",
			//	cache: !1,
			//	type: "get",
			//	crossDomain: !0,
			//	dataType: "xml",
			//	contentType: "application/xml; charset=utf-8",
			//	success: function (e) {
			//		a.setLanguage(e)
			//	},
			//	error: function () {
			//		a.setLanguageFromDefaultJson(D)
			//	}
			//})
		};
		H.prototype.setLanguage = function (a) {
			a = $(a).find("Language");
			var e = a.find("LargestWinner"), n = a.find("NumberOfWinners"), D = a.find("LastWinner"), g = !1;
			c ? (c = c.toUpperCase(), a.find(c).length && (B.topWinText.html(e.find(c).text()), B.countWinsText.html(n.find(c).text()), B.lastWinText.html(D.find(c).text()), g = !0), 0 == g && (B.topWinText.html(e.find("EN").text()), B.countWinsText.html(n.find("EN").text()), B.lastWinText.html(D.find("EN").text()))) : (B.topWinText.html(e.find("EN").text()), B.countWinsText.html(n.find("EN").text()), B.lastWinText.html(D.find("EN").text()))
		};
		H.prototype.setLanguageFromDefaultJson =
			function (a) {
				isLanguageSet = !1;
				c ? (c = c.toUpperCase(), a.LargestWinner.hasOwnProperty(c) && (B.topWinText.html(a.LargestWinner[c]), B.countWinsText.html(a.NumberOfWinners[c]), B.lastWinText.html(a.LastWinner[c]), isLanguageSet = !0), 0 == isLanguageSet && (B.topWinText.html(a.LargestWinner.EN), B.countWinsText.html(a.NumberOfWinners.EN), B.lastWinText.html(a.LastWinner.EN))) : (B.topWinText.html(a.LargestWinner.EN), B.countWinsText.html(a.NumberOfWinners.EN), B.lastWinText.html(a.LastWinner.EN))
			};
		H.prototype.getJackpot =
			function (a) {
				var e = this;
				if (A) {
					var n = new XDomainRequest;
					n.open("get", a);
					n.onload = function () {
						var a = new ActiveXObject("Microsoft.XMLDOM");
						a.async = !1;
						a.loadXML(n.responseText);
						a = $.parseJSON(n.responseText);
						if (e.first) e.onRequestComplete(a); else e.processRequestFromServer(a)
					};
					n.send()
				} else $.ajax({
					url: a,
					type: "GET",
					cache: false,
					dataType: "json",
					headers: {
						"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtYmFzc2Fkb3JpYmV0Iiwic2NvcGVzIjpbIjg2OlJFQUQiXSwiZXhwIjoyNTI4NTM2NjgzfQ.3JJND62xqSJtEPI2zUg6QCD8xSJyDh2L1bo8a1a3HB8"
					},
					crossDomain: true,
					success: function (a) {
						if (a) if (e.first) e.onRequestComplete(a); else e.processRequestFromServer(a)
					},
					error: function (a,
						e, n) {
						console.log("xhr.status=" + a.status + " error=" + e + " exception=" + n)
					}
				})
			};
		H.prototype.updateJackpot = function (a) {
			if (this.first) this.onRequestComplete(a); else this.processRequestFromServer(a)
		};
		H.prototype.onRequestComplete = function (e) {
			var n = this;
			n.first = !1;
			a = "&#8382;";
			u.push(e.jackpots[1].amount > e.jackpots[0].amount ? Math.round(parseFloat(e.jackpots[1].amount.replace("GEL", "").replace(",", "").trim()) * 100) : Math.round(parseFloat(e.jackpots[0].amount.replace("GEL", "").replace(",", "").trim()) * 100));
			u.push(e.jackpots[1].amount < e.jackpots[0].amount ? Math.round(parseFloat(e.jackpots[1].amount.replace("GEL", "").replace(",", "").trim()) * 100) : Math.round(parseFloat(e.jackpots[0].amount.replace("GEL", "").replace(",", "").trim()) * 100));
			for (var D = 0; 2 > D; D++)r[D].setCurrency(a), r[D].jackpotBox.setValue(u[D], !1), J[D] = u[D];
			B.visible(!0);

			this.setPopUpInformation(y, 0, "", 0, null, "", 0, "GEL");
			this.setPopUpInformation(N, 0, "", 0, null, "", 0, "GEL");
			q && setTimeout(function () {
				n.sendRequestToServer()
			}, f[Y], 1)
		};
		H.prototype.sendRequestToServer = function () {
			var a = this, e = a.getISODate(), n = w.split("?");
			1 == n.length ? a.getJackpot(w + "?" + e, !1) : "" == n[1] ? a.getJackpot(w + e, !1) : a.getJackpot(w + "&" + e, !1);
			Y != f.length - 1 && Y++;
			q && setTimeout(function () {
				a.sendRequestToServer()
			}, f[Y], 1)
		};
		H.prototype.processRequestFromServer = function (a) {
			u[0] = a.jackpots[1].amount > a.jackpots[0].amount ? Math.round(parseFloat(a.jackpots[1].amount.replace("GEL", "").replace(",", "").trim()) * 100) : Math.round(parseFloat(a.jackpots[0].amount.replace("GEL", "").replace(",", "").trim()) * 100);
			u[1] = a.jackpots[1].amount < a.jackpots[0].amount ? Math.round(parseFloat(a.jackpots[1].amount.replace("GEL", "").replace(",", "").trim()) * 100) : Math.round(parseFloat(a.jackpots[0].amount.replace("GEL", "").replace(",", "").trim()) * 100);
			this.setPopUpInformation(y, 0, "", 0, null, "", 0, "GEL");
			this.setPopUpInformation(N, 0, "", 0, null, "", 0, "GEL");
			for (a = 0; 2 > a; a++)r[a].isPopUpOpen && ("I" == r[a].id && this.updateInformationInPopUp(y), "II" == r[a].id && this.updateInformationInPopUp(N)), this.getDifference(J[a], u[a], a)
		};
		H.prototype.setPopUpInformation = function (a, e, n, D, g, b, c, u) {
			a.LargestWinner = this.convertCoinsToMoney(e, u).money;
			a.Currency =
				this.convertCoinsToMoney(e, u).currency;
			dateTmp = new Date(Date.parse(n));
			a.DateOfLargestWin = this.dateToMMDDYYYY(dateTmp);
			dateTmp = null;
			a.NumberOfWinners = D;
			a.LastWinner = g;
			dateTmp = new Date(Date.parse(b));
			a.DateOfLastWinner = this.dateToMMDDYYYY(dateTmp);
			dateTmp = null;
			a.LastWinnerAmount = this.convertCoinsToMoney(c, u).money
		};
		H.prototype.updateInformationInPopUp = function (a) {
			B.topWinDate.html(a.DateOfLargestWin);
			B.topPrice.html(a.LargestWinner);
			1 < a.Currency.length ? B.currency.css({ fontSize: "70%" }) : B.currency.css({ fontSize: "100%" });
			B.currency.html(a.Currency);
			B.countWinsNumber.html(a.NumberOfWinners);
			B.lastWinDate.html(a.DateOfLastWinner);
			B.lastWinner.html(this.checkUserNameLength(a.LastWinner));
			B.lastPrice.html(a.LastWinnerAmount)
		};
		H.prototype.getDifference = function (a, e, n) {
			a = e - a;
			0 > a ? r[n].jackpotBox.setValue(u[n], !1) : 5 < f[Y] / 1E3 / a ? r[n].jackpotBox.setValue(u[n], !0, 5 * a) : r[n].jackpotBox.setValue(u[n], !0, f[Y] / 1E3);
			J[n] = e
		};
		H.prototype.showPopUp = function (a) {
			var e = a.data.self, n = a.data.target, D = n.dummyImg, g = n.box, b = B.box;
			if ("I" == n.id) if (0 !==
				y.NumberOfWinners && void 0 !== y.LastWinner) e.updateInformationInPopUp(y); else return;
			if ("II" == n.id) if (0 !== N.NumberOfWinners && void 0 !== N.LastWinner) e.updateInformationInPopUp(N); else return;
			b.height = b.outerHeight();
			b.width = b.outerWidth();
			n.updateProps();
			e = 30 + G;
			a = b.height + e;
			e = b.width + e;
			"top" == x &&
				(maskProps = {
					left: g.x,
					top: g.y - a,
					width: g.width,
					height: a
				}, popUpProps = {
					leftStart: Math.round((g.width - b.width) / 2),
					leftEnd: Math.round((g.width - b.width) / 2),
					topStart: a,
					topEnd: a - b.height - P
				}, dummyImgProps = {
					top: -a - g.border + popUpProps.topEnd,
					left: 0 - g.border,
					width: g.width,
					height: g.height + P + b.height
				});
			"bottom" == x && (maskProps = {
				left: g.x,
				top: g.y + g.height,
				width: g.width,
				height: a
			}, popUpProps = {
				leftStart: Math.round((g.width - b.width) / 2),
				leftEnd: Math.round((g.width - b.width) / 2),
				topStart: -a,
				topEnd: P
			}, dummyImgProps = {
				top: 0 -
					g.border, left: 0 - g.border, width: g.width, height: g.height + P + b.height
			});
			"left" == x && (maskProps = {
				left: g.x - e,
				top: g.y + g.height / 2 - b.height / 2,
				width: e,
				height: b.height
			}, popUpProps = {
				leftStart: e,
				leftEnd: e - b.width - P - G,
				topStart: 0,
				topEnd: 0
			}, dummyImgProps = {
				top: 0 - g.border + g.height / 2 - b.height / 2,
				left: 0 - g.border - P - G - b.width,
				width: b.width + P + G + g.width,
				height: b.height
			});
			"right" == x && (maskProps = {
				left: g.x + g.width,
				top: g.y + g.height / 2 - b.height / 2,
				width: e,
				height: b.height
			}, popUpProps = { leftStart: -e, leftEnd: P, topStart: 0, topEnd: 0 }, dummyImgProps =
				{
					top: 0 - g.border + g.height / 2 - b.height / 2,
					left: 0 - g.border,
					width: g.width + P + b.width,
					height: b.height
				});
			a = function (a) {
				n.hidePopUpTween && (n.hidePopUpTween.complete(), n.hidePopUpTween = null);
				g.css("z-index", 30003);
				b.css("opacity", 0).css("z-index", 30002);
				b.css({ left: popUpProps.leftStart, top: popUpProps.topStart });
				TweenMax.to(b, .25, { opacity: 1, ease: Linear.easeNone });
				n.showPopUpTween = TweenMax.to(b, .5, {
					left: popUpProps.leftEnd,
					top: popUpProps.topEnd, ease: Back.easeOut.config(1), onComplete: function () {
						D.css({
							top: dummyImgProps.top,
							left: dummyImgProps.left,
							width: dummyImgProps.width,
							height: dummyImgProps.height
						});
						n.updateClickableArea(b.width, b.height, P + G, x);
						n.isPopUpOpen = !0;
						n.showPopUpTween && void 0 !== n.showPopUpTween.kill && n.showPopUpTween.kill();
						n.showPopUpTween = null
					}
				})
			};
			var e = function () {
				n.showPopUpTween && (n.showPopUpTween.kill(), n.showPopUpTween = null);
				n.isPopUpOpen = !1;
				g.css("z-index", 30001);
				b.css("z-index", 3E4);
				D.css({ top: 0, left: 0, width: "100%", height: "100%" });
				n.setClickableArea();
				n.hidePopUpTween = TweenMax.to(b, .25, {
					opacity: 0, onComplete: function () {
						n.hidePopUpTween.kill();
						n.hidePopUpTween = null
					}
				})
			}, c = function () {
				for (var a = 0; a < r.length; a++)b.css("opacity", 0), r[a].showPopUpTween && (r[a].showPopUpTween.kill(), r[a].showPopUpTween = null), r[a].hidePopUpTween && (r[a].hidePopUpTween.kill(), r[a].hidePopUpTween = null), r[a].isPopUpOpen = !1, r[a].box.css("z-index", 30001), r[a].dummyImg.css({
					top: 0, left: 0, width: "100%",
					height: "100%"
				}), r[a].setClickableArea();
				b.css("z-index", 3E4)
			};
			n.isPopUpOpen ? e() : (c(), a(), $(window).resize(a()));
			$(this).on("mouseleave", e);
			$(document).on("touchstart", function () {
				for (var a = 0; a < r.length; a++)r[a].isPopUpOpen && c()
			})
		};
		H.prototype.checkUserNameLength = function (a) {
			return 17 < a.length ? a.slice(0, 17) + "..." : a
		};
		H.prototype.convertCoinsToMoney = function (a, e) {
			var n;
			switch (e) {
				case "EUR":
					n = "\u20ac";
					break;
				case "USD":
					n = "$";
					break;
				case "GBP":
					n = "\u00a3";
					break;
				default:
					n = e
			}
			index = a.toString().length - 2;
			return {
				currency: n,
				money: a.toString().slice(0, index) + "." + a.toString().slice(index)
			}
		};
		H.prototype.dateToMMDDYYYY = function (a) {
			mm = (a.getMonth() + 1).toString();
			2 > mm.length && (mm = "0" + mm);
			dd = a.getDate().toString();
			2 > dd.length && (dd = "0" + dd);
			yyyy = a.getFullYear().toString();
			return dd + b + mm + b + yyyy
		};
		H.prototype.createDiv = function (a) {
			a.append("<div></div>");
			return $(a.children().get(-1))
		};
		H.prototype.createLink = function (a) {
			a.append('<a target="_blank"></a>');
			return $(a.children().get(-1))
		};
		H.prototype.getISODate = function () {
			Date.prototype.toISOString ||
				function () {
					function a(e) {
						return 10 > e ? "0" + e : e
					}

					Date.prototype.toISOString = function () {
						return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1E3).toFixed(3).slice(2, 5) + "Z"
					}
				}()
		};
		H.prototype.appendIE8Box = function (a) {
			var e = $('<div class="com-egt-jackpot-html-ie8">' + z + "</div>");
			d.append(e).css({ minHeight: a + "px", lineHeight: a + "px" })
		};
		return H
	}();
	$(window).resize(function () {
		h();
		B.hideAllPopups();
		for (var a = 0; a < r.length; a++)r.isPopUpOpen = !1, r[a].setClickableArea();
		"undefined" != typeof m || r[0].box.width > m ? B.updatePopUpWidth(r[0].box.width) : B.updatePopUpWidth(m)
	});
	$("area").click(function () {
		$(this).blur()
	})
}).call(this);
(window._gsQueue || (window._gsQueue = [])).push(function () {
	window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, w, d) {
		var b = [].slice, c = function (n, e, g) {
			d.call(this, n, e, g);
			this._cycle = 0;
			this._yoyo = !0 === this.vars.yoyo;
			this._repeat = this.vars.repeat || 0;
			this._repeatDelay = this.vars.repeatDelay || 0;
			this._dirty = !0;
			this.render = c.prototype.render
		}, f = d._internals.isSelector, q = d._internals.isArray, x = c.prototype = d.to({}, .1, {}), m = [];
		c.version = "1.11.2";
		x.constructor = c;
		x.kill()._gc = !1;
		c.killTweensOf = c.killDelayedCallsTo = d.killTweensOf;
		c.getTweensOf = d.getTweensOf;
		c.ticker = d.ticker;
		x.invalidate = function () {
			return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), d.prototype.invalidate.call(this)
		};
		x.updateTo = function (n, e) {
			var g, a = this.ratio;
			e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this,
				this._startTime - this._delay));
			for (g in n) this.vars[g] = n[g];
			if (this._initted) if (e) this._initted = !1; else if (this._notifyPluginsOfEnabled && this._firstPT && d._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) g = this._time, this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1); else if (0 < this._time) {
				this._initted = !1;
				this._init();
				for (var a = 1 / (1 - a), b = this._firstPT; b;)g = b.s + b.c, b.c *= a, b.s = g - b.c, b = b._next
			}
			return this
		};
		x.render = function (n, e, g) {
			this._initted || 0 === this._duration && this.vars.repeat &&
				this.invalidate();
			var a, b, c, d, l, f, q, x = this._dirty ? this.totalDuration() : this._totalDuration, h = this._time, z = this._totalTime, w = this._cycle, y = this._duration;
			if (n >= x ? (this._totalTime = x, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (a = !0, b = "onComplete"), 0 === y && (q = this._rawPrevTime, (0 === n || 0 > q || 1E-10 === q) && q !== n && (g = !0, 1E-10 < q && (b = "onReverseComplete")),
				this._rawPrevTime = q = !e || n ? n : 1E-10)) : 1E-7 > n ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== z || 0 === y && 1E-10 < this._rawPrevTime) && (b = "onReverseComplete", a = this._reversed), 0 > n ? (this._active = !1, 0 === y && (0 <= this._rawPrevTime && (g = !0), this._rawPrevTime = q = !e || n ? n : 1E-10)) : this._initted || (g = !0)) : (this._totalTime = this._time = n, 0 !== this._repeat && (c = y + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--,
					this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (d = this._time / y, l = this._easeType, f = this._easePower, (1 === l || 3 === l && .5 <= d) && (d = 1 - d), 3 === l && (d *= 2), 1 === f ? d *= d : 2 === f ? d *= d * d : 3 === f ? d *= d * d * d : 4 === f && (d *= d * d * d * d), this.ratio = 1 === l ? 1 - d : 2 === l ? d : .5 > this._time / y ? d / 2 : 1 - d / 2) : this.ratio = this._ease.getRatio(this._time / y)), h === this._time && !g && w === this._cycle) return z !== this._totalTime && this._onUpdate &&
						(e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m)), void 0;
			if (!this._initted) {
				if (this._init(), !this._initted || this._gc) return;
				this._time && !a ? this.ratio = this._ease.getRatio(this._time / y) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
			}
			this._active || !this._paused && this._time !== h && 0 <= n && (this._active = !0);
			0 !== z || (this._startAt && (0 <= n ? this._startAt.render(n, e, g) : b || (b = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== y || !e && this.vars.onStart.apply(this.vars.onStartScope ||
				this, this.vars.onStartParams || m));
			for (c = this._firstPT; c;)c.f ? c.t[c.p](c.c * this.ratio + c.s) : c.t[c.p] = c.c * this.ratio + c.s, c = c._next;
			this._onUpdate && (0 > n && this._startAt && this._startTime && this._startAt.render(n, e, g), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m));
			this._cycle !== w && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || m));
			b && (this._gc || (0 > n && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(n,
				e, g), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[b] && this.vars[b].apply(this.vars[b + "Scope"] || this, this.vars[b + "Params"] || m), 0 === y && 1E-10 === this._rawPrevTime && 1E-10 !== q && (this._rawPrevTime = 0)))
		};
		c.to = function (n, e, g) {
			return new c(n, e, g)
		};
		c.from = function (n, e, g) {
			return g.runBackwards = !0, g.immediateRender = 0 != g.immediateRender, new c(n, e, g)
		};
		c.fromTo = function (n, e, g, a) {
			return a.startAt = g, a.immediateRender = 0 != a.immediateRender && 0 != g.immediateRender, new c(n, e,
				a)
		};
		c.staggerTo = c.allTo = function (n, e, g, a, u, l, r) {
			a = a || 0;
			var x, h, z, w, C = g.delay || 0, N = [], F = function () {
				g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments);
				u.apply(r || this, l || m)
			};
			q(n) || ("string" == typeof n && (n = d.selector(n) || n), f(n) && (n = b.call(n, 0)));
			x = n.length;
			for (z = 0; x > z; z++) {
				h = {};
				for (w in g) h[w] = g[w];
				h.delay = C;
				z === x - 1 && u && (h.onComplete = F);
				N[z] = new c(n[z], e, h);
				C += a
			}
			return N
		};
		c.staggerFrom = c.allFrom = function (n, e, g, a, b, d, l) {
			return g.runBackwards = !0, g.immediateRender = 0 != g.immediateRender,
				c.staggerTo(n, e, g, a, b, d, l)
		};
		c.staggerFromTo = c.allFromTo = function (n, e, g, a, b, d, l, f) {
			return a.startAt = g, a.immediateRender = 0 != a.immediateRender && 0 != g.immediateRender, c.staggerTo(n, e, a, b, d, l, f)
		};
		c.delayedCall = function (n, e, g, a, b) {
			return new c(e, 0, {
				delay: n,
				onComplete: e,
				onCompleteParams: g,
				onCompleteScope: a,
				onReverseComplete: e,
				onReverseCompleteParams: g,
				onReverseCompleteScope: a,
				immediateRender: !1,
				useFrames: b,
				overwrite: 0
			})
		};
		c.set = function (n, e) {
			return new c(n, 0, e)
		};
		c.isTweening = function (n) {
			return 0 < d.getTweensOf(n,
				!0).length
		};
		var z = function (n, e) {
			for (var g = [], a = 0, b = n._first; b;)b instanceof d ? g[a++] = b : (e && (g[a++] = b), g = g.concat(z(b, e)), a = g.length), b = b._next;
			return g
		}, l = c.getAllTweens = function (n) {
			return z(h._rootTimeline, n).concat(z(h._rootFramesTimeline, n))
		};
		c.killAll = function (n, e, g, a) {
			null == e && (e = !0);
			null == g && (g = !0);
			var b, c, d = l(0 != a), f = d.length, q = e && g && a;
			for (c = 0; f > c; c++)a = d[c], (q || a instanceof w || (b = a.target === a.vars.onComplete) && g || e && !b) && (n ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
		};
		c.killChildTweensOf =
			function (n, e) {
				if (null != n) {
					var g, a, u, l = d._tweenLookup;
					if ("string" == typeof n && (n = d.selector(n) || n), f(n) && (n = b(n, 0)), q(n)) for (a = n.length; -1 < --a;)c.killChildTweensOf(n[a], e); else {
						g = [];
						for (u in l) for (a = l[u].target.parentNode; a;)a === n && (g = g.concat(l[u].tweens)), a = a.parentNode;
						u = g.length;
						for (a = 0; u > a; a++)e && g[a].totalTime(g[a].totalDuration()), g[a]._enabled(!1, !1)
					}
				}
			};
		var g = function (g, e, b, a) {
			e = !1 !== e;
			b = !1 !== b;
			a = !1 !== a;
			for (var c, d = l(a), f = e && b && a, q = d.length; -1 < --q;)a = d[q], (f || a instanceof w || (c = a.target === a.vars.onComplete) &&
				b || e && !c) && a.paused(g)
		};
		return c.pauseAll = function (n, e, b) {
			g(!0, n, e, b)
		}, c.resumeAll = function (n, e, b) {
			g(!1, n, e, b)
		}, c.globalTimeScale = function (g) {
			var e = h._rootTimeline, b = d.ticker.time;
			return arguments.length ? (g = g || 1E-10, e._startTime = b - (b - e._startTime) * e._timeScale / g, e = h._rootFramesTimeline, b = d.ticker.frame, e._startTime = b - (b - e._startTime) * e._timeScale / g, e._timeScale = h._rootTimeline._timeScale = g, g) : e._timeScale
		}, x.progress = function (g) {
			return arguments.length ? this.totalTime(this.duration() * (this._yoyo &&
				0 !== (1 & this._cycle) ? 1 - g : g) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
		}, x.totalProgress = function (g) {
			return arguments.length ? this.totalTime(this.totalDuration() * g, !1) : this._totalTime / this.totalDuration()
		}, x.time = function (g, e) {
			return arguments.length ? (this._dirty && this.totalDuration(), g > this._duration && (g = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? g = this._duration - g + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (g += this._cycle * (this._duration +
				this._repeatDelay)), this.totalTime(g, e)) : this._time
		}, x.duration = function (g) {
			return arguments.length ? h.prototype.duration.call(this, g) : this._duration
		}, x.totalDuration = function (g) {
			return arguments.length ? -1 === this._repeat ? this : this.duration((g - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
		}, x.repeat = function (g) {
			return arguments.length ?
				(this._repeat = g, this._uncache(!0)) : this._repeat
		}, x.repeatDelay = function (g) {
			return arguments.length ? (this._repeatDelay = g, this._uncache(!0)) : this._repeatDelay
		}, x.yoyo = function (g) {
			return arguments.length ? (this._yoyo = g, this) : this._yoyo
		}, c
	}, !0);
	window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, w, d) {
		var b = function (g) {
			w.call(this, g);
			this._labels = {};
			this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
			this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
			this._sortChildren = !0;
			this._onUpdate = this.vars.onUpdate;
			var b, e = this.vars;
			for (b in e) g = e[b], f(g) && -1 !== g.join("").indexOf("{self}") && (e[b] = this._swapSelfInParams(g));
			f(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
		}, c = d._internals.isSelector, f = d._internals.isArray, q = [], x = function (g) {
			var b, e = {};
			for (b in g) e[b] = g[b];
			return e
		}, m = function (g, b, e, c) {
			g._timeline.pause(g._startTime);
			b && b.apply(c || g._timeline, e || q)
		}, z = q.slice, l = b.prototype = new w;
		return b.version = "1.11.0", l.constructor = b, l.kill()._gc = !1,
			l.to = function (g, b, e, c) {
				return b ? this.add(new d(g, b, e), c) : this.set(g, e, c)
			}, l.from = function (g, b, e, c) {
				return this.add(d.from(g, b, e), c)
			}, l.fromTo = function (g, b, e, c, a) {
				return b ? this.add(d.fromTo(g, b, e, c), a) : this.set(g, c, a)
			}, l.staggerTo = function (g, n, e, D, a, u, l, f) {
				l = new b({ onComplete: u, onCompleteParams: l, onCompleteScope: f });
				"string" == typeof g && (g = d.selector(g) || g);
				c(g) && (g = z.call(g, 0));
				D = D || 0;
				for (u = 0; g.length > u; u++)e.startAt && (e.startAt = x(e.startAt)), l.to(g[u], n, x(e), u * D);
				return this.add(l, a)
			}, l.staggerFrom =
			function (g, b, e, c, a, d, l, f) {
				return e.immediateRender = 0 != e.immediateRender, e.runBackwards = !0, this.staggerTo(g, b, e, c, a, d, l, f)
			}, l.staggerFromTo = function (g, b, e, c, a, d, l, f, q) {
				return c.startAt = e, c.immediateRender = 0 != c.immediateRender && 0 != e.immediateRender, this.staggerTo(g, b, c, a, d, l, f, q)
			}, l.call = function (g, b, e, c) {
				return this.add(d.delayedCall(0, g, b, e), c)
			}, l.set = function (g, b, e) {
				return e = this._parseTimeOrLabel(e, 0, !0), null == b.immediateRender && (b.immediateRender = e === this._time && !this._paused), this.add(new d(g,
					0, b), e)
			}, b.exportRoot = function (g, c) {
				g = g || {};
				null == g.smoothChildTiming && (g.smoothChildTiming = !0);
				var e, D, a = new b(g), l = a._timeline;
				null == c && (c = !0);
				l._remove(a, !0);
				a._startTime = 0;
				a._rawPrevTime = a._time = a._totalTime = l._time;
				for (e = l._first; e;)D = e._next, c && e instanceof d && e.target === e.vars.onComplete || a.add(e, e._startTime - e._delay), e = D;
				return l.add(a, 0), a
			}, l.add = function (g, c, e, D) {
				var a, l, q;
				if ("number" != typeof c && (c = this._parseTimeOrLabel(c, 0, !0, g)), !(g instanceof h)) {
					if (g instanceof Array || g && g.push && f(g)) {
						e =
							e || "normal";
						D = D || 0;
						a = g.length;
						for (l = 0; a > l; l++)f(q = g[l]) && (q = new b({ tweens: q })), this.add(q, c), "string" != typeof q && "function" != typeof q && ("sequence" === e ? c = q._startTime + q.totalDuration() / q._timeScale : "start" === e && (q._startTime -= q.delay())), c += D;
						return this._uncache(!0)
					}
					if ("string" == typeof g) return this.addLabel(g, c);
					if ("function" != typeof g) throw "Cannot add " + g + " into the timeline; it is not a tween, timeline, function, or string.";
					g = d.delayedCall(0, g)
				}
				if (w.prototype.add.call(this, g, c), this._gc && !this._paused &&
					this._duration < this.duration()) for (e = this, g = e.rawTime() > g._startTime; e._gc && e._timeline;)e._timeline.smoothChildTiming && g ? e.totalTime(e._totalTime, !0) : e._enabled(!0, !1), e = e._timeline;
				return this
			}, l.remove = function (g) {
				if (g instanceof h) return this._remove(g, !1);
				if (g instanceof Array || g && g.push && f(g)) {
					for (var b = g.length; -1 < --b;)this.remove(g[b]);
					return this
				}
				return "string" == typeof g ? this.removeLabel(g) : this.kill(null, g)
			}, l._remove = function (g, b) {
				w.prototype._remove.call(this, g, b);
				var e = this._last;
				return e ?
					this._time > e._startTime + e._totalDuration / e._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
			}, l.append = function (g, b) {
				return this.add(g, this._parseTimeOrLabel(null, b, !0, g))
			}, l.insert = l.insertMultiple = function (g, b, e, c) {
				return this.add(g, b || 0, e, c)
			}, l.appendMultiple = function (g, b, e, c) {
				return this.add(g, this._parseTimeOrLabel(null, b, !0, g), e, c)
			}, l.addLabel = function (g, b) {
				return this._labels[g] = this._parseTimeOrLabel(b), this
			}, l.addPause = function (g,
				b, e, c) {
				return this.call(m, ["{self}", b, e, c], this, g)
			}, l.removeLabel = function (g) {
				return delete this._labels[g], this
			}, l.getLabelTime = function (g) {
				return null != this._labels[g] ? this._labels[g] : -1
			}, l._parseTimeOrLabel = function (g, b, e, c) {
				var a;
				if (c instanceof h && c.timeline === this) this.remove(c); else if (c && (c instanceof Array || c.push && f(c))) for (a = c.length; -1 < --a;)c[a] instanceof h && c[a].timeline === this && this.remove(c[a]);
				if ("string" == typeof b) return this._parseTimeOrLabel(b, e && "number" == typeof g && null == this._labels[b] ?
					g - this.duration() : 0, e);
				if (b = b || 0, "string" != typeof g || !isNaN(g) && null == this._labels[g]) null == g && (g = this.duration()); else {
					if (a = g.indexOf("="), -1 === a) return null == this._labels[g] ? e ? this._labels[g] = this.duration() + b : b : this._labels[g] + b;
					b = parseInt(g.charAt(a - 1) + "1", 10) * Number(g.substr(a + 1));
					g = 1 < a ? this._parseTimeOrLabel(g.substr(0, a - 1), 0, e) : this.duration()
				}
				return Number(g) + b
			}, l.seek = function (b, c) {
				return this.totalTime("number" == typeof b ? b : this._parseTimeOrLabel(b), !1 !== c)
			}, l.stop = function () {
				return this.paused(!0)
			},
			l.gotoAndPlay = function (b, c) {
				return this.play(b, c)
			}, l.gotoAndStop = function (b, c) {
				return this.pause(b, c)
			}, l.render = function (b, c, e) {
				this._gc && this._enabled(!0, !1);
				var d, a, l, f, r = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, x = this._startTime, h = this._timeScale, z = this._paused;
				if (b >= r ? (this._totalTime = this._time = r, this._reversed || this._hasPausedChild() || (a = !0, f = "onComplete", 0 === this._duration && (0 === b || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== b && this._first &&
					(d = !0, 1E-10 < this._rawPrevTime && (f = "onReverseComplete"))), this._rawPrevTime = this._duration || !c || b ? b : 1E-10, b = r + 1E-6) : 1E-7 > b ? (this._totalTime = this._time = 0, (0 !== m || 0 === this._duration && (1E-10 < this._rawPrevTime || 0 > b && 0 <= this._rawPrevTime)) && (f = "onReverseComplete", a = this._reversed), 0 > b ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first && (d = !0), this._rawPrevTime = b) : (this._rawPrevTime = this._duration || !c || b ? b : 1E-10, b = 0, this._initted || (d = !0))) : this._totalTime = this._time = this._rawPrevTime =
						b, this._time !== m && this._first || e || d) {
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== m && 0 < b && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._time && (c || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || q)), this._time >= m) for (d = this._first; d && (l = d._next, !this._paused || z);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (b - d._startTime) * d._timeScale, c, e) : d.render((b -
						d._startTime) * d._timeScale, c, e)), d = l; else for (d = this._last; d && (l = d._prev, !this._paused || z);)(d._active || m >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (b - d._startTime) * d._timeScale, c, e) : d.render((b - d._startTime) * d._timeScale, c, e)), d = l;
					this._onUpdate && (c || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || q));
					f && (this._gc || (x === this._startTime || h !== this._timeScale) && (0 === this._time || r >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren &&
						this._enabled(!1, !1), this._active = !1), !c && this.vars[f] && this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || q)))
				}
			}, l._hasPausedChild = function () {
				for (var g = this._first; g;) {
					if (g._paused || g instanceof b && g._hasPausedChild()) return !0;
					g = g._next
				}
				return !1
			}, l.getChildren = function (b, c, e, l) {
				l = l || -9999999999;
				for (var a = [], f = this._first, q = 0; f;)l > f._startTime || (f instanceof d ? !1 !== c && (a[q++] = f) : (!1 !== e && (a[q++] = f), !1 !== b && (a = a.concat(f.getChildren(!0, c, e)), q = a.length))), f = f._next;
				return a
			}, l.getTweensOf =
			function (b, c) {
				for (var e = d.getTweensOf(b), l = e.length, a = [], f = 0; -1 < --l;)(e[l].timeline === this || c && this._contains(e[l])) && (a[f++] = e[l]);
				return a
			}, l._contains = function (b) {
				for (b = b.timeline; b;) {
					if (b === this) return !0;
					b = b.timeline
				}
				return !1
			}, l.shiftChildren = function (b, c, e) {
				e = e || 0;
				for (var d, a = this._first, l = this._labels; a;)a._startTime >= e && (a._startTime += b), a = a._next;
				if (c) for (d in l) l[d] >= e && (l[d] += b);
				return this._uncache(!0)
			}, l._kill = function (b, c) {
				if (!b && !c) return this._enabled(!1, !1);
				for (var e = c ? this.getTweensOf(c) :
					this.getChildren(!0, !0, !1), d = e.length, a = !1; -1 < --d;)e[d]._kill(b, c) && (a = !0);
				return a
			}, l.clear = function (b) {
				var c = this.getChildren(!1, !0, !0), e = c.length;
				for (this._time = this._totalTime = 0; -1 < --e;)c[e]._enabled(!1, !1);
				return !1 !== b && (this._labels = {}), this._uncache(!0)
			}, l.invalidate = function () {
				for (var b = this._first; b;)b.invalidate(), b = b._next;
				return this
			}, l._enabled = function (b, c) {
				if (b === this._gc) for (var e = this._first; e;)e._enabled(b, !0), e = e._next;
				return w.prototype._enabled.call(this, b, c)
			}, l.duration = function (b) {
				return arguments.length ?
					(0 !== this.duration() && 0 !== b && this.timeScale(this._duration / b), this) : (this._dirty && this.totalDuration(), this._duration)
			}, l.totalDuration = function (b) {
				if (!arguments.length) {
					if (this._dirty) {
						var c, e, d = 0;
						e = this._last;
						for (var a = 999999999999; e;)c = e._prev, e._dirty && e.totalDuration(), e._startTime > a && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : a = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime,
							!1, -9999999999), a = 0), e = e._startTime + e._totalDuration / e._timeScale, e > d && (d = e), e = c;
						this._duration = this._totalDuration = d;
						this._dirty = !1
					}
					return this._totalDuration
				}
				return 0 !== this.totalDuration() && 0 !== b && this.timeScale(this._totalDuration / b), this
			}, l.usesFrames = function () {
				for (var b = this._timeline; b._timeline;)b = b._timeline;
				return b === h._rootFramesTimeline
			}, l.rawTime = function () {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
			}, b
	}, !0);
	window._gsDefine("TimelineMax",
		["TimelineLite", "TweenLite", "easing.Ease"], function (h, w, d) {
			var b = function (b) {
				h.call(this, b);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._cycle = 0;
				this._yoyo = !0 === this.vars.yoyo;
				this._dirty = !0
			}, c = [], f = new d(null, null, 1, 0);
			d = b.prototype = new h;
			return d.constructor = b, d.kill()._gc = !1, b.version = "1.11.0", d.invalidate = function () {
				return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), h.prototype.invalidate.call(this)
			},
				d.addCallback = function (b, c, d, f) {
					return this.add(w.delayedCall(0, b, d, f), c)
				}, d.removeCallback = function (b, c) {
					if (b) if (null == c) this._kill(null, b); else for (var d = this.getTweensOf(b, !1), f = d.length, l = this._parseTimeOrLabel(c); -1 < --f;)d[f]._startTime === l && d[f]._enabled(!1, !1);
					return this
				}, d.tweenTo = function (b, d) {
					d = d || {};
					var m, h, l = { ease: f, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1 };
					for (m in d) l[m] = d[m];
					return l.time = this._parseTimeOrLabel(b), h = new w(this, Math.abs(Number(l.time) - this._time) /
						this._timeScale || .001, l), l.onStart = function () {
							h.target.paused(!0);
							h.vars.time !== h.target.time() && h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale);
							d.onStart && d.onStart.apply(d.onStartScope || h, d.onStartParams || c)
						}, h
				}, d.tweenFromTo = function (b, c, d) {
					d = d || {};
					b = this._parseTimeOrLabel(b);
					d.startAt = { onComplete: this.seek, onCompleteParams: [b], onCompleteScope: this };
					d.immediateRender = !1 !== d.immediateRender;
					c = this.tweenTo(c, d);
					return c.duration(Math.abs(c.vars.time - b) / this._timeScale || .001)
				},
				d.render = function (b, d, f) {
					this._gc && this._enabled(!0, !1);
					var h, l, g, n, e, D = this._dirty ? this.totalDuration() : this._totalDuration, a = this._duration, u = this._time, J = this._totalTime, r = this._startTime, w = this._timeScale, B = this._rawPrevTime, P = this._paused, G = this._cycle;
					if (b >= D ? (this._locked || (this._totalTime = D, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (l = !0, n = "onComplete", 0 === this._duration && (0 === b || 0 > B || 1E-10 === B) && B !== b && this._first && (h = !0, 1E-10 < B && (n = "onReverseComplete"))), this._rawPrevTime =
						this._duration || !d || b ? b : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = b = 0 : (this._time = a, b = a + 1E-6)) : 1E-7 > b ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== u || 0 === a && (1E-10 < B || 0 > b && 0 <= B) && !this._locked) && (n = "onReverseComplete", l = this._reversed), 0 > b ? (this._active = !1, 0 === a && 0 <= B && this._first && (h = !0), this._rawPrevTime = b) : (this._rawPrevTime = a || !d || b ? b : 1E-10, b = 0, this._initted || (h = !0))) : (0 === a && 0 > B && (h = !0), this._time = this._rawPrevTime = b, this._locked || (this._totalTime = b, 0 !== this._repeat &&
							(e = a + this._repeatDelay, this._cycle = this._totalTime / e >> 0, 0 !== this._cycle && this._cycle === this._totalTime / e && this._cycle--, this._time = this._totalTime - this._cycle * e, this._yoyo && 0 !== (1 & this._cycle) && (this._time = a - this._time), this._time > a ? (this._time = a, b = a + 1E-6) : 0 > this._time ? this._time = b = 0 : b = this._time))), this._cycle !== G && !this._locked) {
						e = this._yoyo && 0 !== (1 & G);
						var C = e === (this._yoyo && 0 !== (1 & this._cycle)), N = this._totalTime, F = this._cycle, y = this._rawPrevTime, E = this._time;
						if (this._totalTime = G * a, G > this._cycle ?
							e = !e : this._totalTime += a, this._time = u, this._rawPrevTime = 0 === a ? B - 1E-5 : B, this._cycle = G, this._locked = !0, u = e ? 0 : a, this.render(u, d, 0 === a), d || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c), C && (u = e ? a + 1E-6 : -1E-6, this.render(u, !0, !1)), this._locked = !1, this._paused && !P) return;
						this._time = E;
						this._totalTime = N;
						this._cycle = F;
						this._rawPrevTime = y
					}
					if (!(this._time !== u && this._first || f || h)) return J !== this._totalTime && this._onUpdate && (d || this._onUpdate.apply(this.vars.onUpdateScope ||
						this, this.vars.onUpdateParams || c)), void 0;
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== J && 0 < b && (this._active = !0), 0 === J && this.vars.onStart && 0 !== this._totalTime && (d || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= u) for (h = this._first; h && (g = h._next, !this._paused || P);)(h._active || h._startTime <= this._time && !h._paused && !h._gc) && (h._reversed ? h.render((h._dirty ? h.totalDuration() : h._totalDuration) - (b - h._startTime) * h._timeScale,
						d, f) : h.render((b - h._startTime) * h._timeScale, d, f)), h = g; else for (h = this._last; h && (g = h._prev, !this._paused || P);)(h._active || u >= h._startTime && !h._paused && !h._gc) && (h._reversed ? h.render((h._dirty ? h.totalDuration() : h._totalDuration) - (b - h._startTime) * h._timeScale, d, f) : h.render((b - h._startTime) * h._timeScale, d, f)), h = g;
					this._onUpdate && (d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c));
					n && (this._locked || this._gc || (r === this._startTime || w !== this._timeScale) && (0 === this._time ||
						D >= this.totalDuration()) && (l && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || c)))
				}, d.getActive = function (b, c, d) {
					null == b && (b = !0);
					null == c && (c = !0);
					null == d && (d = !1);
					var f = [];
					d = this.getChildren(b, c, d);
					var l = 0, g = d.length;
					for (b = 0; g > b; b++)c = d[b], c.isActive() && (f[l++] = c);
					return f
				}, d.getLabelAfter = function (b) {
					b || 0 !== b && (b = this._time);
					var c, d = this.getLabelsArray(), f = d.length;
					for (c = 0; f > c; c++)if (d[c].time >
						b) return d[c].name;
					return null
				}, d.getLabelBefore = function (b) {
					null == b && (b = this._time);
					for (var c = this.getLabelsArray(), d = c.length; -1 < --d;)if (b > c[d].time) return c[d].name;
					return null
				}, d.getLabelsArray = function () {
					var b, c = [], d = 0;
					for (b in this._labels) c[d++] = { time: this._labels[b], name: b };
					return c.sort(function (b, c) {
						return b.time - c.time
					}), c
				}, d.progress = function (b) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - b : b) + this._cycle * (this._duration + this._repeatDelay),
						!1) : this._time / this.duration()
				}, d.totalProgress = function (b) {
					return arguments.length ? this.totalTime(this.totalDuration() * b, !1) : this._totalTime / this.totalDuration()
				}, d.totalDuration = function (b) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (h.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
				}, d.time =
				function (b, c) {
					return arguments.length ? (this._dirty && this.totalDuration(), b > this._duration && (b = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? b = this._duration - b + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (b += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(b, c)) : this._time
				}, d.repeat = function (b) {
					return arguments.length ? (this._repeat = b, this._uncache(!0)) : this._repeat
				}, d.repeatDelay = function (b) {
					return arguments.length ? (this._repeatDelay = b, this._uncache(!0)) : this._repeatDelay
				},
				d.yoyo = function (b) {
					return arguments.length ? (this._yoyo = b, this) : this._yoyo
				}, d.currentLabel = function (b) {
					return arguments.length ? this.seek(b, !0) : this.getLabelBefore(this._time + 1E-8)
				}, b
		}, !0);
	(function () {
		var h = 180 / Math.PI, w = [], d = [], b = [], c = {}, f = function (b, c, d, e) {
			this.a = b;
			this.b = c;
			this.c = d;
			this.d = e;
			this.da = e - b;
			this.ca = d - b;
			this.ba = c - b
		}, q = function (b, c, d, e) {
			var f = { a: b }, a = {}, u = {}, h = { c: e }, r = (b + c) / 2, m = (c + d) / 2;
			d = (d + e) / 2;
			c = (r + m) / 2;
			var m = (m + d) / 2, q = (m - c) / 8;
			return f.b = r + (b - r) / 4, a.b = c + q, f.c = a.a = (f.b + a.b) / 2, a.c = u.a =
				(c + m) / 2, u.b = m - q, h.b = d + (e - d) / 4, u.c = h.a = (u.b + h.b) / 2, [f, a, u, h]
		}, x = function (l, g, n, e, h, a) {
			var u, m, r, x, B = {}, P = [], G = a || l[0];
			h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
			null == g && (g = 1);
			for (m in l[0]) P.push(m);
			if (1 < l.length) {
				r = l[l.length - 1];
				x = !0;
				for (u = P.length; -1 < --u;)if (m = P[u], .05 < Math.abs(G[m] - r[m])) {
					x = !1;
					break
				}
				x && (l = l.concat(), a && l.unshift(a), l.push(l[1]),
					a = l[l.length - 3])
			}
			w.length = d.length = b.length = 0;
			for (u = P.length; -1 < --u;) {
				m = P[u];
				c[m] = -1 !== h.indexOf("," + m + ",");
				r = m;
				var G = l, C = m, z = c[m], F = a, y = void 0, E = void 0, A = void 0, H = void 0, O = void 0, A = void 0, M = [];
				if (F) for (G = [F].concat(G), E = G.length; -1 < --E;)"string" == typeof (A = G[E][C]) && "=" === A.charAt(1) && (G[E][C] = F[C] + Number(A.charAt(0) + A.substr(2)));
				if (y = G.length - 2, 0 > y) G = (M[0] = new f(G[0][C], 0, 0, G[-1 > y ? 0 : 1][C]), M); else {
					for (E = 0; y > E; E++)A = G[E][C], H = G[E + 1][C], M[E] = new f(A, 0, 0, H), z && (O = G[E + 2][C], w[E] = (w[E] || 0) + (H - A) * (H -
						A), d[E] = (d[E] || 0) + (O - H) * (O - H));
					G = (M[E] = new f(G[E][C], 0, 0, G[E + 1][C]), M)
				}
				B[r] = G
			}
			for (u = w.length; -1 < --u;)w[u] = Math.sqrt(w[u]), d[u] = Math.sqrt(d[u]);
			if (!e) {
				for (u = P.length; -1 < --u;)if (c[m]) for (l = B[P[u]], r = l.length - 1, h = 0; r > h; h++)a = l[h + 1].da / d[h] + l[h].da / w[h], b[h] = (b[h] || 0) + a * a;
				for (u = b.length; -1 < --u;)b[u] = Math.sqrt(b[u])
			}
			u = P.length;
			for (h = n ? 4 : 1; -1 < --u;) {
				m = P[u];
				a = l = B[m];
				r = g;
				G = n;
				C = e;
				m = c[m];
				for (var Q = y = F = z = void 0, V = H = Q = A = M = O = E = void 0, ca = void 0, T = void 0, Z = a.length - 1, U = 0, S = a[0].a, z = 0; Z > z; z++)E = a[U], F = E.a, y = E.d, Q =
					a[U + 1].d, m ? (V = w[z], ca = d[z], T = .25 * (ca + V) * r / (C ? .5 : b[z] || .5), O = y - (y - F) * (C ? .5 * r : 0 !== V ? T / V : 0), M = y + (Q - y) * (C ? .5 * r : 0 !== ca ? T / ca : 0), A = y - (O + ((M - O) * (3 * V / (V + ca) + .5) / 4 || 0))) : (O = y - .5 * (y - F) * r, M = y + .5 * (Q - y) * r, A = y - (O + M) / 2), O += A, M += A, E.c = Q = O, E.b = 0 !== z ? S : S = E.a + .6 * (E.c - E.a), E.da = y - F, E.ca = Q - F, E.ba = S - F, G ? (H = q(F, S, Q, y), a.splice(U, 1, H[0], H[1], H[2], H[3]), U += 4) : U++, S = M;
				E = a[U];
				E.b = S;
				E.c = S + .4 * (E.d - S);
				E.da = E.d - E.a;
				E.ca = E.c - E.a;
				E.ba = S - E.a;
				G && (H = q(E.a, S, E.c, E.d), a.splice(U, 1, H[0], H[1], H[2], H[3]));
				x && (l.splice(0, h), l.splice(l.length -
					h, h))
			}
			return B
		}, m = window._gsDefine.plugin({
			propName: "bezier", priority: -1, API: 2, global: !0, init: function (b, c, d) {
				this._target = b;
				c instanceof Array && (c = { values: c });
				this._func = {};
				this._round = {};
				this._props = [];
				this._timeRes = null == c.timeResolution ? 6 : parseInt(c.timeResolution, 10);
				var e, h, a, u, m = c.values || [], r = {};
				h = m[0];
				this._autoRotate = (d = c.autoRotate || d.vars.orientToBezier) ? d instanceof Array ? d : [["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]] : null;
				for (e in h) this._props.push(e);
				for (h = this._props.length; -1 < --h;)e =
					this._props[h], this._overwriteProps.push(e), d = this._func[e] = "function" == typeof b[e], r[e] = d ? b[e.indexOf("set") || "function" != typeof b["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(b[e]), u || r[e] !== m[0][e] && (u = r);
				if ("cubic" !== c.type && "quadratic" !== c.type && "soft" !== c.type) r = x(m, isNaN(c.curviness) ? 1 : c.curviness, !1, "thruBasic" === c.type, c.correlate, u); else {
					u = m;
					h = (h = c.type) || "soft";
					var q, w, z, G, C, N, F;
					c = {};
					var m = "cubic" === h ? 3 : 2, y = "soft" === h, E = [];
					if (y && r && (u = [r].concat(u)), null == u || m + 1 > u.length) throw "invalid Bezier data";
					for (q in u[0]) E.push(q);
					for (G = E.length; -1 < --G;) {
						q = E[G];
						c[q] = d = [];
						F = 0;
						N = u.length;
						for (C = 0; N > C; C++)h = null == r ? u[C][q] : "string" == typeof (w = u[C][q]) && "=" === w.charAt(1) ? r[q] + Number(w.charAt(0) + w.substr(2)) : Number(w), y && 1 < C && N - 1 > C && (d[F++] = (h + d[F - 2]) / 2), d[F++] = h;
						N = F - m + 1;
						for (C = F = 0; N > C; C += m)h = d[C], q = d[C + 1], w = d[C + 2], z = 2 === m ? 0 : d[C + 3], d[F++] = w = 3 === m ? new f(h, q, w, z) : new f(h, (2 * q + h) / 3, (2 * q + w) / 3, w);
						d.length = F
					}
					r = c
				}
				if (this._beziers = r, this._segCount = this._beziers[e].length, this._timeRes) {
					d = this._beziers;
					e = this._timeRes;
					e = e >> 0 || 6;
					r = [];
					q = [];
					u = w = 0;
					c = e - 1;
					m = [];
					h = [];
					for (a in d) {
						G = d[a];
						C = r;
						N = e;
						var A = void 0, H = void 0, O = y = F = H = void 0, M = A = void 0, Q = void 0, Q = O = void 0, E = 1 / N;
						for (z = G.length; -1 < --z;)for (O = G[z], H = O.a, F = O.d - H, y = O.c - H, O = O.b - H, H = 0, M = 1; N >= M; M++)A = E * M, Q = 1 - A, A = H - (H = (A * A * F + 3 * Q * (A * y + Q * O)) * A), Q = z * N + M - 1, C[Q] = (C[Q] || 0) + A * A
					}
					d = r.length;
					for (a = 0; d > a; a++)w += Math.sqrt(r[a]), G = a % e, h[G] = w, G === c && (u += w, G = a / e >> 0, m[G] = h, q[G] = u, w = 0, h = []);
					this._length = u;
					this._lengths = q;
					this._segments = m;
					this._l1 = this._li = this._s1 = this._si = 0;
					this._l2 = this._lengths[0];
					this._curSeg = this._segments[0];
					this._s2 = this._curSeg[0];
					this._prec = 1 / this._curSeg.length
				}
				if (d = this._autoRotate) for (d[0] instanceof Array || (this._autoRotate = d = [d]), h = d.length; -1 < --h;)for (a = 0; 3 > a; a++)e = d[h][a], this._func[e] = "function" == typeof b[e] ? b[e.indexOf("set") || "function" != typeof b["get" + e.substr(3)] ? e : "get" + e.substr(3)] : !1;
				return !0
			}, set: function (b) {
				var c, d, e, f, a, u;
				a = this._segCount;
				var m = this._func, r = this._target;
				if (this._timeRes) {
					if (c = this._lengths, f = this._curSeg, b *= this._length, e = this._li, b >
						this._l2 && a - 1 > e) {
						for (--a; a > e && b >= (this._l2 = c[++e]););
						this._l1 = c[e - 1];
						this._li = e;
						this._curSeg = f = this._segments[e];
						this._s2 = f[this._s1 = this._si = 0]
					} else if (this._l1 > b && 0 < e) {
						for (; 0 < e && (this._l1 = c[--e]) >= b;);
						0 === e && this._l1 > b ? this._l1 = 0 : e++;
						this._l2 = c[e];
						this._li = e;
						this._curSeg = f = this._segments[e];
						this._s1 = f[(this._si = f.length - 1) - 1] || 0;
						this._s2 = f[this._si]
					}
					if (c = e, b -= this._l1, e = this._si, b > this._s2 && f.length - 1 > e) {
						for (a = f.length - 1; a > e && b >= (this._s2 = f[++e]););
						this._s1 = f[e - 1];
						this._si = e
					} else if (this._s1 > b &&
						0 < e) {
						for (; 0 < e && (this._s1 = f[--e]) >= b;);
						0 === e && this._s1 > b ? this._s1 = 0 : e++;
						this._s2 = f[e];
						this._si = e
					}
					a = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
				} else c = 0 > b ? 0 : 1 <= b ? a - 1 : a * b >> 0, a *= b - 1 / a * c;
				d = 1 - a;
				for (e = this._props.length; -1 < --e;)b = this._props[e], f = this._beziers[b][c], u = (a * a * f.da + 3 * d * (a * f.ca + d * f.ba)) * a + f.a, this._round[b] && (u = u + (0 < u ? .5 : -.5) >> 0), m[b] ? r[b](u) : r[b] = u;
				if (this._autoRotate) {
					var q, w, x, z, C, N, F = this._autoRotate;
					for (e = F.length; -1 < --e;)b = F[e][2], C = F[e][3] || 0, N = !0 === F[e][4] ? 1 : h, f = this._beziers[F[e][0]],
						d = this._beziers[F[e][1]], f && d && (f = f[c], d = d[c], q = f.a + (f.b - f.a) * a, x = f.b + (f.c - f.b) * a, q += (x - q) * a, x += (f.c + (f.d - f.c) * a - x) * a, w = d.a + (d.b - d.a) * a, z = d.b + (d.c - d.b) * a, w += (z - w) * a, z += (d.c + (d.d - d.c) * a - z) * a, u = Math.atan2(z - w, x - q) * N + C, m[b] ? r[b](u) : r[b] = u)
				}
			}
		}), z = m.prototype;
		m.bezierThrough = x;
		m.cubicToQuadratic = q;
		m._autoCSS = !0;
		m.quadraticToCubic = function (b, c, d) {
			return new f(b, (2 * c + b) / 3, (2 * c + d) / 3, d)
		};
		m._cssRegister = function () {
			var b = window._gsDefine.globals.CSSPlugin;
			if (b) {
				var b = b._internals, c = b._parseToProxy, d = b._setPluginRatio,
					e = b.CSSPropTween;
				b._registerComplexSpecialProp("bezier", {
					parser: function (b, a, f, h, l, q) {
						a instanceof Array && (a = { values: a });
						q = new m;
						var w, x, z = a.values, C = z.length - 1, N = [], F = {};
						if (0 > C) return l;
						for (f = 0; C >= f; f++)x = c(b, z[f], h, l, q, C !== f), N[f] = x.end;
						for (w in a) F[w] = a[w];
						return F.values = N, l = new e(b, "bezier", 0, 0, x.pt, 2), l.data = x, l.plugin = q, l.setRatio = d, 0 === F.autoRotate && (F.autoRotate = !0), !F.autoRotate || F.autoRotate instanceof Array || (f = !0 === F.autoRotate ? 0 : Number(F.autoRotate), F.autoRotate = null != x.end.left ? [["left",
							"top", "rotation", f, !1]] : null != x.end.x ? [["x", "y", "rotation", f, !1]] : !1), F.autoRotate && (h._transform || h._enableTransforms(!1), x.autoRotate = h._target._gsTransform), q._onInitTween(x.proxy, F, h._tween), l
					}
				})
			}
		};
		z._roundProps = function (b, c) {
			for (var d = this._overwriteProps, e = d.length; -1 < --e;)(b[d[e]] || b.bezier || b.bezierThrough) && (this._round[d[e]] = c)
		};
		z._kill = function (b) {
			var c, d, e = this._props;
			for (c in this._beziers) if (c in b) for (delete this._beziers[c], delete this._func[c], d = e.length; -1 < --d;)e[d] === c && e.splice(d,
				1);
			return this._super._kill.call(this, b)
		}
	})();
	window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (h, w) {
		var d, b, c, f, q = function () {
			h.call(this, "css");
			this._overwriteProps.length = 0;
			this.setRatio = q.prototype.setRatio
		}, x = {}, m = q.prototype = new h("css");
		m.constructor = q;
		q.version = "1.11.2";
		q.API = 2;
		q.defaultTransformPerspective = 0;
		m = "px";
		q.suffixMap = {
			top: m,
			right: m,
			bottom: m,
			left: m,
			width: m,
			height: m,
			fontSize: m,
			padding: m,
			margin: m,
			perspective: m
		};
		var z, l, g, n, e, D, a = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
			u = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, J = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, r = /[^\d\-\.]/g, Y = /(?:\d|\-|\+|=|#|\.)*/g, B = /opacity *= *([^)]*)/, P = /opacity:([^;]*)/, G = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, N = /([A-Z])/g, F = /-([a-z])/gi, y = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (a, b) {
				return b.toUpperCase()
			}, A = /(?:Left|Right|Width)/i, H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, M = /,(?=[^\)]*(?:\(|$))/gi, Q = Math.PI /
				180, V = 180 / Math.PI, ca = {}, T = document, Z = T.createElement("div"), U = T.createElement("img"), S = q._internals = { _specialProps: x }, ea = navigator.userAgent, aa = function () {
					var a, b = ea.indexOf("Android"), c = T.createElement("div");
					return g = -1 !== ea.indexOf("Safari") && -1 === ea.indexOf("Chrome") && (-1 === b || 3 < Number(ea.substr(b + 8, 1))), e = g && 6 > Number(ea.substr(ea.indexOf("Version/") + 8, 1)), n = -1 !== ea.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ea) && (D = parseFloat(RegExp.$1)), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
						a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
				}(), k = function (a) {
					return B.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
				}, t = "", p = "", v = function (a, b) {
					b = b || Z;
					var c, d, e = b.style;
					if (void 0 !== e[a]) return a;
					a = a.charAt(0).toUpperCase() + a.substr(1);
					c = ["O", "Moz", "ms", "Ms", "Webkit"];
					for (d = 5; -1 < --d && void 0 === e[c[d] + a];);
					return 0 <= d ? (p = 3 === d ? "ms" : c[d], t = "-" + p.toLowerCase() + "-", p + a) : null
				}, I = T.defaultView ? T.defaultView.getComputedStyle :
					function () {
					}, L = q.getStyle = function (a, b, c, d, e) {
						var g;
						return aa || "opacity" !== b ? (!d && a.style[b] ? g = a.style[b] : (c = c || I(a, null)) ? (a = c.getPropertyValue(b.replace(N, "-$1").toLowerCase()), g = a || c.length ? a : c[b]) : a.currentStyle && (g = a.currentStyle[b]), null == e || g && "none" !== g && "auto" !== g && "auto auto" !== g ? g : e) : k(a)
					}, K = function (a, b, c, d, e) {
						if ("px" === d || !d) return c;
						if ("auto" === d || !c) return 0;
						var k, g = A.test(b), f = a, h = Z.style, p = 0 > c;
						return p && (c = -c), "%" === d && -1 !== b.indexOf("border") ? k = c / 100 * (g ? a.clientWidth : a.clientHeight) :
							(h.cssText = "border:0 solid red;position:" + L(a, "position") + ";line-height:0;", "%" !== d && f.appendChild ? h[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (f = a.parentNode || T.body, h[g ? "width" : "height"] = c + d), f.appendChild(Z), k = parseFloat(Z[g ? "offsetWidth" : "offsetHeight"]), f.removeChild(Z), 0 !== k || e || (k = K(a, b, c, d, !0))), p ? -k : k
					}, W = function (a, b, c) {
						if ("absolute" !== L(a, "position", c)) return 0;
						var d = "left" === b ? "Left" : "Top";
						c = L(a, "margin" + d, c);
						return a["offset" + d] - (K(a, b, parseFloat(c), c.replace(Y, "")) || 0)
					}, la = function (a,
						b) {
						var c, d, e = {};
						if (b = b || I(a, null)) if (c = b.length) for (; -1 < --c;)e[b[c].replace(F, E)] = b.getPropertyValue(b[c]); else for (c in b) e[c] = b[c]; else if (b = a.currentStyle || a.style) for (c in b) "string" == typeof c && void 0 !== e[c] && (e[c.replace(F, E)] = b[c]);
						return aa || (e.opacity = k(a)), d = ka(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, ga && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
					}, qa = function (a, b, c, d, e) {
						var k,
							g, f, h = {}, p = a.style;
						for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (k = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof k || "string" == typeof k) && (h[g] = "auto" !== k || "left" !== g && "top" !== g ? "" !== k && "auto" !== k && "none" !== k || "string" != typeof b[g] || "" === b[g].replace(r, "") ? k : 0 : W(a, g), void 0 !== p[g] && (f = new pa(p, g, p[g], f)));
						if (d) for (g in d) "className" !== g && (h[g] = d[g]);
						return { difs: h, firstMPT: f }
					}, Ba = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, Ca = ["marginLeft", "marginRight", "marginTop",
						"marginBottom"], ra = function (a, b) {
							null != a && "" !== a && "auto" !== a && "auto auto" !== a || (a = "0 0");
							var c = a.split(" "), d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0], e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
							return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(r, "")), b.oy =
								parseFloat(e.replace(r, ""))), d + " " + e + (2 < c.length ? " " + c[2] : "")
						}, wa = function (a, b) {
							return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
						}, ha = function (a, b) {
							return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
						}, ma = function (a, b, c, d) {
							var e, k, g;
							return null == a ? g = b : "number" == typeof a ? g = a : (e = a.split("_"), k = Number(e[0].replace(r, "")) * (-1 === a.indexOf("rad") ? 1 : V) - ("=" === a.charAt(1) ?
								0 : b), e.length && (d && (d[c] = b + k), -1 !== a.indexOf("short") && (k %= 360, k !== k % 180 && (k = 0 > k ? k + 360 : k - 360)), -1 !== a.indexOf("_cw") && 0 > k ? k = (k + 3599999999640) % 360 - 360 * (0 | k / 360) : -1 !== a.indexOf("ccw") && 0 < k && (k = (k - 3599999999640) % 360 - 360 * (0 | k / 360))), g = b + k), 1E-6 > g && -1E-6 < g && (g = 0), g
						}, ja = {
							aqua: [0, 255, 255],
							lime: [0, 255, 0],
							silver: [192, 192, 192],
							black: [0, 0, 0],
							maroon: [128, 0, 0],
							teal: [0, 128, 128],
							blue: [0, 0, 255],
							navy: [0, 0, 128],
							white: [255, 255, 255],
							fuchsia: [255, 0, 255],
							olive: [128, 128, 0],
							yellow: [255, 255, 0],
							orange: [255, 165, 0],
							gray: [128,
								128, 128],
							purple: [128, 0, 128],
							green: [0, 128, 0],
							red: [255, 0, 0],
							pink: [255, 192, 203],
							cyan: [0, 255, 255],
							transparent: [255, 255, 255, 0]
						}, sa = function (a, b, c) {
							return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
						}, ta = function (b) {
							var c, d, e, k, g, f;
							return b && "" !== b ? "number" == typeof b ? [b >> 16, 255 & b >> 8, 255 & b] : ("," === b.charAt(b.length - 1) && (b = b.substr(0, b.length - 1)), ja[b] ? ja[b] : "#" === b.charAt(0) ? (4 === b.length && (c = b.charAt(1), d = b.charAt(2), e = b.charAt(3), b = "#" + c + c + d + d + e + e), b = parseInt(b.substr(1),
								16), [b >> 16, 255 & b >> 8, 255 & b]) : "hsl" === b.substr(0, 3) ? (b = b.match(a), k = Number(b[0]) % 360 / 360, g = Number(b[1]) / 100, f = Number(b[2]) / 100, d = .5 >= f ? f * (g + 1) : f + g - f * g, c = 2 * f - d, 3 < b.length && (b[3] = Number(b[3])), b[0] = sa(k + 1 / 3, c, d), b[1] = sa(k, c, d), b[2] = sa(k - 1 / 3, c, d), b) : (b = b.match(a) || ja.transparent, b[0] = Number(b[0]), b[1] = Number(b[1]), b[2] = Number(b[2]), 3 < b.length && (b[3] = Number(b[3])), b)) : ja.black
						}, ia = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
		for (m in ja) ia += "|" + m + "\\b";
		var ia = RegExp(ia + ")", "gi"), xa = function (b,
			c, d, e) {
			if (null == b) return function (a) {
				return a
			};
			var k, g = c ? (b.match(ia) || [""])[0] : "", f = b.split(g).join("").match(J) || [], h = b.substr(0, b.indexOf(f[0])), p = ")" === b.charAt(b.length - 1) ? ")" : "", t = -1 !== b.indexOf(" ") ? " " : ",", v = f.length, l = 0 < v ? f[0].replace(a, "") : "";
			return v ? k = c ? function (a) {
				var b, c, da;
				if ("number" == typeof a) a += l; else if (e && M.test(a)) {
					a = a.replace(M, "|").split("|");
					for (da = 0; a.length > da; da++)a[da] = k(a[da]);
					return a.join(",")
				}
				if (b = (a.match(ia) || [g])[0], c = a.split(b).join("").match(J) || [], da = c.length,
					v > da--) for (; v > ++da;)c[da] = d ? c[0 | (da - 1) / 2] : f[da];
				return h + c.join(t) + t + b + p + (-1 !== a.indexOf("inset") ? " inset" : "")
			} : function (a) {
				var b, c;
				if ("number" == typeof a) a += l; else if (e && M.test(a)) {
					a = a.replace(M, "|").split("|");
					for (c = 0; a.length > c; c++)a[c] = k(a[c]);
					return a.join(",")
				}
				if (b = a.match(J) || [], c = b.length, v > c--) for (; v > ++c;)b[c] = d ? b[0 | (c - 1) / 2] : f[c];
				return h + b.join(t) + p
			} : function (a) {
				return a
			}
		}, ya = function (a) {
			return a = a.split(","), function (b, c, d, e, k, g, f) {
				d = (c + "").split(" ");
				f = {};
				for (c = 0; 4 > c; c++)f[a[c]] = d[c] = d[c] ||
					d[(c - 1) / 2 >> 0];
				return e.parse(b, f, k, g)
			}
		}, pa = (S._setPluginRatio = function (a) {
			this.plugin.setRatio(a);
			for (var b, c, d = this.data, e = d.proxy, k = d.firstMPT; k;)b = e[k.v], k.r ? b = 0 < b ? 0 | b + .5 : 0 | b - .5 : 1E-6 > b && -1E-6 < b && (b = 0), k.t[k.p] = b, k = k._next;
			if (d.autoRotate && (d.autoRotate.rotation = e.rotation), 1 === a) for (k = d.firstMPT; k;) {
				if (c = k.t, c.type) {
					if (1 === c.type) {
						b = c.xs0 + c.s + c.xs1;
						for (a = 1; c.l > a; a++)b += c["xn" + a] + c["xs" + (a + 1)];
						c.e = b
					}
				} else c.e = c.s + c.xs0;
				k = k._next
			}
		}, function (a, b, c, d, e) {
			this.t = a;
			this.p = b;
			this.v = c;
			this.r = e;
			d && (d._prev =
				this, this._next = d)
		}), X = (S._parseToProxy = function (a, b, c, d, e, k) {
			var g, f, h, p = d, t = {}, v = {};
			f = c._transform;
			var l = ca;
			c._transform = null;
			ca = b;
			d = a = c.parse(a, b, d, e);
			ca = l;
			for (k && (c._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); d && d !== p;) {
				if (1 >= d.type && (g = d.p, v[g] = d.s + d.c, t[g] = d.s, k || (h = new pa(d, "s", g, h, d.r), d.c = 0), 1 === d.type)) for (c = d.l; 0 < --c;)f = "xn" + c, g = d.p + "_" + f, v[g] = d.data[f], t[g] = d[f], k || (h = new pa(d, f, g, h, d.rxp[f]));
				d = d._next
			}
			return { proxy: t, end: v, firstMPT: h, pt: a }
		}, S.CSSPropTween = function (a,
			b, c, e, k, g, h, p, t, v, l) {
			this.t = a;
			this.p = b;
			this.s = c;
			this.c = e;
			this.n = h || b;
			a instanceof X || f.push(this.n);
			this.r = p;
			this.type = g || 0;
			t && (this.pr = t, d = !0);
			this.b = void 0 === v ? c : v;
			this.e = void 0 === l ? c + e : l;
			k && (this._next = k, k._prev = this)
		}), na = q.parseComplex = function (b, c, d, e, k, g, f, h, p, t) {
			d = d || g || "";
			f = new X(b, c, 0, 0, f, t ? 2 : 1, null, !1, h, d, e);
			e += "";
			var v, l, n, L, m;
			b = d.split(", ").join(",").split(" ");
			c = e.split(", ").join(",").split(" ");
			h = b.length;
			var I = !1 !== z;
			(-1 !== e.indexOf(",") || -1 !== d.indexOf(",")) && (b = b.join(" ").replace(M,
				", ").split(" "), c = c.join(" ").replace(M, ", ").split(" "), h = b.length);
			h !== c.length && (b = (g || "").split(" "), h = b.length);
			f.plugin = p;
			f.setRatio = t;
			for (d = 0; h > d; d++)if (v = b[d], p = c[d], n = parseFloat(v), n || 0 === n) f.appendXtra("", n, wa(p, n), p.replace(u, ""), I && -1 !== p.indexOf("px"), !0); else if (k && ("#" === v.charAt(0) || ja[v] || C.test(v))) t = "," === p.charAt(p.length - 1) ? ")," : ")", v = ta(v), p = ta(p), (g = 6 < v.length + p.length) && !aa && 0 === p[3] ? (f["xs" + f.l] += f.l ? " transparent" : "transparent", f.e = f.e.split(c[d]).join("transparent")) : (aa ||
				(g = !1), f.appendXtra(g ? "rgba(" : "rgb(", v[0], p[0] - v[0], ",", !0, !0).appendXtra("", v[1], p[1] - v[1], ",", !0).appendXtra("", v[2], p[2] - v[2], g ? "," : t, !0), g && (v = 4 > v.length ? 1 : v[3], f.appendXtra("", v, (4 > p.length ? 1 : p[3]) - v, t, !1))); else if (g = v.match(a)) {
					if (l = p.match(u), !l || l.length !== g.length) return f;
					for (p = t = 0; g.length > p; p++)m = g[p], L = v.indexOf(m, t), f.appendXtra(v.substr(t, L - t), Number(m), wa(l[p], m), "", I && "px" === v.substr(L + m.length, 2), 0 === p), t = L + m.length;
					f["xs" + f.l] += v.substr(t)
				} else f["xs" + f.l] += f.l ? " " + v : v;
			if (-1 !==
				e.indexOf("=") && f.data) {
				t = f.xs0 + f.data.s;
				for (d = 1; f.l > d; d++)t += f["xs" + d] + f.data["xn" + d];
				f.e = t + f["xs" + d]
			}
			return f.l || (f.type = -1, f.xs0 = f.e), f.xfirst || f
		}, ba = 9, m = X.prototype;
		for (m.l = m.pr = 0; 0 < --ba;)m["xn" + ba] = 0, m["xs" + ba] = "";
		m.xs0 = "";
		m._next = m._prev = m.xfirst = m.data = m.plugin = m.setRatio = m.rxp = null;
		m.appendXtra = function (a, b, c, d, e, k) {
			var g = this.l;
			return this["xs" + g] += k && g ? " " + a : a || "", c || 0 === g || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = d || "", 0 < g ? (this.data["xn" + g] = b + c, this.rxp["xn" +
				g] = e, this["xn" + g] = b, this.plugin || (this.xfirst = new X(this, "xn" + g, b, c, this.xfirst || this, 0, this.n, e, this.pr), this.xfirst.xs0 = 0), this) : (this.data = { s: b + c }, this.rxp = {}, this.s = b, this.c = c, this.r = e, this)) : (this["xs" + g] += b + (d || ""), this)
		};
		var za = function (a, b) {
			b = b || {};
			this.p = b.prefix ? v(a) || a : a;
			x[a] = x[this.p] = this;
			this.format = b.formatter || xa(b.defaultValue, b.color, b.collapsible, b.multi);
			b.parser && (this.parse = b.parser);
			this.clrs = b.color;
			this.multi = b.multi;
			this.keyword = b.keyword;
			this.dflt = b.defaultValue;
			this.pr =
				b.priority || 0
		}, R = S._registerComplexSpecialProp = function (a, b, c) {
			"object" != typeof b && (b = { parser: c });
			var d = a.split(","), e = b.defaultValue;
			c = c || [e];
			for (a = 0; d.length > a; a++)b.prefix = 0 === a && b.prefix, b.defaultValue = c[a] || e, new za(d[a], b)
		}, S = function (a) {
			if (!x[a]) {
				var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
				R(a, {
					parser: function (a, c, d, e, k, g, f) {
						var p = (window.GreenSockGlobals || window).com.greensock.plugins[b];
						p ? a = (p._cssRegister(), x[d].parse(a, c, d, e, k, g, f)) : (window.console && console.log("Error: " + b + " js file not loaded."),
							a = k);
						return a
					}
				})
			}
		}, m = za.prototype;
		m.parseComplex = function (a, b, c, d, e, k) {
			var g, f, p, h, t, v, l = this.keyword;
			if (this.multi && (M.test(c) || M.test(b) ? (f = b.replace(M, "|").split("|"), p = c.replace(M, "|").split("|")) : l && (f = [b], p = [c])), p) {
				h = p.length > f.length ? p.length : f.length;
				for (g = 0; h > g; g++)b = f[g] = f[g] || this.dflt, c = p[g] = p[g] || this.dflt, l && (t = b.indexOf(l), v = c.indexOf(l), t !== v && (c = -1 === v ? p : f, c[g] += " " + l));
				b = f.join(", ");
				c = p.join(", ")
			}
			return na(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, k)
		};
		m.parse = function (a, b,
			d, e, k, g) {
			return this.parseComplex(a.style, this.format(L(a, this.p, c, !1, this.dflt)), this.format(b), k, g)
		};
		q.registerSpecialProp = function (a, b, c) {
			R(a, {
				parser: function (a, d, e, k, g, f) {
					g = new X(a, e, 0, 0, g, 2, e, !1, c);
					return g.plugin = f, g.setRatio = b(a, d, k._tween, e), g
				}, priority: c
			})
		};
		var Aa = "scaleX scaleY scaleZ x y z skewX rotation rotationX rotationY perspective".split(" "), fa = v("transform"), Da = t + "transform", ua = v("transformOrigin"), ga = null !== v("perspective"), ka = function (a, b, c, d) {
			if (a._gsTransform && c && !d) return a._gsTransform;
			var e, k, g, f, p, h, t, v, l, n, u, m = c ? a._gsTransform || { skewY: 0 } : { skewY: 0 }, I = 0 > m.scaleX;
			p = 179.99 * Q;
			var r = ga ? parseFloat(L(a, ua, b, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0;
			fa ? e = L(a, Da, b, !0) : a.currentStyle && (e = a.currentStyle.filter.match(H), e = e && 4 === e.length ? [e[0].substr(4), Number(e[2].substr(4)), Number(e[1].substr(4)), e[3].substr(4), m.x || 0, m.y || 0].join() : "");
			k = (e || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
			for (e = k.length; -1 < --e;)g = Number(k[e]), k[e] = (f = g - (g |= 0)) ? (0 | 1E5 * f + (0 > f ? -.5 : .5)) / 1E5 + g : g;
			if (16 === k.length) {
				I =
					k[8];
				b = k[9];
				f = k[10];
				g = k[12];
				var w = k[13], W = k[14];
				if (m.zOrigin && (W = -m.zOrigin, g = I * W - k[12], w = b * W - k[13], W = f * W + m.zOrigin - k[14]), !c || d || null == m.rotationX) {
					var x;
					d = k[0];
					var K = k[1], z = k[2], A = k[3], J = k[4], B = k[5], C = k[6], E = k[7];
					k = k[11];
					var y = Math.atan2(C, f), D = -p > y || y > p;
					m.rotationX = y * V;
					y && (l = Math.cos(-y), n = Math.sin(-y), h = J * l + I * n, t = B * l + b * n, v = C * l + f * n, I = J * -n + I * l, b = B * -n + b * l, f = C * -n + f * l, k = E * -n + k * l, J = h, B = t, C = v);
					y = Math.atan2(I, d);
					m.rotationY = y * V;
					y && (u = -p > y || y > p, l = Math.cos(-y), n = Math.sin(-y), h = d * l - I * n, t = K * l - b * n, v = z * l - f *
						n, b = K * n + b * l, f = z * n + f * l, k = A * n + k * l, d = h, K = t, z = v);
					y = Math.atan2(K, B);
					m.rotation = y * V;
					y && (x = -p > y || y > p, l = Math.cos(-y), n = Math.sin(-y), d = d * l + J * n, t = K * l + B * n, B = K * -n + B * l, C = z * -n + C * l, K = t);
					x && D ? m.rotation = m.rotationX = 0 : x && u ? m.rotation = m.rotationY = 0 : u && D && (m.rotationY = m.rotationX = 0);
					m.scaleX = (0 | 1E5 * Math.sqrt(d * d + K * K) + .5) / 1E5;
					m.scaleY = (0 | 1E5 * Math.sqrt(B * B + b * b) + .5) / 1E5;
					m.scaleZ = (0 | 1E5 * Math.sqrt(C * C + f * f) + .5) / 1E5;
					m.skewX = 0;
					m.perspective = k ? 1 / (0 > k ? -k : k) : 0;
					m.x = g;
					m.y = w;
					m.z = W
				}
			} else ga && !d && k.length && m.x === k[4] && m.y === k[5] &&
				(m.rotationX || m.rotationY) || void 0 !== m.x && "none" === L(a, "display", b) || (h = (p = 6 <= k.length) ? k[0] : 1, v = k[1] || 0, t = k[2] || 0, l = p ? k[3] : 1, m.x = k[4] || 0, m.y = k[5] || 0, k = Math.sqrt(h * h + v * v), p = Math.sqrt(l * l + t * t), h = h || v ? Math.atan2(v, h) * V : m.rotation || 0, t = t || l ? Math.atan2(t, l) * V + h : m.skewX || 0, v = k - Math.abs(m.scaleX || 0), l = p - Math.abs(m.scaleY || 0), 90 < Math.abs(t) && 270 > Math.abs(t) && (I ? (k *= -1, t += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (p *= -1, t += 0 >= t ? 180 : -180)), n = (h - m.rotation) % 180, u = (t - m.skewX) % 180, (void 0 === m.skewX || 2E-5 < v || -2E-5 > v || 2E-5 <
					l || -2E-5 > l || -179.99 < n && 179.99 > n && 0 | 1E5 * n || -179.99 < u && 179.99 > u && 0 | 1E5 * u) && (m.scaleX = k, m.scaleY = p, m.rotation = h, m.skewX = t), ga && (m.rotationX = m.rotationY = m.z = 0, m.perspective = parseFloat(q.defaultTransformPerspective) || 0, m.scaleZ = 1));
			m.zOrigin = r;
			for (e in m) 2E-5 > m[e] && -2E-5 < m[e] && (m[e] = 0);
			return c && (a._gsTransform = m), m
		}, Ea = function (a) {
			var b, c, d = this.data, e = -d.rotation * Q, k = e + d.skewX * Q, g = (0 | Math.cos(e) * d.scaleX * 1E5) / 1E5, f = (0 | Math.sin(e) * d.scaleX * 1E5) / 1E5, p = (0 | Math.sin(k) * -d.scaleY * 1E5) / 1E5, h = (0 | Math.cos(k) *
				d.scaleY * 1E5) / 1E5, k = this.t.style;
			if (e = this.t.currentStyle) {
				c = f;
				f = -p;
				p = -c;
				b = e.filter;
				k.filter = "";
				var t, v;
				c = this.t.offsetWidth;
				var l = this.t.offsetHeight, m = "absolute" !== e.position, n = "progid:DXImageTransform.Microsoft.Matrix(M11=" + g + ", M12=" + f + ", M21=" + p + ", M22=" + h, u = d.x, L = d.y;
				if (null != d.ox && (t = (d.oxp ? .01 * c * d.ox : d.ox) - c / 2, v = (d.oyp ? .01 * l * d.oy : d.oy) - l / 2, u += t - (t * g + v * f), L += v - (t * p + v * h)), m ? (t = c / 2, v = l / 2, n += ", Dx=" + (t - (t * g + v * f) + u) + ", Dy=" + (v - (t * p + v * h) + L) + ")") : n += ", sizingMethod='auto expand')", k.filter = -1 !==
					b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(O, n) : n + " " + b, (0 === a || 1 === a) && 1 === g && 0 === f && 0 === p && 1 === h && (m && -1 === n.indexOf("Dx=0, Dy=0") || B.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && k.removeAttribute("filter")), !m) for (a = 8 > D ? 1 : -1, t = d.ieOffsetX || 0, v = d.ieOffsetY || 0, d.ieOffsetX = Math.round((c - ((0 > g ? -g : g) * c + (0 > f ? -f : f) * l)) / 2 + u), d.ieOffsetY = Math.round((l - ((0 > h ? -h : h) * l + (0 > p ? -p : p) * c)) / 2 + L), ba = 0; 4 > ba; ba++)g = Ca[ba], f = e[g], c = -1 !== f.indexOf("px") ? parseFloat(f) : K(this.t,
						g, parseFloat(f), f.replace(Y, "")) || 0, f = c !== d[g] ? 2 > ba ? -d.ieOffsetX : -d.ieOffsetY : 2 > ba ? t - d.ieOffsetX : v - d.ieOffsetY, k[g] = (d[g] = Math.round(c - f * (0 === ba || 2 === ba ? 1 : a))) + "px"
			}
		}, Fa = function () {
			var a, b, c, d, e, k, g, f, p, t, h, v, l, m, u, L, I, r, q, w, W, x, K = this.data, z = this.t.style, y = K.rotation * Q, B = K.scaleX, A = K.scaleY, J = K.scaleZ, C = K.perspective;
			n && (1E-4 > B && -1E-4 < B && (B = J = 2E-5), 1E-4 > A && -1E-4 < A && (A = J = 2E-5), !C || K.z || K.rotationX || K.rotationY || (C = 0));
			if (y || K.skewX) I = Math.cos(y), r = Math.sin(y), a = I, e = r, K.skewX && (y -= K.skewX * Q, I = Math.cos(y),
				r = Math.sin(y)), b = -r, k = I; else {
				if (!(K.rotationY || K.rotationX || 1 !== J || C)) return z[fa] = "translate3d(" + K.x + "px," + K.y + "px," + K.z + "px)" + (1 !== B || 1 !== A ? " scale(" + B + "," + A + ")" : ""), void 0;
				a = k = 1;
				b = e = 0
			}
			h = 1;
			c = d = g = f = p = t = v = l = m = 0;
			u = C ? -1 / C : 0;
			L = K.zOrigin;
			(y = K.rotationY * Q) && (I = Math.cos(y), r = Math.sin(y), p = h * -r, l = u * -r, c = a * r, g = e * r, h *= I, u *= I, a *= I, e *= I);
			(y = K.rotationX * Q) && (I = Math.cos(y), r = Math.sin(y), q = b * I + c * r, w = k * I + g * r, W = t * I + h * r, x = m * I + u * r, c = b * -r + c * I, g = k * -r + g * I, h = t * -r + h * I, u = m * -r + u * I, b = q, k = w, t = W, m = x);
			1 !== J && (c *= J, g *= J, h *= J,
				u *= J);
			1 !== A && (b *= A, k *= A, t *= A, m *= A);
			1 !== B && (a *= B, e *= B, p *= B, l *= B);
			L && (v -= L, d = c * v, f = g * v, v = h * v + L);
			d = (q = (d += K.x) - (d |= 0)) ? (0 | 1E5 * q + (0 > q ? -.5 : .5)) / 1E5 + d : d;
			f = (q = (f += K.y) - (f |= 0)) ? (0 | 1E5 * q + (0 > q ? -.5 : .5)) / 1E5 + f : f;
			v = (q = (v += K.z) - (v |= 0)) ? (0 | 1E5 * q + (0 > q ? -.5 : .5)) / 1E5 + v : v;
			z[fa] = "matrix3d(" + [(0 | 1E5 * a) / 1E5, (0 | 1E5 * e) / 1E5, (0 | 1E5 * p) / 1E5, (0 | 1E5 * l) / 1E5, (0 | 1E5 * b) / 1E5, (0 | 1E5 * k) / 1E5, (0 | 1E5 * t) / 1E5, (0 | 1E5 * m) / 1E5, (0 | 1E5 * c) / 1E5, (0 | 1E5 * g) / 1E5, (0 | 1E5 * h) / 1E5, (0 | 1E5 * u) / 1E5, d, f, v, C ? 1 + -v / C : 1].join() + ")"
		}, Ga = function () {
			var a, b, c, d, e, k, g,
				f, p = this.data, h = this.t, t = h.style;
			n && (a = t.top ? "top" : t.bottom ? "bottom" : parseFloat(L(h, "top", null, !1)) ? "bottom" : "top", b = L(h, a, null, !1), c = parseFloat(b) || 0, d = b.substr((c + "").length) || "px", p._ffFix = !p._ffFix, t[a] = (p._ffFix ? c + .05 : c - .05) + d);
			p.rotation || p.skewX ? (e = p.rotation * Q, k = e - p.skewX * Q, g = 1E5 * p.scaleX, f = 1E5 * p.scaleY, t[fa] = "matrix(" + (0 | Math.cos(e) * g) / 1E5 + "," + (0 | Math.sin(e) * g) / 1E5 + "," + (0 | Math.sin(k) * -f) / 1E5 + "," + (0 | Math.cos(k) * f) / 1E5 + "," + p.x + "," + p.y + ")") : t[fa] = "matrix(" + p.scaleX + ",0,0," + p.scaleY + "," + p.x +
				"," + p.y + ")"
		};
		R("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
			parser: function (a, b, d, e, k, g, f) {
				if (e._transform) return k;
				var p, h, t, v, l, m;
				b = e._transform = ka(a, c, !0, f.parseTransform);
				var n = a.style, u = Aa.length, I = {};
				if ("string" == typeof f.transform && fa) t = n.cssText, n[fa] = f.transform, n.display = "block", p = ka(a, null, !1), n.cssText =
					t; else if ("object" == typeof f) {
						if (p = {
							scaleX: ha(null != f.scaleX ? f.scaleX : f.scale, b.scaleX),
							scaleY: ha(null != f.scaleY ? f.scaleY : f.scale, b.scaleY),
							scaleZ: ha(null != f.scaleZ ? f.scaleZ : f.scale, b.scaleZ),
							x: ha(f.x, b.x),
							y: ha(f.y, b.y),
							z: ha(f.z, b.z),
							perspective: ha(f.transformPerspective, b.perspective)
						}, m = f.directionalRotation, null != m) if ("object" == typeof m) for (t in m) f[t] = m[t]; else f.rotation = m;
						p.rotation = ma("rotation" in f ? f.rotation : "shortRotation" in f ? f.shortRotation + "_short" : "rotationZ" in f ? f.rotationZ : b.rotation,
							b.rotation, "rotation", I);
						ga && (p.rotationX = ma("rotationX" in f ? f.rotationX : "shortRotationX" in f ? f.shortRotationX + "_short" : b.rotationX || 0, b.rotationX, "rotationX", I), p.rotationY = ma("rotationY" in f ? f.rotationY : "shortRotationY" in f ? f.shortRotationY + "_short" : b.rotationY || 0, b.rotationY, "rotationY", I));
						p.skewX = null == f.skewX ? b.skewX : ma(f.skewX, b.skewX);
						p.skewY = null == f.skewY ? b.skewY : ma(f.skewY, b.skewY);
						(h = p.skewY - b.skewY) && (p.skewX += h, p.rotation += h)
					}
				null != f.force3D && (b.force3D = f.force3D, l = !0);
				for ((h = b.force3D ||
					b.z || b.rotationX || b.rotationY || p.z || p.rotationX || p.rotationY || p.perspective) || null == f.scale || (p.scaleZ = 1); -1 < --u;)d = Aa[u], v = p[d] - b[d], (1E-6 < v || -1E-6 > v || null != ca[d]) && (l = !0, k = new X(b, d, b[d], v, k), d in I && (k.e = I[d]), k.xs0 = 0, k.plugin = g, e._overwriteProps.push(k.n));
				return v = f.transformOrigin, (v || ga && h && b.zOrigin) && (fa ? (l = !0, d = ua, v = (v || L(a, d, c, !1, "50% 50%")) + "", k = new X(n, d, 0, 0, k, -1, "transformOrigin"), k.b = n[d], k.plugin = g, ga ? (t = b.zOrigin, v = v.split(" "), b.zOrigin = (2 < v.length && (0 === t || "0px" !== v[2]) ? parseFloat(v[2]) :
					t) || 0, k.xs0 = k.e = n[d] = v[0] + " " + (v[1] || "50%") + " 0px", k = new X(b, "zOrigin", 0, 0, k, -1, k.n), k.b = t, k.xs0 = k.e = b.zOrigin) : k.xs0 = k.e = n[d] = v) : ra(v + "", b)), l && (e._transformType = h || 3 === this._transformType ? 3 : 2), k
			}, prefix: !0
		});
		R("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" });
		R("borderRadius", {
			defaultValue: "0px", parser: function (a, d, e, k, f) {
				d = this.format(d);
				var g, p, t, h, l, m, n, u, I, r, q, w, W, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
					B = a.style;
				k = parseFloat(a.offsetWidth);
				u = parseFloat(a.offsetHeight);
				d = d.split(" ");
				for (g = 0; y.length > g; g++)this.p.indexOf("border") && (y[g] = v(y[g])), h = t = L(a, y[g], c, !1, "0px"), -1 !== h.indexOf(" ") && (t = h.split(" "), h = t[0], t = t[1]), l = p = d[g], m = parseFloat(h), r = h.substr((m + "").length), (q = "=" === l.charAt(1)) ? (n = parseInt(l.charAt(0) + "1", 10), l = l.substr(2), n *= parseFloat(l), I = l.substr((n + "").length - (0 > n ? 1 : 0)) || "") : (n = parseFloat(l), I = l.substr((n + "").length)), "" === I && (I = b[e] || r), I !== r && (w = K(a, "borderLeft", m, r), W = K(a,
					"borderTop", m, r), "%" === I ? (h = w / k * 100 + "%", t = W / u * 100 + "%") : "em" === I ? (x = K(a, "borderLeft", 1, "em"), h = w / x + "em", t = W / x + "em") : (h = w + "px", t = W + "px"), q && (l = parseFloat(h) + n + I, p = parseFloat(t) + n + I)), f = na(B, y[g], h + " " + t, l + " " + p, !1, "0px", f);
				return f
			}, prefix: !0, formatter: xa("0px 0px 0px 0px", !1, !0)
		});
		R("backgroundPosition", {
			defaultValue: "0 0", parser: function (a, b, d, e, k, g) {
				var f, p, t;
				d = c || I(a, null);
				d = this.format((d ? D ? d.getPropertyValue("background-position-x") + " " + d.getPropertyValue("background-position-y") : d.getPropertyValue("background-position") :
					a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0");
				var h = this.format(b);
				if (-1 !== d.indexOf("%") != (-1 !== h.indexOf("%")) && (f = L(a, "backgroundImage").replace(y, ""), f && "none" !== f)) {
					b = d.split(" ");
					e = h.split(" ");
					U.setAttribute("src", f);
					for (f = 2; -1 < --f;)d = b[f], p = -1 !== d.indexOf("%"), p !== (-1 !== e[f].indexOf("%")) && (t = 0 === f ? a.offsetWidth - U.width : a.offsetHeight - U.height, b[f] = p ? parseFloat(d) / 100 * t + "px" : 100 * (parseFloat(d) / t) + "%");
					d = b.join(" ")
				}
				return this.parseComplex(a.style, d, h,
					k, g)
			}, formatter: ra
		});
		R("backgroundSize", { defaultValue: "0 0", formatter: ra });
		R("perspective", { defaultValue: "0px", prefix: !0 });
		R("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 });
		R("transformStyle", { prefix: !0 });
		R("backfaceVisibility", { prefix: !0 });
		R("userSelect", { prefix: !0 });
		R("margin", { parser: ya("marginTop,marginRight,marginBottom,marginLeft") });
		R("padding", { parser: ya("paddingTop,paddingRight,paddingBottom,paddingLeft") });
		R("clip", {
			defaultValue: "rect(0px,0px,0px,0px)", parser: function (a, b, d, e, k,
				f) {
				var g, p, t;
				return 9 > D ? (p = a.currentStyle, t = 8 > D ? " " : ",", g = "rect(" + p.clipTop + t + p.clipRight + t + p.clipBottom + t + p.clipLeft + ")", b = this.format(b).split(",").join(t)) : (g = this.format(L(a, this.p, c, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, g, b, k, f)
			}
		});
		R("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 });
		R("autoRound,strictUnits", {
			parser: function (a, b, c, d, e) {
				return e
			}
		});
		R("border", {
			defaultValue: "0px solid #000", parser: function (a, b, d, e, k, f) {
				return this.parseComplex(a.style, this.format(L(a,
					"borderTopWidth", c, !1, "0px") + " " + L(a, "borderTopStyle", c, !1, "solid") + " " + L(a, "borderTopColor", c, !1, "#000")), this.format(b), k, f)
			}, color: !0, formatter: function (a) {
				var b = a.split(" ");
				return b[0] + " " + (b[1] || "solid") + " " + (a.match(ia) || ["#000"])[0]
			}
		});
		R("float,cssFloat,styleFloat", {
			parser: function (a, b, c, d, e) {
				a = a.style;
				d = "cssFloat" in a ? "cssFloat" : "styleFloat";
				return new X(a, d, 0, 0, e, -1, c, !1, 0, a[d], b)
			}
		});
		var Ha = function (a) {
			var b, c = this.t, d = c.filter || L(this.data, "filter");
			a = 0 | this.s + this.c * a;
			100 === a && (-1 === d.indexOf("atrix(") &&
				-1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !L(this.data, "filter")) : (c.filter = d.replace(G, ""), b = !0));
			b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + a + ")"), -1 === d.indexOf("opacity") ? 0 === a && this.xn1 || (c.filter = d + " alpha(opacity=" + a + ")") : c.filter = d.replace(B, "opacity=" + a))
		};
		R("opacity,alpha,autoAlpha", {
			defaultValue: "1", parser: function (a, b, d, e, k, f) {
				var g = parseFloat(L(a, "opacity", c, !1, "1")), p = a.style, t = "autoAlpha" === d;
				return "string" == typeof b && "=" === b.charAt(1) &&
					(b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + g), t && 1 === g && "hidden" === L(a, "visibility", c) && 0 !== b && (g = 0), aa ? k = new X(p, "opacity", g, b - g, k) : (k = new X(p, "opacity", 100 * g, 100 * (b - g), k), k.xn1 = t ? 1 : 0, p.zoom = 1, k.type = 2, k.b = "alpha(opacity=" + k.s + ")", k.e = "alpha(opacity=" + (k.s + k.c) + ")", k.data = a, k.plugin = f, k.setRatio = Ha), t && (k = new X(p, "visibility", 0, 0, k, -1, null, !1, 0, 0 !== g ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), k.xs0 = "inherit", e._overwriteProps.push(k.n), e._overwriteProps.push(d)), k
			}
		});
		var va = function (a,
			b) {
			b && (a.removeProperty ? a.removeProperty(b.replace(N, "-$1").toLowerCase()) : a.removeAttribute(b))
		}, Ia = function (a) {
			if (this.t._gsClassPT = this, 1 === a || 0 === a) {
				this.t.className = 0 === a ? this.b : this.e;
				for (var b = this.data, d = this.t.style; b;)b.v ? d[b.p] = b.v : va(d, b.p), b = b._next;
				1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
			} else this.t.className !== this.e && (this.t.className = this.e)
		};
		R("className", {
			parser: function (a, b, k, e, f, g, p) {
				var t, h, v, l, m = a.className, n = a.style.cssText;
				if (f = e._classNamePT = new X(a, k, 0,
					0, f, 2), f.setRatio = Ia, f.pr = -11, d = !0, f.b = m, k = la(a, c), h = a._gsClassPT) {
					v = {};
					for (l = h.data; l;)v[l.p] = 1, l = l._next;
					h.setRatio(1)
				}
				return a._gsClassPT = f, f.e = "=" !== b.charAt(1) ? b : m.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), e._tween._duration && (a.className = f.e, t = qa(a, k, la(a), p, v), a.className = m, f.data = t.firstMPT, a.style.cssText = n, f = f.xfirst = e.parse(a, t.difs, f, g)), f
			}
		});
		var Ja = function (a) {
			if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !==
				this.data.data) {
				var b, d, c, k = this.t.style, e = x.transform.parse;
				if ("all" === this.e) k.cssText = "", c = !0; else for (a = this.e.split(","), d = a.length; -1 < --d;)b = a[d], x[b] && (x[b].parse === e ? c = !0 : b = "transformOrigin" === b ? ua : x[b].p), va(k, b);
				c && (va(k, fa), this.t._gsTransform && delete this.t._gsTransform)
			}
		};
		R("clearProps", {
			parser: function (a, b, c, k, e) {
				return e = new X(a, c, 0, 0, e, 2), e.setRatio = Ja, e.e = b, e.pr = -10, e.data = k._tween, d = !0, e
			}
		});
		m = ["bezier", "throwProps", "physicsProps", "physics2D"];
		for (ba = m.length; ba--;)S(m[ba]);
		m = q.prototype;
		m._firstPT = null;
		m._onInitTween = function (a, k, p) {
			if (!a.nodeType) return !1;
			this._target = a;
			this._tween = p;
			this._vars = k;
			z = k.autoRound;
			d = !1;
			b = k.suffixMap || q.suffixMap;
			c = I(a, "");
			f = this._overwriteProps;
			var t, h, v, m, n = a.style;
			if (l && "" === n.zIndex && (t = L(a, "zIndex", c), ("auto" === t || "" === t) && (n.zIndex = 0)), "string" == typeof k && (v = n.cssText, t = la(a, c), n.cssText = v + ";" + k, t = qa(a, t, la(a)).difs, !aa && P.test(k) && (t.opacity = parseFloat(RegExp.$1)), k = t, n.cssText = v), this._firstPT = p = this.parse(a, k, null), this._transformType) {
				k = 3 ===
					this._transformType;
				fa ? g && (l = !0, "" === n.zIndex && (h = L(a, "zIndex", c), ("auto" === h || "" === h) && (n.zIndex = 0)), e && (n.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : n.zoom = 1;
				for (h = p; h && h._next;)h = h._next;
				t = new X(a, "transform", 0, 0, null, 2);
				this._linkCSSP(t, null, h);
				t.setRatio = k && ga ? Fa : fa ? Ga : Ea;
				t.data = this._transform || ka(a, c, !0);
				f.pop()
			}
			if (d) {
				for (; p;) {
					a = p._next;
					for (h = v; h && h.pr > p.pr;)h = h._next;
					(p._prev = h ? h._prev : m) ? p._prev._next = p : v = p;
					(p._next = h) ? h._prev = p : m = p;
					p = a
				}
				this._firstPT =
					v
			}
			return !0
		};
		m.parse = function (a, d, k, e) {
			var f, g, p, t, h, v, l, m, n, u = a.style;
			for (f in d) {
				h = d[f];
				if (g = x[f]) k = g.parse(a, h, f, this, k, e, d); else if (g = L(a, f, c) + "", m = "string" == typeof h, "color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || m && C.test(h)) m || (h = ta(h), h = (3 < h.length ? "rgba(" : "rgb(") + h.join(",") + ")"), k = na(u, f, g, h, !0, "transparent", k, 0, e); else if (!m || -1 === h.indexOf(" ") && -1 === h.indexOf(",")) {
					v = (p = parseFloat(g)) || 0 === p ? g.substr((p + "").length) : "";
					if ("" === g || "auto" === g) if ("width" === f || "height" === f) {
						p =
							a;
						var r = f;
						v = c;
						n = parseFloat("width" === r ? p.offsetWidth : p.offsetHeight);
						var r = Ba[r], q = r.length;
						for (v = v || I(p, null); -1 < --q;)n -= parseFloat(L(p, "padding" + r[q], v, !0)) || 0, n -= parseFloat(L(p, "border" + r[q] + "Width", v, !0)) || 0;
						p = n;
						v = "px"
					} else "left" === f || "top" === f ? (p = W(a, f, c), v = "px") : (p = "opacity" !== f ? 0 : 1, v = "");
					(n = m && "=" === h.charAt(1)) ? (t = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), t *= parseFloat(h), l = h.replace(Y, "")) : (t = parseFloat(h), l = m ? h.substr((t + "").length) || "" : "");
					"" === l && (l = b[f] || v);
					h = t || 0 === t ? (n ? t + p : t) + l : d[f];
					v === l || "" === l || !t && 0 !== t || !p && 0 !== p || (p = K(a, f, p, v), "%" === l ? (p /= K(a, f, 100, "%") / 100, 100 < p && (p = 100), !0 !== d.strictUnits && (g = p + "%")) : "em" === l ? p /= K(a, f, 1, "em") : (t = K(a, f, t, l), l = "px"), !n || !t && 0 !== t || (h = t + p + l));
					n && (t += p);
					!p && 0 !== p || !t && 0 !== t ? void 0 !== u[f] && (h || "NaN" != h + "" && null != h) ? (k = new X(u, f, t || p || 0, 0, k, -1, f, !1, 0, g, h), k.xs0 = "none" !== h || "display" !== f && -1 === f.indexOf("Style") ? h : g) : window.console && console.log("invalid " + f + " tween value: " + d[f]) : (k = new X(u, f, p, t - p, k, 0, f, !1 !== z && ("px" === l || "zIndex" === f), 0, g,
						h), k.xs0 = l)
				} else k = na(u, f, g, h, !0, null, k, 0, e);
				e && k && !k.plugin && (k.plugin = e)
			}
			return k
		};
		m.setRatio = function (a) {
			var b, d, c, k = this._firstPT;
			if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime) for (; k;) {
				if (b = k.c * a + k.s, k.r ? b = 0 < b ? 0 | b + .5 : 0 | b - .5 : 1E-6 > b && -1E-6 < b && (b = 0), k.type) if (1 === k.type) if (c = k.l, 2 === c) k.t[k.p] = k.xs0 + b + k.xs1 + k.xn1 + k.xs2; else if (3 === c) k.t[k.p] = k.xs0 + b + k.xs1 + k.xn1 + k.xs2 +
					k.xn2 + k.xs3; else if (4 === c) k.t[k.p] = k.xs0 + b + k.xs1 + k.xn1 + k.xs2 + k.xn2 + k.xs3 + k.xn3 + k.xs4; else if (5 === c) k.t[k.p] = k.xs0 + b + k.xs1 + k.xn1 + k.xs2 + k.xn2 + k.xs3 + k.xn3 + k.xs4 + k.xn4 + k.xs5; else {
						d = k.xs0 + b + k.xs1;
						for (c = 1; k.l > c; c++)d += k["xn" + c] + k["xs" + (c + 1)];
						k.t[k.p] = d
					} else -1 === k.type ? k.t[k.p] = k.xs0 : k.setRatio && k.setRatio(a); else k.t[k.p] = b + k.xs0;
				k = k._next
			} else for (; k;)2 !== k.type ? k.t[k.p] = k.b : k.setRatio(a), k = k._next; else for (; k;)2 !== k.type ? k.t[k.p] = k.e : k.setRatio(a), k = k._next
		};
		m._enableTransforms = function (a) {
			this._transformType =
				a || 3 === this._transformType ? 3 : 2;
			this._transform = this._transform || ka(this._target, c, !0)
		};
		m._linkCSSP = function (a, b, d, c) {
			return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, c = !0), d ? d._next = a : c || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = d), a
		};
		m._kill = function (a) {
			var b, d, c, k = a;
			if (a.autoAlpha || a.alpha) {
				k = {};
				for (d in a) k[d] = a[d];
				k.opacity = 1;
				k.autoAlpha && (k.visibility = 1)
			}
			return a.className && (b = this._classNamePT) &&
				(c = b.xfirst, c && c._prev ? this._linkCSSP(c._prev, b._next, c._prev._prev) : c === this._firstPT && (this._firstPT = b._next), b._next && this._linkCSSP(b._next, b._next._next, c._prev), this._classNamePT = null), h.prototype._kill.call(this, k)
		};
		var oa = function (a, b, d) {
			var c, k, e;
			if (a.slice) for (c = a.length; -1 < --c;)oa(a[c], b, d); else for (a = a.childNodes, c = a.length; -1 < --c;)k = a[c], e = k.type, k.style && (b.push(la(k)), d && d.push(k)), 1 !== e && 9 !== e && 11 !== e || !k.childNodes.length || oa(k, b, d)
		};
		return q.cascadeTo = function (a, b, d) {
			var c, k, e = w.to(a,
				b, d), f = [e], g = [], p = [], h = [], t = w._internals.reservedProps;
			a = e._targets || e.target;
			oa(a, g, h);
			e.render(b, !0);
			oa(a, p);
			e.render(0, !0);
			e._enabled(!0);
			for (a = h.length; -1 < --a;)if (c = qa(h[a], g[a], p[a]), c.firstMPT) {
				c = c.difs;
				for (k in d) t[k] && (c[k] = d[k]);
				f.push(w.to(h[a], b, c))
			}
			return f
		}, h.activate([q]), q
	}, !0);
	(function () {
		var h = window._gsDefine.plugin({
			propName: "roundProps", priority: -1, API: 2, init: function (h, d, b) {
				return this._tween = b, !0
			}
		}).prototype;
		h._onInitAllProps = function () {
			for (var h, d, b, c = this._tween, f = c.vars.roundProps instanceof Array ? c.vars.roundProps : c.vars.roundProps.split(","), q = f.length, x = {}, m = c._propLookup.roundProps; -1 < --q;)x[f[q]] = 1;
			for (q = f.length; -1 < --q;)for (h = f[q], d = c._firstPT; d;)b = d._next, d.pg ? d.t._roundProps(x, !0) : d.n === h && (this._add(d.t, h, d.s, d.c), b && (b._prev = d._prev), d._prev ? d._prev._next = b : c._firstPT === d && (c._firstPT = b), d._next = d._prev = null, c._propLookup[h] = m), d = b;
			return !1
		};
		h._add = function (h, d, b, c) {
			this._addTween(h, d, b, b + c, d, !0);
			this._overwriteProps.push(d)
		}
	})();
	window._gsDefine.plugin({
		propName: "attr", API: 2,
		init: function (h, w) {
			var d;
			if ("function" != typeof h.setAttribute) return !1;
			this._target = h;
			this._proxy = {};
			for (d in w) this._addTween(this._proxy, d, parseFloat(h.getAttribute(d)), w[d], d) && this._overwriteProps.push(d);
			return !0
		}, set: function (h) {
			this._super.setRatio.call(this, h);
			for (var w = this._overwriteProps, d = w.length; -1 < --d;)h = w[d], this._target.setAttribute(h, this._proxy[h] + "")
		}
	});
	window._gsDefine.plugin({
		propName: "directionalRotation", API: 2, init: function (h, w) {
			"object" != typeof w && (w = { rotation: w });
			this.finals =
				{};
			var d, b, c, f, q, x, m = !0 === w.useRadians ? 2 * Math.PI : 360;
			for (d in w) "useRadians" !== d && (x = (w[d] + "").split("_"), b = x[0], c = parseFloat("function" != typeof h[d] ? h[d] : h[d.indexOf("set") || "function" != typeof h["get" + d.substr(3)] ? d : "get" + d.substr(3)]()), f = this.finals[d] = "string" == typeof b && "=" === b.charAt(1) ? c + parseInt(b.charAt(0) + "1", 10) * Number(b.substr(2)) : Number(b) || 0, q = f - c, x.length && (b = x.join("_"), -1 !== b.indexOf("short") && (q %= m, q !== q % (m / 2) && (q = 0 > q ? q + m : q - m)), -1 !== b.indexOf("_cw") && 0 > q ? q = (q + 9999999999 * m) % m - (0 |
				q / m) * m : -1 !== b.indexOf("ccw") && 0 < q && (q = (q - 9999999999 * m) % m - (0 | q / m) * m)), (1E-6 < q || -1E-6 > q) && (this._addTween(h, d, c, c + q, d), this._overwriteProps.push(d)));
			return !0
		}, set: function (h) {
			if (1 !== h) this._super.setRatio.call(this, h); else for (h = this._firstPT; h;)h.f ? h.t[h.p](this.finals[h.p]) : h.t[h.p] = this.finals[h.p], h = h._next
		}
	})._autoCSS = !0;
	window._gsDefine("easing.Back", ["easing.Ease"], function (h) {
		var w, d, b, c = window.GreenSockGlobals || window, f = 2 * Math.PI, q = Math.PI / 2, x = c.com.greensock._class, m = function (a, b) {
			var c =
				x("easing." + a, function () {
				}, !0), d = c.prototype = new h;
			return d.constructor = c, d.getRatio = b, c
		}, z = h.register || function () {
		}, l = function (a, b, c, d) {
			b = x("easing." + a, { easeOut: new b, easeIn: new c, easeInOut: new d }, !0);
			return z(b, a), b
		}, g = function (a, b, c) {
			this.t = a;
			this.v = b;
			c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
		}, n = function (a, b) {
			var c = x("easing." + a, function (a) {
				this._p1 = a || 0 === a ? a : 1.70158;
				this._p2 = 1.525 * this._p1
			}, !0), d = c.prototype = new h;
			return d.constructor = c, d.getRatio = b, d.config = function (a) {
				return new c(a)
			},
				c
		}, n = l("Back", n("BackOut", function (a) {
			return --a * a * ((this._p1 + 1) * a + this._p1) + 1
		}), n("BackIn", function (a) {
			return a * a * ((this._p1 + 1) * a - this._p1)
		}), n("BackInOut", function (a) {
			return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
		})), e = x("easing.SlowMo", function (a, b, c) {
			null == a ? a = .7 : 1 < a && (a = 1);
			this._p = 1 !== a ? b || 0 === b ? b : .7 : 0;
			this._p1 = (1 - a) / 2;
			this._p2 = a;
			this._p3 = this._p1 + this._p2;
			this._calcEnd = !0 === c
		}, !0), D = e.prototype = new h;
		return D.constructor = e, D.getRatio = function (a) {
			var b =
				a + (.5 - a) * this._p;
			return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
		}, e.ease = new e(.7, .7), D.config = e.config = function (a, b, c) {
			return new e(a, b, c)
		}, w = x("easing.SteppedEase", function (a) {
			a = a || 1;
			this._p1 = 1 / a;
			this._p2 = a + 1
		}, !0), D = w.prototype = new h, D.constructor = w, D.getRatio = function (a) {
			return 0 > a ? a = 0 : 1 <= a && (a = .999999999), (this._p2 * a >> 0) * this._p1
		}, D.config = w.config = function (a) {
			return new w(a)
		},
			d = x("easing.RoughEase", function (a) {
				a = a || {};
				for (var b, c, d, e, f = a.taper || "none", l = [], n = 0, m = e = 0 | (a.points || 20), q = !1 !== a.randomize, w = !0 === a.clamp, x = a.template instanceof h ? a.template : null, z = "number" == typeof a.strength ? .4 * a.strength : .4; -1 < --m;)a = q ? Math.random() : 1 / e * m, b = x ? x.getRatio(a) : a, "none" === f ? c = z : "out" === f ? (d = 1 - a, c = d * d * z) : "in" === f ? c = a * a * z : .5 > a ? (d = 2 * a, c = .5 * d * d * z) : (d = 2 * (1 - a), c = .5 * d * d * z), q ? b += Math.random() * c - .5 * c : m % 2 ? b += .5 * c : b -= .5 * c, w && (1 < b ? b = 1 : 0 > b && (b = 0)), l[n++] = {
					x: a,
					y: b
				};
				l.sort(function (a, b) {
					return a.x -
						b.x
				});
				c = new g(1, 1, null);
				for (m = e; -1 < --m;)e = l[m], c = new g(e.x, e.y, c);
				this._prev = new g(0, 0, 0 !== c.t ? c : c.next)
			}, !0), D = d.prototype = new h, D.constructor = d, D.getRatio = function (a) {
				var b = this._prev;
				if (a > b.t) {
					for (; b.next && a >= b.t;)b = b.next;
					b = b.prev
				} else for (; b.prev && b.t >= a;)b = b.prev;
				return this._prev = b, b.v + (a - b.t) / b.gap * b.c
			}, D.config = function (a) {
				return new d(a)
			}, d.ease = new d, l("Bounce", m("BounceOut", function (a) {
				return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 :
					7.5625 * (a -= 2.625 / 2.75) * a + .984375
			}), m("BounceIn", function (a) {
				return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
			}), m("BounceInOut", function (a) {
				var b = .5 > a;
				return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
			})), l("Circ", m("CircOut", function (a) {
				return Math.sqrt(1 - --a * a)
			}), m("CircIn",
				function (a) {
					return -(Math.sqrt(1 - a * a) - 1)
				}), m("CircInOut", function (a) {
					return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
				})), b = function (a, b, c) {
					var d = x("easing." + a, function (a, b) {
						this._p1 = a || 1;
						this._p2 = b || c;
						this._p3 = this._p2 / f * (Math.asin(1 / this._p1) || 0)
					}, !0);
					a = d.prototype = new h;
					return a.constructor = d, a.getRatio = b, a.config = function (a, b) {
						return new d(a, b)
					}, d
				}, l("Elastic", b("ElasticOut", function (a) {
					return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * f / this._p2) + 1
				}, .3), b("ElasticIn",
					function (a) {
						return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * f / this._p2))
					}, .3), b("ElasticInOut", function (a) {
						return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * f / this._p2) : .5 * this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) * f / this._p2) + 1
					}, .45)), l("Expo", m("ExpoOut", function (a) {
						return 1 - Math.pow(2, -10 * a)
					}), m("ExpoIn", function (a) {
						return Math.pow(2, 10 * (a - 1)) - .001
					}), m("ExpoInOut", function (a) {
						return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
					})), l("Sine",
						m("SineOut", function (a) {
							return Math.sin(a * q)
						}), m("SineIn", function (a) {
							return -Math.cos(a * q) + 1
						}), m("SineInOut", function (a) {
							return -.5 * (Math.cos(Math.PI * a) - 1)
						})), x("easing.EaseLookup", {
							find: function (a) {
								return h.map[a]
							}
						}, !0), z(c.SlowMo, "SlowMo", "ease,"), z(d, "RoughEase", "ease,"), z(w, "SteppedEase", "ease,"), n
	}, !0)
});
(function (h) {
	var w = h.GreenSockGlobals || h;
	if (!w.TweenLite) {
		var d, b, c, f, q, x = function (a) {
			var b = a.split("."), c = w;
			for (a = 0; b.length > a; a++)c[b[a]] = c = c[b[a]] || {};
			return c
		}, m = x("com.greensock"), z = [].slice, l = function () {
		}, g = function () {
			var a = Object.prototype.toString, b = a.call([]);
			return function (c) {
				return c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b
			}
		}(), n = {}, e = function (a, b, c, d) {
			this.sc = n[a] ? n[a].sc : [];
			n[a] = this;
			this.gsClass = null;
			this.func = c;
			var f = [];
			this.check = function (g) {
				for (var l, m, q = b.length,
					r = q; -1 < --q;)(l = n[b[q]] || new e(b[q], [])).gsClass ? (f[q] = l.gsClass, r--) : g && l.sc.push(this);
				if (0 === r && c) for (g = ("com.greensock." + a).split("."), l = g.pop(), m = x(g.join("."))[l] = this.gsClass = c.apply(c, f), d && (w[l] = m, "function" == typeof define && define.amd ? define((h.GreenSockAMDPath ? h.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function () {
					return m
				}) : "undefined" != typeof module && module.exports && (module.exports = m)), q = 0; this.sc.length > q; q++)this.sc[q].check()
			};
			this.check(!0)
		}, D = h._gsDefine = function (a, b, c, d) {
			return new e(a,
				b, c, d)
		}, a = m._class = function (a, b, c) {
			return b = b || function () {
			}, D(a, [], function () {
				return b
			}, c), b
		};
		D.globals = w;
		var u = [0, 0, 1, 1], J = [], r = a("easing.Ease", function (a, b, c, d) {
			this._func = a;
			this._type = c || 0;
			this._power = d || 0;
			this._params = b ? u.concat(b) : u
		}, !0), Y = r.map = {}, B = r.register = function (b, c, d, e) {
			var f, g, h;
			c = c.split(",");
			for (var l = c.length, n = (d || "easeIn,easeOut,easeInOut").split(","); -1 < --l;)for (f = c[l], d = e ? a("easing." + f, null, !0) : m.easing[f] || {}, g = n.length; -1 < --g;)h = n[g], Y[f + "." + h] = Y[h + f] = d[h] = b.getRatio ? b : b[h] ||
				new b
		};
		c = r.prototype;
		c._calcEnd = !1;
		c.getRatio = function (a) {
			if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
			var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
			return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
		};
		d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
		for (b = d.length; -1 < --b;)c = d[b] + ",Power" + b, B(new r(null, null, 1, b), c, "easeOut", !0), B(new r(null, null, 2, b), c, "easeIn" + (0 === b ? ",easeNone" : "")), B(new r(null,
			null, 3, b), c, "easeInOut");
		Y.linear = m.easing.Linear.easeIn;
		Y.swing = m.easing.Quad.easeInOut;
		var P = a("events.EventDispatcher", function (a) {
			this._listeners = {};
			this._eventTarget = a || this
		});
		c = P.prototype;
		c.addEventListener = function (a, b, c, d, e) {
			e = e || 0;
			var g, h = this._listeners[a], l = 0;
			null == h && (this._listeners[a] = h = []);
			for (g = h.length; -1 < --g;)a = h[g], a.c === b && a.s === c ? h.splice(g, 1) : 0 === l && e > a.pr && (l = g + 1);
			h.splice(l, 0, { c: b, s: c, up: d, pr: e });
			this !== f || q || f.wake()
		};
		c.removeEventListener = function (a, b) {
			var c, d = this._listeners[a];
			if (d) for (c = d.length; -1 < --c;)if (d[c].c === b) return d.splice(c, 1), void 0
		};
		c.dispatchEvent = function (a) {
			var b, c, d, e = this._listeners[a];
			if (e) for (b = e.length, c = this._eventTarget; -1 < --b;)d = e[b], d.up ? d.c.call(d.s || c, {
				type: a,
				target: c
			}) : d.c.call(d.s || c)
		};
		var G = h.requestAnimationFrame, C = h.cancelAnimationFrame, N = Date.now || function () {
			return (new Date).getTime()
		}, F = N();
		d = ["ms", "moz", "webkit", "o"];
		for (b = d.length; -1 < --b && !G;)G = h[d[b] + "RequestAnimationFrame"], C = h[d[b] + "CancelAnimationFrame"] || h[d[b] + "CancelRequestAnimationFrame"];
		a("Ticker", function (a, b) {
			var c, d, e, g, h, m = this, n = N(), r = !1 !== b && G, u = function (a) {
				F = N();
				m.time = (F - n) / 1E3;
				var b, k = m.time - h;
				(!c || 0 < k || !0 === a) && (m.frame++, h += k + (k >= g ? .004 : g - k), b = !0);
				!0 !== a && (e = d(u));
				b && m.dispatchEvent("tick")
			};
			P.call(m);
			m.time = m.frame = 0;
			m.tick = function () {
				u(!0)
			};
			m.sleep = function () {
				null != e && (r && C ? C(e) : clearTimeout(e), d = l, e = null, m === f && (q = !1))
			};
			m.wake = function () {
				null !== e && m.sleep();
				d = 0 === c ? l : r && G ? G : function (a) {
					return setTimeout(a, 0 | 1E3 * (h - m.time) + 1)
				};
				m === f && (q = !0);
				u(2)
			};
			m.fps = function (a) {
				return arguments.length ?
					(c = a, g = 1 / (c || 60), h = this.time + g, m.wake(), void 0) : c
			};
			m.useRAF = function (a) {
				return arguments.length ? (m.sleep(), r = a, m.fps(c), void 0) : r
			};
			m.fps(a);
			setTimeout(function () {
				r && (!e || 5 > m.frame) && m.useRAF(!1)
			}, 1500)
		});
		c = m.Ticker.prototype = new m.events.EventDispatcher;
		c.constructor = m.Ticker;
		var y = a("core.Animation", function (a, b) {
			if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed,
				Z) {
				q || f.wake();
				var c = this.vars.useFrames ? T : Z;
				c.add(this, c._time);
				this.vars.paused && this.paused(!0)
			}
		});
		f = y.ticker = new m.Ticker;
		c = y.prototype;
		c._dirty = c._gc = c._initted = c._paused = !1;
		c._totalTime = c._time = 0;
		c._rawPrevTime = -1;
		c._next = c._last = c._onUpdate = c._timeline = c.timeline = null;
		c._paused = !1;
		var E = function () {
			q && 2E3 < N() - F && f.wake();
			setTimeout(E, 2E3)
		};
		E();
		c.play = function (a, b) {
			return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
		};
		c.pause = function (a, b) {
			return arguments.length && this.seek(a,
				b), this.paused(!0)
		};
		c.resume = function (a, b) {
			return arguments.length && this.seek(a, b), this.paused(!1)
		};
		c.seek = function (a, b) {
			return this.totalTime(Number(a), !1 !== b)
		};
		c.restart = function (a, b) {
			return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
		};
		c.reverse = function (a, b) {
			return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
		};
		c.render = function () {
		};
		c.invalidate = function () {
			return this
		};
		c.isActive = function () {
			var a, b = this._timeline, c = this._startTime;
			return !b ||
				!this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
		};
		c._enabled = function (a, b) {
			return q || f.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
		};
		c._kill = function () {
			return this._enabled(!1, !1)
		};
		c.kill = function (a, b) {
			return this._kill(a, b), this
		};
		c._uncache = function (a) {
			for (a = a ? this : this.timeline; a;)a._dirty = !0, a = a.timeline;
			return this
		};
		c._swapSelfInParams = function (a) {
			for (var b = a.length, c = a.concat(); -1 < --b;)"{self}" === a[b] && (c[b] = this);
			return c
		};
		c.eventCallback = function (a, b, c, d) {
			if ("on" === (a || "").substr(0, 2)) {
				var e = this.vars;
				if (1 === arguments.length) return e[a];
				null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = g(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d);
				"onUpdate" === a && (this._onUpdate = b)
			}
			return this
		};
		c.delay = function (a) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime +
				a - this._delay), this._delay = a, this) : this._delay
		};
		c.duration = function (a) {
			return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a / this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
		};
		c.totalDuration = function (a) {
			return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
		};
		c.time = function (a, b) {
			return arguments.length ? (this._dirty && this.totalDuration(),
				this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
		};
		c.totalTime = function (a, b, c) {
			if (q || f.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var d = this._totalDuration, e = this._timeline;
					if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;)e._timeline._time !==
						(e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
				}
				this._gc && this._enabled(!0, !1);
				this._totalTime === a && 0 !== this._duration || this.render(a, b, !1)
			}
			return this
		};
		c.progress = c.totalProgress = function (a, b) {
			return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
		};
		c.startTime = function (a) {
			return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
		};
		c.timeScale = function (a) {
			if (!arguments.length) return this._timeScale;
			if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
				var b = this._pauseTime, b = b || 0 === b ? b : this._timeline.totalTime();
				this._startTime = b - (b - this._startTime) * this._timeScale / a
			}
			return this._timeScale = a, this._uncache(!1)
		};
		c.reversed = function (a) {
			return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), this) : this._reversed
		};
		c.paused = function (a) {
			if (!arguments.length) return this._paused;
			if (a !=
				this._paused && this._timeline) {
				q || a || f.wake();
				var b = this._timeline, c = b.rawTime(), d = c - this._pauseTime;
				!a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1));
				this._pauseTime = a ? c : null;
				this._paused = a;
				this._active = this.isActive();
				!a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
			}
			return this._gc && !a && this._enabled(!0, !1), this
		};
		d = a("core.SimpleTimeline", function (a) {
			y.call(this, 0, a);
			this.autoRemoveChildren = this.smoothChildTiming = !0
		});
		c = d.prototype = new y;
		c.constructor = d;
		c.kill()._gc = !1;
		c._first = c._last = null;
		c._sortChildren = !1;
		c.add = c.insert = function (a, b) {
			var c, d;
			if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren) for (d = a._startTime; c && c._startTime > d;)c = c._prev;
			return c ? (a._next = c._next, c._next = a) : (a._next = this._first,
				this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
		};
		c._remove = function (a, b) {
			return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
		};
		c.render = function (a, b, c) {
			var d, e = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = a; e;)d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
		};
		c.rawTime = function () {
			return q || f.wake(), this._totalTime
		};
		var A = a("TweenLite", function (a, b, c) {
			if (y.call(this, b, c), this.render = A.prototype.render, null == a) throw "Cannot tween a null target.";
			this.target = a = "string" != typeof a ? a : A.selector(a) || a;
			var d, e;
			d = a.jquery || a.length && a !== h && a[0] && (a[0] === h || a[0].nodeType && a[0].style && !a.nodeType);
			c =
				this.vars.overwrite;
			if (this._overwrite = c = null == c ? ca[A.defaultOverwrite] : "number" == typeof c ? c >> 0 : ca[c], (d || a instanceof Array || a.push && g(a)) && "number" != typeof a[0]) for (this._targets = e = z.call(a, 0), this._propLookup = [], this._siblings = [], a = 0; e.length > a; a++)(d = e[a]) ? "string" != typeof d ? d.length && d !== h && d[0] && (d[0] === h || d[0].nodeType && d[0].style && !d.nodeType) ? (e.splice(a--, 1), this._targets = e = e.concat(z.call(d, 0))) : (this._siblings[a] = U(d, this, !1), 1 === c && 1 < this._siblings[a].length && S(d, this, null, 1, this._siblings[a])) :
				(d = e[a--] = A.selector(d), "string" == typeof d && e.splice(a + 1, 1)) : e.splice(a--, 1); else this._propLookup = {}, this._siblings = U(a, this, !1), 1 === c && 1 < this._siblings.length && S(a, this, null, 1, this._siblings);
			(this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
		}, !0), H = function (a) {
			return a.length && a !== h && a[0] && (a[0] === h || a[0].nodeType && a[0].style && !a.nodeType)
		};
		c = A.prototype = new y;
		c.constructor = A;
		c.kill()._gc = !1;
		c.ratio = 0;
		c._firstPT = c._targets = c._overwrittenProps =
			c._startAt = null;
		c._notifyPluginsOfEnabled = !1;
		A.version = "1.11.2";
		A.defaultEase = c._ease = new r(null, null, 1, 1);
		A.defaultOverwrite = "auto";
		A.ticker = f;
		A.autoSleep = !0;
		A.selector = h.$ || h.jQuery || function (a) {
			return h.$ ? (A.selector = h.$, h.$(a)) : h.document ? h.document.getElementById("#" === a.charAt(0) ? a.substr(1) : a) : a
		};
		b = A._internals = { isArray: g, isSelector: H };
		var O = A._plugins = {}, M = A._tweenLookup = {}, Q = 0, V = b.reservedProps = {
			ease: 1,
			delay: 1,
			overwrite: 1,
			onComplete: 1,
			onCompleteParams: 1,
			onCompleteScope: 1,
			useFrames: 1,
			runBackwards: 1,
			startAt: 1,
			onUpdate: 1,
			onUpdateParams: 1,
			onUpdateScope: 1,
			onStart: 1,
			onStartParams: 1,
			onStartScope: 1,
			onReverseComplete: 1,
			onReverseCompleteParams: 1,
			onReverseCompleteScope: 1,
			onRepeat: 1,
			onRepeatParams: 1,
			onRepeatScope: 1,
			easeParams: 1,
			yoyo: 1,
			immediateRender: 1,
			repeat: 1,
			repeatDelay: 1,
			data: 1,
			paused: 1,
			reversed: 1,
			autoCSS: 1
		}, ca = {
			none: 0,
			all: 1,
			auto: 2,
			concurrent: 3,
			allOnStart: 4,
			preexisting: 5,
			"true": 1,
			"false": 0
		}, T = y._rootFramesTimeline = new d, Z = y._rootTimeline = new d;
		Z._startTime = f.time;
		T._startTime = f.frame;
		Z._active = T._active = !0;
		y._updateRoot = function () {
			if (Z.render((f.time - Z._startTime) * Z._timeScale, !1, !1), T.render((f.frame - T._startTime) * T._timeScale, !1, !1), !(f.frame % 120)) {
				var a, b, c;
				for (c in M) {
					b = M[c].tweens;
					for (a = b.length; -1 < --a;)b[a]._gc && b.splice(a, 1);
					0 === b.length && delete M[c]
				}
				if (c = Z._first, (!c || c._paused) && A.autoSleep && !T._first && 1 === f._listeners.tick.length) {
					for (; c && c._paused;)c = c._next;
					c || f.sleep()
				}
			}
		};
		f.addEventListener("tick", y._updateRoot);
		var U = function (a, b, c) {
			var d, e, f = a._gsTweenID;
			if (M[f || (a._gsTweenID = f = "t" +
				Q++)] || (M[f] = {
					target: a,
					tweens: []
				}), b && (d = M[f].tweens, d[e = d.length] = b, c)) for (; -1 < --e;)d[e] === b && d.splice(e, 1);
			return M[f].tweens
		}, S = function (a, b, c, d, e) {
			var f, g, h;
			if (1 === d || 4 <= d) {
				a = e.length;
				for (f = 0; a > f; f++)if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0); else if (5 === d) break;
				return g
			}
			var l, m = b._startTime + 1E-10, n = [], q = 0, r = 0 === b._duration;
			for (f = e.length; -1 < --f;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (l = l || ea(b, 0, r), 0 === ea(h, l, r) && (n[q++] = h)) : m >= h._startTime && h._startTime + h.totalDuration() /
				h._timeScale + 1E-10 > m && ((r || !h._initted) && 2E-10 >= m - h._startTime || (n[q++] = h)));
			for (f = q; -1 < --f;)h = n[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
			return g
		}, ea = function (a, b, c) {
			for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
				if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
				d = d._timeline
			}
			return f /= e, f > b ? f - b : c && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f += a.totalDuration() / a._timeScale / e) > b + 1E-10 ? 0 : f - b - 1E-10
		};
		c._init = function () {
			var a, b, c, d =
				this.vars, e = this._overwrittenProps;
			c = this._duration;
			var f = d.immediateRender, g = d.ease;
			if (d.startAt) {
				if (this._startAt && this._startAt.render(-1, !0), d.startAt.overwrite = 0, d.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, d.startAt), f) if (0 < this._time) this._startAt = null; else if (0 !== c) return
			} else if (d.runBackwards && 0 !== c) if (this._startAt) this._startAt.render(-1, !0), this._startAt = null; else {
				c = {};
				for (a in d) V[a] && "autoCSS" !== a || (c[a] = d[a]);
				if (c.overwrite = 0, c.data = "isFromStart", this._startAt = A.to(this.target,
					0, c), d.immediateRender) {
					if (0 === this._time) return
				} else this._startAt.render(-1, !0)
			}
			if (this._ease = g ? g instanceof r ? d.easeParams instanceof Array ? g.config.apply(g, d.easeParams) : g : "function" == typeof g ? new r(g, d.easeParams) : Y[g] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (a = this._targets.length; -1 < --a;)this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], e ? e[a] : null) && (b = !0); else b = this._initProps(this.target,
				this._propLookup, this._siblings, e);
			if (b && A._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), d.runBackwards) for (c = this._firstPT; c;)c.s += c.c, c.c = -c.c, c = c._next;
			this._onUpdate = d.onUpdate;
			this._initted = !0
		};
		c._initProps = function (a, b, c, d) {
			var e, f, l, m, n;
			if (null == a) return !1;
			if (!this.vars.css && a.style && a !== h && a.nodeType && O.css && !1 !== this.vars.autoCSS) {
				f = this.vars;
				var q, r = {};
				for (q in f) V[q] || q in a && "x" !== q && "y" !== q && "width" !== q && "height" !== q &&
					"className" !== q && "border" !== q || !(!O[q] || O[q] && O[q]._autoCSS) || (r[q] = f[q], delete f[q]);
				f.css = r
			}
			for (e in this.vars) {
				if (f = this.vars[e], V[e]) f && (f instanceof Array || f.push && g(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[e] = this._swapSelfInParams(f, this)); else if (O[e] && (m = new O[e])._onInitTween(a, this.vars[e], this)) {
					this._firstPT = n = {
						_next: this._firstPT,
						t: m,
						p: "setRatio",
						s: 0,
						c: 1,
						f: !0,
						n: e,
						pg: !0,
						pr: m._priority
					};
					for (f = m._overwriteProps.length; -1 < --f;)b[m._overwriteProps[f]] = this._firstPT;
					(m._priority ||
						m._onInitAllProps) && (l = !0);
					(m._onDisable || m._onEnable) && (this._notifyPluginsOfEnabled = !0)
				} else this._firstPT = b[e] = n = {
					_next: this._firstPT,
					t: a,
					p: e,
					f: "function" == typeof a[e],
					n: e,
					pg: !1,
					pr: 0
				}, n.s = n.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(a[e]), n.c = "string" == typeof f && "=" === f.charAt(1) ? parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) - n.s || 0;
				n && n._next && (n._next._prev = n)
			}
			return d && this._kill(d, a) ? this._initProps(a, b, c, d) : 1 < this._overwrite &&
				this._firstPT && 1 < c.length && S(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, d)) : l
		};
		c.render = function (a, b, c) {
			var d, e, f, g, h = this._time, l = this._duration;
			if (a >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === l && (g = this._rawPrevTime, (0 === a || 0 > g || 1E-10 === g) && g !== a && (c = !0, 1E-10 < g && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a ? a : 1E-10); else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ?
				this._ease.getRatio(0) : 0, (0 !== h || 0 === l && 1E-10 < this._rawPrevTime) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === l && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = g = !b || a ? a : 1E-10)) : this._initted || (c = !0); else if (this._totalTime = this._time = a, this._easeType) {
					f = a / l;
					var m = this._easeType, n = this._easePower;
					(1 === m || 3 === m && .5 <= f) && (f = 1 - f);
					3 === m && (f *= 2);
					1 === n ? f *= f : 2 === n ? f *= f * f : 3 === n ? f *= f * f * f : 4 === n && (f *= f * f * f * f);
					this.ratio = 1 === m ? 1 - f : 2 === m ? f : .5 > a / l ? f / 2 : 1 - f / 2
				} else this.ratio = this._ease.getRatio(a /
					l);
			if (this._time !== h || c) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					this._time && !d ? this.ratio = this._ease.getRatio(this._time / l) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				this._active || !this._paused && this._time !== h && 0 <= a && (this._active = !0);
				0 !== h || (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== l || !b && this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || J));
				for (f = this._firstPT; f;)f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
				this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || c && 0 === this._time && 0 === h || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || J));
				e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e +
					"Scope"] || this, this.vars[e + "Params"] || J), 0 === l && 1E-10 === this._rawPrevTime && 1E-10 !== g && (this._rawPrevTime = 0)))
			}
		};
		c._kill = function (a, b) {
			if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
			b = "string" != typeof b ? b || this._targets || this.target : A.selector(b) || b;
			var c, d, e, f, h, l, m;
			if ((g(b) || H(b)) && "number" != typeof b[0]) for (c = b.length; -1 < --c;)this._kill(a, b[c]) && (l = !0); else {
				if (this._targets) for (c = this._targets.length; -1 < --c;) {
					if (b === this._targets[c]) {
						h = this._propLookup[c] ||
							{};
						this._overwrittenProps = this._overwrittenProps || [];
						d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
						break
					}
				} else {
					if (b !== this.target) return !1;
					h = this._propLookup;
					d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
				}
				if (h) {
					c = a || h;
					m = a !== d && "all" !== d && a !== h && ("object" != typeof a || !a._tempKill);
					for (e in c) (f = h[e]) && (f.pg && f.t._kill(c) && (l = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev),
						f._next = f._prev = null), delete h[e]), m && (d[e] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return l
		};
		c.invalidate = function () {
			return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
		};
		c._enabled = function (a, b) {
			if (q || f.wake(), a && this._gc) {
				var c, d = this._targets;
				if (d) for (c = d.length; -1 < --c;)this._siblings[c] =
					U(d[c], this, !0); else this._siblings = U(this.target, this, !0)
			}
			return y.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
		};
		A.to = function (a, b, c) {
			return new A(a, b, c)
		};
		A.from = function (a, b, c) {
			return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new A(a, b, c)
		};
		A.fromTo = function (a, b, c, d) {
			return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new A(a, b, d)
		};
		A.delayedCall = function (a, b, c, d, e) {
			return new A(b,
				0, {
				delay: a,
				onComplete: b,
				onCompleteParams: c,
				onCompleteScope: d,
				onReverseComplete: b,
				onReverseCompleteParams: c,
				onReverseCompleteScope: d,
				immediateRender: !1,
				useFrames: e,
				overwrite: 0
			})
		};
		A.set = function (a, b) {
			return new A(a, 0, b)
		};
		A.getTweensOf = function (a, b) {
			if (null == a) return [];
			a = "string" != typeof a ? a : A.selector(a) || a;
			var c, d, e, f;
			if ((g(a) || H(a)) && "number" != typeof a[0]) {
				c = a.length;
				for (d = []; -1 < --c;)d = d.concat(A.getTweensOf(a[c], b));
				for (c = d.length; -1 < --c;)for (f = d[c], e = c; -1 < --e;)f === d[e] && d.splice(c, 1)
			} else for (d =
				U(a).concat(), c = d.length; -1 < --c;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
			return d
		};
		A.killTweensOf = A.killDelayedCallsTo = function (a, b, c) {
			"object" == typeof b && (c = b, b = !1);
			b = A.getTweensOf(a, b);
			for (var d = b.length; -1 < --d;)b[d]._kill(c, a)
		};
		var aa = a("plugins.TweenPlugin", function (a, b) {
			this._overwriteProps = (a || "").split(",");
			this._propName = this._overwriteProps[0];
			this._priority = b || 0;
			this._super = aa.prototype
		}, !0);
		if (c = aa.prototype, aa.version = "1.10.1", aa.API = 2, c._firstPT = null, c._addTween = function (a, b, c,
			d, e, f) {
			var g, h;
			return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
				_next: this._firstPT,
				t: a,
				p: b,
				s: c,
				c: g,
				f: "function" == typeof a[b],
				n: e || b,
				r: f
			}, h._next && (h._next._prev = h), h) : void 0
		}, c.setRatio = function (a) {
			for (var b, c = this._firstPT; c;)b = c.c * a + c.s, c.r ? b = 0 | b + (0 < b ? .5 : -.5) : 1E-6 > b && -1E-6 < b && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
		}, c._kill = function (a) {
			var b, c = this._overwriteProps, d = this._firstPT;
			if (null != a[this._propName]) this._overwriteProps =
				[]; else for (b = c.length; -1 < --b;)null != a[c[b]] && c.splice(b, 1);
			for (; d;)null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
			return !1
		}, c._roundProps = function (a, b) {
			for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
		}, A._onPluginEvent = function (a, b) {
			var c, d, e, f, g, h = b._firstPT;
			if ("_onInitAllProps" === a) {
				for (; h;) {
					g = h._next;
					for (d = e; d && d.pr > h.pr;)d =
						d._next;
					(h._prev = d ? d._prev : f) ? h._prev._next = h : e = h;
					(h._next = d) ? d._prev = h : f = h;
					h = g
				}
				h = b._firstPT = e
			}
			for (; h;)h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
			return c
		}, aa.activate = function (a) {
			for (var b = a.length; -1 < --b;)a[b].API === aa.API && (O[(new a[b])._propName] = a[b]);
			return !0
		}, D.plugin = function (b) {
			if (!(b && b.propName && b.init && b.API)) throw "illegal plugin definition.";
			var c, d = b.propName, e = b.priority || 0, f = b.overwriteProps, g = {
				init: "_onInitTween",
				set: "setRatio",
				kill: "_kill",
				round: "_roundProps",
				initAll: "_onInitAllProps"
			},
				h = a("plugins." + d.charAt(0).toUpperCase() + d.substr(1) + "Plugin", function () {
					aa.call(this, d, e);
					this._overwriteProps = f || []
				}, !0 === b.global), l = h.prototype = new aa(d);
			l.constructor = h;
			h.API = b.API;
			for (c in g) "function" == typeof b[c] && (l[g[c]] = b[c]);
			return h.version = b.version, aa.activate([h]), h
		}, d = h._gsQueue) {
			for (b = 0; d.length > b; b++)d[b]();
			for (c in n) n[c].func || h.console.log("GSAP encountered missing dependency: com.greensock." + c)
		}
		q = !1
	}
})(window);