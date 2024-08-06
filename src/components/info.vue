<template>
    <v-container>
        <v-row>
            <v-col v-for="post in posts" :key="post.id" cols="4">
                <v-img :src="post.image" aspect-ratio="1"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
const posts = [
    { id: 1, image: '../assets/images/white.png' },
    { id: 1, image: '../assets/images/color.png' }
]
</script>