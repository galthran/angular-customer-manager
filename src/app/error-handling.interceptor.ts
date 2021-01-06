import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { MessageService } from "./message.service";

import 'rxjs/add/operator/catch';
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        return next.handle(req).catch(error => {
            if(error instanceof HttpErrorResponse) {
                this.messageService.error(`Błąd: ${error.message}`);
            }
            return error;
        }); 
    }

}