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
                        <div sm="12" md="4" lg="2" v-html="welcome"></div>
                    </template>
                    <template v-slot:prepend>
                        <v-avatar size="100" image="../assets/images/color.png"></v-avatar>
                    </template>

                </v-list-item>


            </v-list>
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🧑‍💻 About me!">
                <template v-slot:text>
                    <div v-html="userDetails.personal.description"></div>
                </template>
            </v-card>
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🧋 my core skills!">
                <v-card-text>
                    <v-chip size="small" v-for="(skill, index) in skills" :key="index" class="ma-1 g-color">
                        <template v-slot:prepend>
                            <v-icon class="mr-1">{{ skill.icon }}</v-icon>
                        </template>
                        {{ skill.label }}
                    </v-chip>
                    <v-row class="ma-1">
                        <v-col class="ma-0 pt-0 pb-0" v-for="(tool, index) in tools" :key="index" cols="12" sm="12"
                            md="4" lg="2">
                            <v-list class="rounded-pill mb-1">
                                <v-list-item  :title="tool.title">

                                    <template v-slot:prepend>
                                        <v-avatar rounded="0">
                                            <v-img :src="tool.prependAvatar"></v-img>
                                        </v-avatar>
                                    </template>
                                    <!-- <template v-slot:subtitle>
                                <div v-html="tool.subtitle"></div>
                            </template> -->

                                </v-list-item>

                            </v-list>
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🫰🏼 work experience!" >
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="(company, index) in userDetails.experience" :key="index" cols="12" md="6">
                            <v-card  class="rounded-lg exp" variant="flat" :title="company.companyName" :subtitle="company.date">
                                <template v-slot:prepend>
                                    <v-avatar size="50" rounded="0">
                                        <v-img :src="company.logo"></v-img>
                                    </v-avatar>
                                </template>
                                <template v-slot:text >
                                    <v-chip size="x-small" v-for="(tech, index) in company.skill" :key="index" class="ma-1">
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
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🫰🏼 Personal!" >
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="(company, index) in userDetails.experience" :key="index" cols="12" md="6">
                            <v-card  class="rounded-lg exp" :title="company.companyName" :subtitle="company.date">
                                <template v-slot:prepend>
                                    <v-avatar size="50" rounded="0">
                                        <v-img :src="company.logo"></v-img>
                                    </v-avatar>
                                </template>
                                <template v-slot:text >
                                    <v-chip size="x-small" v-for="(tech, index) in company.skill" :key="index" class="ma-1">
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
        <v-layout  class="overflow-visible fixed-layout" style="height: 56px;position: sticky; bottom: 0; left: 0; width: 100%;">
        <v-bottom-navigation fixed v-model="value" :bg-color="color" mode="shift">
            <v-btn>
                <v-icon>mdi-television-play</v-icon>

                <span>Video</span>
            </v-btn>

            <v-btn>
                <v-icon>mdi-music-note</v-icon>

                <span>Music</span>
            </v-btn>

            <v-btn>
                <v-icon>mdi-book</v-icon>

                <span>Book</span>
            </v-btn>

            <v-btn>
                <v-icon>mdi-image</v-icon>

                <span>Image</span>
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
    </v-container>
</template>

<script lang="ts" setup>
import { ref ,onMounted,computed} from "vue";
import userDetails from "../resources/profile";
import { useTheme } from 'vuetify'
const theme = useTheme()
const themeIcon = ref('');
const customClass = ref('');
themeIcon.value = theme.global.current.value.dark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
const toggleTheme = () => {
    const isDarkMode = theme.global.current.value.dark;

    // Toggle theme name and icon
    theme.global.name.value = isDarkMode ? 'light' : 'dark';
    themeIcon.value = isDarkMode ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
    customClass.value = isDarkMode ? 'bg-color':'';
}
const welcome = userDetails.personal.welcome;
const skills = userDetails.skill;
const tools = userDetails.tool;
const value = ref(1)
const showBottomNav = ref(false);
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  showBottomNav.value = scrollPosition > 200; // Show bottom navigation after scrolling 200px
};
const color = computed(() => {
    switch (value.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
    }
})
const onScroll = () =>{
    console.log("in onscroll");
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
</style>