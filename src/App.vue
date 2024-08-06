<template>
  <v-app>
    <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import "../src/assets/style/css/cus_style.css";
</script>
<style>
/* html,
body {
  overflow-y: hidden !important;
  overflow-x: visible !important;
}
.scrollable-content {
  overflow-y: scroll;
  height: 100vh; 
  padding-right: 15px;
}

.scrollable-content::-webkit-scrollbar {
  display: none;
}

.scrollable-content {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
} */
</style>