import { Injectable } from '@nestjs/common';
import { Message } from '@user-angular/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
