import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { EstoqueService } from './estoque.service';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Equipamento } from '../equipamentos/entities/equipamento.entity';

describe('EstoqueService', () => {
  let service: EstoqueService;
  let dataSource: DataSource;

  const mockQueryRunner = {
    connect: jest.fn(),
    startTransaction: jest.fn(),
    commitTransaction: jest.fn(),
    rollbackTransaction: jest.fn(),
    release: jest.fn(),
    manager: {
      findOneBy: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstoqueService,
        {
          provide: DataSource,
          useValue: {
            createQueryRunner: jest.fn().mockReturnValue(mockQueryRunner),
          },
        },
      ],
    }).compile();

    service = module.get<EstoqueService>(EstoqueService);
    dataSource = module.get<DataSource>(DataSource);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  describe('realizarRetirada', () => {
    it('deve lançar ConflictException se não houver estoque suficiente', async () => {
      const dto = {
        usuarioId: 'user-id',
        equipamentoId: 'equip-id',
        quantidade: 10,
      };

      // Mock Usuário existe
      mockQueryRunner.manager.findOneBy.mockResolvedValue({ id: 'user-id' } as Usuario);
      
      // Mock Equipamento existe mas com estoque insuficiente (5)
      mockQueryRunner.manager.findOne.mockResolvedValue({
        id: 'equip-id',
        quantidadeEstoque: 5,
      } as Equipamento);

      await expect(service.realizarRetirada(dto)).rejects.toThrow(ConflictException);
      expect(mockQueryRunner.rollbackTransaction).toHaveBeenCalled();
    });

    it('deve lançar NotFoundException se o usuário não existir', async () => {
      const dto = {
        usuarioId: 'non-existent',
        equipamentoId: 'equip-id',
        quantidade: 1,
      };

      mockQueryRunner.manager.findOneBy.mockResolvedValue(null);

      await expect(service.realizarRetirada(dto)).rejects.toThrow(NotFoundException);
      expect(mockQueryRunner.rollbackTransaction).toHaveBeenCalled();
    });
  });
});
