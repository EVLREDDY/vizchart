/// testing second commit


var linchartdata,piechartdata,dountchartdata,barchartdata,columnchartdata,bubblechartdata,stackvbarchartdata;
debugger;
//jQuery.sap.require("sap.ui.commons.Image");
sap.ui.core.mvc.Controller.extend("vizchart.view.S1", {

	onInit : function() {
		debugger;
		
		
		   var oModel=this.getOwnerComponent().getModel();

           var sURL = "/ChartsSet";
   
         that=this;
			/*oModel.read(sURL, null, true,[], function(oData, oResponse){
				linchartdata=oData;
				piechartdata=oData;
				dountchartdata=oData;
				barchartdata=oData;
				columnchartdata=oData;
				bubblechartdata = oData;
				combinationchartdata = oData;
				scatterchartdata = oData;
				timebubblechartdata = oData;
				stackvbarchartdata = oData;
				stackvbarpchartdata = oData;
				dualbarchartdata = oData;
				duallinechartdata = oData;
				dualcombinationdata = oData;
				dualstackedcolumndata = oData;
				dualstackedcolumnpdata = oData;
				dualcolumndata = oData;
				areadata = oData;
				areapdata = oData;
				horizontalarea = oData;
				horizontalareap = oData;
				that.BindLineChart();
				that.BindPieChart();
				that.BindDonutChart();
				that.BindBarChart();
				that.BindColumnChart();
				that.BindBubbleChart();
				that.BindCombinationChart();
				that.BindScatterChart();
				that.BindTimebubbleChart();
				that.BindStackedVbarChart();
				that.BindStackedVbarpChart();
				that.BindDualbarChart();
				that.BindDuallineChart();
				that.BindDualcombinationChart();
				that.BindDualstackedcolumnChart();
				that.BindDualstackedcolumnpChart();
				that.BindDualcolumnChart();
				that.BindAreaChart();
				that.BindAreapChart();
				that.BindHorizontalAreaChart();
				that.BindHorizontalAreapChart();
				debugger;
			});*/
         
         var oData = {results:[{  
        	 Country:"India",
        	 Revenue:"200",
        	 Profit:"12"},
        	 {  
            	 Country:"US",
            	 Revenue:"100",
            	 Profit:"18"},
            	 {  
                	 Country:"Australia",
                	 Revenue:"250",
                	 Profit:"22"},
                	 {  
                    	 Country:"London",
                    	 Revenue:"400",
                    	 Profit:"92"}]};
         
         linchartdata=oData;
			piechartdata=oData;
			dountchartdata=oData;
			barchartdata=oData;
			columnchartdata=oData;
			bubblechartdata = oData;
			combinationchartdata = oData;
			scatterchartdata = oData;
			timebubblechartdata = oData;
			stackvbarchartdata = oData;
			stackvbarpchartdata = oData;
			dualbarchartdata = oData;
			duallinechartdata = oData;
			dualcombinationdata = oData;
			dualstackedcolumndata = oData;
			dualstackedcolumnpdata = oData;
			dualcolumndata = oData;
			areadata = oData;
			areapdata = oData;
			horizontalarea = oData;
			horizontalareap = oData;
			that.BindLineChart();
			/*that.BindPieChart();
			that.BindDonutChart();
			that.BindBarChart();
			that.BindColumnChart();
			that.BindBubbleChart();
			that.BindCombinationChart();
			that.BindScatterChart();
			that.BindTimebubbleChart();
			that.BindStackedVbarChart();
			that.BindStackedVbarpChart();
			that.BindDualbarChart();
			that.BindDuallineChart();
			that.BindDualcombinationChart();
			that.BindDualstackedcolumnChart();
			that.BindDualstackedcolumnpChart();
			that.BindDualcolumnChart();
			that.BindAreaChart();
			that.BindAreapChart();
			that.BindHorizontalAreaChart();
			that.BindHorizontalAreapChart();
			debugger;*/
         
         
	},
btnPress:function(){
	debugger;
},
	 BindPieChart: function() {
	     debugger;
	     var ojsModel = new sap.ui.model.json.JSONModel(piechartdata);
	          

	  		var dataset = new sap.viz.ui5.data.FlattenedDataset({

	 			dimensions : [ {
	 				axis : 1,
	 				name : 'Country',
	 				
	 				value : "{Country}"

	 			} ],

	 			measures : [ {
	 				name : 'Revenue',
	 				value : '{Revenue}'

	 			}, 
	 			],

	 			data : {
	 	 			path : "/results"
	                }

	          });
	         var pie = new sap.viz.ui5.Pie({
	                
	                width : "80%",
	                height : "400px",
	                plotArea : {
	                   
	                },
	                title : {
	                       visible : true,
	                       text : 'Pie Chart'
	                },
	                xAxis : {
	                       title : {
	                              visible : true,

	                      }
	                },
	                yAxis : {
	                    title : {
	                           visible : true,

	                   }
	             },
	                dataset : dataset
	          });
	          pie.setModel(ojsModel);

	          this.byId("piecharts").addContent(pie); 
	   },

	  BindLineChart: function() {
     debugger;
     var ojsModel = new sap.ui.model.json.JSONModel(barchartdata);
          

  		var dataset = new sap.viz.ui5.data.FlattenedDataset({

 			dimensions : [ {
 				axis : 1,
 				name : 'Country',
 				
 				value : "{Country}"

 			} ],

 			measures : [ {
 				name : 'Revenue',
 				value : '{Revenue}'

 			},{
 				name : 'Vlue',
 				value : '{Profit}'

 			}
 			],

 			data : {
 				path : "/results"
                }

          });
         var line = new sap.viz.ui5.Line({
                
                width : "80%",
                height : "400px",
                plotArea : {
                   
                },
                title : {
                       visible : true,
                       text : 'Line Chart'
                },
                xAxis : {
                       title : {
                              visible : true,

                      }
                },
               
                yAxis : {
                    title : {
                           visible : true,

                   }
             },
                dataset : dataset
          });
          line.setModel(ojsModel);

          this.byId("linecharts").addContent(line); 
   },
   
   BindDonutChart : function(){
	   
	   var ojsModel = new sap.ui.model.json.JSONModel(dountchartdata);
       

 		var dataset = new sap.viz.ui5.data.FlattenedDataset({

			dimensions : [ {
				axis : 1,
				name : 'Country',
				
				value : "{Country}"

			} ],

			measures : [ {
				name : 'Revenue',
				value : '{Revenue}'

			}, 
			],

			data : {
				path : "/results" 
               }

         });
         var donut = new sap.viz.ui5.Donut({
               
               width : "80%",
               height : "400px",
               plotArea : {
                  
               },
               title : {
                      visible : true,
                      text : 'Donut Chart'
               },
               xAxis : {
                      title : {
                             visible : true,

                     }
               },
               yAxis : {
                   title : {
                          visible : true,

                  }
            },
               dataset : dataset
         });
         donut.setModel(ojsModel);

        // this.byId("linecharts").addContent(line); 

         this.byId("dountcharts").addContent(donut); 

	   
   },
   
   BindBarChart : function(){
	   
	   
	   
	   var ojsModel = new sap.ui.model.json.JSONModel(dountchartdata);
       

 		var dataset = new sap.viz.ui5.data.FlattenedDataset({



            dimensions : [ {
              axis : 1,
              name : 'Country',
              value : "{Country}"
            } ],

            measures : [ {
              name : 'Revenue',
              value : '{Revenue}'
            }, {
              name : 'Profit',
              value : '{Profit}'
            } ],

			data : {
				path : "/results"
               }

         });
         var bar = new sap.viz.ui5.Bar({
               
               width : "80%",
               height : "400px",
               plotArea : {
                  
               },
               title : {
                      visible : true,
                      text : 'Bar Chart'
               },
               xAxis : {
                      title : {
                             visible : true,

                     }
               },
               yAxis : {
                   title : {
                          visible : true,

                  }
               
            },
         
              
               dataset : dataset
         });
         bar.setModel(ojsModel);

        // this.byId("linecharts").addContent(line); 

         this.byId("barcharts").addContent(bar); 

   },
   
 
   
BindColumnChart : function(){
	   
	   
	   
	   var ojsModel = new sap.ui.model.json.JSONModel(columnchartdata);
       

 		var dataset = new sap.viz.ui5.data.FlattenedDataset({



            dimensions : [ {
              axis : 1,
              name : 'Country',
              value : "{Country}"
            } ],

            measures : [ {
              name : 'Revenue',
              value : '{Revenue}'
            }, {
              name : 'Profit',
              value : '{Profit}'
            } ],

			data : {
				path : "/results"
               }

         });
         var column = new sap.viz.ui5.Column({
               
               width : "80%",
               height : "400px",
               plotArea : {
                  
               },
               title : {
                      visible : true,
                      text : 'Column Chart'
               },
               xAxis : {
                      title : {
                             visible : true,

                     }
               },
               yAxis : {
                   title : {
                          visible : true,

                  }
               
            },
           
               dataset : dataset
         });
         column.setModel(ojsModel);

        // this.byId("linecharts").addContent(line); 

         this.byId("columncharts").addContent(column); 

   },
      
   
   BindBubbleChart : function(){
 	   
 	   var ojsModel = new sap.ui.model.json.JSONModel(bubblechartdata);
        

  		var dataset = new sap.viz.ui5.data.FlattenedDataset({

 	
 
  			 dimensions : [ {
                 axis : 1,
                 name : 'Country',
                 value : "{Country}"
               } ],

               measures : [ {
                 group : 1,
                 name : 'Revenue',
                 value : '{Revenue}'
               }, {
                 group : 2,
                 name : 'Profit',
                 value : '{Profit}'
               }, {
                 group : 3,
                 name : 'Population',
                 value : '{Population}'
               } ],

  			data : {
 				path : "/results"
                }

          });
          var bubble = new sap.viz.ui5.Bubble({
                
                width : "80%",
                height : "400px",
                plotArea : {
                   
                },
                title : {
                       visible : true,
                       text : 'Bubble Chart'
                },
                xAxis : {
                       title : {
                              visible : true,

                      }
                },
                yAxis : {
                    title : {
                           visible : true,

                   }
             },
                dataset : dataset
          });
          bubble.setModel(ojsModel);

         // this.byId("linecharts").addContent(line); 

          this.byId("bubblecharts").addContent(bubble); 

 	   
    },
    
    
    
    
    BindCombinationChart : function(){
  	   
  	   var ojsModel = new sap.ui.model.json.JSONModel(combinationchartdata);
         

   		var dataset = new sap.viz.ui5.data.FlattenedDataset({

  	
  
   			 dimensions : [ {
                  axis : 1,
                  name : 'Country',
                  value : "{Country}"
                } ],

                measures : [ {
                 
                  name : 'Revenue',
                  value : '{Revenue}'
                }, {
                 
                  name : 'Profit',
                  value : '{Profit}'
                }
                ],

   			data : {
  				path : "/results"
                 }

           });
   	  var combination = new sap.viz.ui5.Combination({
        
         width : "80%",
         height : "400px",
         plotArea : {
         //'colorPalette' : d3.scale.category20().range()
         },
         title : {
           visible : true,
           text : 'Combination Chart'
         },
         bar : {

         },
         line : {

         },
         dataset : dataset
       });
   	combination.setModel(ojsModel);

          // this.byId("linecharts").addContent(line); 

           this.byId("combinationcharts").addContent(combination); 

  	   
     },
     
     
     
     
     BindScatterChart : function(){
   	   
   	   var ojsModel = new sap.ui.model.json.JSONModel(scatterchartdata);
          

    		var dataset = new sap.viz.ui5.data.FlattenedDataset({

   	
   
    			 dimensions : [ {
                   axis : 1,
                   name : 'Country',
                   value : "{Country}"
                 } ],

                 measures : [ {
                   group : 1,
                   name : 'Revenue',
                   value : '{Revenue}'
                 }, {
                   group : 2,
                   name : 'Population',
                   value : '{Population}'
                 }
                 
                
                 ],

    			data : {
   				path : "/results"
                  }

            });
            var scatter = new sap.viz.ui5.Scatter({
                  
                  width : "80%",
                  height : "400px",
                  plotArea : {
                     
                  },
                  title : {
                         visible : true,
                         text : 'Scatter Chart'
                  },
                  xAxis : {
                         title : {
                                visible : true,

                        }
                  },
                  yAxis : {
                      title : {
                             visible : true,

                     }
               },
                  dataset : dataset
            });
            scatter.setModel(ojsModel);

           // this.byId("linecharts").addContent(line); 

            this.byId("scattercharts").addContent(scatter); 

   	   
      },
      
      
      BindTimebubbleChart : function(){
      	   
      	   var ojsModel = new sap.ui.model.json.JSONModel(timebubblechartdata);
             

       		var dataset = new sap.viz.ui5.data.FlattenedDataset({

      	
      
       			 dimensions : [ {
                      axis : 1,
                      name : 'Country',
                      value : "{Country}"
                    } ],

                    measures : [ {
                      group : 1,
                      name : 'Revenue',
                      value : '{Revenue}'
                    }, {
                      group : 2,
                      name : 'Population',
                      value : '{Population}'
                    },
                    {
                   	 group : 3,
                        name : 'Profit',
                        value : '{Profit}'
                      }
                    ],

       			data : {
      				path : "/results"
                     }

               });
               var timebubble = new sap.viz.ui5.TimeBubble({
                     
                     width : "80%",
                     height : "400px",
                     plotArea : {
                        
                     },
                     title : {
                            visible : true,
                            text : 'TimeBubble Chart'
                     },
                     xAxis : {
                            title : {
                                   visible : true,

                           }
                     },
                     yAxis : {
                         title : {
                                visible : true,

                        }
                  },
                     dataset : dataset
               });
               timebubble.setModel(ojsModel);

              // this.byId("linecharts").addContent(line); 

               this.byId("timebubblecharts").addContent(timebubble); 

      	   
         },
         
         
         BindStackedVbarChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(stackvbarchartdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	
        
         			  dimensions : [
            	                      {axis : 1, name: "Region", value: "{Region}"},
            	                      {axis : 2, name: "Company", value: "{Company}"},
            	                  ],
            	                  measures : [
            	                      {group: 1, name : "Revenue", value : "{Revenue}"},
            	                      {group: 2, name : "Measures", value : "{Measures}"}
            	                  ],

                  /*    measures : [ 
                      {
                     	 
                          name : 'Profit',
                          value : '{Profit}'
                        }
                      ],*/

         			data : {
        				path : "/results"
                       }

                 });
         	var	stackbar = new sap.viz.ui5.StackedColumn({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'StackedColumn Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                       //    label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
                 stackbar.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("stackvbarcharts").addContent(stackbar); 

        	   
           },
           
           
   BindStackedVbarpChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(stackvbarpchartdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	
         			 dimensions : [
         	                      {axis : 1, name: "Region", value: "{Region}"},
         	                      {axis : 2, name: "Company", value: "{Company}"},
         	                  ],
         	                  measures : [
         	                      {group: 1, name : "Revenue", value : "{Revenue}"},
         	                      {group: 2, name : "Measures", value : "{Measures}"}
         	                  ],
                      measures : [ 
                      {
                     	 
                          name : 'Profit',
                          value : '{Profit}'
                        }
                      ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	stackbarp = new sap.viz.ui5.StackedColumn100({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'StackedColumn(%)'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	stackbarp.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("stackvbarpcharts").addContent(stackbarp); 

        	   
           },
           
           
 BindDualbarChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(dualbarchartdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	
        
         		   dimensions : [
         	                      {axis : 1, name: "Region", value: "{Region}"},
         	                      {axis : 2, name: "Company", value: "{Company}"},
         	                  ],
         	                  measures : [
         	                      {group: 1, name : "Revenue", value : "{Revenue}"},
         	                      {group: 2, name : "Measures", value : "{Measures}"}
         	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	dualbar = new sap.viz.ui5.DualBar({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'DualBar Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	dualbar.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("dualbarcharts").addContent(dualbar); 

        	   
           },
           
           
 BindDuallineChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(duallinechartdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	
        

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	dualline = new sap.viz.ui5.DualLine({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'Dual Line'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	dualline.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("duallinepcharts").addContent(dualline); 

        	   
           },
           
           
BindDualcombinationChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(dualcombinationdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	
        

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	dualcombination = new sap.viz.ui5.DualCombination({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'Dual Combination'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	dualcombination.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("dualcombinationcharts").addContent(dualcombination); 

        	   
           },
           
BindDualstackedcolumnChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(dualstackedcolumndata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	dualstackedcolumn = new sap.viz.ui5.DualStackedColumn({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'DualStackedColumn Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	dualstackedcolumn.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("dualstackcolumn").addContent(dualstackedcolumn); 

        	   
           },
   
           
           
           
BindDualstackedcolumnpChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(dualstackedcolumnpdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	dualstackedcolumnp = new sap.viz.ui5.DualStackedColumn100({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'DualStackedColumn(%) Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	dualstackedcolumnp.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("dualstackcolumnp").addContent(dualstackedcolumnp); 

        	   
           },
           
           
    BindDualcolumnChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(dualcolumndata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	dualcolumn = new sap.viz.ui5.DualColumn({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'DualColumn Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	dualcolumn.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("dualcolumn").addContent(dualcolumn); 

        	   
           },
           
           
 BindAreaChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(areadata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	area = new sap.viz.ui5.Area({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'Area Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	area.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("area").addContent(area); 

        	   
           },
           
           
 BindAreapChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(areapdata);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	areap = new sap.viz.ui5.Area100({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'Area(%) Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	areap.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("areap").addContent(areap); 

        	   
           },
           
           
           
           
BindHorizontalAreaChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(horizontalarea);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	horizontalarea1 = new sap.viz.ui5.HorizontalArea({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'Horizontal Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	horizontalarea1.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("horizontalarea").addContent(horizontalarea1); 

        	   
           },
           
           
BindHorizontalAreapChart : function(){
        	   
        	   var ojsModel = new sap.ui.model.json.JSONModel(horizontalareap);
               

         		var dataset = new sap.viz.ui5.data.FlattenedDataset({

        	

          		   dimensions : [
          	                      {axis : 1, name: "Region", value: "{Region}"},
          	                      {axis : 2, name: "Company", value: "{Company}"},
          	                  ],
          	                  measures : [
          	                      {group: 1, name : "Revenue", value : "{Revenue}"},
          	                      {group: 2, name : "Measures", value : "{Measures}"}
          	                  ],

         			data : {
        				path : "/results"
                       }

                 });
         	var	horizontalareap1 = new sap.viz.ui5.HorizontalArea100({
                       
                       width : "80%",
                       height : "400px",
                       plotArea : {
                          
                       },
                       title : {
                              visible : true,
                              text : 'Horizontal(%) Chart'
                       },
                       xAxis : {
                    	   title:{visible:true} ,
                           label:{hideSubLevels:true},
                       },
                       yAxis : {
                    	   title:{visible:true},
                           label:{visible:false},
                    },
                       dataset : dataset
                 });
         	horizontalareap1.setModel(ojsModel);

                // this.byId("linecharts").addContent(line); 

                 this.byId("horizontalareap").addContent(horizontalareap1); 

        	   
           },



});