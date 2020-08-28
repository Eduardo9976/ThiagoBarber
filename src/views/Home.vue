<template>
  <div class="sessao">
    <section>
          <div class="mainText">
              <h1>Qualidade existe quando se atenta aos mínimos detalhes.</h1>
              <p>Somos uma Barbearia que vai além de um corte de cabelo ou barba, criamos uma experiência única para nossos clientes. </p>
              <p>Por isso, todos são bem-vindos e pensamos em cada detalhe, desde a entrada de uma criança, até a saída de um noivo.</p>
              <p>Nosso ambiente exclusivamente masculino conta com atendimento com hora marcada. A cada corte e barba, você ganha uma cerveja ou um refrigerante.</p>
              <p>Temos como objetivo oferecer serviços específicos ao homem, procurando proporcionar excelentes resultados em um ambiente exclusivo voltado ao seu Bem-Estar.</p>
          </div>
              <div class="boxImg">
                <picture>
                  <!-- <source media="(max-width:959px)" srcset="../../public/imgs/cliente4.png"> -->
                  <source media="(max-width:767px)" srcset="../../public/imgs/cliente1.png">
                  <img src="../../public/imgs/hml1.svg" alt="Flowers" style="width:auto;">
                </picture>
              </div>
              <router-link to="/servicos"> Conheça os nossos serviços </router-link>
              <router-link to="/agendamento"> Agende seu horário </router-link>
    </section>
  </div>  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';
.sessao {
  margin: 10% 0;
}
section{
  @include container;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  margin-bottom: 5%;
  @include d(t){
      grid-template-columns: 1fr auto;
    }
  @include d(m){
    grid-template-columns: 1fr;
    justify-content: center;
  }  
}
.boxImg{
  @include flex(e, wrap);
  margin: 8% 0;
  @include d(t) {
    align-items: center;
    justify-content: center;
  }
  @include d(m) {
    @include flex(c)
  }
  img {
    object-fit: cover;
  }
    
}
a {
    @include tipo-1(24, $white);
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid $colorBoxS;
    box-shadow: 3px 3px 4px $colorBoxS, 5px 5px 3px $colorBoxS;
    margin-top: 10px;
    padding: 10px;
    text-decoration: none;
    background: $primaryColor;
    &:hover {
      background: $colorBoxS;
    }
  
}
</style>