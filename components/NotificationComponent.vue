<template>
  <div v-show="showAlert" aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
  <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
    <!--
      Notification panel, dynamically insert this into the live region when it needs to be displayed

      Entering: "transform ease-out duration-300 transition"
        From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        To: "translate-y-0 opacity-100 sm:translate-x-0"
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <!-- Heroicon name: outline/check-circle -->
            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              {{title}}
            </p>
            <p class="mt-1 text-sm text-gray-500">
              {{message}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
props:{
    showAlert:{
        type: Boolean,
        default: false
    },
    title:{
        type: String,
        default:'alert'
    },
    message:{
        type: String,
        default: 'Something went wrong!'
    }
},
watch:{
    showAlert(){
        setTimeout(()=>
        this.$emit('closeNoti'),5000)
    }
}
}
</script>

<style>

</style>