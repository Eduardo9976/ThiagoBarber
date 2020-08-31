<template>
    <transition appear>
        <header>
        <nav class="container">
            <ul>
                <li>  <router-link to="/servicos"> Serviços </router-link> </li>
                <li>  <router-link to="/agendamento"> Agendamento </router-link> </li>
                <li>  <router-link to="/contato"> Contato </router-link> </li>
            </ul>
        </nav>
        <div class="bgHeader">
            <router-link to="/"> <img src="../../public/imgs/logo.svg" alt="Logotipo" class="logo"> </router-link>
        </div>
    </header>
    </transition>    
</template>
<script>
export default {
    name: "TheHeader"
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';

header {
    background-image: url("../../public/imgs/barberH.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-size: cover;
    @include d(m) {
      background-size: contain;
    }
}
nav {
    @include container;
    @include flex(e);
    @include d(m) {
        @include flex(c)
    }
}
ul {
    @include flex(l);
}
.bgHeader {
    @include container;
    @include flex(c);
}
.logo {
    width: 250px;
    cursor: pointer;
    border: 2px solid $colorBoxS;
    border-radius: 4px;
    margin: 10px 0;
    box-shadow: 3px 3px 4px $colorBoxS, 5px 5px 3px $colorBoxS;
    &:hover {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    };
    @include d(m){
      width: 200px;
      background-size: contain;
    }
}
nav li {
    margin-top: 10px;
}
nav li + li {
    margin-left: 10px;
}
nav a {
    display: block;
    padding: 10px;
    @include tipo-1(16, $white);
    border: 2px solid $colorBoxS;
    border-radius: 4px;
    text-decoration: none;
    &:hover {
      background: $colorBoxS;
    }
}

li:nth-child(2) {
    background: $primaryColor;
    border-radius: 4px;
    font-size: em(18);
    text-transform: uppercase;
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
    transform: translateX(-100px);
  }
}
</style>