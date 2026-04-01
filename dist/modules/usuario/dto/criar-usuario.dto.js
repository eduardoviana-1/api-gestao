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
exports.CriarUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
class CriarUsuarioDto {
    nomeCompleto;
    cpf;
    email;
    senha;
}
exports.CriarUsuarioDto = CriarUsuarioDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome completo é obrigatório' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriarUsuarioDto.prototype, "nomeCompleto", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O CPF é obrigatório' }),
    (0, class_validator_1.Length)(11, 11, { message: 'O CPF deve ter exatamente 11 caracteres' }),
    __metadata("design:type", String)
], CriarUsuarioDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O e-mail é obrigatório' }),
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail inválido' }),
    __metadata("design:type", String)
], CriarUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha é obrigatória' }),
    (0, class_validator_1.MinLength)(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
    __metadata("design:type", String)
], CriarUsuarioDto.prototype, "senha", void 0);
//# sourceMappingURL=criar-usuario.dto.js.map