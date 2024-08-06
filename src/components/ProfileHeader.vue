<template>
    <v-container class="pa-0">
        <v-card class="rounded-xl ma-1" max-width="100%">

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
            <v-card class="rounded-lg ma-1" title="🧑‍💻 About me!">
                <template v-slot:text>
                    <div v-html="userDetails.personal.description"></div>
                </template>
            </v-card>
            <v-card class="rounded-lg ma-1" title="🧋 my core skills!">
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
                            <v-list>
                                <v-list-item :title="tool.title">

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
            <v-card class="rounded-lg ma-1" title="🫰🏼 work experience!">
                <v-card-text>
                    <v-list lines="three" v-for="(company, index) in userDetails.experience" :key="index">
                        <v-list-item :title="company.companyName" subheading="hai">
                            <template v-slot:subtitle>
                                <span>{{ company.date }}</span>
                                <v-chip size="x-small" v-for="(tech, index) in company.skill" :key="index" class="ma-1">
                                    {{ tech }}
                                </v-chip>
                            </template>
                            <template v-slot:prepend>
                                <v-avatar size="50" rounded="0">
                                    <v-img :src="company.logo"></v-img>
                                </v-avatar>
                            </template>

                        </v-list-item>
                    </v-list>
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
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import userDetails from "../resources/profile";
import { useTheme } from 'vuetify'
const theme = useTheme()
const themeIcon = ref('');
themeIcon.value = theme.global.current.value.dark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    themeIcon.value = theme.global.current.value.dark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
}
const welcome = userDetails.personal.welcome;
const skills = userDetails.skill;
const tools = userDetails.tool;
</script>
<style>
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
</style>