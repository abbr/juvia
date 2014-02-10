// = require jquery-1.7.1.min.js
// = require jquery_ujs.js
// = require jquery.delayed-observer.js

(function() {
	var reinstallBehavior;

	reinstallBehavior = function(context) {
		return $('form.comment:not(.installed)', context).each(function() {
			var form, textarea;
			$(this).addClass('installed');
			form = this;
			textarea = $('textarea', form);
			return textarea.delayedObserver(function() {
				var callback;
				callback = function(html) {
					return $('.preview .content', form).html(html);
				};
				return $.get('/admin/comments/preview', {
					content : textarea.val()
				}, callback);
			});
		});
	};

	$(function() {
		$('#site_use_recaptcha').click(
				function() {
					this.checked ? ($('#div_recap_key').show()) : ($('#div_recap_key')
							.hide());
				});
		reinstallBehavior();
	});

}).call(this);