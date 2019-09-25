	(function () {
		var greet = function () {
			var py_name = document.getElementById ('Name').value;
			if (py_name == '' || py_name.length == 0 || py_name == null) {
				document.getElementById ('groet').innerHTML = '<p><font color="#ff0000">Hello Anonymous, may I know yor name? Please insert it below:</font></p>';
				document.getElementById ('top').innerHTML = '<font color="#ffffff">Demo</font>';
			}
			else {
				document.getElementById ('groet').innerHTML = ('<p><font color="#00ff00">Hello, ' + py_name) + ', thank you for introducing you</font></p>';
				document.getElementById ('top').innerHTML = ('<font color="#00ff00">Hello, ' + py_name) + '</font>';
			}
		};
		var chain = __init__ (__world__.itertools).chain;
		var SolarSystem = function () {
			var planets = function () {
				var __accu0__ = [];
				var __iterable0__ = enumerate (tuple ([tuple (['Mercury', 'hot', 2240]), tuple (['Venus', 'sulphurous', 6052]), tuple (['Earth', 'fertile', 6378]), tuple (['Mars', 'reddish', 3397]), tuple (['Jupiter', 'stormy', 71492]), tuple (['Saturn', 'ringed', 60268]), tuple (['Uranus', 'cold', 25559]), tuple (['Neptune', 'very cold', 24766])]));
				for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var index = __left0__ [0];
					var planet = __left0__ [1];
					__accu0__.append (list (chain (planet, tuple ([index + 1]))));
				}
				return __accu0__;
			} ();
			var lines = tuple (['{} is a {} planet', 'The radius of {} is {} km', '{} is planet nr. {} counting from the sun']);
			var __init__ = function (self) {
				self.lineIndex = 0;
			};
			var greet2 = function (self) {
				self.planet = self.planets [int (Math.random () * len (self.planets))];
				document.getElementById ('greet').innerHTML = 'Hello {}'.format (self.planet [0]);
				self.explain ();
			};
			var explain = function (self) {
				document.getElementById ('explain').innerHTML = self.lines [self.lineIndex].format (self.planet [0], self.planet [self.lineIndex + 1]);
				self.lineIndex = __mod__ (self.lineIndex + 1, 3);
			};
		};
		__pragma__ ('<use>' +
			'itertools' +
		'</use>')
		__pragma__ ('<all>')
			__all__.SolarSystem = SolarSystem;
			__all__.chain = chain;
			__all__.greet = greet;
		__pragma__ ('</all>')
	}) ();
