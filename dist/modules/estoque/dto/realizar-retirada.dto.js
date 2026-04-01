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
exports.RealizarRetiradaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RealizarRetiradaDto {
    usuarioId;
    equipamentoId;
    quantidade;
}
exports.RealizarRetiradaDto = RealizarRetiradaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-do-usuario' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do usuário é obrigatório' }),
    (0, class_validator_1.IsUUID)('4', { message: 'ID de usuário inválido' }),
    __metadata("design:type", String)
], RealizarRetiradaDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-do-equipamento' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do equipamento é obrigatório' }),
    (0, class_validator_1.IsUUID)('4', { message: 'ID de equipamento inválido' }),
    __metadata("design:type", String)
], RealizarRetiradaDto.prototype, "equipamentoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A quantidade de retirada é obrigatória' }),
    (0, class_validator_1.IsInt)({ message: 'A quantidade deve ser um número inteiro' }),
    (0, class_validator_1.Min)(1, { message: 'A quantidade mínima de retirada deve ser 1' }),
    __metadata("design:type", Number)
], RealizarRetiradaDto.prototype, "quantidade", void 0);
//# sourceMappingURL=realizar-retirada.dto.js.map