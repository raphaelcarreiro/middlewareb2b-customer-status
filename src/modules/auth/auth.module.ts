import { Module } from '@nestjs/common';
import { DistributorModule } from 'src/modules/distributor/distributor.module';
import { BasicStrategy } from './basic-auth.strategy';

@Module({
  imports: [DistributorModule],
  providers: [BasicStrategy],
})
export class AuthModule {}
