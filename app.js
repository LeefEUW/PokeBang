const app = Vue.createApp({
    data() {
        return {
            pvPlayer: 1500,
            pvEnnemy: 1500
        };
    },
    methods: {
        attack(num1, num2) {
            this.pvEnnemy -= num1;
            this.pvPlayer -= num2;
        },

        attackSpePlayer() {

        },
        soinPlayer() {
            this.pvPlayer = Math.floor(Math.random() * 1500) + 20;

            math.random
        },
        ennemyAttack() {

        },



        giveUp() {

        }
    }
});
app.mount('#app');