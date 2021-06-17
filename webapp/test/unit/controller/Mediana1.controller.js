/*global QUnit*/

sap.ui.define([
	"Mediana/Mediana1/controller/Mediana1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Mediana1 Controller");

	QUnit.test("I should test the Mediana1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});