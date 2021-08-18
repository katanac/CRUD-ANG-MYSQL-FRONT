import { Component, OnInit } from '@angular/core';
import { ServicioLocalService, Usuario } from '../../SERVICIOS/servicio-local.service'
import { Router, ActivatedRoute } from '@angular/router'
import { error } from 'protractor';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    firstName: "",
    lastName: "",
    document: "",
    address: "",
    phone: 0,
    email: ""
  }

  constructor(private service: ServicioLocalService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }


  ngOnInit(): void {
    const id_entrada = this.activeRouter.snapshot.params.id;
    if (id_entrada) {
      this.service.obtenerUsuario(id_entrada).subscribe(
        res => {
          this.usuario = res[0];
          console.log(this.usuario)
        },
        err => {
          console.log(err)
        }
      );
    }
  }



  Modificar(id: number) {

    this.service.modificarUsuario(id, this.usuario).subscribe(
      res => { console.log("modificacion realizada correctamente") },
      err => { console.log(err) }

    );

    this.router.navigate(['/Inicio/']);

  }
}
