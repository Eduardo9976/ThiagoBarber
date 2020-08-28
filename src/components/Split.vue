<template>
    <div class="space">
        <span class="split">
        <img src="../../public/imgs/tesouraIcon.svg" alt="icone Tesoura">
        <hr>
    </span>
    </div>
</template>
<script>
export default {
    name: "Split"
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';

.space {
    @include container;
    margin: 30px auto;
}
.split{
    display: block;
    position: relative;
    img{
        border: none;
        box-shadow: none;
        width: 40px;
        height: auto;
        position: absolute;
        top: -20px;
        right: 50%;
        display: inline-block;
        transform: rotate(30deg);
    }
}
</style>