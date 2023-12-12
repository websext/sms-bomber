var running=true;
function initializeAutoTimer(timerprops, fn) {
	var copysource=[], h, m, s, r;

	if ((r=timerprops.s===60)) {
		timerprops.s=0;
		timerprops.m++;
	}

	if ((r=timerprops.m===60)) {
		timerprops.m=0;
		timerprops.h++;
	}

	timerprops.s++;

	if (timerprops.h===60 && r) {
		timerprops.h=1;
	}

	h=timerprops.h;
	m=timerprops.m;
	s=timerprops.s;

	copysource[0]=h < 10 ? "0" + h : h;
	copysource[1]=m < 10 ? "0" + m : m;
	copysource[2]=s < 10 ? "0" + s : s;

	running && fn(copysource.join(":"));
}
var starter=true;
function stop() {
	running=starter=false;
}
export { stop };
export default function autoTimer(fn) {
	const timerprops={h:0, m:0, s:0};
	starter && window.setInterval(()=> initializeAutoTimer(timerprops, fn), 1000);
	starter=false;
}