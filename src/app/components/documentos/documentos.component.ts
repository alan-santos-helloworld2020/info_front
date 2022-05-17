import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDocumento } from 'src/app/interfaces/IDocumento';
import { ServicoService } from 'src/app/services/servico.service';

declare const M: any;

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css'],
})
export class DocumentosComponent implements OnInit {
  constructor(private servico: ServicoService, private route: Router) {}

  dados: IDocumento = {
    id: 0,
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: '',
  };
  documentos: IDocumento[] = [];

  ngOnInit(): void {
    M.AutoInit();
    this.servico.findAll().subscribe((data) => (this.documentos = data));
  }

  delete(documento: IDocumento): Boolean {
    if (confirm('Deseja realmente remover?')) {
      this.servico.delete(documento).subscribe();
      window.location.reload();
      return true;
    } else {
      return false;
    }
  }
  async findById(id?: number) {
    await this.servico.findById(id).subscribe(async (data) => {
      this.dados = data;
    });
  }

  onSubmit() {
    this.servico.update(this.dados).subscribe({
       complete:()=>{
         alert("alterado com sucesso:)");
         window.location.reload();
       },
       error:(err)=>alert(err.message)

    })
  }
}
