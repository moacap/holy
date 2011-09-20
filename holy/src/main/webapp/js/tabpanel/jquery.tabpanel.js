(function($) {
	$.fn.tabPanel = function(opts) {
		opts = opts || {};
		var effect = opts.effect || 'toggle';
		var delay = opts.delay;

		var tabpanel = $(this);
		tabpanel.children("div:gt(0)").hide();

		tabpanel.find("ul li a").click(function() {
			var me = $(this);
			var parent = me.parents("div:first");
			var index = me.closest("li").index();
			parent.children("div:visible").hide();

			var toShow = parent.children("div").eq(index);
			if (delay) {
				toShow[effect](delay);
			} else {
				toShow[effect]();
			}

			parent.trigger("open.tabpanel", index);
			return false;
		});
	}
}(jQuery));