![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

# spacetraveling
Spacetraveling é um desafio de um blog feito com Next.js e Prismic CMS, proposto pelo curso Ignite da Rocketseat.

## Instalação
Dentro da pasta spacetraveling, instale as depedências com o comando: ``yarn install``.

## Configuração
### Configuração do Prismic CMS
Crie uma conta no [<https://prismic.io/>].

No dashborad, crie um repositório.

Depois em "Custom type", clique em criar um "Repeatable Type" com 8 campos:
- slug. Tipo: UID
- title. Tipo: Key Text
- subtitle. Tipo: Key Text
- author. Tipo: Key Text
- banner. Tipo: Image
- content. Tipo: Group

  campos internos do Content:
  - heading. Tipo: Key Text
  - body. Tipo: Rich Text


Para ter obter o endpoint: Settings -> API & Security


### Váriaveis locais
Crie um arquivo ``.env.local`` na raiz do projeto.
Adicione a seguinte chave:

~~~
# Prismic CMS
PRISMIC_ENDPOINT= endpoint da API
~~~


## Executar o projeto
Executar os comandos: ```yarn dev```
