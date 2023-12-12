import { fields } from "./formregexp.js";
export default class formValidator {
	validateData=null;
	exportData=null;
	isSuccess=false;
	constructor(form) {
		$("input, select").css("border-color", "");
		$(".error").html("");
		var formData = JSON.parse($.URLSearchParams($(form).serialize()).toJSON());
		this.exportData = formData;
		this.validateData=formData;
	};
	error = function(el, elem, message) {
		elem.addClass("_error");
		el.html(message);
		this.isSuccess=false;
	};
	validate = function() {
		var field, elem, el, regexminsec=/^(?:second|minute)s$/;
		this.isSuccess=true;

		if ($("#message")[0].disabled) {
			delete fields["message"];
		}

		for(field in fields) {
			if ((el=$("."+field)) && (elem=$(fields[field])) && !elem.val()) {
				this.error(el, elem, "This field is required?");
				return;
			}
			if ((regexminsec.test(elem.val()) && this.validateData.delay > 60)) {
				this.error(el, elem, "Out of range maximum value exceeds.");
				return;
			}
		}
		return this;
	};
	complete = function(callback) {
		$.isFunction(callback)&&this.isSuccess&&callback.call(this,this.exportData);
		return this;
	};
};