"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
var Currency = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(false), isMounted = _c[0], setIsMounted = _c[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (<div className="font-semibold">
      {formatter.format(Number(value))}
    </div>);
};
exports.default = Currency;
