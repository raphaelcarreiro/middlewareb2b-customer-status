import { Module } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { DistributorRepository } from './distribuidor.repository';
import { Distributor } from './distributor.entity';
import { DistributorService } from './distributor.service';

@Module({
  imports: [TypeOrmModule.forFeature([DistributorRepository, Distributor])],
  providers: [
    {
      provide: 'IDistributorService',
      useClass: DistributorService,
    },
    {
      provide: 'IDistributorRepository',
      useExisting: getRepositoryToken(DistributorRepository),
    },
  ],
  exports: ['IDistributorService'],
})
export class DistributorModule {}
