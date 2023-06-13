import {produtoService } from "../services/produtos-services.js";

(() => {

  const criaTemplatIndex = (nome, imageUrl, price) => {
    const creatDiv = document.createElement('div')
    creatDiv.classList.add('card');

    const conteudoCard = `
        <img src="${imageUrl}" alt="Imagem do produto">        
        <h1 class="card__nome">${nome}</h1>
        <p class="preco">${price}</p>
        <a class="ver__produto" href="">Ver Produto</a>`

    creatDiv.innerHTML = conteudoCard;

    return creatDiv;
  }

  const dataLuffy = document.querySelector('[data-Luffy]');
  const dataTripulacao = document.querySelector('[data-tripulacao]');
  const dataDiversos = document.querySelector('[data-diversos]');

  produtoService.listaCard()

    .then(data => {

      data.forEach(elemento => {

        if (elemento.section === 'Luffy') {
          dataLuffy.appendChild(criaTemplatIndex(elemento.nome, elemento.imageUrl, elemento.price))
        }

        if (elemento.section === 'Tripulacao') {
          dataTripulacao.appendChild(criaTemplatIndex(elemento.nome, elemento.imageUrl, elemento.price))
        }

        if (elemento.section === 'Diversos') {
          dataDiversos.appendChild(criaTemplatIndex(elemento.nome, elemento.imageUrl, elemento.price))
        }
      });
    })
})()