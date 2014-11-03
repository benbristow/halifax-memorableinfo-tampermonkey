// ==UserScript==
// @name         Halifax Memorable Information
// @namespace    https://github.com/benbristow/halifax-memorableinfo-tampermonkey
// @version      0.1
// @description  Automatically inputs 'memorable information' on Halifax's horrible online banking site
// @author       Ben Bristow
// @match        https://secure.halifax-online.co.uk/personal/a/logon/entermemorableinformation.jsp
// ==/UserScript==

var memorableInfo = "changeme"
document.getElementsByTagName("SELECT")[0].value = "&nbsp;" + memorableInfo[$("#frmentermemorableinformation1 > fieldset > div > div > div:nth-child(1) > label").text().replace(/[^\/\d]/g,'') - 1];
document.getElementsByTagName("SELECT")[1].value = "&nbsp;" + memorableInfo[$("#frmentermemorableinformation1 > fieldset > div > div > div:nth-child(2) > label").text().replace(/[^\/\d]/g,'') - 1];
document.getElementsByTagName("SELECT")[2].value = "&nbsp;" + memorableInfo[$("#frmentermemorableinformation1 > fieldset > div > div > div:nth-child(3) > label").text().replace(/[^\/\d]/g,'') - 1];
