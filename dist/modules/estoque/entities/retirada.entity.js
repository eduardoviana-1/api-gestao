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
exports.Retirada = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const equipamento_entity_1 = require("../../equipamentos/entities/equipamento.entity");
let Retirada = class Retirada {
    id;
    usuarioId;
    equipamentoId;
    quantidade;
    realizadoEm;
    usuario;
    equipamento;
};
exports.Retirada = Retirada;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Retirada.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id' }),
    __metadata("design:type", String)
], Retirada.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'equipamento_id' }),
    __metadata("design:type", String)
], Retirada.prototype, "equipamentoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Retirada.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'realizado_em' }),
    __metadata("design:type", Date)
], Retirada.prototype, "realizadoEm", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Retirada.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => equipamento_entity_1.Equipamento),
    (0, typeorm_1.JoinColumn)({ name: 'equipamento_id' }),
    __metadata("design:type", equipamento_entity_1.Equipamento)
], Retirada.prototype, "equipamento", void 0);
exports.Retirada = Retirada = __decorate([
    (0, typeorm_1.Entity)('retiradas')
], Retirada);
//# sourceMappingURL=retirada.entity.js.map