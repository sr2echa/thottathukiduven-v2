if (typeof browser === "undefined") {
  var browser = chrome;
}

console.log("Content script loaded");
browser.runtime.sendMessage({ action: "fetchAndExecuteScript" });
