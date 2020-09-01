<template>
    <aside> 
        <span> <div :class="green ? 'green' : 'red'"></div> Funcionamento: {{horarios.open + ":00"}} às {{horarios.close + ":00"}} hrs. </span>
    </aside>
</template>
<script>
export default {
    name: "SubHeader",
    data(){
        return {
            horarios: {
                date:"",
                day:"",
                now: "",
                open: 9,
                close: 20
            },
            green: false,
        }
    },
    methods: {
        Hours() {
            this.horarios.date = new Date()
            this.horarios.now =  this.horarios.date.getHours()
            this.horarios.day =  this.horarios.date.getDay()
            if(this.horarios.now >= this.horarios.open && this.horarios.day != 0 && this.horarios.now < this.horarios.close) {
                this.green = true
            }
        },
        verifyHours() {
            setInterval(()=> {
                this.Hours()
            }, 30000)
        }
    },
    created() {
        this.Hours()
        this.verifyHours()
    },
}
</script>
<style lang="scss" scoped>
@import '../scss/globais';
aside {
    background: $primaryColor;
    @include flex(c);
}
span {
    @include flex(s);
    padding: 10px;
    @include tipo-2(14, $gray);
    line-height: initial;
    font-weight: bold;
    text-transform: uppercase;
}
div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
}
.green {
    background: $green;
}
.red {
    background: $red;
}
</style>