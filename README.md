# Instruções de instalação.
Para a instalação do Angular é necessário instalar alguns componentes, sendo eles: Node, Typescript e Angular CLI. 
## Node
Os passos para a instalação do Node encontram-se presentes neste link [Node](https://nodejs.org/en/download/), após a instalação do node o NPM, Node Package Manager (Gerenciador de Pacotes do Node) já estará disponível e será possível instalar os outros componentes através do NPM.

## Typescript
O typescript sendo um Javascript um pouco mais encorpado que facilitará a vida do desenvolvedor em alguns aspectos, para instalar digite:
 
> npm install -g typescript

## Angular CLI

O CLI Angular é uma ferramenta de interface de linha de comando, que cria, gerencia e executar uma variedade de tarefas de desenvolvimento, como teste, agrupamento e implantação.

> npm install -g @angular/cli

# Contextualização da tecnologia
O Angular 4, é uma evolução do angular 2, o qual foi reescrito em relação ao Angular 1 e não existiu um versão 3, Essas nomenclaturas tendem a se tornarem menos relevantes, uma vez que o angular pretende fazer atualizações a cada 6 meses e é desejável que esta categorização se torne menos relevante, e o Angular passe a ser tratado somente como Angular, como acontece com o Node, React, Vue etc.

O Angular é um Framework open-source mantido pelo Google, que utiliza alguns dos principais conceitos para aumentar a produtividade no desenvolvimento Web, em aplicações que rodam no dentro do navegador do cliente, sendo que o Angular já foi desenvolvido pensando para que o desenvolvedor escreva a menor quantidade de código possível, isto ocorre em parte pelo fato do Angular ser orientado a components. 

O angular é dividido 8 principais blocos, Components, Diretivas, Roteamento, Serviços, Template, Metadata, Data Binding e Injeção de dependência.

![Modulos](http://i.imgur.com/GUN2fEK.png)
[Fonte](https://www.youtube.com/watch?v=tPOMG0D57S0&index=1&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)

Demonstração da comunicação da arquitetura disponível na documentação do Angular
![arquitetura](https://angular.io/generated/images/guide/architecture/overview2.png)
[Fonte](https://angular.io/guide/architecture)

# Hello World
Criar um novo projeto
> ng new my-app

Iniciar o servidor
> cd my-app
> ng serve --open

Vamos editar nosso primeiro componente, abrir o arquivo "src/app/app.component.ts", editar o parâmetro  de titulo

export class AppComponent {
  title = 'Meu primeiro exemplo';
}
O aplicativo atualiza automaticamente.


# Todo app.
Essa secção apresenta um tutorial feito no angular, sobre um aplicativo single page para modificação de texto sem a utilização de javascript, você pode acessa-lo na seguinte url [App exemplo](https://app3-cb8d6.firebaseapp.com/)

Criamos um novo projeto
> ng new gallery

Para iniciar o servidor utiliza-se
> ng server
Caso queira abrir a página no navegador
> ng server -o

Abra o arquivo index.html, e você vera uma linha contendo um app-root isso é um componente, que pode ser configurado no arquivo app.component.ts

### index.html

```
<body>
  <app-root>Loading...</app-root>
</body>
```

### app.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gallery works!';
}
```
Vamos iniciar alterando o app.component.html, inserindo um input e uma lista, onde será inserido e exibido o texto modificado.

```
<!--The whole content below can be removed with the new code.-->
<div class="main">
  <div class="addItem">
    <h1>Item's List</h1>
    <input placeholder="Add Item" class="addText">
    <button>Add</button>
  </div>
  <ul>
    <li>
      Abc
      <span>Item</span>
    </li>
  </ul>
</div>
```
Opcionalmente podemos configurar o css no arquivo app.components.css, o estudo de css foge do escopo do trabalho.
```
.main {
    width: 500px;
    text-align: center;
    margin: 0 auto;
    border: 2px solid #d7d7d7;
    border-bottom: 0px;
    margin-top: 20px;
    font-family: sans-serif;
}
h1 {
    text-align: center;
    background-color: #5c8297;
    padding: 30px 0px;
    margin-top: 0px;
    color: white;
}


 
.addText {
    width: 80%;
    height: 30px;
    padding:  5px;
    font-size: 20px;
}

.addItem button {
    height: 45px;
    width: 50px;
    padding: 5px;
}

ul {
    list-style: none;
    font-size: 20px;
    color: white;
    margin-left: -40px;
    margin-bottom: 0px; 
}

li {
    border-bottom: 1px solid #bfbfbf;
    background-color: #004d40;
    padding: 10px 0px;
    margin-bottom: 5px;
}

span {
    cursor: pointer;
    position: relative;
    float: right;
    margin-right: 10px;
}
```

## NgFor
vamos agora modificar nosso componente, no arquivo app.component.ts, em App component inserimos os itens que serão inseridos e percorridos.

```
export class AppComponent {
 items = ['Angular', 'React', 'Vue', 'Ember', 'Outro'];
}
```

Estes 'items' normalmente são dinâmicos fornecidos pelo backend da aplicação.

Agora precisamos exibi-los na tela, para isto alteramos o arquivo app.component.html
```  
<ul>
    <li *ngFor = "let i of items">
      {{i}}
      <span>x</span>
    </li>
</ul>
```

Utilizamos o ngFor para percorrer a lista de itens definidos anteriormente no componente, basicamente utilizamos o "let i of items" e imprimios os dados de i em {{i}}.

## ngModule
Vamos agora criar um ngModule, este permite organizar a aplicação através de módulos, em app.components.ts.
Dentro do AppComponent criamos um novo item.

```
export class AppComponent {
 items = ['Angular', 'React', 'Vue', 'Ember', 'Outro'];
 
 newItem ="";
 pushItem = function() {
   if(this.newItem != ""){
     this.items.push(this.newItem);
     this.newItem = "";
   }
 }
}
```

Criamos aqui um module newItem em branco
 newItem ="";
e utilizarmos uma função 'pushItem' que verifica se o 'newItem' não estiver vazio, defini o valor do newItem no valor inserido no mesmo, ou seja sobeescreve o valor atual, caso este não esteja vazio.

Então no app.component.html inserimos o ngModel] definido no input

```
<h1>Item's List</h1>
<input [(ngModel)] = "newItem" placeholder="Add Item" class="addText">
<button>Add</button>
```

Para o ngModel funcionar devemos importar o FormsModule no app.module.ts

```
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  imports: [
    BrowserModule,
    AlertModule,
    FormsModule,
  ],
```

Agora precisamos chamaremos a função pushItem() no botão.

```
<button (click) = "pushItem()">Add</button>
```

Agora para remover os itens, criamos uma segunda função 'removeItem', no arquivo app.components.ts

```
 removeItem = function(index) {
   this.items.splice(index, 1);
 }
```

Para a exclusão utilizamos o índice do item na lista e passamos como argumento para a função.

```
  <ul>
    <li *ngFor = 'let i of items; let ind = index'>
      {{i}}
      <span (click) = "removeItem(ind)">x</span>
    </li>
  </ul>
```

## Deploy
Depois que seu aplicativo estiver finalizado é hora de coloca-lo online, o angular já possui os mecanismos necessários para execução desta tarefa de modo bem otimizado, para realizar o deploy primeiro empacotamos nosso app.

> ng build --prod

Este comando criara uma pasta chamada 'dist', esta página cotem os arquivos gerados pelo Angular prontos para serem utilizados em produção.

Para o deploy utilizaremos o host do "firebase", é necessário criar uma conta na plataforma.

Para instalar o pacote responsável pelo deploy digite no terminal
> npm i -g firebase-tools

Realize o login

> firebase login

inicialize o firebase

> firebase login

Selecione a opção "hosting"

Selecione a pasta 'dist'
E apos execulte o deploy

>firebase deploy

