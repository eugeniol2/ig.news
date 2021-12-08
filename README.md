
<div align="center">
  <img align="center" alt="IgniteModule1" width="50%px" height="50%" src="https://github.com/eugeniol2/assets/blob/ignewsAssets/ignite-react.jpg" />
</div>


<h2>Descrição 📝</h2>
<p> O ig.news é um sistema blog, feito em nextjs, que tem por intuito a listagem de posts e uma forma de pagamento para acesso total de tais posts através do stripe.
</p>
<p> 
  O sistema se comunica/armazena dados no banco de dados Fauna que também é conectado com as informações "ouvidas" do webhook do stripe.
  É utilizado o next auth para autenticação com o github, fornecendo status de logado ao usuário, dentre outras funcionalidades listadas abaixo.
</p>
<div>
  <h2>Especificações 🛠</h2>
  <section>
    <h4> Funcionais 🔨</h4>
    <ul>
      <li>O usuário, não logado, poderá acessar a preview dos posts.</li>
      <li>O usuário, não logado, poderá fazer login com o github.</li>
      <li>O usuário, logado, poderá se inscrever.</li>
      <li>O usuário, logado, inscrito, terá acesso a todos os posts completos.</li>
    </ul>
    <h4> Não-Funcionais 🔧</h4>
    <ul>
      <li>Ao clicar em sign-in o sistema, atravéz do Oauth irá autenticar o usuário com o github e criar um usuário no faunaDB se o mesmo não existir.</li>
      <li>Ao clicar em inscrever-se o sistema redirecionará o usuário para a tela de pagamento fornecida pelo stripe. </li>
      <li>Ao clicar em increver-se o sistema verificará se o usuário é ativo ou não ativo, se não ativo,o sistema redirecionará o usuário para a tela de posts.</li>
      <li>Após confirmação do pagamento o sistema enviará o status da inscrição do usuário para o faunaDB, ativo, ou não ativo.</li>
      <li>Ao clicar no post, o sistema verificará se o usuário possui uma inscrição ativa, se não ativa, o sistema redirecionará o usuário para a tela home</li>      
    </ul>
  </section>
</div>

<div>
  <section>
    <h2> Tecnologias 💾</h2>
    <ul>
      <li><a href="https://nextjs.org/">NextJs</a></li>
      <li><a href="https://reactjs.org/">ReactJs</a></li>
      <li><a href="https://prismic.io/">Prismic</a></li>
      <li><a href="https://fauna.com/">FaunaDB</a></li>
      <li><a href="https://www.typescriptlang.org/">Typescript</a></li>   
      <li><a href="https://next-auth.js.org/">Next-Auth</a></li> 
      <li><a href="https://sass-lang.com/">SASS</a></li> 
    </ul>
  </section>  
</div>

<div>
  <section>
    <h2> Configurações ⚙</h2>
    <h4>Realizar a instalação dos seguintes items</h4>
    <ul>
      <li><a href="https://classic.yarnpkg.com/lang/en/">Yarn</a></li>
      <li><a href="https://git-scm.com/">Git</a></li>
      <li><a href="https://stripe.com/docs/stripe-cli">Stripe_CLI</a></li>
    </ul>
    <h4>Configurações de serviçoes de terceiros</h4>
    <ul>
      <li><a href="https://stripe.com/br">Stripe</a></li>
      <li><a href="https://fauna.com/">FaunaDB</a></li>
      <li><a href="https://prismic.io/">Prismic</a></li>
    </ul>
    <h4> Configurações necessárias para o stripe, fauna e prismic encontram-se no <a href="https://github.com/eugeniol2/assets/blob/ignewsAssets/servicesConfig.md">servicesConfig</a> </h4>
  </section>  
</div>
<h1> Iniciando o projeto 🚀</h1>

```bash

# Clonar o projeto.
$ git clone https://github.com/eugeniol2/ig.news
# Entrar na pasta do projeto clonado.
$ cd ignews

```

```bash

# Execute yarn para instalar as dependências da aplicação.
$ yarn

# Execute stripe listen para receber/ouvir atualizações dos webhooks.
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação.
$ yarn dev

```

<h1> Variáveis ambiente ♟</h1>
<p>É necessário criar um arquivo .env na raiz do projeto e preencher as seguintes variáveis</p>

<h4> Stripe </h4>

<ul>
  <li>STRIPE_API_KEY</li>
  <li>STRIPE_SUCCESS_URL=http://localhost:3000/posts</li>
  <li>STRIPE_CANCEL_URL=http://localhost:3000</li>
  <li>STRIPE_WEBHOOK_SECRET</li>
  <li>NEXT_PUBLIC_STRIPE_PUBLIC_KEY</li>
</ul>



<h4> Github </h4>
<ul>
  <li>GITHUB_CLIENT_ID</li>
  <li>GITHUB_CLIENT_SECRET</li>
</ul>


<h4> Fauna DB </h4>
<ul>
  <li>FAUNADB_KEY</li>
</ul>

<h4> Prismic </h4>
<ul>
  <li>PRISMIC_END_POINT</li>
  <li>PRISMIC_ACCESS_TOKEN</li>
</ul>

<h2> O que aprendi com este projeto </h2>
  
 <p>
   Tal curso forneceu-me uma grande experiência prática do uso e funcionalidades do nextJS, e conhecimentos sobre integração com faunaDB, e como utilizar o stripe
  para receber pagamentos, tais como assinaturas, produtos. etc
  </p>
 
<div align="center">
  <h2> Ilustrações do projeto </h2>
  <h3> Tela inicial </h3>
  <img align="center" alt="IgniteHome"  src="https://github.com/eugeniol2/assets/blob/ignewsAssets/home.png" />
  <h3> Amostra do post, conteúdo gratuito </h3>
  <img align="center" alt="IgnitePostPreview"  src="https://github.com/eugeniol2/assets/blob/ignewsAssets/postPreview.png" />
  <h3> Tela de pagamento do stripe </h3>
  <img align="center" alt="IgnitePaymentPage"  src="https://github.com/eugeniol2/assets/blob/ignewsAssets/paymentPage.png" />
  <h3> Seção de posts </h3>
  <img align="center" alt="IgnitePostsPage"  src="https://github.com/eugeniol2/assets/blob/ignewsAssets/postsPage.png" />
  <h3> Tela do post </h3>
  <img align="center" alt="IgnitePost"  src="https://github.com/eugeniol2/assets/blob/ignewsAssets/post.png" />
</div>
<br>

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
<br>
<p> Feito com ❤ por Eugênio Araújo. </p>
