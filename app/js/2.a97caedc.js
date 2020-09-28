(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"00d3":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex min-height-inherit"},[e.inline?e._e():o("div",{staticClass:"min-height-inherit position-relative workspace-toolbox",class:{blocklyToolboxDelete:!!e.blockBeingDragged},staticStyle:{flex:"0 0 auto"},on:{mouseenter:function(t){e.isMouseInQuasarToolbox=!0},mouseleave:function(t){e.isMouseInQuasarToolbox=!1}}},[o("div",{staticClass:"q-pa-sm flex column"},[o("q-list",[e._l(e.toolbox,(function(t){return["sep"===t.tag?o("q-separator"):o("q-item",{style:"color:"+t.colour,attrs:{clickable:"",active:e.isFlyoutOpen&&e.isFlyoutOpen===t.name},on:{click:function(o){return e.showToolboxFlyout(t,o)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{style:"color:"+t.colour,attrs:{name:t.icon}})],1),o("q-item-section",{staticClass:"gt-sm"},[o("q-item-label",{style:"color:"+t.colour},[e._v(e._s(t.name))])],1)],1)]}))],2),o("q-list",{staticStyle:{flex:"0 0 auto"}},[e._t("default")],2)],1)]),o("div",{staticClass:"min-height-inherit position-relative",on:{click:e.closeToolboxFLyout}},[o("div",{staticClass:"blockly",class:{"blockly-inline":e.inline},staticStyle:{"min-height":"inherit"}},[o("div",{ref:"blockly",staticClass:"blockly-wrap"}),o("xml",{ref:"toolbox",staticStyle:{display:"none"}},[e._l(e.toolbox,(function(t){return[o(t.tag,{tag:"component",attrs:{name:t.name,colour:t.colour,custom:t.custom}},[e._l(t.children,(function(t){return[o(t.tag,{tag:"component",attrs:{type:t.type,colour:t.colour}},[e._l(t.children,(function(t){return[o(t.tag,{tag:"component",attrs:{id:t.id,op:t.op,at:t.at,items:t.items,statement:t.statement,mode:t.mode,at1:t.at1,at2:t.at2,divisor_input:t.divisor_input,name:t.name,colour:t.colour}},[e._v(e._s(t.value)),e._l(t.children,(function(t){return[o(t.tag,{tag:"component",attrs:{type:t.type,name:t.name}},[e._v(e._s(t.value)),e._l(t.children,(function(t){return[o(t.tag,{tag:"component",attrs:{name:t.name}},[e._v(e._s(t.value))])]}))],2)]}))],2)]}))],2)]}))],2)]}))],2)],1)])])},i=[],a=(o("ddb0"),o("ded3")),l=o.n(a),s=o("54ca"),r=o.n(s),c=o("2f62"),p="/**\r\n * IMPORTANT NOTE\r\n * This project MUST be ES5 compliant as that is what the JS Interpreter uses\r\n */\r\n\r\n/**\r\n * Simple tests\r\n */\r\nhasNumber = /\\d/\r\n \r\n/**\r\n * Stores events being listened to\r\n * {eventName: [...callbacks]}\r\n */\r\n_events = {}\r\n\r\n/**\r\n * console.log helper to properly send data to main app w/o obfuscation\r\n */\r\nconsole = {\r\n  log: function (arguments) {\r\n    log(JSON.stringify(arguments))\r\n  }\r\n}\r\n\r\n/**\r\n * target.addEventListener subsitution\r\n * @param {String} eventName The eventName to store this callback under\r\n * @param {Array} args The list of arguments\r\n * @param {Function} callback The function to call when this event is triggered\r\n */\r\naddEventListener = function (eventName, args, callback) {\r\n  if (!_events[eventName]) {\r\n    _events[eventName] = []\r\n  }\r\n\r\n  _events[eventName].push({\r\n    args: args,\r\n    callback: callback\r\n  })\r\n}\r\n\r\n/**\r\n * Trigger an event\r\n * @param {String} eventName \r\n * @param {*} payload\r\n */\r\ntriggerEvent = function (eventName, payload) {\r\n  _events[eventName] && _events[eventName].forEach(function (event) {\r\n    event.callback({\r\n      args: event.args,\r\n      payload: JSON.parse(payload)\r\n    })\r\n  })\r\n}\r\n\r\n/**\r\n * Plays a note\r\n */\r\nplayNote = function (payload) {\r\n  _playNote(JSON.stringify(payload))\r\n}\r\n\r\n/**\r\n * Compre helper for working with \"is\", \"is not\", etc\r\n */\r\ncompare = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      return a == b\r\n    case 'is not':\r\n      return a != b\r\n  }\r\n}\r\n\r\n/**\r\n * Checks if a string belongs to the \"is any\" family (\"all\", \"any\", etc)\r\n */\r\nisAny = function (str) {\r\n  var list = ['any', 'all']\r\n  var isValid = false\r\n\r\n  list.forEach(function (item) {\r\n    if (str === item) isValid = true\r\n  });\r\n\r\n  return isValid\r\n}\r\n\r\n/**\r\n * Checks if a given note matches a webmidi.name\r\n * - If no octave present, then matches the key in any octave\r\n */\r\nisNote = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      if (hasNumber.test()) {\r\n        return a == b.name.concat(b.octave)\r\n      } else {\r\n        return a == b.name\r\n      }\r\n\r\n    case 'is not':\r\n      if (hasNumber.test()) {\r\n        return a != b.name.concat(b.octave)\r\n      } else {\r\n        return a != b.name\r\n      }\r\n  }\r\n}",u=o("c62b"),d=o.n(u),h=o("2ef0"),m=o("7724"),g=o.n(m),f=r.a.Theme.defineTheme("midiblocks",{blockStyles:{logic_blocks:{colourPrimary:"#5d37f0",colourSecondary:"#635697",colourTertiary:"#453974"},loop_blocks:{colourPrimary:"#2ca300",colourSecondary:"#328514",colourTertiary:"#2d621a"},math_blocks:{colourPrimary:"#a599e9",colourSecondary:"#7e77a9",colourTertiary:"#575467"},procedure_blocks:{colourPrimary:"#ff628c",colourSecondary:"#b56278",colourTertiary:"#6e3c49"},variable_blocks:{colourPrimary:"#ff628c",colourSecondary:"#b56278",colourTertiary:"#6e3c49"},variable_dynamic_blocks:{colourPrimary:"#FF8C1A",colourSecondary:"#FF8000",colourTertiary:"#DB6E00"},hat_blocks:{colourPrimary:"#4C97FF",colourSecondary:"#4280D7",colourTertiary:"#3373CC",hat:"cap"}}}),y=o("3e52"),k={name:"Blockly",props:["options","toolbox","blocks","inline"],computed:l()({},Object(c["b"])(["devices"])),data(){return{blockly:null,interpreter:null,isFlyoutOpen:!1,blockBeingDragged:!1,lastClickedCategory:null,isMouseInQuasarToolbox:!1}},mounted(){let e=this.$props.options||{};e=Object(h["defaults"])(this.$props.options,{renderer:"zelos",sounds:!1,toolbox:this.$refs.toolbox,media:"media/",zoom:{controls:!0,pinch:!0,wheel:!0,startScale:.8},grid:{spacing:50,length:50,colour:"#9effff",snap:!0},theme:f}),this.blockly=r.a.inject(this.$refs.blockly,e),this.blockly.addChangeListener(this.onChange),this.$root.$on("blockly.prompt.submit",this.onPromptSubmit),this.addBlocks()},beforeDestroy(){this.$root.$off("blockly.prompt.submit",this.onPromptSubmit)},methods:{onChange(e){this.$emit("change",e),"dragStart"===e.element?this.blockBeingDragged=e:"dragStop"===e.element&&(this.isMouseInQuasarToolbox&&this.blockly.getBlockById(e.blockId).dispose(),this.blockBeingDragged=!1)},showToolboxFlyout(e,t){let o=[];e.custom?this.blockly.getFlyout().show(e.custom):(e.children.forEach(e=>{o.push(document.querySelector(`block[type="${e.type}"]`))}),this.blockly.getFlyout().show(o)),this.isFlyoutOpen=e.name,this.lastClickedCategory=t.target},onPromptSubmit(e){this.lastClickedCategory&&this.lastClickedCategory.click()},closeToolboxFLyout(e){let t=e.path.some(e=>e.classList&&e.classList.contains("blocklyFlyoutBackground"));this.isFlyoutOpen&&!t&&(this.blockly.getFlyout().hide(),this.isFlyoutOpen=!1)},run(){const e=r.a.JavaScript.workspaceToCode(this.blockly);this.interpreter=new g.a(y["transform"](p+"\n"+e,{presets:["env"],sourceType:"script"}).code,this.setupInterpreter),this.interpreter.run()},setupInterpreter(e,t){e.setProperty(t,"log",e.createNativeFunction(e=>{console.log("📦 log: ",...JSON.parse(e))})),e.setProperty(t,"_playNote",e.createNativeFunction(e=>{let t=JSON.parse(e);"all"===t.device&&Object.keys(this.devices.outputs).forEach(e=>{const o=d.a.getOutputById(e);o.playNote(t.note,t.channel)})}))},addBlocks(){this.blocks.forEach(e=>{r.a.Blocks[e.title]={init:function(){this.jsonInit(JSON.parse(e.block_definition))}},r.a.JavaScript[e.title]=()=>"";const t=this.blockly.newBlock(e.title);t.initSvg(),t.render(),this.blockly.centerOnBlock(t.id),this.blockly.scroll(this.blockly.scrollX,this.blockly.scrollY)})}}},b=k,v=(o("8f13"),o("2877")),T=o("1c1c"),w=o("eb85"),F=o("66e5"),E=o("4074"),_=o("0016"),C=o("0170"),I=o("eebe"),x=o.n(I),O=Object(v["a"])(b,n,i,!1,null,null,null);t["a"]=O.exports;x()(O,"components",{QList:T["a"],QSeparator:w["a"],QItem:F["a"],QItemSection:E["a"],QIcon:_["a"],QItemLabel:C["a"]})},"1df4":function(e,t,o){"use strict";var n=o("b613"),i=o.n(n);i.a},"8f13":function(e,t,o){"use strict";var n=o("c80c"),i=o.n(n);i.a},ad11:function(e,t,o){},b613:function(e,t,o){},c80c:function(e,t,o){},dc73:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"full-height"},[o("q-splitter",{staticClass:"min-height-inherit q-pt-appbar",attrs:{id:"factory-splitter",unit:"px",reverse:""},scopedSlots:e._u([{key:"after",fn:function(){return[o("div",{staticClass:"flex column min-height-inherit"},[o("div",{staticStyle:{flex:"0 1 250px"},attrs:{id:"preview"}}),o("CodeEditor",{attrs:{value:e.block.code},on:{onCodeChange:e.onCodeChange}})],1)]},proxy:!0},{key:"before",fn:function(){return[o("ColorPicker"),o("Workspace",{ref:"workspace",staticClass:"fill",attrs:{toolbox:e.toolbox,blocks:[],options:e.options},on:{change:e.workspaceEventHandler}},[o("q-btn",{staticClass:"full-width",attrs:{color:"secondary",icon:"fas fa-save"},on:{click:e.saveBlock}},[e._v("Save Block")])],1)]},proxy:!0}]),model:{value:e.splitter,callback:function(t){e.splitter=t},expression:"splitter"}})],1)},i=[],a=(o("c975"),o("a434"),o("5319"),o("498a"),o("ded3")),l=o.n(a),s=o("54ca"),r=o.n(s);r.a.Blocks["factory_base"]={init:function(){this.setColour("#2ca300"),this.appendDummyInput().appendField("name").appendField(new r.a.FieldTextInput("block_type"),"name");let e=new r.a.FieldDropdown([["events","event"],["event modifiers","event_modifier"],["send events","event_send"]]);this.appendDummyInput().appendField("category").appendField(e,"category"),this.appendStatementInput("INPUTS").setCheck("Input").appendField("inputs"),e=new r.a.FieldDropdown([["automatic inputs","AUTO"],["external inputs","EXT"],["inline inputs","INT"]]),this.appendDummyInput().appendField(e,"INLINE"),e=new r.a.FieldDropdown([["no connections","NONE"],["← left output","LEFT"],["↕ top+bottom connections","BOTH"],["↑ top connection","TOP"],["↓ bottom connection","BOTTOM"]],(function(e){this.sourceBlock_.updateShape_(e),this.sourceBlock_.spawnOutputShadow_(e)})),this.appendDummyInput().appendField(e,"CONNECTIONS"),this.appendValueInput("COLOR").setCheck("Color").appendField("styles"),setTimeout(()=>{this.getInputTargetBlock("COLOR")||this.connectOutputShadow("COLOR","style_color")},0),this.setTooltip("Build a custom block by plugging\nfields, inputs and other blocks here."),this.setHelpUrl("https://developers.google.com/blockly/guides/create-custom-blocks/block-factory")},mutationToDom:function(){let e=r.a.utils.xml.createElement("mutation");return e.setAttribute("connections",this.getFieldValue("CONNECTIONS")),e},domToMutation:function(e){let t=e.getAttribute("connections");this.updateShape_(t)},spawnOutputShadow_:function(e){switch(e){case"LEFT":this.connectOutputShadow("OUTPUTTYPE");break;case"TOP":this.connectOutputShadow("TOPTYPE");break;case"BOTTOM":this.connectOutputShadow("BOTTOMTYPE");break;case"BOTH":this.connectOutputShadow("TOPTYPE"),this.connectOutputShadow("BOTTOMTYPE");break}},connectOutputShadow:function(e,t="type_null"){let o=this.workspace.newBlock(t);o.setShadow(!0),o.outputConnection.connect(this.getInput(e).connection),o.initSvg(),o.render()},updateShape_:function(e){let t=this.getInput("OUTPUTTYPE"),o=this.getInput("TOPTYPE"),n=this.getInput("BOTTOMTYPE");"LEFT"==e?t||this.addTypeInput_("OUTPUTTYPE","output type"):t&&this.removeInput("OUTPUTTYPE"),"TOP"==e||"BOTH"==e?o||this.addTypeInput_("TOPTYPE","top type"):o&&this.removeInput("TOPTYPE"),"BOTTOM"==e||"BOTH"==e?n||this.addTypeInput_("BOTTOMTYPE","bottom type"):n&&this.removeInput("BOTTOMTYPE")},addTypeInput_:function(e,t){this.appendValueInput(e).setCheck("Type").appendField(t),this.moveInputBefore(e,"COLOR")}},r.a.Blocks["style_color"]={init:function(){this.setColour("#fad000"),this.appendDummyInput().appendField("color:").appendField(new r.a.FieldTextInput("#fad000",this.setColor),"COLOR"),this.setOutput(!0,"Color"),this.setTooltip("Paint the block with this color."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=55"),setTimeout(()=>{this.getField("COLOR").getClickTarget_().addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("blockly.showColorPicker",{detail:{block:this,color:this.getColour()}}))})})},setColor:function(e){e&&this.sourceBlock_.setColour(e)},mutationToDom:function(e){const t=r.a.utils.xml.createElement("mutation");return t.setAttribute("colour",this.getColour()),t},domToMutation:function(e){this.setColour(e.getAttribute("colour"))}};
/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var c="fields %1 %2",p=[{type:"field_dropdown",name:"ALIGN",options:[["left","LEFT"],["right","RIGHT"],["centre","CENTRE"]]},{type:"input_statement",name:"FIELDS",check:"Field"}],u="type %1",d=[{type:"input_value",name:"TYPE",check:"Type",align:"RIGHT"}];function h(e){if(e.workspace){for(var t,o=e.getFieldValue("FIELDNAME").toLowerCase(),n=0,i=e.workspace.getAllBlocks(!1),a=0;t=i[a];a++){var l=t.getFieldValue("FIELDNAME");t.disabled||t.getInheritedDisabled()||!l||l.toLowerCase()!=o||n++}var s=n>1?"There are "+n+" field blocks\n with this name.":null;e.setWarningText(s)}}function m(e){if(e.workspace){for(var t,o=e.getFieldValue("INPUTNAME").toLowerCase(),n=0,i=e.workspace.getAllBlocks(!1),a=0;t=i[a];a++){var l=t.getFieldValue("INPUTNAME");t.disabled||t.getInheritedDisabled()||!l||l.toLowerCase()!=o||n++}var s=n>1?"There are "+n+" input blocks\n with this name.":null;e.setWarningText(s)}}r.a.Blocks["input_value"]={init:function(){this.jsonInit({message0:"value input %1 %2",args0:[{type:"field_input",name:"INPUTNAME",text:"NAME"},{type:"input_dummy"}],message1:c,args1:p,message2:u,args2:d,previousStatement:"Input",nextStatement:"Input",colour:"5D37F0",tooltip:"A value socket for horizontal connections.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=71"})},onchange:function(){m(this)}},r.a.Blocks["input_statement"]={init:function(){this.jsonInit({message0:"statement input %1 %2",args0:[{type:"field_input",name:"INPUTNAME",text:"NAME"},{type:"input_dummy"}],message1:c,args1:p,message2:u,args2:d,previousStatement:"Input",nextStatement:"Input",colour:"5D37F0",tooltip:"A statement socket for enclosed vertical stacks.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=246"})},onchange:function(){m(this)}},r.a.Blocks["input_dummy"]={init:function(){this.jsonInit({message0:"dummy input",message1:c,args1:p,previousStatement:"Input",nextStatement:"Input",colour:"5D37F0",tooltip:"For adding fields on a separate row with no connections. Alignment options (left, right, centre) apply only to multi-line fields.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=293"})}},r.a.Blocks["field_static"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("text").appendField(new r.a.FieldTextInput(""),"TEXT"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("Static text that serves as a label."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=88")}},r.a.Blocks["field_input"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("text input").appendField(new r.a.FieldTextInput("default"),"TEXT").appendField(",").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("An input field for the user to enter text."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=319")},onchange:function(){h(this)}},r.a.Blocks["field_number"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("numeric input").appendField(new r.a.FieldNumber(0),"VALUE").appendField(",").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.appendDummyInput().appendField("min").appendField(new r.a.FieldNumber(-1/0),"MIN").appendField("max").appendField(new r.a.FieldNumber(1/0),"MAX").appendField("precision").appendField(new r.a.FieldNumber(0,0),"PRECISION"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("An input field for the user to enter a number."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=319")},onchange:function(){h(this)}},r.a.Blocks["field_angle"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("angle input").appendField(new r.a.FieldAngle("90"),"ANGLE").appendField(",").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("An input field for the user to enter an angle."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=372")},onchange:function(){h(this)}},r.a.Blocks["field_dropdown"]={init:function(){this.appendDummyInput().appendField("dropdown").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.optionCount_=3,this.updateShape_(),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setMutator(new r.a.Mutator(["field_dropdown_option"])),this.setColour("2EC4B6"),this.setTooltip("Dropdown menu with a list of options."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386")},mutationToDom:function(e){var t=r.a.utils.xml.createElement("mutation");return t.setAttribute("options",this.optionCount_),t},domToMutation:function(e){this.optionCount_=parseInt(e.getAttribute("options"),10),this.updateShape_()},decompose:function(e){var t=e.newBlock("field_dropdown_container");t.initSvg();for(var o=t.getInput("STACK").connection,n=0;n<this.optionCount_;n++){var i=e.newBlock("field_dropdown_option");i.initSvg(),o.connect(i.previousConnection),o=i.nextConnection}return t},compose:function(e){var t=e.getInputTargetBlock("STACK"),o=[];while(t)o.push([t.userData_,t.cpuData_]),t=t.nextConnection&&t.nextConnection.targetBlock();this.optionCount_=o.length,this.updateShape_();for(var n=0;n<this.optionCount_;n++)this.setFieldValue(o[n][0]||"option","USER"+n),this.setFieldValue(o[n][1]||"OPTIONNAME","CPU"+n)},saveConnections:function(e){var t=e.getInputTargetBlock("STACK"),o=0;while(t)t.userData_=this.getFieldValue("USER"+o),t.cpuData_=this.getFieldValue("CPU"+o),o++,t=t.nextConnection&&t.nextConnection.targetBlock()},updateShape_:function(){for(var e=0;e<this.optionCount_;e++)this.getInput("OPTION"+e)||this.appendDummyInput("OPTION"+e).appendField(new r.a.FieldTextInput("option"),"USER"+e).appendField(",").appendField(new r.a.FieldTextInput("OPTIONNAME"),"CPU"+e);while(this.getInput("OPTION"+e))this.removeInput("OPTION"+e),e++},onchange:function(){this.workspace&&this.optionCount_<1?this.setWarningText("Drop down menu must\nhave at least one option."):h(this)}},r.a.Blocks["field_dropdown_container"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("add options"),this.appendStatementInput("STACK"),this.setTooltip("Add, remove, or reorder options\nto reconfigure this dropdown menu."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386"),this.contextMenu=!1}},r.a.Blocks["field_dropdown_option"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("option"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("Add a new option to the dropdown menu."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386"),this.contextMenu=!1}},r.a.Blocks["field_checkbox"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("checkbox").appendField(new r.a.FieldCheckbox("TRUE"),"CHECKED").appendField(",").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("Checkbox field."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=485")},onchange:function(){h(this)}},r.a.Blocks["field_colour"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("colour").appendField(",").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("Colour input field."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=495")},onchange:function(){h(this)}},r.a.Blocks["field_variable"]={init:function(){this.setColour("2EC4B6"),this.appendDummyInput().appendField("variable").appendField(new r.a.FieldTextInput("item"),"TEXT").appendField(",").appendField(new r.a.FieldTextInput("NAME"),"FIELDNAME"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("Dropdown menu for variable names."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=510")},onchange:function(){h(this)}},r.a.Blocks["field_image"]={init:function(){this.setColour("2EC4B6");var e="https://www.gstatic.com/codesite/ph/images/star_on.gif";this.appendDummyInput().appendField("image").appendField(new r.a.FieldTextInput(e),"SRC"),this.appendDummyInput().appendField("width").appendField(new r.a.FieldNumber("15",0,NaN,1),"WIDTH").appendField("height").appendField(new r.a.FieldNumber("15",0,NaN,1),"HEIGHT").appendField("alt text").appendField(new r.a.FieldTextInput("*"),"ALT"),this.setPreviousStatement(!0,"Field"),this.setNextStatement(!0,"Field"),this.setTooltip("Static image (JPEG, PNG, GIF, SVG, BMP).\nRetains aspect ratio regardless of height and width.\nAlt text is for when collapsed."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=567")}},r.a.Blocks["type_group"]={init:function(){this.typeCount_=2,this.updateShape_(),this.setOutput(!0,"Type"),this.setMutator(new r.a.Mutator(["type_group_item"])),this.setColour("ff628c"),this.setTooltip("Allows more than one type to be accepted."),this.setHelpUrl("https://www.youtube.com/watch?v=s2_xaEvcVI0#t=677")},mutationToDom:function(e){var t=r.a.utils.xml.createElement("mutation");return t.setAttribute("types",this.typeCount_),t},domToMutation:function(e){this.typeCount_=parseInt(e.getAttribute("types"),10),this.updateShape_();for(var t=0;t<this.typeCount_;t++)this.removeInput("TYPE"+t);for(t=0;t<this.typeCount_;t++){var o=this.appendValueInput("TYPE"+t).setCheck("Type");0==t&&o.appendField("any of")}},decompose:function(e){var t=e.newBlock("type_group_container");t.initSvg();for(var o=t.getInput("STACK").connection,n=0;n<this.typeCount_;n++){var i=e.newBlock("type_group_item");i.initSvg(),o.connect(i.previousConnection),o=i.nextConnection}return t},compose:function(e){var t=e.getInputTargetBlock("STACK"),o=[];while(t)o.push(t.valueConnection_),t=t.nextConnection&&t.nextConnection.targetBlock();for(var n=0;n<this.typeCount_;n++){var i=this.getInput("TYPE"+n).connection.targetConnection;i&&-1==o.indexOf(i)&&i.disconnect()}this.typeCount_=o.length,this.updateShape_();for(n=0;n<this.typeCount_;n++)r.a.Mutator.reconnect(o[n],this,"TYPE"+n)},saveConnections:function(e){var t=e.getInputTargetBlock("STACK"),o=0;while(t){var n=this.getInput("TYPE"+o);t.valueConnection_=n&&n.connection.targetConnection,o++,t=t.nextConnection&&t.nextConnection.targetBlock()}},updateShape_:function(){for(var e=0;e<this.typeCount_;e++)if(!this.getInput("TYPE"+e)){var t=this.appendValueInput("TYPE"+e);0==e&&t.appendField("any of")}while(this.getInput("TYPE"+e))this.removeInput("TYPE"+e),e++}},r.a.Blocks["type_group_container"]={init:function(){this.jsonInit({message0:"add types %1 %2",args0:[{type:"input_dummy"},{type:"input_statement",name:"STACK"}],colour:"ff628c",tooltip:"Add, or remove allowed type.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=677"})}},r.a.Blocks["type_group_item"]={init:function(){this.jsonInit({message0:"type",previousStatement:null,nextStatement:null,colour:"ff628c",tooltip:"Add a new allowed type.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=677"})}},r.a.Blocks["type_null"]={valueType:null,init:function(){this.jsonInit({message0:"any",output:"Type",colour:"ff628c",tooltip:"Any type is allowed.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"})}},r.a.Blocks["type_boolean"]={valueType:"Boolean",init:function(){this.jsonInit({message0:"Boolean",output:"Type",colour:"ff628c",tooltip:"Booleans (true/false) are allowed.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"})}},r.a.Blocks["type_number"]={valueType:"Number",init:function(){this.jsonInit({message0:"Number",output:"Type",colour:"ff628c",tooltip:"Numbers (int/float) are allowed.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"})}},r.a.Blocks["type_string"]={valueType:"String",init:function(){this.jsonInit({message0:"String",output:"Type",colour:"ff628c",tooltip:"Strings (text) are allowed.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"})}},r.a.Blocks["type_list"]={valueType:"Array",init:function(){this.jsonInit({message0:"Array",output:"Type",colour:"ff628c",tooltip:"Arrays (lists) are allowed.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"})}},r.a.Blocks["type_other"]={init:function(){this.jsonInit({message0:"other %1",args0:[{type:"field_input",name:"TYPE",text:""}],output:"Type",colour:"ff628c",tooltip:"Custom type to allow.",helpUrl:"https://www.youtube.com/watch?v=s2_xaEvcVI0#t=702"})}};var g=o("00d3"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("MonacoEditor",{ref:"editor",attrs:{language:"javascript",options:e.settings,theme:"shadesofpurple"},on:{editorDidMount:e.editorDidMount},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})},y=[],k=o("059c"),b=o("2ef0"),v={name:"PageCode",components:{MonacoEditor:k["a"]},props:{options:{type:Object,default:()=>{}},value:{type:String,default:""},prefix:{type:String,default:""}},watch:{code(e){this.$emit("onCodeChange",e)},prefix(e,t){t&&(this.code=e+"\n"+this.code.replace(t+"\n",""))}},data(){return{code:this.$props.value,settings:Object(b["defaultsDeep"])(this.$props.options,{theme:"shadesofpurple",automaticLayout:!0,minimap:{enabled:!1}})}},methods:{editorDidMount(e){const t=this.$refs.editor.monaco;t.editor.defineTheme("shadesofpurple",{base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"9EFFFF",background:"9EFFFF"},{token:"emphasis",fontStyle:"italic"},{token:"strong",fontStyle:"bold"},{token:"variable",foreground:"ff0000"},{token:"variable.parameter",foreground:"9EFFFF"},{token:"comment",foreground:"B362FF"},{token:"number",foreground:"FF628C"},{token:"number.hex",foreground:"FF628C"},{token:"regexp",foreground:"FB94FF"},{token:"type",foreground:"9EFFFF"},{token:"delimiter",foreground:"ffffff"},{token:"attribute.name",foreground:"ff0000"},{token:"attribute.value",foreground:"ff0000"},{token:"string",foreground:"A5FF90"},{token:"keyword",foreground:"FF9D00"}],colors:{"editorIndentGuide.background":"#A599E90F","editorIndentGuide.activeBackground":"#A599E942","editor.background":"#2d2b55","editor.foreground":"#ffffff","editor.selectionBackground":"#7448af","editor.lineHighlightBackground":"#1f1f41","editorCursor.foreground":"#fad000","editorWhitespace.foreground":"red"}}),t.editor.setTheme("shadesofpurple")}}},T=v,w=o("2877"),F=Object(w["a"])(T,f,y,!1,null,null,null),E=F.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-dialog",{on:{hide:e.cancelColor,"escape-key":e.cancelColor},model:{value:e.colorPicker.isVisible,callback:function(t){e.$set(e.colorPicker,"isVisible",t)},expression:"colorPicker.isVisible"}},[o("q-card",{staticStyle:{"max-width":"300px"}},[o("q-card-section",{staticClass:"q-px-none q-pt-none"},[o("q-color",{attrs:{"default-view":"palette",palette:e.colorPicker.palette},on:{input:e.onColorPickerChange},model:{value:e.colorPicker.color,callback:function(t){e.$set(e.colorPicker,"color",t)},expression:"colorPicker.color"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{flat:"",label:"Cancel"},on:{click:e.cancelColor}}),o("q-btn",{attrs:{color:"secondary",label:"Update"},on:{click:e.saveColor}})],1)],1)],1)},C=[],I={name:"ColorPicker",data:()=>({colorPicker:{origColor:"",color:"",isVisible:!1,palette:["#ff628c","#FF9D00","#fad000","#2ca300","#2EC4B6","#5D37F0"],block:null}}),mounted(){document.addEventListener("blockly.showColorPicker",this.showColorPicker)},destroyed(){document.removeEventListener("blockly.showColorPicker",this.showColorPicker)},methods:{saveColor(){this.colorPicker.origColor=this.colorPicker.color,this.colorPicker.isVisible=!1},showColorPicker(e){this.colorPicker.isVisible=!0,this.colorPicker.origColor=this.colorPicker.color=e.detail.color,this.colorPicker.block=e.detail.block},onColorPickerChange(e){this.colorPicker.block.getField("COLOR").setValue(e),this.colorPicker.block.setFieldValue(e,"COLOR")},cancelColor(){this.colorPicker.block.setFieldValue(this.colorPicker.origColor,"COLOR"),this.colorPicker.isVisible=!1}}},x=I,O=o("24e8"),N=o("f09f"),S=o("a370"),B=o("b498"),P=o("4b7e"),V=o("9c40"),A=o("eebe"),D=o.n(A),L=Object(w["a"])(x,_,C,!1,null,null,null),M=L.exports;D()(L,"components",{QDialog:O["a"],QCard:N["a"],QCardSection:S["a"],QColor:B["a"],QCardActions:P["a"],QBtn:V["a"]});var U=o("8ded"),$=o.n(U),R=[{tag:"category",name:"Input",colour:"#5d37f0",icon:"fas fa-puzzle-piece fa-flip-both",children:[{tag:"block",type:"input_value",children:[{tag:"value",name:"TYPE",children:[{tag:"shadow",type:"type_null"}]}]},{tag:"block",type:"input_statement",children:[{tag:"value",name:"TYPE",children:[{tag:"shadow",type:"type_null"}]}]},{tag:"block",type:"input_dummy"}]},{tag:"category",name:"Field",icon:"fas fa-hand-pointer",colour:"#2EC4B6",children:[{tag:"block",type:"field_static"},{tag:"block",type:"field_input"},{tag:"block",type:"field_number"},{tag:"block",type:"field_angle"},{tag:"block",type:"field_dropdown"},{tag:"block",type:"field_checkbox"},{tag:"block",type:"field_colour"},{tag:"block",type:"field_variable"},{tag:"block",type:"field_image"}]},{tag:"category",name:"Type",colour:"#ff628c",icon:"fas fa-shapes",children:[{tag:"block",type:"type_group"},{tag:"block",type:"type_null"},{tag:"block",type:"type_boolean"},{tag:"block",type:"type_number"},{tag:"block",type:"type_string"},{tag:"block",type:"type_list"},{tag:"block",type:"type_other"}]},{tag:"category",name:"Styles",colour:"#fad000",icon:"fas fa-palette",children:[{tag:"block",type:"style_color",children:[{tag:"field",name:"COLOR",value:"#fad000"}]}]}],j=o("ec26"),Y={name:"FactoryHome",components:{Workspace:g["a"],CodeEditor:E,ColorPicker:M},computed:{saveData(){const e=this.getRootBlock(),t=e?e.getFieldValue("category"):"NONE";return l()(l()({},this.block),{},{category:t,workspace:r.a.Xml.domToText(r.a.Xml.workspaceToDom(this.$refs.workspace.blockly))})}},watch:{splitter:Object(b["throttle"])((function(){$.a.set("splitter",this.splitter),setTimeout(()=>{window.dispatchEvent(new Event("resize"))})}),50,{leading:!0,trailing:!0})},data(){const e=$.a.get("currentFactory",{});return{hasLoaded:!1,block:{uuid:e.uuid||Object(j["a"])(),json:{},code:e.code||""},splitter:$.a.get("splitter")||window.innerWidth/3,previewWorkspace:null,options:{isFactory:!0,collapse:!1},toolbox:R}},mounted(){Object(b["set"])(window,"app.$factory",this);const e=$.a.get("currentFactory",{});e.workspace?r.a.Xml.domToWorkspace(r.a.Xml.textToDom(e.workspace),this.$refs.workspace.blockly):r.a.Xml.domToWorkspace(r.a.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"><block type="factory_base" deletable="false" movable="false"></block></xml>'),this.$refs.workspace.blockly),this.$refs.workspace.blockly.addChangeListener(r.a.Events.disableOrphans),this.$mousetrap.bindGlobal("ctrl+s",e=>{e.preventDefault(),this.saveBlock()})},destroyed(){this.$mousetrap.unbind("ctrl+s")},methods:{autosave(){$.a.set("currentFactory",this.saveData)},saveBlock(){const e=$.a.get("blocks",{});e[this.block.uuid]=this.saveData,$.a.set("blocks",e),this.$q.notify({type:"positive",message:"Block saved",timeout:2e3})},onCodeChange(e){this.block.code=e,this.autosave()},workspaceEventHandler(e){switch(e.type){case r.a.Events.FINISHED_LOADING:this.hasLoaded=!0;break;case r.a.Events.BLOCK_CREATE:case r.a.Events.BLOCK_DELETE:case r.a.Events.BLOCK_CHANGE:case r.a.Events.BLOCK_MOVE:case r.a.Events.VAR_CREATE:case r.a.Events.VAR_DELETE:case r.a.Events.VAR_RENAME:this.onWorkspaceChange(),this.hasLoaded&&this.autosave();break}},onWorkspaceChange(){const e=this.getRootBlock();if(!e)return;let t=e.getFieldValue("name").trim().toLowerCase()||"";t=t.replace(/\W/g,"_").replace(/^(\d)/,"_\\1"),this.block.json=this.formatJson(t,e),this.updatePreview()},getRootBlock(){const e=this.$refs.workspace.blockly.getTopBlocks(!1);for(var t,o=0;t=e[o];o++)if("factory_base"===t.type)return t},formatJson(e,t){const o={type:e,tooltip:"",helpUrl:"https://midiblocks.com/help/block/"+e};let n=[],i=[],a=t.getInputTargetBlock("INPUTS"),l=null;while(a){if(!a.disabled&&!a.getInheritedDisabled()){let e=this.getFieldsJson(a.getInputTargetBlock("FIELDS"));for(let a=0;a<e.length;a++)"string"===typeof e[a]?n.push(e[a].replace(/%/g,"%%")):(i.push(e[a]),n.push("%"+i.length));let t={type:a.type};"input_dummy"!==a.type&&(t.name=a.getFieldValue("INPUTNAME"));let o=this.getOptTypesFrom(a,"TYPE");o&&(t.check=o);let s=a.getFieldValue("ALIGN");"LEFT"!==s&&(t.align=s),i.push(t),n.push("%"+i.length),l=a}a=a.nextConnection&&a.nextConnection.targetBlock()}if(l&&"input_dummy"===l.type){let e=l.getInputTargetBlock("FIELDS");if(e&&""!==this.getFieldsJson(e).join("").trim()){let e=l.getFieldValue("ALIGN");"LEFT"!==e&&(o.lastDummyAlign0=e),i.pop(),n.pop()}}switch(o.message0=n.join(" "),i.length&&(o.args0=i),"EXT"===t.getFieldValue("INLINE")?o.inputsInline=!1:"INT"===t.getFieldValue("INLINE")&&(o.inputsInline=!0),t.getFieldValue("CONNECTIONS")){case"LEFT":o.output=this.getOptTypesFrom(t,"OUTPUTTYPE");break;case"BOTH":o.previousStatement=this.getOptTypesFrom(t,"TOPTYPE"),o.nextStatement=this.getOptTypesFrom(t,"BOTTOMTYPE");break;case"TOP":o.previousStatement=this.getOptTypesFrom(t,"TOPTYPE");break;case"BOTTOM":o.nextStatement=this.getOptTypesFrom(t,"BOTTOMTYPE");break}let s=t.getInputTargetBlock("COLOR");return s&&!s.disabled&&(o.colour=s.getFieldValue("COLOR")),o},updatePreview(){this.previewWorkspace&&this.previewWorkspace.dispose();const e=Object.assign({},this.options);if(e.zoom.controls=!1,e.trashcan=!1,e.toolbox=null,this.previewWorkspace=r.a.inject("preview",l()({media:"media/"},e)),this.previewWorkspace.clear(),!Object.keys(this.block.json))return;const t=r.a.Blocks;try{r.a.Blocks={};for(let i in t)r.a.Blocks[i]=t[i];const e=this.block.json;r.a.Blocks[e.type||"unnamed"]={init:function(){this.jsonInit(e)}};let o=null;for(let i in r.a.Blocks)if("function"===typeof r.a.Blocks[i].init&&r.a.Blocks[i]!==t[i]){o=i;break}if(!o)return;const n=this.previewWorkspace.newBlock(o);n.initSvg(),n.render(),n.setMovable(!1),n.setDeletable(!1),n.moveBy(15,10),this.previewWorkspace.clearUndo(),this.updateGenerator(n)}finally{r.a.Blocks=t}},makeVar(e,t){return t=t.toLowerCase().replace(/\W/g,"_"),"let "+e+"_"+t},updateGenerator(e){let t=[];for(let o,n=0;o=e.inputList[n];n++){for(let e,n=0;e=o.fieldRow[n];n++)e.name&&(e instanceof r.a.FieldVariable?(t.push(`${this.makeVar("variable",e.name)} = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('${e.name}'), Blockly.Variables.NAME_TYPE)`),t.push({type:"variable",name:e.name})):e instanceof r.a.FieldAngle?t.push(`${this.makeVar("angle",e.name)} = block.getFieldValue('${e.name}')`):e instanceof r.a.FieldColour?t.push(`${this.makeVar("colour",e.name)} = block.getFieldValue('${e.name}')`):e instanceof r.a.FieldCheckbox?t.push(`${this.makeVar("checkbox",e.name)} = block.getFieldValue('${e.name}') === 'TRUE'`):e instanceof r.a.FieldDropdown?t.push(`${this.makeVar("dropdown",e.name)} = block.getFieldValue('${e.name}')`):e instanceof r.a.FieldNumber?t.push(`${this.makeVar("number",e.name)} = block.getFieldValue('${e.name}')`):e instanceof r.a.FieldTextInput&&t.push(`${this.makeVar("text",e.name)} = block.getFieldValue('${e.name}')`));o.name&&(o.type===r.a.INPUT_VALUE?t.push(`${this.makeVar("value",o.name)} = Blockly.JavaScript.valueToCode(block, '${o.name}', Blockly.JavaScript.ORDER_ATOMIC)`):o.type===r.a.NEXT_STATEMENT&&t.push(`${this.makeVar("statements",o.name)} = Blockly.JavaScript.statementToCode(block, '${o.name}')`))}},getFieldsJson(e){let t=[];while(e){if(!e.disabled&&!e.getInheritedDisabled())switch(e.type){case"field_static":t.push(e.getFieldValue("TEXT"));break;case"field_input":t.push({type:e.type,name:e.getFieldValue("FIELDNAME"),text:e.getFieldValue("TEXT")});break;case"field_number":let o={type:e.type,name:e.getFieldValue("FIELDNAME"),value:Number(e.getFieldValue("VALUE"))},n=Number(e.getFieldValue("MIN"));n>-1/0&&(o.min=n);let i=Number(e.getFieldValue("MAX"));i<1/0&&(o.max=i);let a=Number(e.getFieldValue("PRECISION"));a&&(o.precision=a),t.push(o);break;case"field_angle":t.push({type:e.type,name:e.getFieldValue("FIELDNAME"),angle:Number(e.getFieldValue("ANGLE"))});break;case"field_checkbox":t.push({type:e.type,name:e.getFieldValue("FIELDNAME"),checked:"TRUE"===e.getFieldValue("CHECKED")});break;case"field_colour":t.push({type:e.type,name:e.getFieldValue("FIELDNAME"),colour:e.getFieldValue("COLOUR")});break;case"field_variable":t.push({type:e.type,name:e.getFieldValue("FIELDNAME"),variable:e.getFieldValue("TEXT")});break;case"field_dropdown":let l=[];for(let t=0;t<e.optionCount_;t++)l[t]=[e.getFieldValue("USER"+t),e.getFieldValue("CPU"+t)];l.length&&t.push({type:e.type,name:e.getFieldValue("FIELDNAME"),options:l});break;case"field_image":t.push({type:e.type,src:e.getFieldValue("SRC"),width:Number(e.getFieldValue("WIDTH")),height:Number(e.getFieldValue("HEIGHT")),alt:e.getFieldValue("ALT")});break}e=e.nextConnection&&e.nextConnection.targetBlock()}return t},getOptTypesFrom(e,t){let o=this.getTypesFrom(e,t);return 0===o.length?void 0:-1!==o.indexOf("null")?"null":1===o.length?o[0]:"["+o.join(", ")+"]"},getTypesFrom(e,t){let o,n=e.getInputTargetBlock(t);if(!n||n.disabled)o=[];else if("type_other"===n.type)o=[n.getFieldValue("TYPE")];else if("type_group"===n.type){o=[];for(let t=0;t<n.typeCount_;t++)o=o.concat(this.getTypesFrom(n,"TYPE"+t));let e=Object.create(null);for(let t=o.length-1;t>=0;t--)e[o[t]]&&o.splice(t,1),e[o[t]]=!0}else o=[n.valueType];return o}}},H=Y,q=(o("1df4"),o("f8df"),o("9989")),W=o("8562"),J=Object(w["a"])(H,n,i,!1,null,"ed440eb2",null);t["default"]=J.exports;D()(J,"components",{QPage:q["a"],QSplitter:W["a"],QBtn:V["a"]})},f8df:function(e,t,o){"use strict";var n=o("ad11"),i=o.n(n);i.a}}]);