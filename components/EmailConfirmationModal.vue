<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div v-show="modalView" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div class="inline-block align-bottom bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <!-- Heroicon name: outline/check -->
          <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            Confirmation Email Sent!
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Please write the code below to confirm your email
            </p>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitConfirmationCode" class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <div class="col-span-2 flex flex-col w-full">
              <label for="confirmationCode">Confirmation code</label>
              <input v-model="confirmationCode" name="confirmationCode" id="confirmationCode" type=""
                  class="focus:outline-none down px-4 py-2 text-center rounded-lg my-2 tracking-widest font-semibold text-xl" style=" "
                  placeholder=" # # # # # #">
          </div>
        <button type="submit" class="up w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-dush-green bg-opacity-75 text-base text-black font-semibold hover:bg-dush-green focus:outline-none sm:col-start-2 ">
          Confirm
        </button>
        <button @click="close" type="button" class="up mt-3 w-full inline-flex justify-center rounded-md bg-gray-100 shadow-sm px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm">
          Cancel
        </button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:{
        modalView:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            confirmationCode:''
        }
    },
    methods:{
        async submitConfirmationCode(){
            if(this.confirmationCode){
                const code = this.confirmationCode
                 await this.$axios.$post('api/v1/verify-email', code).then(response=>{
                     if(response.status){
                         this.$emit('success')
                     }else{
                         this.$emit('closeCM')
                         this.$emit('failure')
                     }
                 }).catch(error=>{console.log(error)
                 this.$emit('failure')}).finally(()=>{this.clearCode()})
            }
        },
        clearCode(){
            this.confirmationCode = ''
        },
        close(){
            this.$emit('closeCM')
        }

    }

}
</script>

<style>

</style>