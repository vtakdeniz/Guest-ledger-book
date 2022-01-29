<template>
  <div class="container border-2 p-10 bg-green-400
   rounded flex flex-wrap justify-between items-center w-full">

      <div id="email-header" class="w-full">
        <div class="email bg-yellow-400 p-2 w-6/12 text-sm">Email :</div>
        <div class="rounded p-1 bg-white text-sm p-2 m-2" >
             {{message.email}}
        </div>
      </div>

      <div id="message-header" class="w-full">
            <div class="email bg-yellow-400 p-2 w-6/12 text-sm mt-5">Message :</div>
            <div class="rounded p-1 bg-white text-sm p-2 m-2" >
                {{message.content}}
            </div>
      </div>

  </div>
</template>

<script>
export default {
    name:'Record',
    props:['message']
}
</script>

<style>

</style>