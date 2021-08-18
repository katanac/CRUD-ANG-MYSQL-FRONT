import { Component, OnInit } from '@angular/core';
import{ServicioLocalService,Usuario} from'../../SERVICIOS/servicio-local.service'
import{Router} from '@angular/router'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  //atributos
  ListaUsarios: Usuario[];


  constructor(private ServicioLocal:ServicioLocalService,
    private router:Router) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }


  listarUsuarios(){
    this.ServicioLocal.obtenerUsuarios().subscribe(
      res=>{
  this.ListaUsarios= <any> res;
      },
      err=>console.log(err)
    )
  }


  eliminar(id:number){
    this.ServicioLocal.eliminarUsuario(id).subscribe(
      res=>{
        console.log("usuario Eliminado")
        this.listarUsuarios();
      },
      err=>console.log(err)
    )
  }

  modificar(id:number){
    this.router.navigate(['/Edicion/'+id]);
  }

}
