import { Component } from '@angular/core';
import Swal from 'sweetalert2'

import { LogService } from './services/log.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'simulatepoc_frontend';

    constructor(private logService: LogService) {}

    onSuccess(){
        this.logService.onSuccess();
        // console.log(c);
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            // timer: 1500
        });
    }



    onError()
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }


    onTimeout()
    {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    }
}
