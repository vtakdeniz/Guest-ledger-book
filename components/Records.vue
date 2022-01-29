<template>
  <div class="container w-full bg-yellow-200 ">
      <div :key="i" v-for="(message,i) in this.messages" >
          <Record :message="message"/>
      </div>
      <button @click="clearAllMessages" class="m-10 bg-red-600 p-2 rounded text-white font-bold">Clear all messages</button>
  </div>    
</template>

<script>
import Record from './Record.vue';
export default {
    name:'Records',
    props:['title'],
    components:{
        Record
    },
    data(){
        return {
            messages:[],
        }
    },
    created(){
        this.$nuxt.$on('add-item', data =>{
            this.messages.push(data);
            let parsed = JSON.stringify(this.messages);
            localStorage.setItem('messages', parsed);
        })
    },
    mounted(){
        if(localStorage.getItem('messages')){
            this.messages = JSON.parse(localStorage.getItem('messages'));
        }
    },
    methods:{
        clearAllRecords(){
            this.messages=[]
            localStorage.removeItem('messages')
        },
        clearAllMessages(){
            this.messages=[]
            let parsed = JSON.stringify(this.messages);
            localStorage.setItem('messages', parsed);
        }
    }
}
</script>

<style>

</style>