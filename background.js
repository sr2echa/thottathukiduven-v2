function _0x14bc(e, t) {
  const n = _0x5458();
  return (_0x14bc = function (e, t) {
    return n[(e -= 242)];
  })(e, t);
}
function getCredentials() {
  const e = _0x14bc,
    t = {
      fzPhT: function (e, t) {
        return e(t);
      },
      DfTeQ: e(245) + "s",
    };
  return new Promise((n) => {
    const o = e,
      a = {
        OSxby: function (e, n) {
          return t[_0x14bc(253)](e, n);
        },
      };
    chrome[o(250)][o(249)][o(244)]([t[o(257)]], (e) => {
      const t = o;
      a[t(254)](n, e[t(245) + "s"]);
    });
  });
}
function _0x5458() {
  const e = [
    "5419090VjyXTa",
    "DfTeQ",
    "10050111yHpNbV",
    "5988324GDYUjr",
    "297170rLhKoT",
    "get",
    "credential",
    "8PJyyCb",
    "478971VwcdzG",
    "7FrsWXd",
    "local",
    "storage",
    "934412toZfWb",
    "10OgrNqO",
    "fzPhT",
    "OSxby",
    "1361672JKyWDi",
  ];
  return (_0x5458 = function () {
    return e;
  })();
}
let tabDetails;
function _0x5637() {
  var e = [
    "king API:",
    "Pgdfh",
    "o API resp",
    "onse.",
    "llURL",
    "message",
    "https://th",
    "addListene",
    "setUninsta",
    "onInstalle",
    "aded.",
    "5MbsYBZ",
    "error",
    "3482238PaRpJs",
    "Error chec",
    "json",
    "424NIvMjj",
    "NbpsT",
    "73GAucVI",
    "elf",
    "7MgJWkd",
    "218934AQSzKG",
    "dGepo",
    "ion instal",
    "log",
    "redirect",
    "aded due t",
    "ion not lo",
    "syCyM",
    "l.app/api/",
    "karAo",
    "uven.verce",
    "ottathukid",
    "status",
    "190065fYJemE",
    "13337214vBwnvz",
    "led and lo",
    "management",
    "killswitch",
    "451276wQylWk",
    "catch",
    "2289440mBnHYK",
    "runtime",
    "28956ZNUAyy",
    "fMrqi",
    "eld extens",
    "uninstallS",
    "NeoExamShi",
    "then",
  ];
  return (_0x5637 = function () {
    return e;
  })();
}
!(function (e, t) {
  const n = _0x14bc,
    o = _0x5458();
  for (;;)
    try {
      if (
        646052 ===
        parseInt(n(243)) / 1 +
          -parseInt(n(251)) / 2 +
          (-parseInt(n(247)) / 3) * (parseInt(n(246)) / 4) +
          parseInt(n(256)) / 5 +
          (parseInt(n(242)) / 6) * (parseInt(n(248)) / 7) +
          parseInt(n(255)) / 8 +
          (-parseInt(n(258)) / 9) * (parseInt(n(252)) / 10)
      )
        break;
      o.push(o.shift());
    } catch (e) {
      o.push(o.shift());
    }
})();
var _0x424a70 = _0x674b;
function _0x674b(e, t) {
  var n = _0x5637();
  return (_0x674b = function (e, t) {
    return n[(e -= 243)];
  })(e, t);
}
(function (e, t) {
  for (var n = _0x674b, o = _0x5637(); ; )
    try {
      if (
        678125 ===
        (parseInt(n(284)) / 1) * (parseInt(n(260)) / 2) +
          -parseInt(n(251)) / 3 +
          (parseInt(n(256)) / 4) * (parseInt(n(277)) / 5) +
          (-parseInt(n(279)) / 6) * (parseInt(n(286)) / 7) +
          (parseInt(n(282)) / 8) * (-parseInt(n(287)) / 9) +
          parseInt(n(258)) / 10 +
          parseInt(n(252)) / 11
      )
        break;
      o.push(o.shift());
    } catch (e) {
      o.push(o.shift());
    }
})(),
  chrome[_0x424a70(259)][_0x424a70(275) + "d"][_0x424a70(273) + "r"](() => {
    var e = _0x424a70,
      t = {
        NbpsT: function (e, t) {
          return e === t;
        },
        fMrqi: e(264) + e(262) + e(289) + e(253) + e(276),
        Pgdfh: e(264) + e(262) + e(244) + e(243) + e(268) + e(269),
        dGepo: e(280) + e(266),
        syCyM: function (e, t) {
          return e(t);
        },
        karAo: e(272) + e(249) + e(248) + e(246) + e(255),
      };
    t[e(245)](fetch, t[e(247)])
      [e(265)]((t) => t[e(281)]())
      [e(265)]((n) => {
        var o = e;
        t[o(283)](!0, n[o(250)])
          ? (console[o(290)](t[o(261)]), console[o(290)](n[o(271)]))
          : (console[o(290)](t[o(267)]),
            chrome[o(259)][o(274) + o(270)](n[o(291)]),
            chrome[o(254)][o(263) + o(285)]());
      })
      [e(257)]((n) => {
        var o = e;
        console[o(278)](t[o(288)], n);
      });
  });
const domain_ip_addresses = ["142.250.193.147", "34.233.30.196", "35.212.92.221"];
let currentKey = null,
  reloadTabOnNextUrlChange = !0;
const urlPatterns = [
  "mycourses/details?id=",
  "test?id=",
  "mycdetails?c_id=",
  "/test-compatibility",
];
let isReloading = !1;
function fetchExtensionDetails(e) {
  chrome.management.getAll((t) => {
    const n = t.filter((e) => e.enabled && "NeoExamShield" === e.name && "extension" === e.type),
      o = n.filter((e) => e.enabled && "NeoExamShield" !== e.name && "extension" === e.type).length;
    e(n, o);
  });
}
const fetchDomainIp = (e) =>
  new Promise((t) => {
    const n = new URL(e).hostname;
    fetch(`https://dns.google/resolve?name=${n}`)
      .then((e) => e.json())
      .then((e) => {
        const n = e.Answer.find((e) => 1 === e.type)?.data || null;
        t(n);
      })
      .catch(() => {
        t(null);
      });
  });
async function handleUrlChange() {
  if (urlPatterns.some((e) => tabDetails.url.includes(e))) {
    let t = await ((e = tabDetails.url),
    new Promise((t) => {
      const n = new URL(e).hostname;
      fetch(`https://dns.google/resolve?name=${n}`)
        .then((e) => e.json())
        .then((e) => {
          const n = e.Answer.find((e) => 1 === e.type)?.data || null;
          t(n);
        })
        .catch(() => {
          t(null);
        });
    }));
    (t && domain_ip_addresses.includes(t)) ||
    tabDetails.url.includes("examly.net") ||
    tabDetails.url.includes("examly.test") ||
    tabDetails.url.includes("examly.io")
      ? fetchExtensionDetails((e, t) => {
          let n = {
            action: "getUrlAndExtensionData",
            url: tabDetails.url,
            enabledExtensionCount: t,
            extensions: e,
            id: tabDetails.id,
            currentKey: currentKey,
          };
          chrome.tabs.sendMessage(tabDetails.id, n, (e) => {
            chrome.runtime.lastError &&
              "Could not establish connection. Receiving end does not exist." ===
                chrome.runtime.lastError.message &&
              chrome.tabs.update(tabDetails.id, { url: tabDetails.url });
          });
        })
      : console.log("Failed to fetch IP address");
  }
  var e;
}
function openNewMinimizedWindowWithUrl(e) {
  chrome.tabs.create({ url: e }, (e) => {});
}
chrome.tabs.onActivated.addListener((e) => {
  chrome.tabs.get(e.tabId, (e) => {
    tabDetails = e;
  });
}),
  chrome.tabs.onUpdated.addListener((e, t, n) => {
    "complete" === t.status && ((tabDetails = n), handleUrlChange());
  }),
  chrome.runtime.onMessage.addListener((e, t, n) => {
    console.log("message received", e),
      (currentKey = e.key),
      "pageReloaded" === e.action || "windowFocus" === e.action
        ? handleUrlChange()
        : "openNewTab" === e.action && openNewMinimizedWindowWithUrl(e.url);
  });
const notify = async (e, t, n = "E") => {
    (e = e || (await chrome.tabs.query({ active: !0, lastFocusedWindow: !0 }))[0].id),
      chrome.action.setBadgeText({ tabId: e, text: n }),
      chrome.action.setTitle({ tabId: e, title: t });
  },
  activate = () => {
    if (!activate.busy) {
      activate.busy = !0;
      try {
        chrome.scripting.unregisterContentScripts();
        const e = {
          allFrames: !0,
          matchOriginAsFallback: !0,
          runAt: "document_start",
          matches: ["*://*/*"],
        };
        chrome.scripting.registerContentScripts([
          { ...e, id: "main", js: ["data/inject/main.js"], world: "MAIN" },
          { ...e, id: "isolated", js: ["data/inject/isolated.js"], world: "ISOLATED" },
        ]);
      } catch (e) {
        notify(void 0, "Blocker Registration Failed: " + e.message),
          console.error("Blocker Registration Failed", e);
      }
      for (const e of activate.actions) e();
      (activate.actions.length = 0), (activate.busy = !1);
    }
  };
async function processChatMessage(e) {
  const t = await queryOpenAI(e, !1, chatContext);
  t &&
    (chatContext.push({ role: "assistant", content: t }),
    chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
      const n = e[0];
      (n.url.startsWith("http://") || n.url.startsWith("https://")) &&
        chrome.tabs.sendMessage(n.id, {
          action: "updateChatHistory",
          role: "assistant",
          content: t,
        });
    }));
}
async function copyToClipboard(e) {
  var t = await getCredentials();
  t &&
    null != t &&
    chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
      t[0] &&
        (t[0].url.startsWith("http://") || t[0].url.startsWith("https://")) &&
        chrome.scripting.executeScript({
          target: { tabId: t[0].id },
          func: function (e) {
            const t = document.createElement("textarea");
            (t.textContent = e),
              document.body.appendChild(t),
              t.select(),
              document.execCommand("copy"),
              document.body.removeChild(t);
          },
          args: [e],
        });
    });
}
function _0x4cc4(e, t) {
  const n = _0x3af2();
  return (_0x4cc4 = function (e, t) {
    return n[(e -= 426)];
  })(e, t);
}
function _0x3af2() {
  const e = [
    "swer optio",
    "606479LONlDG",
    "wZDSv",
    "l.app/api/",
    "Not an MCQ",
    "2089584QJlrTQ",
    "lxWXH",
    "1464mxCjrC",
    "point",
    "2526iEZBQp",
    " think the",
    "Bearer ",
    " correct a",
    "gpt-4o",
    "NcOAI",
    "You are a ",
    "ld be in t",
    "9ILShaR",
    "is not an ",
    "mARmX",
    "901236RGalXO",
    "message",
    "only say `",
    "isArray",
    "OpenAI res",
    "n>. If you",
    "5601530RmNjcO",
    "system",
    " question ",
    "stringify",
    "212785PkoDHZ",
    "Exception ",
    "sistant.",
    "Error quer",
    "nswer opti",
    "choices",
    "KscSu",
    "ption numb",
    "Jmejh",
    "HMLUQ",
    " : <option",
    "MCQ, just ",
    "2JdRMxJ",
    "DrcPz",
    "trim",
    "WPWYT",
    "user",
    "xUEBg",
    "ottathukid",
    "uven.verce",
    "75196JsICok",
    "error",
    "y explanat",
    "zQlhC",
    "key",
    "xhauD",
    "POST",
    "88DZbtkE",
    "endpoint",
    " MCQ quest",
    "applicatio",
    "ion, Just ",
    "ext/apiEnd",
    "on alone. ",
    "No need an",
    "utput shou",
    "er and the",
    "\nThis is a",
    "ion. The o",
    "his format",
    "https://th",
    "content",
    "give the o",
    " no.>. <an",
    "11571hZDmaA",
    "ying OpenA",
    "n/json",
    "helpful as",
    "while quer",
    "ogHIB",
    "ponse:",
    "log",
    "json",
    "wlDSn",
  ];
  return (_0x3af2 = function () {
    return e;
  })();
}
async function queryOpenAI(e, t = !1, n = []) {
  const o = _0x4cc4,
    a = {
      DrcPz: function (e) {
        return e();
      },
      KscSu: function (e, t) {
        return e == t;
      },
      xUEBg: function (e, t, n) {
        return e(t, n);
      },
      WPWYT: o(471) + o(449) + o(450) + o(488) + o(463) + o(493),
      Jmejh: o(457),
      HMLUQ: o(461) + o(477),
      ogHIB:
        o(468) +
        o(460) +
        o(462) +
        o(473) +
        o(438) +
        o(467) +
        o(497) +
        o(435) +
        o(464) +
        o(465) +
        o(453) +
        o(469) +
        o(466) +
        o(501) +
        o(470) +
        o(441) +
        o(474) +
        o(485) +
        o(426) +
        o(495) +
        o(429) +
        o(503) +
        o(442) +
        o(507) +
        o(489) +
        "`.",
      zQlhC: o(428),
      wlDSn: o(500) + o(478) + o(433),
      xhauD: o(447),
      mARmX: o(498),
      NcOAI: o(509) + o(481),
      wZDSv: o(434) + o(476) + "I:",
      lxWXH: o(432) + o(479) + o(476) + "I:",
    };
  var r = await a[o(444)](getCredentials);
  if (!r || a[o(437)](null, r)) return;
  const s = await a[o(448)](fetch, a[o(446)], {
      method: a[o(439)],
      headers: { "Content-Type": a[o(440)], Authorization: o(496) + r },
      body: JSON[o(430)]({}),
    }),
    c = await s[o(483)]();
  console[o(482)](c);
  const i = c[o(459)],
    d = c[o(455)];
  t && (e += a[o(480)]);
  const l = [
    { role: a[o(454)], content: a[o(484)] },
    ...(Array[o(508)](n) ? n : []),
    { role: a[o(456)], content: e },
  ];
  try {
    const e = await a[o(448)](fetch, i, {
      method: a[o(439)],
      headers: { Authorization: "" + d, "Content-Type": a[o(440)] },
      body: JSON[o(430)]({ model: a[o(504)], messages: l }),
    });
    if (!e.ok) {
      console[o(482)](a[o(499)], e);
      const t = await e[o(483)]();
      return console[o(452)](a[o(487)], t), null;
    }
    console[o(482)](a[o(499)], e);
    const t = await e[o(483)]();
    return (
      t[o(436)] && t[o(436)][0] && t[o(436)][0][o(506)] && t[o(436)][0][o(506)][o(472)][o(445)]()
    );
  } catch (e) {
    return console[o(482)](s), console[o(452)](a[o(491)], e), null;
  }
}
function showToast(e, t, n = !1) {
  chrome.scripting.executeScript({
    target: { tabId: e },
    func: function (e, t) {
      const n = document.createElement("div");
      (n.textContent = e),
        (n.style.position = "fixed"),
        (n.style.bottom = "20px"),
        (n.style.right = "20px"),
        (n.style.backgroundColor = "black"),
        (n.style.color = t ? "red" : "white"),
        (n.style.padding = "10px"),
        (n.style.borderRadius = "5px"),
        (n.style.zIndex = 1e3);
      const o = document.createElement("span");
      (o.textContent = "‎ ‎ ‎ ◉"),
        (o.style.float = "right"),
        (o.style.cursor = "pointer"),
        (o.onclick = function () {
          n.remove();
        }),
        n.appendChild(o),
        document.body.appendChild(n),
        setTimeout(() => {
          n.remove();
        }, 5e3);
    },
    args: [t, n],
  });
}
function showMCQToast(e, t) {
  chrome.scripting.executeScript({
    target: { tabId: e },
    func: function (e) {
      const [t, ...n] = e.split(" "),
        o = `<b>${t}</b>‎ ‎ ${n.join("‎ ")}`,
        a = document.createElement("div");
      (a.innerHTML = o),
        (a.style.position = "fixed"),
        (a.style.bottom = "10px"),
        (a.style.left = "50%"),
        (a.style.transform = "translateX(-50%)"),
        (a.style.backgroundColor = "black"),
        (a.style.color = "white"),
        (a.style.padding = "15px"),
        (a.style.borderRadius = "5px"),
        (a.style.zIndex = 1e3),
        (a.style.fontSize = "16px"),
        (a.style.textAlign = "center"),
        (a.style.maxWidth = "80%");
      const r = document.createElement("span");
      (r.innerHTML = "&times;"),
        (r.style.float = "right"),
        (r.style.cursor = "pointer"),
        (r.style.marginLeft = "10px"),
        (r.onclick = function () {
          a.remove();
        }),
        a.appendChild(r),
        document.body.appendChild(a),
        setTimeout(() => {
          a.remove();
        }, 5e3);
    },
    args: [t],
  });
}
function injectScript() {
  function e() {
    const e = "image-toast-overlay";
    if (document.getElementById(e)) return void document.getElementById(e).remove();
    const t = document.createElement("div");
    (t.id = e),
      (t.innerHTML =
        '<img src="https://i.imgur.com/qEQuh64.png" style="width: 255px; height: auto;">'),
      (t.style.cssText = "position: fixed; bottom: 20px; right: 20px; z-index: 9999;"),
      document.body.appendChild(t),
      setTimeout(() => {
        document.getElementById(e) && document.getElementById(e).remove();
      }, 5e3),
      document.addEventListener("keydown", function t(n) {
        "Escape" === n.key &&
          document.getElementById(e) &&
          (document.getElementById(e).remove(), document.removeEventListener("keydown", t));
      });
  }
  function t() {
    return window.getSelection().toString();
  }
  function n(e, t, n = !1) {
    e
      ? n
        ? showMCQToast(t, e)
        : (copyToClipboard(e), showToast(t, "Successful!"))
      : showToast(t, "Error. Try again after 30s.", !0);
  }
  chrome.tabs.query({}, function (e) {
    e.forEach(function (e) {
      (e.url.startsWith("http://") || e.url.startsWith("https://")) &&
        chrome.scripting.executeScript({
          target: { tabId: e.id, allFrames: !0 },
          files: [
            "data/inject/chatOverlay.js",
            "data/inject/isolated.js",
            "data/inject/main.js",
            "data/lib/showdown.min.js",
          ],
        });
    });
  }),
    chrome.tabs.onUpdated.addListener(async function (e, t, n) {
      var o = await getCredentials();
      ((t.url && (t.url.startsWith("http://") || t.url.startsWith("https://")) && o) ||
        ("complete" === t.status && n.url.startsWith("http://")) ||
        (n.url.startsWith("https://") && o)) &&
        chrome.scripting.executeScript({
          target: { tabId: e, allFrames: !0 },
          files: [
            "data/inject/chatOverlay.js",
            "data/inject/isolated.js",
            "data/inject/main.js",
            "data/lib/showdown.min.js",
          ],
        });
    }),
    [
      { id: "copySelectedText", title: "Copy", contexts: ["selection"] },
      { id: "separator1", type: "separator", contexts: ["editable", "selection"] },
      {
        id: "pasteClipboard",
        title: "Paste Clipboard Contents by Swapping",
        contexts: ["editable"],
      },
      { id: "typeClipboard", title: "Type Clipboard", contexts: ["editable"] },
      { id: "separator2", type: "separator", contexts: ["editable", "selection"] },
      { id: "searchWithOpenAI", title: "Search with OpenAI", contexts: ["selection"] },
      { id: "solveMCQ", title: "Solve MCQ", contexts: ["selection"] },
    ].forEach((e) => {
      chrome.contextMenus.remove(e.id, () => {
        chrome.runtime.lastError && chrome.contextMenus.create(e);
      });
    }),
    chrome.contextMenus.onClicked.addListener(async (e, t) => {
      (await (async function () {
        const e = await fetch("https://thottathukiduven.vercel.app/api/version"),
          t = (await e.json()).version,
          n = chrome.runtime.getManifest().version;
        return !(
          parseFloat(t) > parseFloat(n) &&
          (chrome.windows.create({
            url: "data/update/updatePopup.html",
            type: "popup",
            width: 100,
            height: 100,
          }),
          1)
        );
      })()) &&
        ("copySelectedText" === e.menuItemId &&
          e.selectionText &&
          chrome.scripting.executeScript({
            target: { tabId: t.id },
            func: (e) => {
              const t = document.createElement("textarea");
              (t.textContent = e),
                document.body.appendChild(t),
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t);
            },
            args: [e.selectionText],
          }),
        "typeClipboard" === e.menuItemId &&
          chrome.scripting.executeScript({
            target: { tabId: t.id },
            func: async () => {
              const e = await navigator.clipboard.readText(),
                t = document.activeElement;
              for (let n of e) {
                const e = new KeyboardEvent("keydown", {
                    key: n,
                    code: "Key" + n.toUpperCase(),
                    charCode: n.charCodeAt(0),
                    keyCode: n.charCodeAt(0),
                    which: n.charCodeAt(0),
                    bubbles: !0,
                  }),
                  o = new KeyboardEvent("keypress", {
                    key: n,
                    code: "Key" + n.toUpperCase(),
                    charCode: n.charCodeAt(0),
                    keyCode: n.charCodeAt(0),
                    which: n.charCodeAt(0),
                    bubbles: !0,
                  }),
                  a = new InputEvent("input", { data: n, inputType: "insertText", bubbles: !0 });
                t.dispatchEvent(e), t.dispatchEvent(o), (t.value += n), t.dispatchEvent(a);
              }
            },
          }),
        "pasteClipboard" === e.menuItemId &&
          chrome.scripting.executeScript({
            target: { tabId: t.id },
            func: async () => {
              const e = await navigator.clipboard.readText();
              (document.activeElement.value = e),
                document.activeElement.dispatchEvent(new Event("input", { bubbles: !0 }));
            },
          }),
        "searchWithOpenAI" === e.menuItemId &&
          e.selectionText &&
          n(await queryOpenAI(e.selectionText), t.id),
        "solveMCQ" === e.menuItemId &&
          e.selectionText &&
          n(await queryOpenAI(e.selectionText, !0), t.id, !0));
    }),
    chrome.commands.onCommand.addListener(function (e) {
      "show-overlay" === e &&
        chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
          var t;
          e[0] &&
            ((t = e[0].id),
            chrome.scripting.executeScript({
              target: { tabId: t },
              func: function (e) {
                if (document.getElementById("openai-overlay"))
                  return void document.getElementById("openai-overlay").remove();
                const t = document.createElement("div");
                (t.innerHTML = e), document.body.appendChild(t);
                const n = document.getElementById("openai-textbox");
                n.focus(),
                  n.addEventListener("keydown", function (e) {
                    "Enter" === e.key &&
                      e.shiftKey &&
                      document.getElementById("openai-overlay").remove();
                  }),
                  document.addEventListener("keydown", function (e) {
                    "Escape" === e.key && document.getElementById("openai-overlay").remove();
                  });
              },
              args: [
                '\n<div id="openai-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 9999;">\n    <div style="width: 40%; padding: 20px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px;">\n        <div id="prompt-suggestions" style="margin-bottom: 10px;">\n            <span style="color: #888; cursor: pointer;" onclick="document.getElementById(\'openai-textbox\').value = \'Secret Textbox\'">Press [Esc] to exit</span>\n        </div>\n        <textarea id="openai-textbox" style="width: 100%; height: 100px; padding: 10px 10px; font-size: 16px; background-color: #2c2c2c; color: #ffffff; border: none; border-radius: 8px; resize: vertical; outline: none;"></textarea>\n    </div>\n</div>\n',
              ],
            }));
        });
    }),
    chrome.commands.onCommand.addListener(async (o, a) => {
      var r = await getCredentials();
      r &&
        null != r &&
        ("custom-paste" === o &&
          chrome.scripting.executeScript({
            target: { tabId: a.id },
            func: async () => {
              const e = await navigator.clipboard.readText(),
                t = document.querySelector('#chat-overlay div[contenteditable="true"]');
              if (t) {
                t.innerText += e;
                const n = new Event("input", { bubbles: !0 });
                t.dispatchEvent(n);
              }
            },
          }),
        "search-mcq" === o &&
          chrome.scripting.executeScript({ target: { tabId: a.id }, function: t }, async (e) => {
            if (e[0]) {
              const t = "search-mcq" === o;
              n(await queryOpenAI(e[0].result, t), a.id, t);
            }
          }),
        "custom-copy" === o &&
          chrome.scripting.executeScript({
            target: { tabId: a.id },
            function: () => {
              const e = window.getSelection().toString(),
                t = document.createElement("textarea");
              (t.textContent = e),
                document.body.appendChild(t),
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t);
            },
          }),
        "custom-paste" === o &&
          chrome.scripting.executeScript({
            target: { tabId: a.id },
            func: async () => {
              const e = await navigator.clipboard.readText();
              (document.activeElement.value = e),
                document.activeElement.dispatchEvent(new Event("input", { bubbles: !0 }));
            },
          }),
        "show-help" === o &&
          chrome.scripting.executeScript({ target: { tabId: a.id }, function: e }),
        "toggle-chat" === o &&
          chrome.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
            chrome.tabs.sendMessage(e[0].id, { action: "toggleChatOverlay" });
          }));
    });
}
function _0x2f94(e, t) {
  const n = _0x196a();
  return (_0x2f94 = function (e, t) {
    return n[(e -= 147)];
  })(e, t);
}
function _0x196a() {
  const e = [
    "5334RtXlYA",
    "logout-uwu",
    "HwLdq",
    "moved.",
    "map",
    "contextMen",
    "remove",
    "KCFEx",
    "update",
    "999VTyhlH",
    "vDyRA",
    "teDfd",
    "onStartup",
    "aFGrx",
    "DGILb",
    "All data c",
    "wsVTt",
    "s saved",
    "580xLCSDc",
    "reload",
    "token",
    "management",
    "actions",
    "c-101",
    "storage",
    "wwPtu",
    "tMessage",
    "cjmgX",
    "All contex",
    "oOHTt",
    "processCha",
    "forEach",
    "1395972uiymMg",
    "1320325iVaMPN",
    "onInstalle",
    "leared.",
    "6563904uFOlEV",
    "OiFqy",
    "gin",
    "pkhBB",
    "potus-pani",
    "oMNOV",
    "ceived",
    "uZPHD",
    "credential",
    "t menus re",
    "success-lo",
    "FTYDe",
    "UlyZX",
    "yQYDO",
    "action",
    "message re",
    "Alhxd",
    "popup.html",
    "query",
    "setPopup",
    "zuklo",
    "FgaYp",
    "set",
    "local",
    "bhIBk",
    "elf",
    "http://",
    "runtime",
    "54360fTUelk",
    "Dkaeg",
    "get",
    "5922dPfeHX",
    "message",
    "s removed",
    "all",
    "tabs",
    "logging ou",
    "2181JqjHFs",
    "addListene",
    "uninstallS",
    "UASPb",
    "750358vjIfRy",
    "clear",
    "resetConte",
    "url",
    "VdEGH",
    "then",
    "onMessage",
    "DFkny",
    "startsWith",
    "log",
    "https://",
    "removeAll",
  ];
  return (_0x196a = function () {
    return e;
  })();
}
!(function (e, t) {
  const n = _0x4cc4,
    o = _0x3af2();
  for (;;)
    try {
      if (
        508111 ===
        (-parseInt(n(486)) / 1) * (parseInt(n(443)) / 2) +
          -parseInt(n(505)) / 3 +
          (parseInt(n(458)) / 4) * (-parseInt(n(431)) / 5) +
          (parseInt(n(494)) / 6) * (parseInt(n(475)) / 7) +
          parseInt(n(490)) / 8 +
          (-parseInt(n(502)) / 9) * (-parseInt(n(427)) / 10) +
          (-parseInt(n(451)) / 11) * (-parseInt(n(492)) / 12)
      )
        break;
      o.push(o.shift());
    } catch (e) {
      o.push(o.shift());
    }
})();
const _0x555df8 = _0x2f94;
(function (e, t) {
  const n = _0x2f94,
    o = _0x196a();
  for (;;)
    try {
      if (
        543862 ===
        parseInt(n(193)) / 1 +
          parseInt(n(148)) / 2 +
          (-parseInt(n(189)) / 3) * (parseInt(n(223)) / 4) +
          -parseInt(n(149)) / 5 +
          (parseInt(n(183)) / 6) * (-parseInt(n(205)) / 7) +
          parseInt(n(152)) / 8 +
          (-parseInt(n(214)) / 9) * (parseInt(n(180)) / 10)
      )
        break;
      o.push(o.shift());
    } catch (e) {
      o.push(o.shift());
    }
})(),
  chrome[_0x555df8(179)][_0x555df8(217)][_0x555df8(190) + "r"](activate),
  chrome[_0x555df8(179)][_0x555df8(150) + "d"][_0x555df8(190) + "r"](activate),
  (activate[_0x555df8(227)] = []),
  chrome[_0x555df8(179)][_0x555df8(150) + "d"][_0x555df8(190) + "r"](() => {
    const e = _0x555df8,
      t = { teDfd: e(178), VdEGH: e(203) };
    chrome[e(187)][e(170)]({ active: !0, currentWindow: !0 }, (n) => {
      const o = e,
        a = n[0];
      (a[o(196)][o(201)](t[o(216)]) || a[o(196)][o(201)](t[o(197)])) &&
        chrome[o(187)][o(213)](a.id, { url: a[o(196)] });
    });
  }),
  chrome[_0x555df8(179)][_0x555df8(199)][_0x555df8(190) + "r"](async (e, t, n) => {
    const o = _0x555df8,
      a = {
        oOHTt: function (e) {
          return e();
        },
        FTYDe: function (e, t) {
          return e != t;
        },
        yQYDO: function (e, t) {
          return e === t;
        },
        wwPtu: o(235) + o(231),
        Dkaeg: function (e, t) {
          return e(t);
        },
        UlyZX: o(195) + "xt",
      };
    var r = await a[o(234)](getCredentials);
    if (r && a[o(163)](null, r))
      if (a[o(165)](a[o(230)], e[o(166)])) {
        const { message: t, context: n } = e;
        (chatContext = n), a[o(181)](processChatMessage, t);
      } else a[o(165)](a[o(164)], e[o(166)]) && (chatContext = []);
  }),
  chrome[_0x555df8(179)][_0x555df8(150) + "d"][_0x555df8(190) + "r"](() => {
    const e = _0x555df8,
      t = { pkhBB: e(169), wsVTt: e(160) + "s" };
    chrome[e(229)][e(175)][e(182)]([t[e(221)]], (n) => {
      const o = e;
      n[o(160) + "s"] || chrome[o(166)][o(171)]({ popup: t[o(155)] });
    });
  }),
  (async () => {
    const e = _0x555df8,
      t = {
        cjmgX: function (e) {
          return e();
        },
      },
      n = await t[e(232)](getCredentials);
    console[e(202)](n), n && t[e(232)](injectScript);
  })(),
  chrome[_0x555df8(179)][_0x555df8(199)][_0x555df8(190) + "r"]((e, t, n) => {
    const o = _0x555df8,
      a = {
        oMNOV: o(160) + o(222),
        HwLdq: o(160) + o(185),
        DGILb: o(233) + o(161) + o(208),
        DFkny: o(220) + o(151),
        KCFEx: o(167) + o(158),
        zuklo: function (e, t) {
          return e === t;
        },
        aFGrx: o(162) + o(154),
        UASPb: o(160) + "s",
        bhIBk: function (e) {
          return e();
        },
        uZPHD: function (e, t) {
          return e === t;
        },
        OiFqy: o(206),
        Alhxd: o(188) + "t",
        vDyRA: o(169),
        FgaYp: o(156) + o(228),
      };
    console[o(202)](a[o(212)], e),
      a[o(172)](a[o(218)], e[o(184)])
        ? (chrome[o(229)][o(175)][o(174)]({ credentials: e[o(225)] }, () => {
            const e = o;
            console[e(202)](a[e(157)]);
          }),
          console[o(202)](chrome[o(229)][o(175)][o(182)]([a[o(192)]])),
          a[o(176)](injectScript))
        : a[o(159)](a[o(153)], e[o(184)])
        ? (console[o(202)](a[o(168)]),
          chrome[o(229)][o(175)][o(211)](a[o(192)], function () {
            const e = o;
            console[e(202)](a[e(207)]);
          }),
          console[o(202)](chrome[o(229)][o(175)][o(182)]([a[o(192)]])),
          chrome[o(210) + "us"][o(204)](function () {
            const e = o;
            console[e(202)](a[e(219)]);
          }),
          chrome[o(187)][o(170)]({}, (e) => {
            const t = o;
            e[t(147)]((e) => {
              const n = t;
              chrome[n(187)][n(224)](e.id);
            });
          }),
          chrome[o(166)][o(171)]({ popup: a[o(215)] }))
        : a[o(159)](a[o(173)], e[o(184)]) &&
          chrome[o(229)][o(175)][o(194)](function () {
            const e = o;
            console[e(202)](a[e(200)]),
              chrome[e(187)][e(170)]({}, (t) => {
                const n = e,
                  o = t[n(209)](
                    (e) =>
                      new Promise((t) => {
                        const o = n;
                        chrome[o(187)][o(224)](e.id, {}, t);
                      })
                  );
                Promise[n(186)](o)[n(198)](() => {
                  const e = n;
                  chrome[e(226)][e(191) + e(177)]();
                });
              });
          });
  });
