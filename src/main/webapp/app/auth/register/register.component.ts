import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiLanguageService } from 'ng-jhipster';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
// import { LoginModalService } from '../../shared';

@Component({
    selector: 'jhi-register',
    templateUrl: './register.component.html',
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit, AfterViewInit {

    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;
    registerAccount: any;
    success: boolean;
    modalRef: NgbModalRef;

    constructor(
        private languageService: JhiLanguageService,
        // private loginModalService: LoginModalService,
        private registerService: RegisterService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.success = false;
        this.registerAccount = {};
    }

    ngAfterViewInit() {
        // this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }

    register() {
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then((key) => {
                this.registerAccount.langKey = key;
                this.registerService.save(this.registerAccount).subscribe(() => {
                    this.success = true;
                    this.router.navigate(['/auth/login']);
                }, (response) => this.processError(response));
            });
        }
    }

    openLogin() {
        // this.modalRef = this.loginModalService.open();
    }

    private processError(response) {
        // this.success = null;
        // if (response.status === 400 && response.json().type === LOGIN_ALREADY_USED_TYPE) {
        //     this.errorUserExists = 'ERROR';
        // } else if (response.status === 400 && response.json().type === EMAIL_ALREADY_USED_TYPE) {
        //     this.errorEmailExists = 'ERROR';
        // } else {
        //     this.error = 'ERROR';
        // }
    }
}
