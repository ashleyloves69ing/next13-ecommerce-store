"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var zustand_1 = require("zustand");
var react_hot_toast_1 = require("react-hot-toast");
var middleware_1 = require("zustand/middleware");
var useCart = (0, zustand_1.create)((0, middleware_1.persist)(function (set, get) { return ({
    items: [],
    addItem: function (data) {
        var currentItems = get().items;
        var existingItem = currentItems.find(function (item) { return item.id === data.id; });
        if (existingItem) {
            return (0, react_hot_toast_1.toast)('Item already in cart.');
        }
        set({ items: __spreadArray(__spreadArray([], get().items, true), [data], false) });
        react_hot_toast_1.toast.success('Item added to cart.');
    },
    removeItem: function (id) {
        set({ items: __spreadArray([], get().items.filter(function (item) { return item.id !== id; }), true) });
        react_hot_toast_1.toast.success('Item removed from cart.');
    },
    removeAll: function () { return set({ items: [] }); },
}); }, {
    name: 'cart-storage',
    storage: (0, middleware_1.createJSONStorage)(function () { return localStorage; })
}));
exports.default = useCart;
