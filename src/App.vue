<template>
  <div id="app">
    <a  class="sociais" href=" https://instagram.com" target="_blank" ><img src="./../public/imgs/instagram.svg" alt="link Instagram"></a>
    <a  class="sociais social" href=" https://api.whatsapp.com/send?phone=5511988375500" target="_blank" ><img src="./../public/imgs/whatsapp.svg" alt="link Whatsapp"></a>
    <SubHeader />
    <TheHeader />
    <Split/>
    <router-view> </router-view>
    <Split/>
    <TheFooter />
  </div>
</template>
<script>

import SubHeader from './components/SubHeader'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  components: {
    SubHeader,
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import './scss/globais';
// #app {
//   @include d(t) {
//     background: blue;
//   }
//   @include d(m) {
// 		background: red;
// 	}
// }
#app {
  position: relative;
  height: 100vh;
}
.sociais{
  position: fixed;
  z-index: 10;
  bottom: 30px;
  right: 1%;
  width: 45px;
  height: auto;
  display: block;
  img{
    border: none;
    box-shadow: none;
  }
}
.social{
  bottom: 90px;
  
}

h1::before {
    background: url("./../public/imgs/postIcon.svg");
}
</style>
