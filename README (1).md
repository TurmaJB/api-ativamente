
# API Node.JS

##Como funciona a Api:
{
  "text": "Seu texto aqui"
} 

##Exportando
curl -X POST http://localhost:3000/export \
-H "Content-Type: application/json" \
-d '{"text": "Este é o texto que será exportado para o arquivo."}'









## Prévia da Documentação da API

#### Cria todos os itens

```http
  POST /livros

```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- 
| titulo      |	string     | Obrigatório.Título do livro
  autor	      | string     | Obrigatório.Autor do livro   
  quantidade  |	integer    | Obrigatório.Quantidade disponivel do livro      
  editora	  | string     | Obrigatório.Editora do livro
  assunto	  | string     | Obrigatório.Assunto do livro
  faixaEtaria |	string     | Obrigatório.Faixa  etária                             |



#### Retorna todos os itens


```http
  GET /livros

```

Retorna uma lista de todos os livros cadastrados na biblioteca.


#### Documentação Completa


