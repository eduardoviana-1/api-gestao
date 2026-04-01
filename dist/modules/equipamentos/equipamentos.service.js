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
exports.EquipamentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const equipamento_entity_1 = require("./entities/equipamento.entity");
let EquipamentosService = class EquipamentosService {
    equipamentoRepository;
    constructor(equipamentoRepository) {
        this.equipamentoRepository = equipamentoRepository;
    }
    async entrada(entradaDto) {
        const { nome, quantidade } = entradaDto;
        let equipamento = await this.equipamentoRepository.findOneBy({ nome });
        if (equipamento) {
            equipamento.quantidadeEstoque += quantidade;
        }
        else {
            equipamento = this.equipamentoRepository.create({
                nome,
                quantidadeEstoque: quantidade,
            });
        }
        return await this.equipamentoRepository.save(equipamento);
    }
    async listarTodos() {
        return await this.equipamentoRepository.find({
            order: { nome: 'ASC' },
        });
    }
    async buscarPorId(id) {
        return await this.equipamentoRepository.findOneBy({ id });
    }
};
exports.EquipamentosService = EquipamentosService;
exports.EquipamentosService = EquipamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(equipamento_entity_1.Equipamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EquipamentosService);
//# sourceMappingURL=equipamentos.service.js.map