<template>
 <transition appear>
    <div class="contato">
      
    <img src="../../public/imgs/homensecuida1.svg" alt="Foto Homem também se cuida" style="width:auto;">
      <div>
        <h1>Contato</h1>
        <p>R. Alberto Borges Soveral 60| Rua do Mercado 3M</p>
        <p>+55 11 98837-5500</p>
        <p>thiago.marques.enzo@gmail.com</p>
        <p>Terça a Sábado das 9h00 às 20h00</p>
        <router-link to="/servicos"> Conheça os nossos serviços </router-link>
        <router-link to="/agendamento"> Agende seu horário </router-link>
      </div> 
  </div>
 </transition>  
</template>
<script>

export default {
  name: "Contato",
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';

.contato {
  @include container;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  @include d(m) {
    grid-template-columns: 1fr;
    justify-content: center;
    img{
    margin: 0 auto;
  }
  }
  
}
.infoContactos{
  
}
.infoImg{
  
}
p:nth-child(1){
  &::before {
    background: url("../../public/imgs/place.svg");
    @include utils;
  }
}
p:nth-child(2){
  &::before {
    background: url("../../public/imgs/telephone.svg");
    @include utils;
  }
}
p:nth-child(3){
  &::before {
    background: url("../../public/imgs/email.svg");
    @include utils;
  }
}
p:nth-child(4){
  &::before {
    background: url("../../public/imgs/time.svg");
    @include utils;
  }
}


p {
  font-weight: bold;
  text-transform: uppercase;
}
a {
    @include tipo-1(24, $white);
    text-align: center;
    text-transform: uppercase;
    display: block;
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
.v-enter-active  {
  animation: slide 1s;
  transition: opacity 1s;
}
.v-leave-active {
  animation: slide 1s reverse;
  transition: opacity 1s;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
}
</style>
