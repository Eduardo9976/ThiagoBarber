<template>
    <div class="services">
        <div class="pictureServices1">
            <img src="../../public/imgs/cliente1.png" alt="Foto de corte em cliente">
            <img src="../../public/imgs/cliente2.png" alt="Foto de corte em cliente">
        </div>
        <h1>Serviços</h1>
        <div>
            <p>Corte Masculino</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Barba</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Barba</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Barba e Bigode</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Penteado Afro</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Corte Infantil</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Penteados</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div>
            <p>Outros Serviços</p>
            <span>-R$ 25,00</span>
        </div>
        <hr>
        <br>
        <div class="pictureServices2">
            <img src="../../public/imgs/cliente3.png" alt="Foto de corte em cliente">
            <img src="../../public/imgs/cliente4.png" alt="Foto de corte em cliente">
        </div>
    </div>
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

</style>