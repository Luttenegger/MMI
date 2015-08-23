/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'valley',
            type:'image',
            rect:['0','0','945px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"valley.jpg",'0px','0px']
         },
         {
            id:'Servicing_Arizona',
            type:'text',
            rect:['123px','4px','674px','93px','auto','auto'],
            text:"Servicing Arizona for over 10 years",
            align:"center",
            font:['Arial, Helvetica, sans-serif',37,"rgba(10,102,13,1.00)","600","none","normal"]
         },
         {
            id:'heatingandcooling',
            type:'image',
            rect:['0','0','945px','150px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"heatingandcooling.jpg",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_heatingandcooling}": [
            ["style", "height", '120px'],
            ["style", "opacity", '0'],
            ["style", "left", '-24px'],
            ["style", "width", '756.00003150202px']
         ],
         "${_Servicing_Arizona}": [
            ["color", "color", 'rgba(250,255,250,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '-104px'],
            ["style", "font-size", '37px'],
            ["style", "top", '42px'],
            ["style", "height", '93px'],
            ["style", "text-align", 'center'],
            ["style", "width", '933px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '600']
         ],
         "${_valley}": [
            ["style", "top", '-64px'],
            ["style", "height", '189px'],
            ["style", "opacity", '1'],
            ["style", "left", '-442px'],
            ["style", "width", '1190.7px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '725px'],
            ["style", "height", '120px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         timeline: [
            { id: "eid61", tween: [ "style", "${_Servicing_Arizona}", "left", '-104px', { fromValue: '-104px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_heatingandcooling}", "left", '-24px', { fromValue: '-24px'}], position: 10000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_heatingandcooling}", "width", '756.00003150202px', { fromValue: '756.00003150202px'}], position: 10000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_valley}", "left", '-442px', { fromValue: '-442px'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Servicing_Arizona}", "top", '42px', { fromValue: '42px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_heatingandcooling}", "height", '120px', { fromValue: '120px'}], position: 10000, duration: 0 },
            { id: "eid45", tween: [ "color", "${_Servicing_Arizona}", "color", 'rgba(250,255,250,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(250,255,250,1.00)'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_valley}", "width", '1190.7px', { fromValue: '1190.7px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_heatingandcooling}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_heatingandcooling}", "opacity", '1', { fromValue: '0.000000'}], position: 6842, duration: 3158 },
            { id: "eid44", tween: [ "style", "${_heatingandcooling}", "opacity", '0', { fromValue: '1'}], position: 16842, duration: 3158 },
            { id: "eid50", tween: [ "style", "${_Servicing_Arizona}", "width", '933px', { fromValue: '933px'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_valley}", "height", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_valley}", "top", '-64px', { fromValue: '-64px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Servicing_Arizona}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Servicing_Arizona}", "opacity", '0', { fromValue: '1'}], position: 6842, duration: 3158 },
            { id: "eid21", tween: [ "style", "${_Servicing_Arizona}", "opacity", '1', { fromValue: '0'}], position: 16842, duration: 3158 },
            { id: "eid28", tween: [ "style", "${_valley}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_valley}", "opacity", '0', { fromValue: '1'}], position: 6842, duration: 3158 },
            { id: "eid30", tween: [ "style", "${_valley}", "opacity", '1', { fromValue: '0'}], position: 16842, duration: 3158 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4858368");
