const app = Vue.createApp({
    data() {
        return {
            pvPlayer: 100,
            pvEnnemy: 100,
            pv : 0,
            round : 0,
            
            
            
        };
    },
    methods: {
        calcul(min, max) { // min and max included 
            pv= Math.floor(Math.random() * (max - min + 1) + min)
          },
          
          
          
        attack() {
           this.pvEnnemy -= pv;
           this.pvPlayer -= pv+1;
           this.round +=1;
        },
        
        attackSp() {
            if (this.round %3 == 0) {
                this.pvEnnemy -= pv;
                this.pvPlayer -= Math.floor(Math.random() * (10 - 5 + 1) + 5);
                this.round +=1 ;
            }


        },
        soinPlayer() {
           this.pvPlayer += pv;
           this.pvPlayer -= Math.floor(Math.random() * (10 - 5 + 1) + 5);
           this.round +=1;
                
        },
        
       
    
        giveUp() {
            location.href= "https://www.youtube.com/watch?v=QkR_5mB9UKw";

        }
    }
});
app.mount('#app');