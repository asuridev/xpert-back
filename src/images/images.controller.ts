import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesCat } from './dto/images-cat.dto';


@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

 
  @Get('/imagesbybreedid/:id')
  findOne(@Param('id') id: string):Promise<ImagesCat> {
    return this.imagesService.findImagesById(id);
  }
  
}
