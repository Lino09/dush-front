<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center space-y-16">
    <img src="../assets/img/dush-logo.png" class="w-48" alt="">
    <h1 class="text-3xl font-bold">Welcome to Dush</h1>
    <button @click="pushRoute('auth/login')" class="px-8 py-4 bg-dush-darkblue text-2xl font-white font-bold rounded text-white">LOGIN</button>
    <button @click="pushRoute('auth/register')" class="px-8 py-4 bg-dush-darkblue text-2xl font-white font-bold rounded text-white">REGISTER</button>
  </div>
</template> 
<script>
export default{
  methods:{
    pushRoute(route){
      this.$router.push(route)
    }
  }
}
</script>
