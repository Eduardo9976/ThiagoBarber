<template>
    <transition appear>
        <div class="services">
        <div class="pictureServices1">
            <img src="../../public/imgs/cliente1.png" alt="Foto de corte em cliente">
            <img src="../../public/imgs/cliente2.png" alt="Foto de corte em cliente">
        </div>
        <h1>Serviços</h1>
        <div>
            <p>Corte Masculino</p>
            <span>-R$ 20,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Corte Infantil</p>
            <span>-R$ 15,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Barba</p>
            <span>-R$ 15,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Penteado Dmil</p>
            <span>-R$ 15,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Penteado Afro</p>
            <span>-R$ 10,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Sobrancelha</p>
            <span>-R$ 10,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Pézinho</p>
            <span>-R$ 5,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Risco</p>
            <span>-R$ 5,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Desenho</p>
            <span>-R$ 10,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Corte + Barba</p>
            <span>-R$ 35,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Corte + Sobrancelha</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div class="pictureServices2">
            <img src="../../public/imgs/cliente3.png" alt="Foto de corte em cliente">
            <img src="../../public/imgs/cliente4.png" alt="Foto de corte em cliente">
        </div>
    </div>
    </transition>    
</template>
<script>
export default {
    name: "Servicos"
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';

.services{
    @include container;
    margin: 10% auto;
    div {
        @include flex(c);
        justify-content: space-between;
    };
    p{
        @include tipo-1(18);
        &:before{
            content: "lam";
        width: 40px;
        height: 40px;
        color: transparent;
        background: url("../../public/imgs/tesouraIcon.svg" );
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 16px cover;
        }
    };
    span {
        @include tipo-1(24);
        font-weight: bold;
    };
    .pictureServices1{
        @include flex(s, wrap);
        background-image: url("../../public/imgs/barbeiro.svg");
        background-position: center center;
        background-repeat: repeat-x;
        background-size: 70px;
        @include d(m) {
            @include flex(c, wrap);
        };
        img ~ img {
            margin-left: 3%;
            @include d(m){
                margin-left: 0;
                margin-top: 3%;
            }
        }
    };
    .pictureServices2{
        @include flex(e, wrap);
        background-image: url("../../public/imgs/barbeiro.svg");
        background-position: center center;
        background-repeat: repeat-x;
        background-size: 70px;
        @include d(m) {
            @include flex(c, wrap);
        };
        img ~ img {
            margin-left: 3%;
            @include d(m){
                margin-left: 0;
                margin-top: 3%;
            }
        }
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
    transform: translateY(200px);
  }
}

</style>