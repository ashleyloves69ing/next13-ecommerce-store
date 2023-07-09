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
        <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <skeleton_1.default className="rounded-xl aspect-square"/>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <skeleton_1.default className="rounded-xl aspect-square"/>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <skeleton_1.default className="aspect-square rounded-xl"/>
            <skeleton_1.default className="aspect-square rounded-xl"/>
            <skeleton_1.default className="aspect-square rounded-xl"/>
          </div>
        </div>
      </div>
    </container_1.default>);
};
exports.default = Loading;
