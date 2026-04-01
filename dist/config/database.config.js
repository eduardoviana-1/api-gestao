"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'admin',
    database: process.env.DB_NAME || 'api_gestao',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
}));
//# sourceMappingURL=database.config.js.map