<h1 align="center">
   📕 <a href="#"> Agenda de Contatos</a>
   <br>
   <img src=https://img.shields.io/badge/API%20REST-PHP%2FLaravel-red></img>
   <img src=https://img.shields.io/badge/Setup-Docker-blue></img>
</h1>

<h3 align="center">
    
</h3>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#como-executar-o-projeto">Como Executar o Projeto</a> •
 <a href="#feito-com">Feito com</a> • 
 <a href="#autor">Autor</a> • 
<a href="#autor">Dedicatória</a> 
</p>

## Sobre

Esse projeto tem como objetivo mostar mostrar/exercictar meus conhecimentos em PHP (Laravel), com um CRUD no Padrão API REST.

* Create (Inserir/Criar dados)
* Read (Selecionar/Ler dados)
* Update (Atualizar dados existentes)
* Delete (Excluir dados)

<hr>

## Como Executar o Projeto ?

<p>O Projeto utiliza um Setup Docker/docker-compose com containers já configurados com todos os requisitos para execução.</p>

<p>Para executar o projeto, siga os seguintes passos:</p>

<br>

* Abra o terminal dentro da pasta "appAgenda (Back)" e execute o comando "docker-compose up -d"

<br>

* Dentro do terminal execute o comando "docker exec -it appagendaback_php-fpm_1 /bin/bash" para entrar no terminal do container

<br>

* Dentro do terminal do container execute o comando "composer install" para instalar as dependências do projeto.

<br>

* Ainda Dentro do terminal do container execute o comando "php artisan migrate" para executar as migrações no Banco de dados.

<br>

* Por fim Acesse a pasta "appAgenda (Front)" e abra o arquivo index.html

<br>

<p><strong>Observação:</strong> As portas usadas pelos serviços na máquina Host são 46000 (WebServer) e 46002 (mysql). Certifique-se de estarem livres.</p>
<p><strong>Observação 2:</strong> Deixei o meu arquivo dotENV (.env) com todas as configuração necessárias para rodar a aplicação</p>

<hr>

## Recursos

- [x] Conteinerização dos serviços com Docker
      <br>
- [x] Consumo de API via JS (Ajax)
      <br>
- [x] Integração com API/Microserviço "ViaCep" Para adiquirir dados relacionados ao CEP
      <br>
- [x] Tratamento de dados JSON
      <br>
- [x] Criação de elementos Dinamicamente via JS (JQuery)

<hr>

## Feito com
<div>
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker">
    <img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="laravel">
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html5">
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="css3">
    <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="b5">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="js">
    <img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" alt="jquery">
    
</div>

<hr>

## Autor

<a href="https://github.com/lucasMSF">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/lucasmsf" width="100px;" alt="Lucas Mathias de Souza Farias"/>
 <br />
 <sub><b>Lucas Mathias</b></sub></a> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucas-mathias-729a27181/)](https://www.linkedin.com/in/lucas-mathias-729a27181/)
[![Gmail Badge](https://img.shields.io/badge/-lucasmathias936@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lucasmathias936@gmail.com)](mailto:lucasmathias936@gmail.com)

 ## Dedicatória
 <h5>Este Projeto é dedicado a empresa <a href="https://amarassist.com.br/">Amar Assist</a></h5>
 <img style="border: 8px solid rgb(235, 158, 52); border-radius: 8px; box-shadow: 5px 5px 5px gray" width=400  src="https://amarassist.com.br/img/img_facebook.png">
