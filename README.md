# Typescript e seus Conceitos Basicos

## O que se trata esse projeto?
Nesse projeto é colocado em prática conceitos básicos do Typescript como:

## - Por que usar Typescript?
As vantagens de usar, o porque de usar, mitos e verdades do Typescript e como é usado.

## - Criando e configurando um projeto usando Typescript
Como criar um projeto em Typescript, instalar a dependência Typescript no projeto, configurar o projeto
criando o arquivo de configuração tsconfig.json que nele configuramos que ele crie uma pasta /dist para assim
nessa pasta ficarem os arquivos javascript transpilados dos arquivos typescript. 
Quando nós alteramos o código typescript, precisamos transpilar novamente para javascript usando o comando:
### yarn tsc

Para executar o projeto digitamos node, depois a pasta onde fica os arquivos javascript transpilado do typescript e 
logo depois o arquivo index.js do projeto que fica nessa mesma pasta /dist
### node dist/index.js

## - Quando adicionar tipos
Aprendemos quando adicionar e não adicionar tipos. Aprendemos também adicionar tipagem em uma dependência importada no projeto
caso o editor peça.

## - Como tipar variaveis, objetos e vetores
