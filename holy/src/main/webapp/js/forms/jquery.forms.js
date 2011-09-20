(function($) {
	$.fn.max = function(method) {
		if (typeof (method) == 'string') {
			var m = method;
			method = function() {
				return $(this)[m]();
			}
		}
		var ret = null;
		$(this).each(function() {
			var num = method.apply(this);
			if (!ret || num > ret) {
				ret = num;
			}
		});
		return ret;
	}

	$.fn.maximize = function(method, reset) {
		var me = $(this);
		if (reset !== undefined) {
			me[method](reset);
		}
		var max = me.max(method);
		me[method](max);
	}

	$.fn.form = function() {
		var me = $(this);
		var list = me.find('.require label');
		if (!list.find('span.required').length) {
			list.prepend('<span class="required">*</span>');
		}
		me.find('label').maximize('width', '');
	}
})(jQuery);