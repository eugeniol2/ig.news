<!-- <h1> 🚧README EM DESENVOLVIMENTO 🚧 </h1> -->


<div align="center">
  <img align="center" alt="IgniteModule1" width="50%px" height="50%" src="https://github.com/eugeniol2/assets/blob/ignewsAssets/ignite-react.jpg" />
</div>


<h2>Descrição 📝</h2>
<p> O ig.news é um blog, lecionado pela Rocketseat através do ignite, tal projeto foi criado com o nextjs.
</p>

<div>
  <h2>Especificações</h2>
  <section>
    <h4> Funcionais </h4>
    <ul>
      <li>O usuário, não logado, poderá acessar a preview dos posts.</li>
      <li>O usuário, não logado, poderá fazer login com o github.</li>
      <li>O usuário, logado, poderá se inscrever.</li>
      <li>O usuário, logado, inscrito, terá acesso a todos os posts completos.</li>
    </ul>
    <h4> Não-Funcionais </h4>
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
    <h2> Tecnologias </h2>
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
    <h2> Configurações </h2>
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
    <h4> Configurações necessárias para o stripe, fauna e prismic encontram-se no <a href="https://github.com/eugeniol2/assets/blob/ignewsAssets/servicesConfig.md">servicesConfig</a>, na raiz do projeto </h4>
  </section>  
</div>



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
