sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode",
    "sap/ui/core/message/Message",
    "sap/m/MessageToast",
    "sap/ui/core/library"
], function(Controller, Message, library) {
    "use strict";

    sap.ui.getCore().attachParseError(this._parseErrorHandler, this);
    sap.ui.getCore().attachValidationSuccess(this._onValidationSuccess, this);
    
    // shortcut for sap.ui.core.ValueState
    var ValueState = library.ValueState;

    // shortcut for sap.ui.core.MessageType
    var MessageType = library.MessageType;

    return Controller.extend("nameSpaceProva.project1.controller.App", {

        onInit : function () {
        
        },
        onResetButton : function() {

        
               
                this.getView().byId("inputID1").setValue("");
                this.getView().byId("inputID2").setValue("");                
                this.getView().byId("inputID3").setValue("");
                this.getView().byId("inputID4").setValueState("");
                this.getView().byId("inputID5").setValue("");
                this.getView().byId("inputID6").setValue("");
         
            
            return sap.ui.getCore().getMessageManager().addMessages(alert(oMessage));
            
            },

        onSuccessPress : function(){
            var oMessage = new Message({
                message: "My generated success message",
                type: MessageType.Success,
                target: "/Dummy",
                processor: this.getView().getModel()
            });
            sap.ui.getCore().getMessageManager().addMessages(oMessage);
        },

        onErrorPress : function(){
            var oMessage = new Message({
                message: "My generated error message",
                type: MessageType.Error,
                target: "/Dummy",
                processor: this.getView().getModel()
            });
            sap.ui.getCore().getMessageManager().addMessages(oMessage);
        },

        onWarningPress : function(){
            var oMessage = new Message({
                message: "My generated warning message",
                type: MessageType.Warning,
                target: "/Dummy",
                processor: this.getView().getModel()
            });
            sap.ui.getCore().getMessageManager().addMessages(oMessage);
        },

        onInfoPress : function(){
            var oMessage = new Message({
                message: "My generated info message",
                type: MessageType.Information,
                target: "/Dummy",
                processor: this.getView().getModel()
            });
            sap.ui.getCore().getMessageManager().addMessages(oMessage);
        },

        onValueStatePress : function(){
            var oInput = this.getView().byId("valuesStateOnly");
            oInput.setValueState(ValueState.Error);
            oInput.setValueStateText("My ValueState text for Error");
        },

        onClearPress : function(){
            // does not remove the manually set ValueStateText we set in onValueStatePress():
            sap.ui.getCore().getMessageManager().removeAllMessages();
        },

        //################ Private APIs ###################

        _getMessagePopover : function () {
            // create popover lazily (singleton)
            if (!this._oMessagePopover) {
                this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),"sap.ui.core.sample.MessageManager.BasicMessages.MessagePopover", this);
                this.getView().addDependent(this._oMessagePopover);
            }
            return this._oMessagePopover;
        }

    });

});
