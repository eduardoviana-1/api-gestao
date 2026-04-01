import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Retirada } from './entities/retirada.entity';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Retirada])],
  providers: [EstoqueService],
  controllers: [EstoqueController],
})
export class EstoqueModule {}
