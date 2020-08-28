<template>
    <footer>
        <div class="textFooter">
          <div>
            <h1>Thiago Barber</h1>
            <p>©Alguns direitos reservados</p>
          </div>
        
          <p class="dev">Desenvolvido por: Eduardo Fernandes | 11 99262-3645</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "TheFooter"
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';
footer {
  background: $primaryColor;
}

.textFooter {
  @include container;
  @include flex(c);
  flex-direction: column;
  h1 {
    @include tipo-2(16, $white);
    margin: 0;
  };
  p {
    @include tipo-2(14, $white);
    text-transform: uppercase;
  }
}
.dev {
  align-self: center;
}
</style>