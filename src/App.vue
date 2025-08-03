<script setup lang='ts'>
import { computed, shallowRef } from 'vue'
import Qr from 'vue-qrcode'

const loginData = computed(() => {
  return JSON.stringify({
    cookie: document.cookie
  })
})
const showQr = shallowRef(false)
</script>

<template>
  <button @click="showQr = !showQr"
    class="fixed bottom-1 left-1 rounded-full bg-blue-400/50 border-none px-3 py-1 text-white">手机登陆</button>
  <Transition>
    <div v-if="showQr"
      class="fixed ease-in-out bottom-10 left-1 rounded-2xl bg-blue-100 border-none p-3 size-70 z-114514">
      <Qr :color="{ dark: '#000000ff', light: '#ffffffff' }" type="image/webp" :value="loginData" />
    </div>
    <div v-else></div>
  </Transition>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>