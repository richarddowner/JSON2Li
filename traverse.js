function traverse(jsonObj) {
	if (jQuery.type(jsonObj) == "string") {
		// skip string
	} else if (jQuery.type(jsonObj) == "array") {
		$.each(jsonObj, function (key, value) {
			if (jQuery.type(value) == "object") {
				// object inside array - add <ul>'s
				if (value != null) {
					html += "<li>" + key + "<ul>";
					traverse(value);
					html += "</ul></li>";
				}
			} else {
				html += "<li>" + value + "</li>";
				if (value != null) {
					traverse(value);
				}
			}
		});
	} else {
		$.each(jsonObj, function (key, value) {
			// else object or number
			if (jQuery.type(value) == "array") {
				// array inside object - add <ul>'s
				if (value.length != 0) {
					html += "<li>" + key + "<ul>";
					traverse(value);
					html += "</ul></li>";
				}
			} else {
				html += "<li><strong>" + key + "</strong>: " + value + "</li>";
				if (value != null) {
					traverse(value);
				}
			}
		});
	}
}