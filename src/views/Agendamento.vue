<template>
  <div class="agendamento">
    <div>
        <h1>Agendamento</h1>
        <p>Agende seu horário com antecedência.</p>
    </div>
    <form>
        <label for="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder="Nome" maxlength="20" required>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="exemple@exemple.com.br" required>
        <label for="tel">Telefone:</label>
        <input type="tel" name="tel" id="tel" placeholder="11 99999-9999" required>
        <label for="date">Data do agendamento:</label>
        <input type="date" name="date" id="date" :min="updateDate" :value="updateDate" required>
        <label for="hours">Horário:</label>
        <select name="hours" id="hours">
            <option value="" disabled selected>Selecione um horário</option>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
        </select>
        <input type="submit" value="Enviar">
    </form>
  </div>
</template>
<script>
export default {
  name: "Agendamento",
  data() {
        return{
            dateMin: new Date()
        }
    },
    computed: {
        updateDate() {
            const year = this.dateMin.getFullYear()
            const month = this.dateMin.getMonth() + 1
            const date = this.dateMin.getDate()
            let updateMonth = month < 10 ? `0${month}` : month
            const day = `${year}-${updateMonth}-${date}`
            return day
        }
    }
}

</script>
<style lang="scss" scoped>
@import '../scss/globais';

.agendamento {
    @include container;
    display: grid;
    gap: 10px;
    grid-template-columns: auto 1fr;
    @include d(m){
        grid-template-columns: 1fr;
    }
}
form {
    display: grid;
}

label {
    text-align: left;
    padding: 10px 0;
    font-weight: bold;
    text-transform: uppercase;
    @include tipo-1(18)
}
input, select  {
    height: 40px;
    text-align: center;
    border-radius: 4px;
    border: none;
    outline-color: $colorBoxS;
    color: $colorBoxS;
    @include tipo-1(16, $colorBoxS);
    cursor: pointer;
    &:hover {
        background: $colorBoxS;
        color: $white;
    }
}
input[type="submit"] {
    background: #218838;
    color: $white;
    text-transform: uppercase;
    font-weight: bold;
    @include tipo-1(18, $white);
    margin: 20px auto;
    width: 70%;
    align-self: center;
    cursor: pointer;
}
input[type="submit"]:hover {
    background: $green;
}
select {
    @include tipo-1(16, $colorBoxS) ;
    text-align: center;
    text-align-last: center;
}


</style>
