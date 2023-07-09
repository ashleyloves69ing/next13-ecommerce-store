"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var lucide_react_1 = require("lucide-react");
var icon_button_1 = __importDefault(require("@/components/ui/icon-button"));
var currency_1 = __importDefault(require("@/components/ui/currency"));
var use_cart_1 = __importDefault(require("@/hooks/use-cart"));
var CartItem = function (_a) {
    var data = _a.data;
    var cart = (0, use_cart_1.default)();
    var onRemove = function () {
        cart.removeItem(data.id);
    };
    return (<li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <image_1.default fill src={data.images[0].url} alt="" className="object-cover object-center"/>
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <icon_button_1.default onClick={onRemove} icon={<lucide_react_1.X size={15}/>}/>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
          </div>
          <currency_1.default value={data.price}/>
        </div>
      </div>
    </li>);
};
exports.default = CartItem;
