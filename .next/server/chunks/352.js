"use strict";
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ LangProvider),
  "A": () => (/* binding */ langContext)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/lang/en-UK.json
const en_UK_namespaceObject = JSON.parse('{"nav.home":"Home","nav.port":"Portfolio","nav.contact":"Contact","home.frontend":"Frontend Developer","home.download":"Download Resume","port.title":"Portfolio","port.link":"You can watch all my projects on ","contact.title":"Contact Me","contact.desc":"You can contact with me leaving a message, or by my social media so we can start working together.","contact.btn":"Send Message","footer.phrase":"\'-When we are no longer able to change a situation, we are challenged to change ourselves.-\'"}');
;// CONCATENATED MODULE: ./components/lang/es-ES.json
const es_ES_namespaceObject = JSON.parse('{"nav.home":"Inicio","nav.port":"Portafolio","nav.contact":"Contactame","home.frontend":"Desarrollador Frontend","home.download":"Descargar CV","port.title":"Portafolio","port.link":"Puedes ver el resto de mi trabajo en ","contact.title":"Contactame","contact.desc":"Puedes contactar conmigo dejandome un mensaje, o a través de mis redes sociales para que podamos comenzar a trabajar juntos","contact.btn":"Enviar","footer.phrase":"\'-Cuando ya no somos capaces de cambiar una situación, nos vemos desafiados a cambiarnos a nosotros mismos.-\'"}');
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(126);
;// CONCATENATED MODULE: ./components/context/langContext.js





const langContext = /*#__PURE__*/ external_react_default().createContext();
const LangProvider = ({ children  })=>{
    const [words, setWords] = (0,external_react_.useState)(es_ES_namespaceObject);
    const [locale, setLocale] = (0,external_react_.useState)("es-ES");
    const changeLang = (newLang)=>{
        switch(newLang){
            case "es-ES":
                setWords(es_ES_namespaceObject);
                setLocale("es-ES");
                break;
            case "en-UK":
                setWords(en_UK_namespaceObject);
                setLocale("en-UK");
                break;
            default:
                setWords(en_UK_namespaceObject);
                setLocale("en-UK");
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(langContext.Provider, {
        value: {
            changeLang,
            local: locale
        },
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_intl_.IntlProvider, {
            locale: locale,
            messages: words,
            children: children
        })
    });
};



/***/ })

};
;