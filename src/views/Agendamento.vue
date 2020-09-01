<template>
  <transition appear>
    <div class="agendamento">
      <div>
        <h1>Agendamento</h1>
        <p>Agende seu horário com antecedência.</p>
      </div>
      <form>
        <label for="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          maxlength="20"
          required
          v-model="name"
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemple@exemple.com.br"
          required
          v-model="email"
        />
        <label for="tel">Telefone:</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="11 99999-9999"
          required
          v-model="telefone"
        />
        <label for="date">Data do agendamento:</label>
        <input type="date" name="date" id="date" required v-model="date" />
        <label for="hours">Horário:</label>
        <select name="hours" id="hours" v-model="hours">
          <option value disabled selected>Selecione um horário</option>
          <option
            v-for="(time, index) in disponiblesTimes"
            :value="time"
            :key="index"
            >{{ time }}</option
          >
        </select>
        <input
          type="submit"
          value="Enviar"
          @click.prevent.stop="handleSubmit"
        />
        <transition mode="in-out">
          <div class="modal" v-if="error">
            Erro: Verifique o campo {{ error }}
          </div>
          <div class="modal success" v-if="success">
            Agendamento criado com sucesso, você será redirecionado para página
            principal.
          </div>
        </transition>
      </form>
    </div>
  </transition>
</template>
<script>
import axios from "axios";
export default {
  name: "Agendamento",
  data() {
    return {
      success: false,
      error: false,
      disponiblesTimes: [],
      dbTimes: "",
      availableTimes: [
        "09:00:00",
        "10:00:00",
        "11:00:00",
        "12:00:00",
        "13:00:00",
        "14:00:00",
        "15:00:00",
        "16:00:00",
        "17:00:00",
        "18:00:00",
        "19:00:00",
        "20:00:00",
      ],
      dateMin: new Date(),
      name: "",
      email: "",
      telefone: "",
      hours: "",
      date: "",
    };
  },
  watch: {
    date(newDate) {
      axios
        .get(`http://localhost:8686/available/${newDate}`)
        .then((resolve) => {
          this.dbTimes = [...resolve.data];
          this.filterTimes();
        })
        .catch((error) => {
          if (error) {
            return [];
          }
        });
    },
  },
  methods: {
    handleSubmit() {
      const validation = {};
      this.name.trim(), this.email.trim(), this.telefone.trim();
      const regexEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
      const regexTEL = /(\d{2}\)?\s)?(\d{4,5}[-]?\d{4})/gi;
      const date = new Date(this.date);
      date.setDate(date.getDate() + 1);
      const regexTime = /\d{1,2}[:]\d{2}[:]\d{1,2}/g;

      this.name.length < 4
        ? this.modalError("Nome")
        : (validation.name = this.name);
      this.email.match(regexEMAIL)
        ? (validation.email = this.email)
        : this.modalError("email");
      this.telefone.match(regexTEL)
        ? (validation.telefone = this.telefone)
        : this.modalError("Telefone");
      if (date < new Date() || date == "Invalid Date") {
        return this.modalError("Data");
      } else {
        validation.date = this.date;
      }
      this.hours.match(regexTime)
        ? (validation.hours = this.hours)
        : this.modalError("Horário");

      if (
        validation.name &&
        validation.email &&
        validation.telefone &&
        validation.date &&
        validation.hours
      ) {
        this.create({ ...validation });
      }
    },
    modalError(label) {
      this.error = label;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    },
    create(form) {
      axios
        .post("http://localhost:8686/reservation", form)
        .then(() => {
          this.success = true;
          setTimeout(() => {
            this.success = false;
            this.$router.push({ name: "Home" });
          }, 4000);
        })
        .catch(() => {
          this.modalError("Ops encontramos um erro, tente novamente.");
        });
    },
    filterTimes() {
      this.disponiblesTimes = [];
      let reservation = [];
      this.dbTimes.forEach((item, index) => {
        reservation.push(this.dbTimes[index].hours);
      });

      this.availableTimes.forEach((time) => {
        if (!reservation.includes(time)) {
          this.disponiblesTimes.push(time);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/globais";

.agendamento {
  @include container;
  display: grid;
  gap: 10px;
  grid-template-columns: auto 1fr;
  @include d(m) {
    grid-template-columns: 1fr;
  }
}
form {
  display: grid;
  position: relative;
}

label {
  text-align: left;
  padding: 10px 0;
  font-weight: bold;
  text-transform: uppercase;
  @include tipo-1(18);
}
input,
select {
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
    &::placeholder {
      color: $white;
    }
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
  @include tipo-1(16, $colorBoxS);
  text-align: center;
  text-align-last: center;
}
.v-enter-active {
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
.modal {
  background: $red;
  text-align: center;
  z-index: 10;
  width: 100%;
  padding: 10px;
  @include tipo-1(16, $white);
  text-transform: uppercase;
  position: absolute;
  bottom: 2%;
  border-radius: 4px;
}
.success {
  background: $green;
}
</style>
