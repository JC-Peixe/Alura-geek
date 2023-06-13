/* Conexão com o servidor */
const listaCard = () => {
  return fetch(`https://my-json-server.typicode.com/Jc-peixe/Alura-cursos/produto`)
  /* return fetch(`http://localhost:3000/pruduto`) */
    .then(resposta => {
      return resposta.json();
    })
}

/* Adiciona produto */
const adicionaProduto = (nome, imageUrl, price, section, id) => {
  return fetch(`https://my-json-server.typicode.com/Jc-peixe/Alura-cursos/produto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        imageUrl: imageUrl,
        price: price,
        section: section,
        id: id
      })
    })

    .then(resposta => {
      return resposta.body
    })
}

/* Remove produto */
const removeProduto = (id) => {
  return fetch(`https://my-json-server.typicode.com/JC-Peixe/Alura-cursos/produto/${id}`, {
    method: 'DELETE'
  })
}

/* mostra produto */
const mostraProduto = (id) => {
  return fetch(`https://my-json-server.typicode.com/JC-Peixe/Alura-cursos/produto/${id}`)
    .then(resposta => {
      return resposta.json();
    })
}

/* Atualiza produto */
const atualizaProduto = (id, nome, imageUrl, price, section) => {
  return fetch(`https://my-json-server.typicode.com/JC-Peixe/Alura-cursos/produto/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        imageUrl: imageUrl,
        price: price,
        section: section

      })
    })
    .then(resposta => {
      return resposta.json();
    })
}

/* exportando os serviços */
export const produtoService = {
  listaCard,
  adicionaProduto,
  removeProduto,
  mostraProduto,
  atualizaProduto
}
