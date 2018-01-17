// ==UserScript==
// @name         Halifax Memorable Information
// @namespace    https://github.com/benbristow/halifax-memorableinfo-tampermonkey
// @version      0.1
// @description  Automatically inputs 'memorable information' on Halifax's banking site
// @author       Ben Bristow
// @match        https://secure.halifax-online.co.uk/personal/a/logon/entermemorableinformation.jsp
// ==/UserScript==

(function() {
    var memorableInfo = 'changeme123';

    var requiredFields = jQuery('label').map(function() {
        var requiredIndex = parseInt(jQuery(this).text().trim().replace('Character ', '')) - 1;
        return memorableInfo[requiredIndex];
    });

    for(var i = 0; i < 3; i++) {
        jQuery('select').get(i).value = '&nbsp;' + requiredFields[i];
    }

    jQuery('.primaryAction > input').trigger('click');
}());

