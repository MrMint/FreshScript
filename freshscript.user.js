// ==UserScript==
// @name         FreshScript (Jira Tweaks)
// @namespace    https://youtu.be/hBe0VCso0qs
// @version      1.0.15
// @description  Now, this is a story all about how my life got flipped-turned upside down...
// @author       The Fresh Prince of Jira
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(1),s=n(i),l=document.createElement("style");l.innerText=o(2),document.head.appendChild(l),s["default"](function u(){if(s["default"]("#ghx-pool").length){var t=o(3);t.keys().forEach(t)}else setTimeout(u,100)})},function(t,e){t.exports=jQuery},function(t,e){t.exports="#ghx-pool{cursor:default}#ghx-pool .ghx-issue .ghx-extra-fields,#ghx-pool .ghx-issue .ghx-type,#ghx-pool .ghx-issue .ghx-days{display:none}#ghx-pool .ghx-issue .ghx-issue-content{padding:5px 5px 5px 13px}#ghx-pool .ghx-issue .ghx-flags{top:7px;right:7px;left:auto}#ghx-pool .ghx-issue .ghx-avatar{top:5px;right:5px;left:auto}#ghx-pool .ghx-issue .ghx-avatar:not(:empty)~.ghx-flags{top:32px}#ghx-pool .ghx-issue .ghx-priority[title='Major']{display:none}#ghx-pool #ghx-column-headers .ghx-column{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#ghx-pool #ghx-column-headers .ghx-column h2{display:inline}#ghx-pool.ghx-band-1 .ghx-issue .ghx-issue-fields{padding-right:25px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-flags{top:5px;right:4px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-priority,#ghx-pool.ghx-band-1 .ghx-issue .ghx-priority img{width:14px;height:14px}#ghx-pool.ghx-band-1 .ghx-issue .ghx-avatar:not(:empty)~.ghx-flags{top:29px}#ghx-pool.wide{padding-top:0 !important}#ghx-pool.wide .ghx-columns,#ghx-pool.wide .ghx-zone-overlay-table{width:150%}#ghx-pool.wide .ghx-column-header-group{position:static !important}"},function(t,e,o){function n(t){return o(i(t))}function i(t){return s[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var s={"./column-widths":4,"./column-widths.js":4,"./drag-scroll":6,"./drag-scroll.js":6,"./project-switching":7,"./project-switching.js":7};n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id=3},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){r["default"]("#ghx-pool").toggleClass("wide",t),r["default"]("#ghx-column-header-group").width(r["default"](".ghx-columns").width()),l["default"].set("wideColumns",t)}var s=o(5),l=n(s),u=o(1),r=n(u);r["default"]("<button></button>").addClass("aui-button").text("Toggle Column Width").css("margin-left",10).click(function(){i(!r["default"]("#ghx-pool").hasClass("wide"))}).prependTo("#ghx-modes-tools"),l["default"].get("wideColumns")&&i(!0)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={get:function(t){return JSON.parse(window.localStorage.getItem("freshscript."+t))},set:function(t,e){window.localStorage.setItem("freshscript."+t,JSON.stringify(e))}},t.exports=e["default"]},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(1),s=n(i),l=void 0,u=void 0,r=!1;s["default"]("#ghx-pool").on("mousedown",function(t){return s["default"](t.target).closest(".ghx-issue").length?void 0:(l=t.pageX,u=t.pageY,r=!0,!1)}),s["default"](window).on("mouseup",function(){r=!1}).on("mousemove",function(t){if(r){var e=s["default"]("#ghx-pool")[0];return e.scrollLeft-=t.pageX-l,e.scrollTop-=t.pageY-u,l=t.pageX,u=t.pageY,!1}})},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(1),s=n(i);s["default"]("#ghx-controls-work").on("click","#js-work-quickfilters a.js-quickfilter-button.ghx-active",function(t,e){t.ctrlKey||e||s["default"]("#js-work-quickfilters a.js-quickfilter-button.ghx-active").not(this).trigger("click",[!0])})}]);