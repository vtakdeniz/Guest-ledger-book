<template>
    <div class="input-field m-10 border-2 p-10 bg-green-100">
        <form v-on:submit.prevent="" class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
            <div id="email-field" class="w-full md:w-1/2 mb-6">
                <label class="uppercase border-2 border-indigo-400 rounded p-1" for="email-input">Email : </label>
                <input v-model="email" class="appearance-none block w-full bg-gray-200
                text-gray-700 border border-gray-200 rounded py-3 px-4 my-2
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email-input" type="email" placeholder="email@example.com">
            </div>
            <div id="message-field" class="">
                <label class="uppercase border-2 border-indigo-400 rounded p-1" for="message-input">Message : </label>
                <textarea v-model="message" class="appearance-none block w-full bg-gray-200
                text-gray-700 border border-gray-200 rounded py-3 px-4 my-2
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message-input" placeholder="Your comment..." cols="100" rows="10">
                </textarea>
            </div>      
            <button @click="addMessage" class="flex items-center bg-blue-500 text-white mt-2 text-center p-5 rounded h-2 font-bold">
                Add
            </button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name:'Form',
    data(){
        return{
            email:'',
            message:''
        }
    },
    methods:{
        addMessage(){
            this.$emit('addItem',{email:this.email,content:this.message});
            //this.$nuxt.$emit('add-item', {email:this.email,content:this.message})
        }
    }
}
</script>

<style>

</style>