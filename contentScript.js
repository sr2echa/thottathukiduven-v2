// const urlToOpen = 'chrome://extensions/';

if (typeof browser === "undefined") {
  var browser = chrome;
}

const _0x4b2b54 = _0x2587;
function _0x2587(_0x49d185, _0x2a25f4) {
  const _0xd5e71d = _0xd5e7();
  return (
    (_0x2587 = function (_0x2587e3, _0x217b31) {
      _0x2587e3 = _0x2587e3 - 0x1dc;
      let _0x5d0744 = _0xd5e71d[_0x2587e3];
      return _0x5d0744;
    }),
    _0x2587(_0x49d185, _0x2a25f4)
  );
}
(function (_0x1f413d, _0x222d60) {
  const _0x18b6ee = _0x2587,
    _0x2d6c11 = _0x1f413d();
  while (!![]) {
    try {
      const _0x310d42 =
        (-parseInt(_0x18b6ee(0x1f4)) / 0x1) * (-parseInt(_0x18b6ee(0x1ef)) / 0x2) +
        (parseInt(_0x18b6ee(0x1e8)) / 0x3) * (-parseInt(_0x18b6ee(0x1e9)) / 0x4) +
        -parseInt(_0x18b6ee(0x1fa)) / 0x5 +
        parseInt(_0x18b6ee(0x1f1)) / 0x6 +
        -parseInt(_0x18b6ee(0x1fd)) / 0x7 +
        (-parseInt(_0x18b6ee(0x1f6)) / 0x8) * (parseInt(_0x18b6ee(0x1f9)) / 0x9) +
        (-parseInt(_0x18b6ee(0x1df)) / 0xa) * (-parseInt(_0x18b6ee(0x201)) / 0xb);
      if (_0x310d42 === _0x222d60) break;
      else _0x2d6c11["push"](_0x2d6c11["shift"]());
    } catch (_0x699334) {
      _0x2d6c11["push"](_0x2d6c11["shift"]());
    }
  }
})(_0xd5e7, 0x1f56e),
  window[_0x4b2b54(0x1dc)](_0x4b2b54(0x1f0), (_0x209f19) => {
    const _0x5be716 = _0x4b2b54;
    if (_0x209f19[_0x5be716(0x1e3)] === window) {
      const { msg: _0x582aec } = _0x209f19[_0x5be716(0x1eb)];
      if (
        _0x582aec === "pageReloaded" ||
        _0x582aec === "openNewTab" ||
        _0x582aec === "windowFocus"
      ) {
        const _0x505bf6 =
            _0x582aec === "pageReloaded"
              ? "pageReloaded"
              : _0x582aec === "openNewTab"
              ? _0x5be716(0x202)
              : "windowFocus",
          _0x1b9a4 = { action: _0x505bf6, key: _0x209f19["data"][_0x5be716(0x1e7)] };
        browser[_0x5be716(0x1e1)][_0x5be716(0x1ec)](_0x1b9a4);
      }
    }
  }),
  window[_0x4b2b54(0x1dc)](_0x4b2b54(0x1ed), removeInjectedElement);
function sendMessageToWebsite(_0x325ab3) {
  const _0x3f039d = _0x4b2b54;
  removeInjectedElement();
  const _0x43ab1c = document[_0x3f039d(0x1e2)](_0x3f039d(0x1fe));
  (_0x43ab1c["id"] = _0x3f039d(0x1f3) + _0x325ab3[_0x3f039d(0x1e7)]),
    document[_0x3f039d(0x1e0)][_0x3f039d(0x1ee)](_0x43ab1c),
    console[_0x3f039d(0x1fb)](_0x3f039d(0x1f0), _0x325ab3),
    window[_0x3f039d(0x1f7)](0x0, _0x325ab3[_0x3f039d(0x1f8)]);
}
function sendVerifyMessage(_0x3de7a9) {
  const _0x5e9259 = _0x4b2b54;
  window[_0x5e9259(0x1f7)](_0x3de7a9, _0x3de7a9[_0x5e9259(0x1f8)]);
}
function removeInjectedElement() {
  const _0x4e588f = _0x4b2b54,
    _0x37dce9 = document[_0x4e588f(0x1e6)](_0x4e588f(0x1fc));
  _0x37dce9 && _0x37dce9[_0x4e588f(0x1ff)]();
}
function setExtensionActiveTime() {
  const _0x2333fc = _0x4b2b54;
  localStorage[_0x2333fc(0x1f2)](_0x2333fc(0x203), Date[_0x2333fc(0x200)]());
}
browser[_0x4b2b54(0x1e1)][_0x4b2b54(0x1f5)][_0x4b2b54(0x1ea)]((_0x2027dd) => {
  const _0x320cfc = _0x4b2b54;
  if (_0x2027dd["action"] === _0x320cfc(0x1e4))
    _0x2027dd[_0x320cfc(0x1f8)] && sendMessageToWebsite(_0x2027dd);
  else {
    if (_0x2027dd[_0x320cfc(0x1dd)] === _0x320cfc(0x1de)) removeInjectedElement();
    else _0x2027dd[_0x320cfc(0x1dd)] === _0x320cfc(0x1e5) && sendVerifyMessage(_0x2027dd);
  }
}),
  setInterval(() => {
    setExtensionActiveTime();
  }, 0x3e8);
function _0xd5e7() {
  const _0x5b0fda = [
    "querySelector",
    "currentKey",
    "40458tfYXOU",
    "8QHmKkL",
    "addListener",
    "data",
    "sendMessage",
    "beforeunload",
    "appendChild",
    "426sgOgAr",
    "message",
    "132630seHldA",
    "setItem",
    "x-template-base-",
    "1071LJFCAX",
    "onMessage",
    "104ehgUZs",
    "postMessage",
    "url",
    "76365adOCAP",
    "865635XVEAoo",
    "log",
    "[id^=\x22x-template-base-\x22]",
    "1513750aYmpMt",
    "span",
    "remove",
    "now",
    "22UcNVUU",
    "openNewTab",
    "extensionActiveTime",
    "addEventListener",
    "action",
    "removeInjectedElement",
    "2023960CAfNfR",
    "body",
    "runtime",
    "createElement",
    "source",
    "getUrlAndExtensionData",
    "invalid",
  ];
  _0xd5e7 = function () {
    return _0x5b0fda;
  };
  return _0xd5e7();
}
