export default async function activeTab(callback) {
	const [tab] = await chrome.tabs.query({active:true, currentWindow:true});
	$.isFunction(callback) && callback.call(this, tab, tab.id);
}