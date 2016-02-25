debugger;
sap.ui.controller("vizchart.view.Main", {

    onInit : function()
    {
        if (sap.ui.Device.support.touch === false) 
        {
            this.getView().addStyleClass("sapUiSizeCompact");
        }
    }
});
