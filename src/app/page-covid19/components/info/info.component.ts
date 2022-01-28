import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public infoList = [
    {
      date: '31/01/22',
      content: 'Fim do prazo para o cadastro do comprovante de vacinação',
    },
    {
      date: '15/01/22',
      content:
        'Reitoria prorroga o prazo para envio do comprovante de vacinação de 18/01 para 31/01',
    },
    {
      date: '14/01/22',
      content:
        'É disponibilizado, no SISGRAD, um espaço para o cadastro do comprovante de vacinação',
    },
    {
      date: '12/01/22',
      content: 'Reitoria prorroga o retorno ao presencial para 6 de março',
      url: 'https://unesp.br/Home/covid19/comunicado-n-1-de-2022-do-comite-unesp-covid-19.pdf',
    },
    {
      date: '08/01/22',
      content:
        'Reitoria torna obrigatório a apresentação do comprovante de vacinação',
      url: 'https://unesp.br/portal#!/noticia/36692/unesp-torna-obrigatorio-comprovante-de-vacinacao-contra-covid-19/',
    },
  ];

  constructor() {}

  ngOnInit() {}
}