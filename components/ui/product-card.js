"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var currency_1 = __importDefault(require("@/components/ui/currency"));
var icon_button_1 = __importDefault(require("@/components/ui/icon-button"));
var use_preview_modal_1 = __importDefault(require("@/hooks/use-preview-modal"));
var use_cart_1 = __importDefault(require("@/hooks/use-cart"));
var ProductCard = function (_a) {
    var _b, _c, _d;
    var data = _a.data;
    var previewModal = (0, use_preview_modal_1.default)();
    var cart = (0, use_cart_1.default)();
    var router = (0, navigation_1.useRouter)();
    var handleClick = function () {
        router.push("/product/".concat(data === null || data === void 0 ? void 0 : data.id));
    };
    var onPreview = function (event) {
        event.stopPropagation();
        previewModal.onOpen(data);
    };
    var onAddToCart = function (event) {
        event.stopPropagation();
        cart.addItem(data);
    };
    return (<div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <image_1.default src={(_c = (_b = data.images) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.url} alt="" fill className="aspect-square object-cover rounded-md"/>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <icon_button_1.default onClick={onPreview} icon={<lucide_react_1.Expand size={20} className="text-gray-600"/>}/>
            <icon_button_1.default onClick={onAddToCart} icon={<lucide_react_1.ShoppingCart size={20} className="text-gray-600"/>}/>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{(_d = data.category) === null || _d === void 0 ? void 0 : _d.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <currency_1.default value={data === null || data === void 0 ? void 0 : data.price}/>
      </div>
    </div>);
};
exports.default = ProductCard;
