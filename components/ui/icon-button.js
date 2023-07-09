"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@/lib/utils");
var IconButton = function (_a) {
    var onClick = _a.onClick, icon = _a.icon, className = _a.className;
    return (<button onClick={onClick} className={(0, utils_1.cn)('rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition', className)}>
      {icon}
    </button>);
};
exports.default = IconButton;
