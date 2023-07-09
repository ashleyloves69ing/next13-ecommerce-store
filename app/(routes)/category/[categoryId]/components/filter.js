"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = __importDefault(require("query-string"));
var navigation_1 = require("next/navigation");
var button_1 = __importDefault(require("@/components/ui/button"));
var utils_1 = require("@/lib/utils");
;
var Filter = function (_a) {
    var data = _a.data, name = _a.name, valueKey = _a.valueKey;
    var searchParams = (0, navigation_1.useSearchParams)();
    var router = (0, navigation_1.useRouter)();
    var selectedValue = searchParams.get(valueKey);
    var onClick = function (id) {
        var _a;
        var current = query_string_1.default.parse(searchParams.toString());
        var query = __assign(__assign({}, current), (_a = {}, _a[valueKey] = id, _a));
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }
        var url = query_string_1.default.stringifyUrl({
            url: window.location.href,
            query: query,
        }, { skipNull: true });
        router.push(url);
    };
    return (<div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4"/>
      <div className="flex flex-wrap gap-2">
        {data.map(function (filter) { return (<div key={filter.id} className="flex items-center">
            <button_1.default className={(0, utils_1.cn)('rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300', selectedValue === filter.id && 'bg-black text-white')} onClick={function () { return onClick(filter.id); }}>
              {filter.name}
            </button_1.default>
          </div>); })}
      </div>
    </div>);
};
exports.default = Filter;
