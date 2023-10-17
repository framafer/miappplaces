import { Component, EventEmitter, Output } from '@angular/core';

//import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  loginConUsConForm: any;
  loginConGoogleForm: any;
  userdata: any;

  mensaje = false;

  autenticado = false;

 

  @Output() eventoUsuarioLogeado = new EventEmitter();
  @Output() eventoALogearse = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.loginConUsConForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });
    this.loginConGoogleForm = this.formBuilder.group({});

  }


  onSubmitConUsCon() {
    //this.autenticando = true;
    //this.userdata = this.saveUserdata();
    const usuario = this.saveUserdata();
    this.autService.registroUsuarioUsCon(usuario);

    /* if(this.autService.usuarioAutenticado){
      this.autenticado = true;
      this.eventoUsuarioLogeado.emit();
    } */
    setTimeout(() =>{
      if (this.autService.usuarioAutenticado === true){
        this.autenticado = true;
        console.log("Estoy dentro de inicio y this.autenticado vale:", this.autenticado);
        this.eventoUsuarioLogeado.emit();
        //this.router.navigate(['/miapproot']);
      } 
    },3000);
    

    //setTimeout(() => {
      /* if (this.isAuth() === false) {
        this.mensaje = true;
        this.autenticando = false;
      } */
    //}, 6000);
  }


  onSubmitConGoogle() {
    //this.autenticando = true;
    //this.userdata = this.saveUserdata();
    this.autService.registroUsuarioGoogle();

    /* if(this.autService.usuarioAutenticado){
      this.autenticado = true;
      this.eventoUsuarioLogeado.emit();
    } */
    setTimeout(() =>{
      if (this.autService.usuarioAutenticado === true){
        this.autenticado = true;
        console.log("Estoy dentro de inicio y this.autenticado vale:", this.autenticado);
        this.eventoUsuarioLogeado.emit();
        //this.router.navigate(['/miapproot']);
      } 
    },3000);
    

    //setTimeout(() => {
      /* if (this.isAuth() === false) {
        this.mensaje = true;
        this.autenticando = false;
      } */
    //}, 6000);
  }
  saveUserdata() {
    const saveUserdata = {
      email: this.loginConUsConForm.get('email').value,
      password: this.loginConUsConForm.get('password').value,
    };
    return saveUserdata;
  }


  isAuth() {
    return this.autService.isAuthenticated();
  }

  ALogearse(){
    this.eventoALogearse.emit();
  }




}
