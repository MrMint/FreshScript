// ==UserScript==
// @name         FreshScript (Jira Tweaks)
// @namespace    https://youtu.be/hBe0VCso0qs
// @version      0.3
// @description  Now, this is a story all about how my life got flipped-turned upside down...
// @author       The Fresh Prince of Jira
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// @require      http://hammerjs.github.io/dist/hammer.min.js
// ==/UserScript==
jQuery(function($) {
    // Styles
    var style = document.createElement("style");
    style.innerText = ".ghx-extra-fields, .ghx-type, .ghx-days { display: none; }" + 
        ".ghx-band-2 .ghx-issue .ghx-issue-content { padding: 5px 5px 5px 13px; }" + 
        ".ghx-band-2 .ghx-issue .ghx-flags { top: 7px; right: 7px; left: initial; }" + 
        ".ghx-band-2 .ghx-issue .ghx-avatar:not(:empty) ~ .ghx-flags { top: 32px; }" + 
        ".ghx-band-1 .ghx-issue .ghx-avatar {top: 7px;}" + 
        ".ghx-priority[title='Major'] { display: none; }" + 
        "#ghx-pool.wide { padding-top: 0 !important; }" + 
        "#ghx-pool.wide .ghx-columns { width: 150%; }" + 
        "#ghx-pool.wide .ghx-column-header-group { position: static !important; }" + 
        "#ghx-column-headers .ghx-column { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }" + 
        "#ghx-column-headers .ghx-column h2 { display: inline; }";
    document.head.appendChild(style);
    // Column width toggle
    $("<button></button>").addClass("aui-button").text("Toggle Column Width").css("margin-left", 10).click(function() {
        $("#ghx-pool").toggleClass("wide");
        $("#ghx-column-header-group").width($(".ghx-columns").width());
    }).prependTo("#ghx-modes-tools");
    $.getScript("https://hammerjs.github.io/dist/hammer.min.js", function() {
        // Hammer time
        var myElement = document.getElementById('ghx-pool');
        var mc = new Hammer(myElement);
        mc.get('pan').set({
            direction: Hammer.DIRECTION_ALL
        });
        var initialScrollPosition = $('#ghx-pool').scrollLeft();
        mc.on("panleft panright panend", function(ev) {
            switch (ev.type) {
                case "panend":
                    initialScrollPosition = $('#ghx-pool').scrollLeft();
                    break;
                case "panleft":
                case "panright":
                    // This check is potentially expensive
                    // Todo figure out what is up with panstart, as ideally we check for this once there
                    if ($(ev.target).closest('.ghx-issue').length == 0) {
                        $('#ghx-pool').scrollLeft(initialScrollPosition - (ev.deltaX / 1));
                    }
                    break;
                default:
                    break;
            }
        });
    });
});