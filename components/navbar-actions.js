"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var button_1 = __importDefault(require("@/components/ui/button"));
var use_cart_1 = __importDefault(require("@/hooks/use-cart"));
var NavbarActions = function () {
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    var router = (0, navigation_1.useRouter)();
    var cart = (0, use_cart_1.default)();
    if (!isMounted) {
        return null;
    }
    return (<div className="ml-auto flex items-center gap-x-4">
      <button_1.default onClick={function () { return router.push('/cart'); }} className="flex items-center rounded-full bg-black px-4 py-2">
        <lucide_react_1.ShoppingBag size={20} color="white"/>
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </button_1.default>
    </div>);
};
exports.default = NavbarActions;
