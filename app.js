const app = Vue.createApp({
    data() {
        return {
            pvPlayer: 100,
            pvEnnemy: 100,
            pv: 0,
            round: 1,
            boutton : 0


        };
    },
    methods: {
        calcul(min, max) { // min and max included 
            pv = Math.floor(Math.random() * (max - min + 1) + min)
        },

        attack() {
            this.pvEnnemy -= pv;
            this.pvPlayer -= pv + 1;
            this.round += 1;
        },

        attackSp() {
            if (this.round % 3 == 0) {
                this.pvEnnemy -= pv;
                this.pvPlayer -= Math.floor(Math.random() * (10 - 5 + 1) + 5);
                this.round += 1;
            }


        },
        soinPlayer() {
            if (this.pvPlayer > 100) {
                this.pvPlayer = 100;
            }
            this.pvPlayer += pv;
            this.pvPlayer -= Math.floor(Math.random() * (10 - 5 + 1) + 5);
            this.round += 1;

        },



        giveUp() {
            location.href = "https://www.youtube.com/watch?v=QkR_5mB9UKw";
        },
        // cacher(){
        //     console.log("coucou")
        //     if (this.pvPlayer <= 0) {
        //         console.log("ca marche")
        //         location.href = "https://www.youtube.com/watch?v=NUd9kyOzqR8";
        //     }
        //     else if (this.pvEnnemy <= 0){
        //         location.href = "https://www.youtube.com/watch?v=QkR_5mB9UKw";
        //     }
        // }

        
    },
    computed: {
        cacher(){
            
            if (this.pvPlayer <= 0) {
                
                this.boutton = 1;
            }
            else if (this.pvEnnemy <= 0){
                this.boutton = 1;;
            }
        }

    }
});
app.mount('#app');