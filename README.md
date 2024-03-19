
# Boas vindas a Pizzeria Voors 🍕


# Sumário

- [Apresentação do projeto](#apresentação-do-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Documentação](#documentacao)
- [Testes](#testes)
- [Instalação e uso](#instalação-e-uso)

---

#  Apresentação do projeto
Esse projeto é uma aplicação backend que tem como objetivo realizar o gerenciamento de usuários e pedidos para a pizzeria voors de forma rápida, prática e fácil para clientes e funcionários do estabelecimento.

---

# Tecnologias:
<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a>
  <a href="https://docs.npmjs.com/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a>
  <a href="https://nestjs.com/">
    <img src="https://img.shields.io/badge/nest-339933?style=for-the-badge&logo=nestjs&color=gray" /> 
  </a>
    <a href="https://graphql.org/">
    <img src="https://img.shields.io/badge/graphql-339933?style=for-the-badge&logo=graphql&color=gray" /> 
  </a>
  <a href="https://www.prisma.io/">
    <img src="https://img.shields.io/badge/prisma-339933?style=for-the-badge&logo=prisma&color=gray" />
  </a>
    <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/postgresql-339933?style=for-the-badge&logo=postgresql&color=gray" />
  </a>
     <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />
    </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/eslint-339933?style=for-the-badge&logo=eslint&color=gray" />
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img src=" https://img.shields.io/badge/jest-339933?style=for-the-badge&logo=jest&color=gray "/>
  </a>
  <a href="https://www.npmjs.com/package/dotenv">
    <img src="https://img.shields.io/badge/dotenv-339933?style=for-the-badge&logo=dotenv&color=gray"/>
  </a>
   <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/prettier-339933?style=for-the-badge&logo=prettier&color=gray" />
    </a>
    <a href="https://jwt.io/">
    <img src="https://img.shields.io/badge/jsonwebtoken-339933?style=for-the-badge&logo=jsonwebtoken&color=gray" />
    </a>
</div>

---

# Funcionalidades

**Fluxo de Usuarios**
- Cadastrar um novo usuario
- Listar usuarios cadastrados
- Listar um unico usuario cadastrado
- Editar dados cadastrados
- Excluir cadastro

**Fluxo de Login**
- Realizar Login no sistema

**Fluxo de Pedidos**

*Rotas protegida para usuários logados no sistema*

- Cadastrar um novo pedido
- Listar cargos pedidos relativos ao usuário
- Listar um unico cargo pedido relativo ao usuário
- Excluir pedidos

---

# Documentação

por ter feito o projeto já contém uma documentação própria da ferramenta

---

# Testes:

descrever os testes

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/PizzeriaViaSoft.git
```  
  
Entre na pasta  
  
```  
cd pizzeriaviasoft
  
```  
### Executando o projeto com **docker**

<details>

<summary>Clique para exibir os detalhes</summary>


### Execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up -d
```  

### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down --rmi local --volumes --remove-orphans
```  

</details>

### Executando o projeto **localmente**

<details>

<summary>Clique para exibir os detalhes</summary>

### Substitua as variáveis de ambiente  
  
 em backend:
```  
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

PORT=`número da porta para a aplicação rodar`

JWT_KEY=`uma senha que vai ajudar a criptografar senhas de usuários` 

MONGO_PORT=`número da porta para rodar o mongodb`
```  
  
### Instale as dependências

### Abra o terminais e digite

Abra o terminal e digite:

```  
npm install  
```

### Execute o projeto  
  
em backend use
```  
npm start 
```  

</details>
