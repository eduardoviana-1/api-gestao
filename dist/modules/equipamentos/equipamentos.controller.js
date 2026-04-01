"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipamentosController = void 0;
const common_1 = require("@nestjs/common");
const equipamentos_service_1 = require("./equipamentos.service");
const entrada_equipamento_dto_1 = require("./dto/entrada-equipamento.dto");
let EquipamentosController = class EquipamentosController {
    equipamentosService;
    constructor(equipamentosService) {
        this.equipamentosService = equipamentosService;
    }
    async realizarEntrada(entradaDto) {
        return this.equipamentosService.entrada(entradaDto);
    }
    async listarTodos() {
        return this.equipamentosService.listarTodos();
    }
};
exports.EquipamentosController = EquipamentosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entrada_equipamento_dto_1.EntradaEquipamentoDto]),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "realizarEntrada", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquipamentosController.prototype, "listarTodos", null);
exports.EquipamentosController = EquipamentosController = __decorate([
    (0, common_1.Controller)('equipamentos'),
    __metadata("design:paramtypes", [equipamentos_service_1.EquipamentosService])
], EquipamentosController);
//# sourceMappingURL=equipamentos.controller.js.map