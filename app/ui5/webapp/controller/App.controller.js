sap.ui.define([
    "sap/ui/core/mvc/Controller"],
    function (Controller) {
        "use strict";
        return Controller.extend("treinamento.ui5.controller.App", {

            onInit: function () { },
            onBeforeRendering: function () { },
            onAfterRendering: function () { },
            onExit: function () { },
            onPress: function () {

                alert("Foi inputado" + this.byId("input").getValue());

            }
        });
    
});