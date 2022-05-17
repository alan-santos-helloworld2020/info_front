import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDocumento } from 'src/app/interfaces/IDocumento';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private servico:ServicoService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(documento:IDocumento){
    this.servico.save(documento).subscribe(
      {
        complete:()=>{
          alert("salvo com sucesso:)")
          this.route.navigate(["/tabela"])
        },
        error:()=>alert("desculpe houve um erro:(")
      }

    )
  }

}
