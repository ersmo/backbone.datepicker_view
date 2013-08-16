this["JST"] = this["JST"] || {};

this["JST"]["chosen"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),name = locals_.name,placeholder = locals_.placeholder,dateFormat = locals_.dateFormat,span = locals_.span;buf.push("<span class=\"date input-append\"><input" + (jade.attrs({ 'type':('text'), 'name':(name), 'placeholder':(placeholder), 'data-format':(dateFormat), "class": [(span)] }, {"type":true,"name":true,"class":true,"placeholder":true,"data-format":true})) + "/><span class=\"add-on\"><i data-time-icon=\"icon-time\" data-date-icon=\"icon-calendar\"></i></span></span>");;return buf.join("");
};
(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.DatepickerView = (function(_super) {
    __extends(DatepickerView, _super);

    function DatepickerView() {
      this.initDatepicker = __bind(this.initDatepicker, this);
      this.render = __bind(this.render, this);
      _ref = DatepickerView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    DatepickerView.prototype.template = JST.datepicker;

    DatepickerView.prototype.tagName = 'span';

    DatepickerView.prototype.defaults = {
      dateFormat: 'yyyy-MM-dd',
      name: 'date',
      span: 'span2',
      placeholder: 'Date',
      defaultValue: null,
      settings: {
        pickSeconds: false
      }
    };

    DatepickerView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      return this.render();
    };

    DatepickerView.prototype.render = function() {
      this.$el.html(this.template(this.options));
      this.initDatepicker();
      return this;
    };

    DatepickerView.prototype.initDatepicker = function() {
      var _this = this;
      return setTimeout(function() {
        var picker;
        _this.$date = _this.$('.date');
        _this.$date.datetimepicker(_this.options.settings);
        if (_this.options.defaultValue) {
          picker = _this.$date.data('datetimepicker');
          return picker.setLocalDate(new Date(_this.options.defaultValue));
        }
      }, 0);
    };

    return DatepickerView;

  })(Backbone.View);

}).call(this);
