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
exports.EstoqueController = void 0;
const common_1 = require("@nestjs/common");
const estoque_service_1 = require("./estoque.service");
const realizar_retirada_dto_1 = require("./dto/realizar-retirada.dto");
let EstoqueController = class EstoqueController {
    estoqueService;
    constructor(estoqueService) {
        this.estoqueService = estoqueService;
    }
    async realizarRetirada(realizarRetiradaDto) {
        return this.estoqueService.realizarRetirada(realizarRetiradaDto);
    }
    async listarRetiradas() {
        return this.estoqueService.listarRetiradas();
    }
};
exports.EstoqueController = EstoqueController;
__decorate([
    (0, common_1.Post)('retirada'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [realizar_retirada_dto_1.RealizarRetiradaDto]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "realizarRetirada", null);
__decorate([
    (0, common_1.Get)('retirada'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "listarRetiradas", null);
exports.EstoqueController = EstoqueController = __decorate([
    (0, common_1.Controller)('estoque'),
    __metadata("design:paramtypes", [estoque_service_1.EstoqueService])
], EstoqueController);
//# sourceMappingURL=estoque.controller.js.map