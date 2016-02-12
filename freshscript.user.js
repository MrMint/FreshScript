// ==UserScript==
// @name         FreshScript (Jira Tweaks)
// @namespace    https://youtu.be/hBe0VCso0qs
// @version      1.0.163
// @description  Now, this is a story all about how my life got flipped-turned upside down...
// @author       The Fresh Prince of Jira
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

!function(e){function t(i){if(o[i])return o[i].exports;var a=o[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=o(1),n=i(a),l=document.createElement("style");l.innerText=o(2),document.head.appendChild(l),n["default"](function s(){if(n["default"]("#ghx-pool").length&&n["default"]("#ghx-view-pluggable").length){var e=o(3);e.keys().forEach(e)}else setTimeout(s,100)})},function(e,t){e.exports=jQuery},function(e,t){e.exports="#ghx-pool{cursor:default}#ghx-pool .ghx-issue .ghx-type,#ghx-pool .ghx-issue .ghx-days{display:none}#ghx-pool .ghx-issue .ghx-issue-content{padding:5px 5px 5px 13px}#ghx-pool .ghx-issue .ghx-flags{top:7px;right:7px;left:auto}#ghx-pool .ghx-issue .ghx-avatar{top:5px;right:5px;left:auto}#ghx-pool .ghx-issue .ghx-avatar:not(:empty)~.ghx-flags{top:32px}#ghx-pool .ghx-issue .ghx-priority[title='Major']{display:none}#ghx-pool #ghx-column-headers .ghx-column{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#ghx-pool #ghx-column-headers .ghx-column h2{display:inline}#ghx-pool.ghx-band-3 .ghx-issue.ghx-has-avatar .ghx-flags{top:44px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-issue-fields{padding-right:25px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-flags{top:5px;right:4px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-priority,#ghx-pool.ghx-band-1 .ghx-issue .ghx-priority img{width:14px;height:14px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-avatar:not(:empty)~.ghx-flags{top:29px}#ghx-pool.wide{padding-top:0 !important}#ghx-pool.wide .ghx-columns,#ghx-pool.wide .ghx-zone-overlay-table{width:150%}#ghx-pool.wide .ghx-column-header-group{position:static !important}#ghx-header .fresh-board-actions{display:inline-block;vertical-align:top;position:relative;margin-left:10px}#ghx-header .fresh-board-actions button:not(:last-of-type){border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}#ghx-header .fresh-board-actions button+button{margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}#ghx-header .fresh-board-actions button:hover+button{border-left-color:#999}#ghx-header .fresh-board-actions .ajs-layer{width:200px;position:absolute;right:0;top:30px}#ghx-header #ghx-view-modes:empty{display:none}#ghx-detail-view #ghx-tab-details .ghx-fieldtype-textarea{display:block}body.hide-left-sidebar .aui-sidebar{display:none}body.hide-left-sidebar #gh{padding-left:0}body.hide-left-sidebar #ghx-column-header-group{position:absolute !important;top:0 !important;left:10px !important}body.hide-extra-fields .ghx-issue .ghx-extra-fields{display:none}"},function(e,t,o){function i(e){return o(a(e))}function a(e){return n[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var n={"./column-widths":4,"./column-widths.js":4,"./drag-scroll":7,"./drag-scroll.js":7,"./issue-code-links":8,"./issue-code-links.js":8,"./project-switching":9,"./project-switching.js":9,"./visibility-toggles":10,"./visibility-toggles.js":10};i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=3},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){u["default"]("#ghx-pool").toggleClass("wide",e),u["default"]("#ghx-column-header-group").width(u["default"](".ghx-columns").width()),s["default"].set("wideColumns",e)}var n=o(5),l=o(6),s=i(l),d=o(1),u=i(d);n.addButton("Toggle Column Width").click(function(){a(!u["default"]("#ghx-pool").hasClass("wide"))}),s["default"].get("wideColumns")&&a(!0)},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){null==u&&!function(){u=d["default"]("<div></div>").addClass("fresh-board-actions").prependTo("#ghx-modes-tools"),r=d["default"]("<ul></ul>").addClass("aui-list-section aui-first aui-last");var e=d["default"]("<div></div>").addClass("ajs-layer box-shadow").append(d["default"]("<div></div>").addClass("aui-list").append(r)).appendTo(u).hide(),t=d["default"]("<button>Fresh</button>").addClass("aui-button ghx-dropdown-trigger").click(function(){return e.toggle(),d["default"](this).toggleClass("active"),d["default"]("body").click(),!1}).insertBefore(e);e.on("mouseenter mouseout","li",function(e){d["default"](this).toggleClass("active","mouseenter"==e.type)}),d["default"]("body").on("click","*",function(){e.hide(),t.removeClass("active")})}()}function n(e){a();var t=d["default"]("<li></li>").addClass("aui-list-item").appendTo(r);return d["default"]("<a></a>").addClass("aui-list-item-link").attr("href","#").text(e).appendTo(t)}function l(e){return a(),d["default"]("<button></button>").addClass("aui-button").text(e).prependTo(u)}Object.defineProperty(t,"__esModule",{value:!0}),t.addMenuItem=n,t.addButton=l;var s=o(1),d=i(s),u=void 0,r=void 0},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){return JSON.parse(window.localStorage.getItem("freshscript."+e))},set:function(e,t){window.localStorage.setItem("freshscript."+e,JSON.stringify(t))}},e.exports=t["default"]},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=o(1),n=i(a),l=25,s=!0,d=!1,u=n["default"]("#ghx-pool")[0],r=void 0,g=void 0,h=void 0,f=void 0,p=void 0,c=void 0,x=void 0;n["default"](u).on("mousedown",function(e){return n["default"](e.target).closest(".ghx-issue").length?void 0:(g=e.pageX,h=e.pageY,f=u.scrollLeft,p=u.scrollTop,c=d,x=s,r=!0,!1)}),n["default"](window).on("mouseup",function(){r=!1}).on("mousemove",function(e){if(r){var t=e.pageX-g,o=e.pageY-h;return c=c&&Math.abs(t)<l,x=x&&Math.abs(o)<l,c&&!x&&(t=0),x&&!c&&(o=0),u.scrollLeft=f-t,u.scrollTop=p-o,!1}})},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=o(1),n=i(a);n["default"]("#ghx-work").on("click",".ghx-key a",function(){return window.open(this.href),!1})},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=o(1),n=i(a);n["default"]("#ghx-controls-work").on("click","#js-work-quickfilters a.js-quickfilter-button.ghx-active",function(e,t){e.ctrlKey||t||n["default"]("#js-work-quickfilters a.js-quickfilter-button.ghx-active").not(this).trigger("click",[!0])})},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,o){var i=void 0===arguments[3]?!0:arguments[3],a=void 0===arguments[4]?null:arguments[4],l=s["default"].get(e);return(l||null==l&&!i)&&(u["default"]("body").addClass(t),null!=a&&a()),n.addMenuItem(o).click(function(){var o=s["default"].get(e);o=null==o?i:!o,s["default"].set(e,o),u["default"]("body").toggleClass(t,o),null!=a&&a()})}var n=o(5),l=o(6),s=i(l),d=o(1),u=i(d);a("hideLeftSidebar","hide-left-sidebar","Toggle left sidebar",!0,function(){u["default"]("#ghx-column-header-group").width(u["default"](".ghx-columns").width())}),a("hideExtraFields","hide-extra-fields","Toggle extra fields")}]);