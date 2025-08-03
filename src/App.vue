<script setup lang='ts'>
import { computed, shallowRef } from 'vue'
import Qr from 'vue-qrcode'
import { version } from '../package.json'
const loginData = computed(() => {
  return JSON.stringify({
    cookie: document.cookie,
    version,

  })
})
const showQr = shallowRef(false)
</script>

<template>
  <div
    style="position: fixed; bottom: 0.25rem; left: 0.25rem;display: flex; flex-direction: column;gap: 1rem;z-index: 1000000;">
    <Transition>
      <div v-if="showQr"
        style="border-radius: 1rem; background: #dbeafe; border: none; padding: 0.75rem; width: 19rem; height: 19rem; z-index: 114514; transition: all 0.2s;">
        <Qr :color="{ dark: '#000000ff', light: '#ffffffff' }" type="image/webp" :value="loginData"/>
      </div>
      <div v-else></div>
    </Transition>
    <button @click=" showQr = !showQr"
      style=" border-radius: 9999px; background: rgba(96, 165, 250, 0.5); border: none; padding: 0.25rem 0.75rem; color: #fff;">
      手机登陆</button>

  </div>
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