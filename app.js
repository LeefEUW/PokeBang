const app = Vue.createApp({
    data() {
        return {
<<<<<<< HEAD
            pvPlayer: 1500,
            pvEnnemy: 1500
=======
            pvPlayer: 100,
            pvEnemy: 100
>>>>>>> 8c541719e63277754371bf96fffee89227de0d4c
        };
    },
    methods: {
        attack(num1,num2) {
           this.pvEnnemy -= num1;
           this.pvPlayer -= num2;
        },
        
        attackSpePlayer() {

        },
        soinPlayer() {
<<<<<<< HEAD
           this.pvPlayer = Math.floor(Math.random() * 1500) + 20;
                
=======
            math.random
        },
        ennemyAttack() {

>>>>>>> 8c541719e63277754371bf96fffee89227de0d4c
        },
        
       
    
        giveUp() {

        }
    }
});
app.mount('#app');