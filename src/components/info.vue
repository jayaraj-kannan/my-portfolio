<template>
    <v-container class="pa-0">
        <v-card class="rounded-xl ma-1" variant="flat" max-width="100%">
            <v-img src="../assets/images/banner.jpg" alt="Banner Image">
            </v-img>
            <v-fab active class="ms-4 mr-1" :icon="themeIcon" location="bottom end" size="x-small" absolute offset
                @click="toggleTheme"></v-fab>
            <v-list>

                <v-list-item>
                    <template v-slot:title>
                        <div sm="12" md="4" lg="2" v-html="userDetails.personal.welcome"></div>
                    </template>
                    <template v-slot:prepend>
                        <v-avatar size="100" image="../assets/images/color.png"></v-avatar>
                    </template>

                </v-list-item>


            </v-list>
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🫰🏼 Personal!">
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="(company, index) in userDetails.experience" :key="index" cols="12" md="6">
                            <v-card class="rounded-lg exp" variant="flat" :title="company.companyName" :subtitle="company.date">
                                <template v-slot:prepend>
                                    <v-avatar size="50" rounded="0">
                                        <v-img :src="company.logo"></v-img>
                                    </v-avatar>
                                </template>
                                <template v-slot:text>
                                    <v-chip size="x-small" v-for="(tech, index) in company.skill" :key="index"
                                        class="ma-1">
                                        {{ tech }}
                                    </v-chip>
                                </template>
                                <template v-slot:append>
                                    <v-btn icon variant="plain">
                                        <v-icon color="#ffff">mdi-open-in-new</v-icon>
                                    </v-btn>
                                </template>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            <template v-slot:actions>
                <v-row justify="center">
                    <v-col class="text-center">
                        <p class="text-caption">©️ made by 🧘🏽 <span class="footer-text">@jayaraj_kannan</span></p>
                    </v-col>
                </v-row>

            </template>
        </v-card>
        <BottomNavBar/>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import userDetails from "../resources/profile";
import { useTheme } from 'vuetify'
import BottomNavBar from '@/components/BottomNavBar.vue';
const theme = useTheme()
const themeIcon = ref('');
const customClass = ref('');
customClass.value = !theme.global.current.value.dark ? 'bg-color':'';
themeIcon.value = theme.global.current.value.dark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
const toggleTheme = () => {
    const isDarkMode = theme.global.current.value.dark;

    // Toggle theme name and icon
    theme.global.name.value = isDarkMode ? 'light' : 'dark';
    themeIcon.value = isDarkMode ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
    customClass.value = isDarkMode ? 'bg-color':'';
}
</script>
<style>
.fixed-layout {
  z-index: 1000; /* Adjust the z-index if necessary */
}
.v-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.v-bottom-navigation {
  z-index: 1000; /* Ensure it's on top */
}
.g-color {
    color: azure !important;
    background: linear-gradient(to right, #139c75, #00535b) !important;
}

.card-bg-color {
    background: linear-gradient(to right, #139c75, #00535b) !important;
}

.name {
    background: linear-gradient(96deg, #5fff84, #FF9800);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 18px;
}
.footer-text{
    background: linear-gradient(96deg, #5fff84, #FF9800);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.d-none {
  display: none !important;
}

.d-md-flex {
  display: flex !important;
}

.d-md-none {
  display: none !important;
}

@media (min-width: 960px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-flex {
    display: flex !important;
  }
}

@media (max-width: 959px) {
  .d-md-none {
    display: flex !important;
  }
  .d-md-flex {
    display: none !important;
  }
}
.project-link {
    padding-left: 120px !important;
}

@media (max-width: 400px) {
    .project-link {
        padding-left: 50px !important;
    }
}
</style>