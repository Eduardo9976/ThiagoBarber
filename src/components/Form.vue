<template>
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
</template>
<script>
export default {
    name: "Form",
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
    },
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';
form{
    max-width: 40%;
    margin: 40px auto;
    display: grid;
    border: 2px solid $colorBoxS;
    padding: 10px;
    border-radius: 4px;
    background: #eee;
    box-shadow: 3px 3px 5px $colorBoxS, 5px 5px 5px $colorBoxS;
    overflow: hidden;
    @include d(t) {
        max-width: 380px;
    };
    @include d(m) {
        min-width: 280px
    }
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
    @include tipo-1(16, $colorBoxS)
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
    transform: scale(1.2);
}
select {
    @include tipo-1(16, $colorBoxS) ;
    text-align: center;
    text-align-last: center;
}

</style>