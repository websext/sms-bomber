import secondryLayout from "../exports/templates/secondryLayout.js";
import DOMRender from "../exports/DOMRender.js";
import { stop } from "../exports/autoTimer.js";
import threadsource from "../exports/threadsource.js";
import executeScript from "../exports/execScript.js";

function terminalHandler(injectionResults, data) {
	const [irdata] = injectionResults;
	data.running=irdata.result;
	irdata.result ? resolver(data) : rejecter(data);
}

function resolver(data) {
	++data.remaining;
	data.updateStatus(data.thread, data.remaining);
	data.inject(data.message);
	data.timer();
	$(".session").removeClass("error").text("Running");
}

function rejecter(data) {
	stop();
	data.inject(data.message, true);
	!data.running && window.clearInterval(data.timeline);
	$(".session").addClass("error").text("Stopped");
}

function initializeThreadSender(data) {
	var res, wa, senderButton, buttonSelector = [
		"#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div._1VZX7 > div._2xy_p._3XKXx > button"
	];

	function trigger(buttonSelector) {
		var senderButton, selector, rsender=/^send$/i;
		for(selector in buttonSelector) {
			if ((senderButton=document.querySelector(buttonSelector[selector]))) {
				break;
			}
		}
		var allElems = document.querySelectorAll("*");
		allElems.forEach(function(elem) {
			if (rsender.test(elem.textContent) && !senderButton) {
				senderButton=elem;
				return;
			}
		});
		return senderButton;
	}

	senderButton=trigger(buttonSelector);
	res=document.execCommand("insertText", false, data.message);

	if (res && senderButton) {
		wa = data.url==="https://web.whatsapp.com" && senderButton.click();
		if (!wa) {
			window.setTimeout(function() {
				senderButton.click();
			}, 15);
		}
	}
	
	return res && senderButton;
}

function initializeThreadTerminal(data) {
	const source = threadsource(data);

	source.remaining=0;
	source.timeline=window.setInterval(
		startThread,
		source.delay + 20,
		source
	);

	$("#status").text(source.thread+"/"+0);
	$(".session").text("Connecting...");
	$(".web").text(source.url);
	$(".starter").show();
	$("#delay").text(source.delaygate);
	$("#limit").text(source.thread);
	$("#fowrarding").text(source.forwarding);
}

export default function secondryFormHandler(data) {
	DOMRender(secondryLayout, initializeThreadTerminal, [data]);
}

function startThread(data) {
	var sender=data.sender;
	if (data.thread <= data.remaining) {
		window.close();
		return;
	}
	data.message=$.isFunction(sender) ? sender() : sender;
	executeScript(initializeThreadSender, data, function(result) {
		$(".starter").hide();
		terminalHandler(result, data);
	});
}