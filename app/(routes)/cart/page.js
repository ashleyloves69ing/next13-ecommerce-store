"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revalidate = void 0;
var react_1 = require("react");
var container_1 = __importDefault(require("@/components/ui/container"));
var use_cart_1 = __importDefault(require("@/hooks/use-cart"));
var summary_1 = __importDefault(require("./components/summary"));
var cart_item_1 = __importDefault(require("./components/cart-item"));
exports.revalidate = 0;
var CartPage = function () {
    var _a = (0, react_1.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    var cart = (0, use_cart_1.default)();
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (<div className="bg-white">
      <container_1.default>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul>
                {cart.items.map(function (item) { return (<cart_item_1.default key={item.id} data={item}/>); })}
              </ul>
            </div>
            <summary_1.default />
          </div>
        </div>
      </container_1.default>
    </div>);
};
exports.default = CartPage;
