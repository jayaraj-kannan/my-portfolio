<template>
  <v-app>
    <v-main>
      <transition name="fade-transition" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import "../src/assets/style/css/cus_style.css";
</script>

<style>
.fade-transition-enter-active, .fade-transition-leave-active {
  transition: opacity 0.5s ease;
}
.fade-transition-enter, .fade-transition-leave-to {
  opacity: 0;
}
</style>