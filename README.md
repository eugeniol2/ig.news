<!-- <h1> 🚧README EM DESENVOLVIMENTO 🚧 </h1> -->


<h1 align="center">
  <img align="center" alt="IgniteModule1" width="50%px" height="50%" src="https://github.com/eugeniol2/assets/blob/ignewsAssets/ignite-react.jpg" />
</h1>


<h2>Descrição 📝</h2>
<p> O ig.news é um blog, lecionado pela Rocketseat através do ignite, tal projeto foi criado com o nextjs.
</p>

<div>
  <h2>Especificações</h2>
  <section>
    <h3> Funcionais </h3>
    <ul>
      <li>O usuário, não logado, poderá acessar a preview dos posts.</li>
      <li>O usuário, não logado, poderá fazer login com o github.</li>
      <li>O usuário, logado, poderá se inscrever.</li>
      <li>O usuário, logado, inscrito, terá acesso a todos os posts completos.</li>
    </ul>
    <h3> Não-Funcionais </h3>
    <ul>
      <li>Ao clicar em sign-in o sistema, atravéz do Oauth irá autenticar o usuário com o github e criar um usuário no faunaDB se o mesmo não existir.</li>
      <li>Ao clicar em inscrever-se o sistema redirecionará o usuário para a tela de pagamento fornecida pelo stripe. </li>
      <li>Ao clicar em increver-se o sistema verificará se o usuário é ativo ou não ativo, se não ativo,o sistema redirecionará o usuário para a tela de posts.</li>
      <li>Após confirmação do pagamento o sistema enviará o status da inscrição do usuário para o faunaDB, ativo, ou não ativo.</li>
      <li>Ao clicar no post, o sistema verificará se o usuário possui uma inscrição ativa, se não ativa, o sistema redirecionará o usuário para a tela home</li>      
    </ul>
  </section>
</div>


<h2> O que aprendi com este projeto </h2>
  
 <p>
   O curso foi uma incrível oportunidade de conhecer como a "programação" funciona desde sua origem até o assembler, e outros componentes computacionais
   tais como memória RAM, disco, etc... por mais que tenha sido desafiador, valeu muito a pena e foi muito gratificante finalizar este curso
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
