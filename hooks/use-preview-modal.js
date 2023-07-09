"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zustand_1 = require("zustand");
var usePreviewModal = (0, zustand_1.create)(function (set) { return ({
    isOpen: false,
    data: undefined,
    onOpen: function (data) { return set({ isOpen: true, data: data }); },
    onClose: function () { return set({ isOpen: false }); },
}); });
exports.default = usePreviewModal;
