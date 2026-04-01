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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaEquipamentoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EntradaEquipamentoDto {
    nome;
    quantidade;
}
exports.EntradaEquipamentoDto = EntradaEquipamentoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Caminhão Coletor' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do equipamento é obrigatório' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EntradaEquipamentoDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A quantidade de entrada é obrigatória' }),
    (0, class_validator_1.IsInt)({ message: 'A quantidade deve ser um número inteiro' }),
    (0, class_validator_1.Min)(1, { message: 'A quantidade mínima de entrada deve ser 1' }),
    __metadata("design:type", Number)
], EntradaEquipamentoDto.prototype, "quantidade", void 0);
//# sourceMappingURL=entrada-equipamento.dto.js.map