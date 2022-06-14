import { Component, OnInit } from '@angular/core';
import { proce } from 'src/app/models/models';
import { ConsulService } from 'src/app/service/consul.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private proceServe:ConsulService,
  ) { }
   
   procesos:  proce[]=[];
   listopro!: proce[];

  ngOnInit(): void {
    this.listarPendientes();
    this.listos();
  }

  listarPendientes(){
    this.proceServe.getProceso().subscribe(
      (res) =>{
        for (const key in res) {
          const temp= {
            Nombre: res[key].Nombre,
            PID: res[key].PID,
            Nombre_de_sesion:res[key].Nombre_de_sesion,
            _de_ses: res[key]._de_ses,
            Uso_de_memor: res[key].Uso_de_memor,
            Estado: res[key].Estado,
            Nombre_de_usuario: res[key].Nombre_de_usuario,
            Título_de_ventana: res[key].Título_de_ventana,
          }
          this.getProcese(temp)
        }
        // console.log(this.procesos)
        // console.log(res);
        //  this.procesos=<any>res;
        // console.log(this.procesos);
        //  cosnt le= (this.procesos[1].Nombre_de_sesion);
        // h.len
        console.log(this.procesos[1].Nombre_de_sesion);
        // return this.procesos;
      }
    ) 
    return this.procesos;
  }


  getProcese(proce){
    this.procesos.push(proce)
  }

  // ngAfterViewInit(){
  //   this.listos()
  // }

  listos(){
    this.procesos[1]
    console.log(this.procesos[1]);

  }

  



}
