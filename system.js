var body = document.body;

document.addEventListener('readystatechange', event => {
	if (event.target.readyState === 'interactive') {} else if (event.target.readyState === 'complete') {
		body.classList.add("complete");
		var start = document.getElementById('start');
		body.classList.remove("booting");
		body.classList.add("loaded");
		ident();
	}
});

var screens = document.querySelectorAll('#screens .screen');
var currentScreen = 0;
//var screenInterval = setInterval(nextScreen,2000);

function nextScreen() {
	screens[currentScreen].className = 'screen';
	currentScreen = (currentScreen + 1) % screens.length;
	screens[currentScreen].className = 'screen showing';
}

function goToScreen(n) {
	screens[currentScreen].className = 'screen';
	currentScreen = (n + screens.length) % screens.length;
	screens[currentScreen].className = 'screen showing';
}

function ident() {
	goToScreen(1);
	setTimeout(function() {
		chime.play()
		console.log('your audio is started just now');
	}, 1000)
	setTimeout(startScreen, 5000);
}

function startScreen() {
	let scheme = document.querySelector('meta[name="theme-color"]');
	scheme.setAttribute('content', '#481CEA')
	goToScreen(2);
	setTimeout(function() {
		music.play()
		console.log('your audio is started just now');
	}, 1000)
}

function supportScreen() {
	goToScreen(4);
}

function aboutScreen() {
	goToScreen(3);
}

function exitScreen() {
	goToScreen(2);
}

function bootScreen() {
	goToScreen(0);
}

var supoort = document.getElementById('support');
supoort.onclick = function() {
	supportScreen();
};

var about = document.getElementById('about');
about.onclick = function() {
	aboutScreen();
};

var exit = document.getElementById('exit');

exit.onclick = function() {
	exitScreen();
};

var reboot = document.getElementById('reboot');

reboot.onclick = function() {
	console.log('reboot');
	music.pause();
	music.currentTime = 0;
	bootScreen();
};
