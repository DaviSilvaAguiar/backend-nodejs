# InstaLike Backend

Este é o backend do projeto **InstaLike**, desenvolvido do zero como parte de um curso oferecido pela [Alura](https://www.alura.com.br/). O projeto foi criado para aplicar conceitos de desenvolvimento de APIs com Node.js, integração com bancos de dados MongoDB, e manipulação de imagens. 

Este backend fornece funcionalidades como:
- Cadastro de posts com imagens.
- Atualização de informações do post.
- Upload e exclusão de imagens.
- Integração com MongoDB Atlas.

## 🚀 Funcionalidades

- **Listar Posts**: Exibe todos os posts armazenados no banco de dados.
- **Criar Post**: Permite criar um novo post com informações fornecidas pelo cliente.
- **Upload de Imagens**: Suporte para upload e associação de imagens aos posts.
- **Atualizar Post**: Modifica informações de um post existente.
- **Deletar Post e Imagem**: Exclui um post e a imagem correspondente.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte maneira:
- **config**: Configuração de conexão com o MongoDB Atlas.
- **controllers**: Contém as funções que implementam a lógica principal do backend.
- **models**: Define as interações com o banco de dados.
- **routes**: Gerencia as rotas de API e suas respectivas funções.
- **services**: Serviços adicionais usados no projeto.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express.js**: Framework para criação de APIs RESTful.
- **MongoDB**: Banco de dados não relacional, com uso do MongoDB Atlas para armazenamento na nuvem.
- **Multer**: Middleware para manipulação de uploads de arquivos.
- **Dotenv**: Para gerenciamento de variáveis de ambiente.

## 🔧 Como Usar

### Pré-requisitos
- Node.js instalado na máquina.
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para configurar o banco de dados.
- Ferramentas como Postman ou Insomnia para testar as rotas da API.

### Instalação
1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/backend-nodejs.git
