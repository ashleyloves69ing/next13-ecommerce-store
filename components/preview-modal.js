"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_preview_modal_1 = __importDefault(require("@/hooks/use-preview-modal"));
var gallery_1 = __importDefault(require("@/components/gallery"));
var info_1 = __importDefault(require("@/components/info"));
var modal_1 = __importDefault(require("@/components/ui/modal"));
var PreviewModal = function () {
    var previewModal = (0, use_preview_modal_1.default)();
    var product = (0, use_preview_modal_1.default)(function (state) { return state.data; });
    if (!product) {
        return null;
    }
    return (<modal_1.default open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <gallery_1.default images={product.images}/>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <info_1.default data={product}/>
        </div>
      </div>
    </modal_1.default>);
};
exports.default = PreviewModal;
