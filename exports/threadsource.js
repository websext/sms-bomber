import randomThreads from "./randomThreads.js";
import autoTimer from "./autoTimer.js";
export default function threadsource(data) {
	const exports = {
		delaygate: data.delay+data.unit,
		delay: data.delay,
		thread: data.limit,
		url: data.url,
		session: "Connecting...",
		forwarding: !data.sender ? "Random " + data.forwarding : data.forwarding
	};
	exports.updateStatus=function(thread, remaining) {
		$("#status").text(thread+"/"+remaining);
	};
	exports.timer=function() {
		autoTimer(function() {
			$(".time").text(arguments[0]);
		});
	};
	data.sender && (exports.sender=data.sender);
	if (!data.sender) {
		var threads=new randomThreads();
		exports.sender=threads[data.target];
	}
	exports.inject=function(message, error) {
		var tr = document.createElement("tr"),
			td1 = document.createElement("td"),
			td2 = td1.cloneNode(),
			td3 = td1.cloneNode();
		message = message.length > 35 ? message.slice(0, 35) + "..." : message;
		td1.textContent=error ? "SENT /failed" : "SENT /success";
		td2.classList.add(error ? "error" : "lg");
		error && td1.classList.add("error");
		td2.textContent=error ? "405 ERROR" : "200 OK";
		td3.textContent=message;
		$(tr).append(td1, td2, td3);
		if ($(".scrollable-view tbody tr").length > 500) {
			$(".scrollable-view tbody").empty();
		}
		$(".scrollable-view tbody").append(tr);
		$(".scrollable-view").scrollTop(
			$(".scrollable-view")[0].scrollHeight-$(".scrollable-view")[0].clientHeight
		);
	};
	return exports;
}