/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n\n\n\n\n\nconst NAV = [\n    {\n        href: \"/\",\n        icon: \"◈\",\n        label: \"Dashboard\"\n    },\n    {\n        href: \"/users\",\n        icon: \"◉\",\n        label: \"Users\"\n    },\n    {\n        href: \"/skills\",\n        icon: \"◆\",\n        label: \"Skills Library\"\n    },\n    {\n        href: \"/offered\",\n        icon: \"▲\",\n        label: \"Skills I Teach\"\n    },\n    {\n        href: \"/needed\",\n        icon: \"▼\",\n        label: \"Skills I Learn\"\n    },\n    {\n        href: \"/match\",\n        icon: \"◎\",\n        label: \"Find Mentors\"\n    },\n    {\n        href: \"/requests\",\n        icon: \"◷\",\n        label: \"Requests\"\n    }\n];\nfunction Layout({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.api)(\"/users\").then((u)=>{\n            if (u) setUsers(u);\n        });\n        const saved = localStorage.getItem(\"skillsphere_userId\");\n        if (saved) setUserId(saved);\n    }, []);\n    const handleUserChange = (e)=>{\n        setUserId(e.target.value);\n        localStorage.setItem(\"skillsphere_userId\", e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"sidebar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\",\n                        children: [\n                            \"Skill\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Sphere\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 36\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"nav\",\n                        children: NAV.map(({ href, icon, label })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: href,\n                                className: `nav-link${router.pathname === href ? \" active\" : \"\"}`,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"nav-icon\",\n                                        children: icon\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this),\n                                    label\n                                ]\n                            }, href, true, {\n                                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sidebar-footer\",\n                        children: [\n                            \"API: localhost:8080\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 30\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#065f46\"\n                                },\n                                children: \"●\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            \" Spring Boot + SQLite\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user-bar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"user-bar-label\",\n                        children: \"ACTIVE USER\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"select\",\n                        style: {\n                            width: 220,\n                            padding: \"6px 12px\",\n                            fontSize: \"0.77rem\"\n                        },\n                        value: userId,\n                        onChange: handleUserChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"— Select user —\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            users.map((u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: u.id,\n                                    children: [\n                                        u.name,\n                                        \" (#\",\n                                        u.id,\n                                        \")\"\n                                    ]\n                                }, u.id, true, {\n                                    fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"badge badge-green\",\n                        children: \"Active\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 20\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main-content\",\n                children: typeof children === \"function\" ? children({\n                    userId,\n                    users\n                }) : children\n            }, void 0, false, {\n                fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\blindstack\\\\frontend\\\\components\\\\Layout.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ2lCO2dCQUFLakIsV0FBVTswQkFDYixPQUFPakIsYUFBYSxhQUNqQkEsU0FBUztvQkFBRUk7b0JBQVFGO2dCQUFNLEtBQ3pCRjs7Ozs7Ozs7Ozs7O0FBSVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbHNwaGVyZS1mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeD9jNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vbGliL2FwaSc7XHJcblxyXG5jb25zdCBOQVYgPSBbXHJcbiAgeyBocmVmOiAnLycsICAgICAgICAgaWNvbjogJ+KXiCcsIGxhYmVsOiAnRGFzaGJvYXJkJyAgICAgIH0sXHJcbiAgeyBocmVmOiAnL3VzZXJzJywgICAgaWNvbjogJ+KXiScsIGxhYmVsOiAnVXNlcnMnICAgICAgICAgICB9LFxyXG4gIHsgaHJlZjogJy9za2lsbHMnLCAgIGljb246ICfil4YnLCBsYWJlbDogJ1NraWxscyBMaWJyYXJ5JyAgfSxcclxuICB7IGhyZWY6ICcvb2ZmZXJlZCcsICBpY29uOiAn4payJywgbGFiZWw6ICdTa2lsbHMgSSBUZWFjaCcgIH0sXHJcbiAgeyBocmVmOiAnL25lZWRlZCcsICAgaWNvbjogJ+KWvCcsIGxhYmVsOiAnU2tpbGxzIEkgTGVhcm4nICB9LFxyXG4gIHsgaHJlZjogJy9tYXRjaCcsICAgIGljb246ICfil44nLCBsYWJlbDogJ0ZpbmQgTWVudG9ycycgICAgfSxcclxuICB7IGhyZWY6ICcvcmVxdWVzdHMnLCBpY29uOiAn4pe3JywgbGFiZWw6ICdSZXF1ZXN0cycgICAgICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwaSgnL3VzZXJzJykudGhlbih1ID0+IHsgaWYgKHUpIHNldFVzZXJzKHUpOyB9KTtcclxuICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NraWxsc3BoZXJlX3VzZXJJZCcpO1xyXG4gICAgaWYgKHNhdmVkKSBzZXRVc2VySWQoc2F2ZWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VySWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NraWxsc3BoZXJlX3VzZXJJZCcsIGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtbGF5b3V0XCI+XHJcbiAgICAgIHsvKiBTaWRlYmFyICovfVxyXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlNraWxsPHNwYW4+U3BoZXJlPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICB7TkFWLm1hcCgoeyBocmVmLCBpY29uLCBsYWJlbCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAga2V5PXtocmVmfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmske3JvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICcgYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtaWNvblwiPntpY29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1mb290ZXJcIj5cclxuICAgICAgICAgIEFQSTogbG9jYWxob3N0OjgwODA8YnIgLz5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzA2NWY0NicgfX0+4pePPC9zcGFuPiBTcHJpbmcgQm9vdCArIFNRTGl0ZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FzaWRlPlxyXG5cclxuICAgICAgey8qIFVzZXIgc2VsZWN0b3IgYmFyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYmFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1iYXItbGFiZWxcIj5BQ1RJVkUgVVNFUjwvc3Bhbj5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIyMCwgcGFkZGluZzogJzZweCAxMnB4JywgZm9udFNpemU6ICcwLjc3cmVtJyB9fVxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJJZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VyQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7igJQgU2VsZWN0IHVzZXIg4oCUPC9vcHRpb24+XHJcbiAgICAgICAgICB7dXNlcnMubWFwKHUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17dS5pZH0gdmFsdWU9e3UuaWR9Pnt1Lm5hbWV9ICgje3UuaWR9KTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAge3VzZXJJZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1ncmVlblwiPkFjdGl2ZTwvc3Bhbj59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIE1haW4gY29udGVudCDigJQgcGFzcyB1c2VySWQgdmlhIGNsb25lRWxlbWVudCAqL31cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgPyBjaGlsZHJlbih7IHVzZXJJZCwgdXNlcnMgfSlcclxuICAgICAgICAgIDogY2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsIk5BViIsImhyZWYiLCJpY29uIiwibGFiZWwiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZXJzIiwic2V0VXNlcnMiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJ0aGVuIiwidSIsInNhdmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZVVzZXJDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXNpZGUiLCJzcGFuIiwibmF2IiwibWFwIiwicGF0aG5hbWUiLCJiciIsInN0eWxlIiwiY29sb3IiLCJzZWxlY3QiLCJ3aWR0aCIsInBhZGRpbmciLCJmb250U2l6ZSIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiaWQiLCJuYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\nconst BASE = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:8080\";\nasync function api(path, options = {}) {\n    try {\n        const res = await fetch(`${BASE}${path}`, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            ...options\n        });\n        if (!res.ok) throw new Error(`HTTP ${res.status}`);\n        return await res.json();\n    } catch (err) {\n        console.error(`API error [${path}]:`, err);\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQixJQUFJO0FBRXpDLGVBQWVDLElBQUlDLElBQUksRUFBRUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVSLEtBQUssRUFBRUssS0FBSyxDQUFDLEVBQUU7WUFDeENJLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDLEdBQUdILE9BQU87UUFDWjtRQUNBLElBQUksQ0FBQ0MsSUFBSUcsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxDQUFDLEtBQUssRUFBRUosSUFBSUssTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO0lBQ3ZCLEVBQUUsT0FBT0MsS0FBSztRQUNaQyxRQUFRQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUVYLEtBQUssRUFBRSxDQUFDLEVBQUVTO1FBQ3RDLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2tpbGxzcGhlcmUtZnJvbnRlbmQvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpKHBhdGgsIG9wdGlvbnMgPSB7fSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQVNFfSR7cGF0aH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c31gKTtcclxuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihgQVBJIGVycm9yIFske3BhdGh9XTpgLCBlcnIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCQVNFIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhcGkiLCJwYXRoIiwib3B0aW9ucyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: ({ userId, users })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                userId: userId,\n                users: users\n            }, void 0, false, {\n                fileName: \"D:\\\\blindstack\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\blindstack\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUUzQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0osQ0FBQyxFQUFFSSxNQUFNLEVBQUVDLEtBQUssRUFBRSxpQkFDakIsOERBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVDLFFBQVFBO2dCQUFRQyxPQUFPQTs7Ozs7Ozs7Ozs7QUFJekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za2lsbHNwaGVyZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7KHsgdXNlcklkLCB1c2VycyB9KSA9PiAoXHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2VySWQ9e3VzZXJJZH0gdXNlcnM9e3VzZXJzfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlcklkIiwidXNlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();