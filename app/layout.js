"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var google_1 = require("next/font/google");
var modal_provider_1 = __importDefault(require("@/providers/modal-provider"));
var toast_provider_1 = __importDefault(require("@/providers/toast-provider"));
var navbar_1 = __importDefault(require("@/components/navbar"));
var footer_1 = __importDefault(require("@/components/footer"));
require("./globals.css");
var font = (0, google_1.Urbanist)({ subsets: ['latin'] });
exports.metadata = {
    title: 'Store',
    description: 'Store - The place for all your purchases.',
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={font.className}>
        <toast_provider_1.default />
        <modal_provider_1.default />
        <navbar_1.default />
        {children}
        <footer_1.default />
      </body>
    </html>);
}
exports.default = RootLayout;
