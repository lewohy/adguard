// ==UserScript==
// @name            eruda
// @description     eruda
// @version         1.0.0.0
// @include         *
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
(function () {
    var script = document.createElement('script');
    script.src="https://cdn.jsdelivr.net/npm/eruda";
    document.body.append(script);
    script.onload = function () {
        eruda.init();
    }
})();
