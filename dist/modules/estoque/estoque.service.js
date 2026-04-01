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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const retirada_entity_1 = require("./entities/retirada.entity");
const equipamento_entity_1 = require("../equipamentos/entities/equipamento.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
let EstoqueService = class EstoqueService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async realizarRetirada(retiradaDto) {
        const { usuarioId, equipamentoId, quantidade } = retiradaDto;
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const usuario = await queryRunner.manager.findOneBy(usuario_entity_1.Usuario, {
                id: usuarioId,
            });
            if (!usuario) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            const equipamento = await queryRunner.manager.findOne(equipamento_entity_1.Equipamento, {
                where: { id: equipamentoId },
                lock: { mode: 'pessimistic_write' },
            });
            if (!equipamento) {
                throw new common_1.NotFoundException('Equipamento não encontrado');
            }
            if (equipamento.quantidadeEstoque < quantidade) {
                throw new common_1.ConflictException('Quantidade em estoque insuficiente para realizar a retirada');
            }
            equipamento.quantidadeEstoque -= quantidade;
            await queryRunner.manager.save(equipamento);
            const novaRetirada = queryRunner.manager.create(retirada_entity_1.Retirada, {
                usuarioId,
                equipamentoId,
                quantidade,
            });
            const retiradaSalva = await queryRunner.manager.save(novaRetirada);
            await queryRunner.commitTransaction();
            return retiradaSalva;
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async listarRetiradas() {
        return await this.dataSource.manager.find(retirada_entity_1.Retirada, {
            relations: ['usuario', 'equipamento'],
            order: { realizadoEm: 'DESC' },
        });
    }
};
exports.EstoqueService = EstoqueService;
exports.EstoqueService = EstoqueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], EstoqueService);
//# sourceMappingURL=estoque.service.js.map