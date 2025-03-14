# Help System API

### Dependências do projeto.
- Possuir o **Node** na máquina.
- Possuir o **NPM** na máquina.

### Como usar este projeto.
Primeiro, clone o projeto usando:
```
git clone https://github.com/alegandolfo/Help-System-API
```
No seu terminal, navegue até a pasta do projeto e use o comando `npm install`.

Troque o nome do arquivo **".env.example"** para **".env"** e preencha as variáveis com os dados de sua base de dados MongoDB.
```
DB_HOST=HostDoSistema
DB_USER=UsuárioDoBanco
DB_PASSWORD=SenhaDoUsuário
```

Se você possui todas as dependências instaladas e o arquivo .env preenchido, então use o comando `npx tsx src/server.ts` para inicializar o projeto. Caso deseje, é possível mudar a porta padrão no arquivo `config.ts`.


### Rotas do projeto.
> [GET] http://localhost:3300/ - Mensagem padrão.  

> [POST] http://localhost:3300/user - Inserção de usuário.  
> [GET] http://localhost:3300/user/{userEmail} - Visualização de usuário.  
> [PUT] http://localhost:3300/user - Atualização de usuário.  
> [DELETE] http://localhost:3300/user/{userEmail} - Remoção de usuário.  

> [POST] http://localhost:3300/post - Inserção de pergunta.  
> [GET] http://localhost:3300/post/{postId} - Visualização de pergunta.  
> [PUT] http://localhost:3300/post - Atualização de pergunta.  
> [DELETE] http://localhost:3300/post/{postId} - Remoção de pergunta.  
> [GET] http://localhost:3300/post - Listagem de perguntas.  

> [POST] http://localhost:3300/reply - Inserção de resposta.  
> [GET] http://localhost:3300/reply/{replyId} - Visualização de resposta.  
> [PUT] http://localhost:3300/reply - Atualização de resposta.  
> [DELETE] http://localhost:3300/reply/{replyId} - Remoção de resposta.  
> [GET] http://localhost:3300/reply/{postId}/list - Listagem de respostas.  