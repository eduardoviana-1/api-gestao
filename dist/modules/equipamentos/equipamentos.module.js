"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipamentosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equipamento_entity_1 = require("./entities/equipamento.entity");
const equipamentos_service_1 = require("./equipamentos.service");
const equipamentos_controller_1 = require("./equipamentos.controller");
let EquipamentosModule = class EquipamentosModule {
};
exports.EquipamentosModule = EquipamentosModule;
exports.EquipamentosModule = EquipamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([equipamento_entity_1.Equipamento])],
        providers: [equipamentos_service_1.EquipamentosService],
        controllers: [equipamentos_controller_1.EquipamentosController],
        exports: [equipamentos_service_1.EquipamentosService],
    })
], EquipamentosModule);
//# sourceMappingURL=equipamentos.module.js.map