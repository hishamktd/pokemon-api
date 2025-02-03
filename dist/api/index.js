"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNestApp = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = require("express");
const server = (0, express_1.default)();
const createNestApp = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    return app;
};
exports.createNestApp = createNestApp;
(0, exports.createNestApp)(server)
    .then((app) => app.init())
    .catch((err) => console.error('Nest broken', err));
exports.default = server;
//# sourceMappingURL=index.js.map