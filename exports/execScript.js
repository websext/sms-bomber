import activeTab from "./activeTab.js";
export default
function executeScript(executeFn, args, extensionFn) {
	activeTab(function(_tab, id) {
		chrome.scripting.executeScript({
			target: {tabId: id},
			function: executeFn,
			args: [args||null]
		}, extensionFn || function() {});
	});
}