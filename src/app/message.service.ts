import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageService {

  constructor(private toastrService: ToastrService) { }

  success(msg: string) {
    this.toastrService.success(msg);
  }
}
