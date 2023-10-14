import { Component, EventEmitter, Output } from '@angular/core';

//import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  loginForm: any;
  userdata: any;

  mensaje = false;

  autenticado = false;

  @Output() eventoUsuarioLogeado = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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
  }

  onSubmit() {
    //this.autenticando = true;
    //this.userdata = this.saveUserdata();
    this.autService.inicioSesionGoogle();

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
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return saveUserdata;
  }


  isAuth() {
    return this.autService.isAuthenticated();
  }

}


