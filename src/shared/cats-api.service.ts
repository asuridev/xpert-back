import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";

import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";
import { Breeds } from "src/cats/dto/breeds-cat.dto";
import { ImagesCat } from "src/images/dto/images-cat.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CatsApiService {
  private readonly logger = new Logger(CatsApiService.name);

  constructor(
    private readonly httpService: HttpService,
     private readonly configService:ConfigService,
  ) { }

  async getCatBreeds(): Promise<Breeds[]> {
    const { data } = await firstValueFrom(this.httpService.get<Breeds[]>(this.configService.get('API_BREEDS'), {
      headers: {
        'x-api-key': process.env.API_TOKEN
      }
    }).pipe(
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    ));
    return data;
  }

  async getCatBreedsById(id:string): Promise<Breeds> {
    const { data } = await firstValueFrom(this.httpService.get<Breeds>(this.configService.get('API_BREEDS') + '/' + id, {
      headers: {
        'x-api-key': process.env.API_TOKEN
      }
    }).pipe(
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    ));
    return data;
  }

  async findBreedsBysearch(params:string): Promise<Breeds[]> {
    const { data } = await firstValueFrom(this.httpService.get<Breeds[]>(this.configService.get('API_BREEDS') + '/search?q=' + params, {
      headers: {
        'x-api-key': process.env.API_TOKEN
      }
    }).pipe(
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    ));
    return data;
  }

  async findImagesById(id:string): Promise<ImagesCat> {
    const { data } = await firstValueFrom(this.httpService.get<ImagesCat>(this.configService.get('API_IMAGES') + '/' + id, {
      headers: {
        'x-api-key': process.env.API_TOKEN
      }
    }).pipe(
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw 'An error happened!';
      }),
    ));
    return data;
  }


}