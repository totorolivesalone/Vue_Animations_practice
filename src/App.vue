<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>

    </transition>

  </router-view>
  <!-- <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
     @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
    <p v-if="paraIsVisible">This is only sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
    <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
    <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import ListData from './components/ListData.vue';
export default {
  // components:{
  //   'list-data':ListData,

  // },

  data() {
    return { dialogIsVisible: false,
      animatedBlock:false,
      paraIsVisible:false,
      usersAreVisible:false,
      enterInterval:null,
      leaveInterval:null,
     };
  },
  methods: {
    beforeEnter(el){
      console.log('Before Enter');
      console.log(el);
      el.style.opacity=0;
    },
    beforeLeave(el){
      console.log('BeforeLeave');
      console.log(el);
      el.style.opacity=1;


    },afterLeave(el){
      
      console.log('after leave')
      console.log(el);

    },
    afterEnter(el){
      
      console.log('After Enter');
      console.log(el)


    },
    leave(el,done){
      console.log('leave');
      console.log(el);
      let round=1;
      this.leaveInterval=setInterval(()=>{
        el.style.opacity=1-round*0.01;
        round++
        if(round>100){
          clearInterval(this.leaveInterval);
          done();
        }
      },20)


    },
    enter(el, done)
    {
      console.log('enter');
      let round=1;
      this.enterInterval=setInterval(()=>{
        el.style.opacity=round*0.01;
        round++
        if(round>100){
          clearInterval(this.enterInterval);
          done();
        }
      },20)


    },
    enterCancelled(){
      clearInterval(this.enterInterval);


    },
    leaveCancelled(){
      clearInterval(this.leaveInterval);

    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock=true;

    },toggleParagraph(){
      this.paraIsVisible=!this.paraIsVisible;
    },
    showUsers(){
      this.usersAreVisible=true;
    },
    hideUsers(){
      this.usersAreVisible=false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /*transform: translateX(-150px);*/
  animation: slide-scale 0.3s ease-out forwards;
}

.fade-button-enter-from{
  opacity:0;
}
.fade-button-enter-active{
  transition: opacity 0.3s ease-out; 
}
.fade-button-enter-to{
  opacity:1;
}
.fade-button-leave-from{
  opacity:1;

}
.fade-button-leave-active{
  transition:opacity 0.5s ease-in;
}
.fade-button-leave-to{
  opacity:0;
  
}
.route-enter-from{}
.route-enter-active{
  animation:slide-scale 0.4s ease-out;

}
.route-enter-to{

}



@keyframes slide-scale{
  0%{
    transform: translateX(0) scale(1);

  }
  70%{
    transform: translateX(-120px) scale(1.1);
  }
  100%{
    transform : translate(-150px) scale(1);
  }
}
</style>