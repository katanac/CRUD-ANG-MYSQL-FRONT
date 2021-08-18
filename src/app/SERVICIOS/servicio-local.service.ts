import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioLocalService {

  url='http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  //consumos api

//get Usuarios

obtenerUsuarios(){
  return this.http.get(this.url);
}

//get Usuario

obtenerUsuario(id:string){
  return this.http.get(this.url+'/'+id);
}

//agregar Usuario

agregarUsuario(usuario:Usuario){
return  this.http.post(this.url, usuario);
}

//eliminar Usuario

eliminarUsuario(id:number){
  return  this.http.delete(this.url+"/"+id);
  }

//modificar Usuario
  
modificarUsuario(id:number, usuario:Usuario){
  return  this.http.put(this.url+"/"+id,usuario);
  }
}



export interface Usuario{
  id?:number,
  firstName?:string,
  lastName?:string,
  document?:string,
  address?:string,
  phone?:number,
  email?:string
}