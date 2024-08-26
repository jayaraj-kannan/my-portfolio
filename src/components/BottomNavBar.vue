<template>
    <v-layout class="overflow-visible fixed-layout"
            style="height: 56px;position: sticky; bottom: 0; left: 0; width: 100%;">
            <v-bottom-navigation fixed v-model="value" :bg-color="color" mode="shift">
                <v-btn to="/">
                    <v-icon>mdi mdi-account-question-outline</v-icon>

                    <span>About Me</span>
                </v-btn >

                <v-btn to="/personal">
                    <v-icon>mdi mdi-bag-personal-outline</v-icon>

                    <span>Personal</span>
                </v-btn>

                <v-btn to="/connect">
                    <v-icon>mdi mdi-human-greeting-proximity</v-icon>

                    <span>Connect</span>
                </v-btn>
            </v-bottom-navigation>
        </v-layout>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'

const value = ref(1)

const color = computed(() => {
    switch (value.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
    }
})
</script>