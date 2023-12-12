const fields = { // sorting form fields
	target: "#target",
	message: "#message",
	limit: "#limit",
	delay: "#delay",
	"delay-type": "#delayType"
};
export {fields};
export default {
	"delay-type": /^(second|minute)s$/,
	delay: /^([1-9][\d]{2,3}|10000)$/,
	message: /.{3,}/,
	limit: /^([1-9][\d]{1,2}|1000)$/,
	target: /^(?:wishes|joke|emoji|email|number|otp|link|paragraph|0)$/
};