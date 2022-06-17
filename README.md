
# Projeto Wallet

#### Este foi um projeto da **Trybe** em que testamos nossos conhecimentos ao acessar uma Api de câmbio, onde o usuário poderia anotar seus gastos e fazer a conversão pra qualquer moeda, e ele foi desenvolvido para por em prática nossos conhecimentos da bibliotéca Redux, também foi testado as manipulações entre componentes do React, a criação e manipulação do forms e seus inputs, além da estilização dos componentes. Ele tem como objetivo mostrar meus conhecimentos em **React**, **Javascript**, **manipulação de componentes**, **CSS**, **página de login**  e **Redux**. 
---
<br>

Este projeto foi importante, pois nele consegui testar meus conhecimentos em Redux, que é uma biblioteca de gerênciamento de estado global no React. Com isso, os estados poderiam ficar armazenado em um local separado, e os componentes poderiam acessar esses dados e editá-los de forma direta. Também utilizei a criação de tabela para montar a planília de gastos para o usuário.

<br>


### **Tecnologias utilizadas**
---
---


<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"></img>



---
---
<br>
<br>

## **SOBRE:**
---
 Neste projeto, através de uma requisição de uma api, o usuário pode anotar seus gastos em diferentes tipos de moeda. </br>

 A aplicação se inicia em uma tela de login, onde é necessário colocar um **email de formato válido**. Ou seja ter nome@domíno.com por exemplo: alguem@alguem.com. E ter **uma senha válida**, no nosso caso ter no mínimo 6 dígitos. Depois disso, o botão **Entrar** será disponibizado.
 
 Ao clicar nesse botão Enviar, somos redirecionados a uma outra página, onde temos um Header com o email inserido na tela de login, e o valor total adicionado até o momento. Inicía-se em 0.00BRL moeda Real.
 
Logo abaixo, temos os campos: **Valor, Descrição, Moeda, Método de pagamento, Tag** e o botão **Adicionar despesas**.

- **Valor**: Deve ser inserido o valor gasto, em caso de casa decimais deve-se utilizar ponto. ex: 12.05 e não 12,05.
- **Descrição**: Deve ser inserido o motivo  de ter gasto o dinheiro.
- **Moeda**: Dever ser inserido em que moeda foi gasto o dinheiro.
- **Método de pagamento**: Deve ser inserida a forma de pagamento.
- **Tag**: Deve ser inserida a classificação da compra.
 </br>

Ao clicar no botão **Adicionar despesas**, as informações irão aparecer em uma tabela no campo abaixo, mostrando também o nome da Moeda utilizada no campo **Moeda**, a cotação atual da moeda selecionada no campo **Câmbio utilizado**, o valor convertido para Real. Temos também dois botões: **Editar** e **Exluir**. Ao clicar no botão excluir, o item selecionado é removido da lista. O botão editar não funciona, ele está apenas como exempĺo de como seria em uma aplicação mais completa.

  </br>
  Na página principal, também possui um botão **ADICIONAR CARTÃO** onde é possível adicionar um novo filme, e até a imagem colando o link de uma imagem.
  
  </br>
  Nas transições entre páginas, aparece a palavra carregando, até que as operações solicitadas estejam prontas.

<br>
<br>

## Exemplo
---
### Login
<img src="./login.gif" width="700"></img>
<br>

### Adicionando dados a tabela
<img src="./carteira.gif" width="700"></img>
<br>

### Excluindo
<img src="./btnExcluir.gif" width="700"></img>


## Baixando o projeto
---
Caso queira clonar para rodar localmente, após dar o gitclone em sua máquina, devemos entrar na pasta raíz do projeto e executar no terminal o comando **npm install** para instalar todas as dependências, e após tudo instalado, é preciso rodar o comando **npm start** para iniciar em seu navegador. É necessário o node.js instalado.



## Caso queira ver na prática como funciona, acesse o link abaixo: 
---
<br>
https://project-wallet-sand.vercel.app/
