"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var currency_1 = __importDefault(require("@/components/ui/currency"));
var button_1 = __importDefault(require("@/components/ui/button"));
var use_cart_1 = __importDefault(require("@/hooks/use-cart"));
;
var Info = function (_a) {
    var _b, _c;
    var data = _a.data;
    var cart = (0, use_cart_1.default)();
    var onAddToCart = function () {
        cart.addItem(data);
    };
    return (<div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <currency_1.default value={data === null || data === void 0 ? void 0 : data.price}/>
        </p>
      </div>
      <hr className="my-4"/>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {(_b = data === null || data === void 0 ? void 0 : data.size) === null || _b === void 0 ? void 0 : _b.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: (_c = data === null || data === void 0 ? void 0 : data.color) === null || _c === void 0 ? void 0 : _c.value }}/>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <button_1.default onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <lucide_react_1.ShoppingCart size={20}/>
        </button_1.default>
      </div>
    </div>);
};
exports.default = Info;
