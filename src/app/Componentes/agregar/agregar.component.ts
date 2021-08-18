import { Component, OnInit } from '@angular/core';
import{ServicioLocalService,Usuario} from'../../SERVICIOS/servicio-local.service'
import{Router} from '@angular/router'
import { error } from 'protractor';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  usuario: Usuario={
    
    firstName:"",
    lastName:"",
    document:"",
    address:"",
    phone:0,
    email:""
  }

  constructor(private service: ServicioLocalService,
    private router: Router) { }

  ngOnInit(): void {

  }

  Agregar(){
    this.service.agregarUsuario(this.usuario).subscribe();

    this.router.navigate(['/Inicio/']);
  }

}
