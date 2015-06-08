// ==UserScript==
// @name         FreshScript (Jira Tweaks)
// @namespace    https://youtu.be/hBe0VCso0qs
// @version      0.6
// @description  Now, this is a story all about how my life got flipped-turned upside down...
// @author       The Fresh Prince of Jira
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// @require      http://hammerjs.github.io/dist/hammer.min.js
// ==/UserScript==

jQuery(function($) {
    
    // Styles

    var style = document.createElement("style");

    style.innerText =
        ".ghx-extra-fields, .ghx-type, .ghx-days { display: none; }" +
        "#ghx-pool { cursor: default; }" +
        "#ghx-pool .ghx-issue .ghx-issue-content { padding: 5px 5px 5px 13px; }" +
        "#ghx-pool.ghx-band-1 .ghx-issue .ghx-issue-fields { padding-right: 25px; }" +
        "#ghx-pool .ghx-issue .ghx-flags { top: 7px; right: 7px; left: auto; }" +
        "#ghx-pool.ghx-band-1 .ghx-issue .ghx-flags { top: 5px; right: 4px; }" +
        "#ghx-pool .ghx-issue .ghx-avatar { top: 5px; right: 5px; left: auto; }" +
        "#ghx-pool.ghx-band-1 .ghx-issue .ghx-priority," +
        "#ghx-pool.ghx-band-1 .ghx-issue .ghx-priority img { width: 14px; height: 14px; }" +
        "#ghx-pool .ghx-issue .ghx-avatar:not(:empty) ~ .ghx-flags { top: 32px; }" +
        "#ghx-pool.ghx-band-1 .ghx-issue .ghx-avatar:not(:empty) ~ .ghx-flags { top: 29px; }" +
        "#ghx-pool .ghx-issue .ghx-priority[title='Major'] { display: none; }" +
        "#ghx-pool.wide { padding-top: 0 !important; }" +
        "#ghx-pool.wide .ghx-columns { width: 150%; }" +
        "#ghx-pool.wide .ghx-column-header-group { position: static !important; }" +
        "#ghx-column-headers .ghx-column { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }" +
        "#ghx-column-headers .ghx-column h2 { display: inline; }";
    
    document.head.appendChild(style);

    // Column width toggle

    $("<button></button>")
        .addClass("aui-button")
        .text("Toggle Column Width")
        .css("margin-left", 10)
        .click(function() {
            $("#ghx-pool").toggleClass("wide");
            $("#ghx-column-header-group").width($(".ghx-columns").width());
        })
        .prependTo("#ghx-modes-tools");

    // Click & drag scroll

    $.getScript("https://hammerjs.github.io/dist/hammer.min.js", function() {
        // Hammer time
        var myElement = document.getElementById('ghx-pool');
        var mc = new Hammer(myElement);
        mc.get('pan').set({
            direction: Hammer.DIRECTION_ALL
        });

        var initialHorizScrollPosition = $('#ghx-pool').scrollLeft();
        var initialVertScrollPosition = $('#ghx-pool').scrollTop();
        var panning = false;
        mc.on("panleft panright panend panstart panup pandown", function(ev) {
            switch (ev.type) {
                case "panstart":
                    if ($(ev.target).closest('.ghx-issue').length == 0) {
                        panning = true;
                    }
                    break;
                case "panend":
                    panning = false;
                    initialHorizScrollPosition = $('#ghx-pool').scrollLeft();
                    initialVertScrollPosition = $('#ghx-pool').scrollTop();
                    break;
                case "panleft":
                case "panright":
                    if(panning)
                    {
                        $('#ghx-pool').scrollLeft(initialHorizScrollPosition - ev.deltaX);
                    }
                    break;
                case "panup":
                case "pandown":
                    if(panning)
                    {
                        $('#ghx-pool').scrollTop(initialVertScrollPosition - ev.deltaY);
                    }
                    break;
                default:
                    break;
            }
        });
    });

    // Faster project switching

    $("#ghx-controls-work").on("click", "#js-work-quickfilters a.js-quickfilter-button.ghx-active", function(e, ignore) {
        if (!e.ctrlKey && !ignore) {
            $("#js-work-quickfilters a.js-quickfilter-button.ghx-active").not(this).trigger("click", [ true ]);
        }
    });

});