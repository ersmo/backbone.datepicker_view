this["JST"] = this["JST"] || {};

this["JST"]["datepicker"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),name = locals_.name,placeholder = locals_.placeholder,dateFormat = locals_.dateFormat,span = locals_.span;buf.push("<span class=\"date input-append\"><input" + (jade.attrs({ 'type':('text'), 'name':(name), 'placeholder':(placeholder), 'data-format':(dateFormat), "class": [(span)] }, {"type":true,"name":true,"class":true,"placeholder":true,"data-format":true})) + "/><span class=\"add-on\"><i data-time-icon=\"icon-time\" data-date-icon=\"icon-calendar\"></i></span></span>");;return buf.join("");
};