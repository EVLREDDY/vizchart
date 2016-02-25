jQuery.sap.declare("vizchart.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("vizchart.Component", {
    metadata : {
        "name" : "vizchart",
        "version" : "1.1.0-SNAPSHOT",
        "library" : "vizchart",
        "includes" : [],
           "dependencies" : {
            "libs" : [ "sap.m", "sap.ui.layout", "sap.me","sap.viz"  ],
            "components" : []
        },
"config" : {
resourceBundle : "i18n/messageBundle.properties",
serviceConfig : {
name: "",
 serviceUrl: "../../../../../vizchart/proxy/sap/opu/odata/sap/ZMULTI_TEST_SRV/?saml2=disabled"
}
},
routing : {
    config : {
        "viewType" : "XML",
        "viewPath" : "vizchart.view",
        "targetControl" : "fioriContent", 
        "targetAggregation" : "pages", 
        "clearTarget" : false
    },
	routes : [
		{
			pattern : "",
			name : "S1",
			view : "S1"
		},
		{
			name : "S2",
			view : "S2",
			pattern : "S2"
		},
		{
			name : "S3",
			view : "S3",
			pattern : "S3/{selkey}/{spath}"
		},
	]
}
    },
    createContent : function() {
        var oViewData = {
            component : this
        };

        return sap.ui.view({
            viewName : "vizchart.view.Main",
            type : sap.ui.core.mvc.ViewType.XML,
            viewData : oViewData
        });
    },
    init : function() {
 
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        var sRootPath = jQuery.sap.getModulePath("vizchart");

        var oServiceConfig = this.getMetadata().getConfig().serviceConfig;
        var sServiceUrl = oServiceConfig.serviceUrl;
        var mConfig = this.getMetadata().getConfig();
        this._routeMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter(), this._bRouterCloseDialogs);
        this._initODataModel(sServiceUrl);
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [ sRootPath, mConfig.resourceBundle ].join("/")
        });
        this.setModel(i18nModel, "i18n");
      
        this.getRouter().initialize();
    },

    exit : function() {
        this._routeMatchedHandler.destroy();
    },
    setRouterSetCloseDialogs : function(bCloseDialogs) {
        this._bRouterCloseDialogs = bCloseDialogs;
        if (this._routeMatchedHandler) {
            this._routeMatchedHandler.setCloseDialogs(bCloseDialogs);
        }
    },

    _initODataModel : function(sServiceUrl) {
             var oConfig = {
            metadataUrlParams : {},
            json : true,
            defaultBindingMode :"TwoWay",
            defaultCountMode: "Inline",
//            useBatch : true
        };
          var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
          oModel.attachRequestFailed(null,"");
          oModel.setDefaultCountMode("None");
          this.setModel(oModel);
    }
});