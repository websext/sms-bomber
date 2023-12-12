import secondryFormHandler from "./secondryFormHandler.js";
import executeScript from "../exports/execScript.js";
import delayprops from "../exports/delayprops.js";
import formValidator from "../exports/formValidator.js";

function e99db97e915b265ee45b85fc7d(data) {
	executeScript(focusTargetField, null, function() {
		const [returnData] = arguments[0];
		if (returnData.result) {
			adjustFinalDelayProp(data);
			data.url=returnData.result;
			data.forwarding=data.target||data.message;
			setForwarding(data);
			data.sender=data.message;
			secondryFormHandler(data, executeScript); // transport
		}
	});
}

function adjustFinalDelayProp(data) {
	var prop, unit, value;
	((prop=delayprops[data["delay-type"]])&&(unit=prop.unit));
	value=prop.value;
	data.unit=unit;
	data.delay=data.delay * value;
}

function delayTypeEventHandler() {
	var selected, value, selected = this.selectedOptions[0];
	value=+$(selected).attr("data-value");
	$("#delay").val(value).attr("min", value);
}

function setForwarding(data) {
	var value=data.forwarding;
	data.forwarding=value.length > 35 ?
		value.slice(0, 35) + "..." : value;
}

export default function primaryFormHandler() {
	$("#target").on("change", randomTargetEventHandler);
	$("#delayType").on("change", delayTypeEventHandler);
	$("form").on("submit", function(event) {
		event.preventDefault();
		const FV = new formValidator(this);
		FV.validate().complete(e99db97e915b265ee45b85fc7d);
	});
}

function focusTargetField() {
	var field1 = $(".bze30y65:eq(2),form div[contenteditable=true]")[0];
	var field2 = $("form textarea")[0];
	var field3 = $("div[contenteditable=true]")[0];
	var field4 = $("textarea")[0], focusableField;
	focusableField = field1 || field2 || field3 || field4;
	$(focusableField).focus();
	return !!focusableField && window.location.origin;
}

var currentValue=undefined;
function randomTargetEventHandler() {
	$("input, select").css("border-color", "");
	$(".error").html("");
	if (!currentValue) {
		currentValue=$("#message").val();
	}
	$(this).val()!=0 ? $("#message").val("") : $("#message").val(currentValue);
	$(this).val()!=0 ?
		$("#message").attr("disabled", true) : $("#message").attr("disabled", false);
}