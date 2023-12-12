export default function DOMRender(content, callback, args) {
	var extension=true, permission,
		permissions=["storage", "scripting", "tabs"];
	args=args||[];
	for(permission in permissions) {
		if (!(permissions[permission] in chrome)) {
			extension=false;
		}
	}
	extension && (
		$("#content").html(content),
		$.isFunction(callback) && callback.apply(DOMRender, args)
	);
}