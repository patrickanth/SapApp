sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
	function(Controller, MessageToast) {
		"use strict";

		var MBController = Controller.extend("sap.m.sample.MenuButton.MB", {
			onMenuAction: function() {
			
					var validator = new Validator();
			
			
					if (validator.validate(this.byId("_nome"))) {
			
			
					}
			
				}
		});

		return MBController;

	});
