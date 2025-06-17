import { Global, Module } from '@nestjs/common';
import { CatsApiService } from './cats-api.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports:[HttpModule],
  providers:[CatsApiService],
  exports:[CatsApiService]
})
export class SharedModule {}
