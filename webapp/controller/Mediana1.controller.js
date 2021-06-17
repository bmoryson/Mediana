sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Mediana.Mediana1.controller.Mediana1", {
		onInit: function () {

		},

		onCalculate: function (oEvent) {

			var array1 = this.byId("txt_sum").getValue().split(", ");
			var array = [];
			for (var int in array1) {
				array.push(parseInt(array1[int]));
			}

			function compareNumbers(a, b) {
				if (a < b)
					return -1;
				if (a > b)
					return 1;
				else
					return 0;
			}

			array.sort(compareNumbers);
			var result, counter, numb;

			if (array.length % 2 === 0) {
				counter = (array.length / 2) - 1;
				numb = counter + 1;
				result = "Mediana podanego zbioru wynosi: " + (parseInt(array[counter]) + parseInt(array[numb])) / 2;
			} else {
				counter = (array.length / 2) + 0.5;
				counter--;
				result = "Mediana podanego zbioru wynosi: " + array[counter];
			}
			this.byId("txt_result").setText(result);
			this.byId("txt_result").setVisible(true);
		},

		onRefresh: function (oEvent) {
			this.byId("txt_result").setText("");
			this.byId("txt_result").setVisible(false);
			this.byId("txt_sum").setValue("");
			this.byId("txt_sum").setVisible(false);
			this.byId("i_numb").setValue("");
		},

		onAdd: function (oEvent) {
			var value = this.byId("i_numb").getValue();
			if (value !== "" && value !== undefined) {
				var string = this.byId("txt_sum").getValue();
				if (string.length > 0)
					string = string + ", " + value;
				else
					string = value;
				this.byId("txt_sum").setValue(string);
				this.byId("txt_sum").setVisible(true);
			}
		},

		onLiveChange: function (oEvent) {
			var sNumber = "";
			var value = oEvent.getSource().getValue();
			var notNumber = isNaN(value);
			if (notNumber === false) sNumber = value;
			else oEvent.getSource().setValue(sNumber);
		}

	});
});