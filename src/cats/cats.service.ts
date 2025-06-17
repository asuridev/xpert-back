import { Injectable } from '@nestjs/common';
import { Breeds } from './dto/breeds-cat.dto';
import { CatsApiService } from '../shared/cats-api.service';


@Injectable()
export class CatsService {

  constructor(
    private readonly CatsApiService:CatsApiService
  ){}

  findBreeds():Promise<Breeds[]> {
    return this.CatsApiService.getCatBreeds();;
  }

  findBreedsById(id: string):Promise<Breeds> {
    return this.CatsApiService.getCatBreedsById(id);
  }

  findBreedsBysearch(param: string):Promise<Breeds[]> {
    return this.CatsApiService.findBreedsBysearch(param);
  }

 
}
