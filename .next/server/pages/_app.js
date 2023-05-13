(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./components/context/langContext.js + 2 modules
var langContext = __webpack_require__(352);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./pages/_app.js





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(langContext/* LangProvider */.u, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                src: "https://kit.fontawesome.com/baf7279d2c.js",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "../public/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Ulises Montenegro"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 126:
/***/ ((module) => {

"use strict";
module.exports = require("react-intl");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,172,298,352], () => (__webpack_exec__(68)));
module.exports = __webpack_exports__;

})();