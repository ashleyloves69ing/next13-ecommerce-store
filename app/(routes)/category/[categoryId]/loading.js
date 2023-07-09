"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __importDefault(require("@/components/ui/container"));
var skeleton_1 = __importDefault(require("@/components/ui/skeleton"));
var Loading = function () {
    return (<container_1.default>
      <div className="w-full h-full p-8">
        <skeleton_1.default className="w-full aspect-square rounded-xl md:aspect-[2.4/1]"/>
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
          <div className="hidden lg:block">
            <skeleton_1.default className="w-full h-[500px] rounded-xl"/>
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <skeleton_1.default className="aspect-square rounded-xl"/>
              <skeleton_1.default className="aspect-square rounded-xl"/>
              <skeleton_1.default className="aspect-square rounded-xl"/>
              <skeleton_1.default className="aspect-square rounded-xl"/>
              <skeleton_1.default className="aspect-square rounded-xl"/>
              <skeleton_1.default className="aspect-square rounded-xl"/>
            </div>
          </div>
        </div>
      </div>
    </container_1.default>);
};
exports.default = Loading;
