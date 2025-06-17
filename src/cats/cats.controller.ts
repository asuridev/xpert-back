import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Breeds } from './dto/breeds-cat.dto';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Get("/breeds")
  findAll():Promise<Breeds[]> {
    return this.catsService.findBreeds();
  }

  @Get('/breeds/search')
  findBySearch(@Query() param: { q:string }) {
    return this.catsService.findBreedsBysearch(param.q);
  }

  @Get('/breeds/:id')
  findOne(@Param('id') id: string) {
    return this.catsService.findBreedsById(id);
  }

  
}
