import { Injectable } from '@nestjs/common';
import { CatsApiService } from 'src/shared/cats-api.service';
import { ImagesCat } from './dto/images-cat.dto';

@Injectable()
export class ImagesService {

  constructor(
    private readonly catsApiService:CatsApiService
  ){}
  
 
 async findImagesById(id: string):Promise<ImagesCat> {
    return this.catsApiService.findImagesById(id);
  }

  
}
