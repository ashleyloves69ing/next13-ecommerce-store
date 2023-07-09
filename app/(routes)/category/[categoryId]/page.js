"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revalidate = void 0;
var container_1 = __importDefault(require("@/components/ui/container"));
var billboard_1 = __importDefault(require("@/components/ui/billboard"));
var product_card_1 = __importDefault(require("@/components/ui/product-card"));
var no_results_1 = __importDefault(require("@/components/ui/no-results"));
var get_products_1 = __importDefault(require("@/actions/get-products"));
var get_category_1 = __importDefault(require("@/actions/get-category"));
var get_sizes_1 = __importDefault(require("@/actions/get-sizes"));
var get_colors_1 = __importDefault(require("@/actions/get-colors"));
var filter_1 = __importDefault(require("./components/filter"));
var mobile_filters_1 = __importDefault(require("./components/mobile-filters"));
exports.revalidate = 0;
var CategoryPage = function (_a) {
    var params = _a.params, searchParams = _a.searchParams;
    return __awaiter(void 0, void 0, void 0, function () {
        var products, sizes, colors, category;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, get_products_1.default)({
                        categoryId: params.categoryId,
                        colorId: searchParams.colorId,
                        sizeId: searchParams.sizeId,
                    })];
                case 1:
                    products = _b.sent();
                    return [4 /*yield*/, (0, get_sizes_1.default)()];
                case 2:
                    sizes = _b.sent();
                    return [4 /*yield*/, (0, get_colors_1.default)()];
                case 3:
                    colors = _b.sent();
                    return [4 /*yield*/, (0, get_category_1.default)(params.categoryId)];
                case 4:
                    category = _b.sent();
                    return [2 /*return*/, (<div className="bg-white">
      <container_1.default>
        <billboard_1.default data={category.billboard}/>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <mobile_filters_1.default sizes={sizes} colors={colors}/>
            <div className="hidden lg:block">
              <filter_1.default valueKey="sizeId" name="Sizes" data={sizes}/>
              <filter_1.default valueKey="colorId" name="Colors" data={colors}/>
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <no_results_1.default />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(function (item) { return (<product_card_1.default key={item.id} data={item}/>); })}
              </div>
            </div>
          </div>
        </div>
      </container_1.default>
    </div>)];
            }
        });
    });
};
exports.default = CategoryPage;
