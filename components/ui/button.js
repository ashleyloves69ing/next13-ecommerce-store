"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utils_1 = require("@/lib/utils");
var Button = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, children = _a.children, disabled = _a.disabled, _b = _a.type, type = _b === void 0 ? 'button' : _b, props = __rest(_a, ["className", "children", "disabled", "type"]);
    return (<button type={type} className={(0, utils_1.cn)("\n        w-auto \n        rounded-full \n        bg-black\n        border\n        border-transparent\n        px-5 \n        py-3 \n        disabled:cursor-not-allowed \n        disabled:opacity-50\n        text-white\n        font-semibold\n        hover:opacity-75\n        transition\n      ", disabled && 'opacity-75 cursor-not-allowed', className)} disabled={disabled} ref={ref} {...props}>
      {children}
    </button>);
});
Button.displayName = "Button";
exports.default = Button;
