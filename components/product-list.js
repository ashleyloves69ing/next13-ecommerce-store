"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_card_1 = __importDefault(require("@/components/ui/product-card"));
var no_results_1 = __importDefault(require("@/components/ui/no-results"));
var ProductList = function (_a) {
    var title = _a.title, items = _a.items;
    return (<div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <no_results_1.default />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(function (item) { return (<product_card_1.default key={item.id} data={item}/>); })}
      </div>
    </div>);
};
exports.default = ProductList;
