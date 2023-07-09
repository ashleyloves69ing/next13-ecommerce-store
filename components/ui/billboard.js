"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Billboard = function (_a) {
    var data = _a.data;
    console;
    return (<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: "url(".concat(data === null || data === void 0 ? void 0 : data.imageUrl, ")") }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Billboard;
