<template>
    <v-container class="pa-0" id="goto-container">
        <v-card :ref="instance => cards.aboutme = instance" class="rounded-xl ma-1" variant="flat" max-width="100%">
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
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🧑‍💻 About me!">
                <template v-slot:text>
                    <div v-html="userDetails.personal.description"></div>
                </template>
            </v-card>
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🧋 my core skills!">
                <v-card-text>
                    <v-chip size="small" v-for="(skill, index) in userDetails.skill" :key="index" class="ma-1 g-color">
                        <template v-slot:prepend>
                            <v-icon class="mr-1">{{ skill.icon }}</v-icon>
                        </template>
                        {{ skill.label }}
                    </v-chip>
                    <v-row class="ma-1">
                        <v-col class="ma-0 pt-0 pb-0" v-for="(tool, index) in userDetails.tool" :key="index" cols="12"
                            sm="12" md="4" lg="2">
                            <v-list class="rounded-pill mb-1">
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
            <v-card :ref="instance => cards.projects = instance" class="rounded-lg ma-1" :class="customClass"
                variant="flat" title="🫰🏼 work experience!">
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="(company, index) in userDetails.experience" :key="index" cols="12" md="6">
                            <v-card class="rounded-lg exp" variant="flat" :title="company.companyName"
                                :subtitle="company.date">
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
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="🛠️ Projects!">
                <v-card-text>
                    <v-expansion-panels elevation="0" v-model="projectPanel" class="rounded-lg" variant="popout">
                        <v-expansion-panel :value="project.key" v-for="(project, index) in userDetails.projects"
                            :key="index" eager class="rounded-lg" hide-actions>
                            <v-expansion-panel-title>
                                <v-row align="center" class="spacer" no-gutters>
                                    <v-col cols="3" md="1" sm="2">
                                        <v-avatar size="50">
                                            <v-icon class="project-app-icon" size="60">
                                                {{ project.icon }}
                                            </v-icon>
                                        </v-avatar>
                                    </v-col>
                                    <v-col class="hidden-xs-only text-left ms-2" cols="6" md="9" sm="3">
                                        <strong>{{ project.title }}</strong>
                                    </v-col>
                                    <v-col class="project-link" cols="2" md="1" sm="1">
                                        <v-btn icon variant="plain">
                                            <v-icon>mdi-open-in-new</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-card-text>{{ project.description }}</v-card-text>
                            </v-expansion-panel-text>

                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card>
            <v-card :ref="instance => cards.connect = instance" class="rounded-lg ma-1" :class="customClass"
                variant="flat" title="💓 Connect with me!">
                <v-card-text class="d-flex">
                    <v-row justify="center" dense>
                        <!-- <v-col cols="12">
          <v-img
            class="mx-auto mt-12 mb-16"
            max-height="140"
            max-width="240"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-text.svg"
          ></v-img>
        </v-col> -->

                        <v-col cols="12">
                            <v-text-field class="mx-auto" density="compact" menu-icon="" placeholder="your name"
                                label="name" clearable prepend-inner-icon="mdi-account" style="max-width: 350px;"
                                theme="light" variant="solo" auto-select-first item-props rounded>

                            </v-text-field>
                            <v-text-field class="mx-auto" density="compact" menu-icon="" placeholder="your name"
                                label="email" clearable prepend-inner-icon="mdi-email" style="max-width: 350px;"
                                theme="light" variant="solo" auto-select-first item-props rounded>

                            </v-text-field>
                            <v-textarea class="mx-auto" rows="2" density="compact" menu-icon="" placeholder="your name"
                                label="message" clearable prepend-inner-icon="mdi mdi-message-text"
                                style="max-width: 350px;" theme="light" variant="solo" auto-select-first item-props
                                rounded></v-textarea>
                            <v-btn class="mx-auto" rounded="lg" color="#8E24AA" size="x-large" min-width="350"
                                block>send</v-btn>
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
        <v-layout class="overflow-visible fixed-layout"
            style="height: 56px;position: sticky; bottom: 0; left: 0; width: 100%;">
            <v-bottom-navigation fixed v-model="value" :bg-color="color" mode="shift">
                <v-btn @click="scrollTo('aboutme')">
                    <v-icon>mdi mdi-account-question-outline</v-icon>

                    <span>About Me</span>
                </v-btn>

                <v-btn @click="scrollTo('projects')">
                    <v-icon>mdi mdi-bag-personal-outline</v-icon>

                    <span>Personal</span>
                </v-btn>

                <v-btn @click="scrollTo('connect')">
                    <v-icon>mdi mdi-human-greeting-proximity</v-icon>

                    <span>Connect</span>
                </v-btn>
            </v-bottom-navigation>
        </v-layout>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import userDetails from "../resources/profile";
import { useTheme, useGoTo } from 'vuetify';
const value = ref(1)

const color = computed(() => {
    switch (value.value) {
        case 0: return 'teal'
        case 1: return 'teal'
        case 2: return 'teal'
        case 3: return 'teal'
        default: return 'teal'
    }
})
const theme = useTheme()
const goTo = useGoTo()
const scrollTo = (componentKey: keyof typeof cards) => {
    const componentElement = cards[componentKey]?.$el  // Get the component's element
    if (componentElement) {
        goTo(componentElement, options.value)  // Scroll to the component's element
    } else {
        console.error(`Component ${componentKey} does not exist or is not yet rendered.`)
    }
}
const cards = {
    aboutme: null as any,
    projects: null as any,
    connect: null as any
};
const duration = ref(300)
const offset = ref(0)
const easing = ref('easeInOutCubic')
const options = computed(() => ({
    duration: duration.value,
    easing: easing.value,
    offset: offset.value,
}))

const themeIcon = ref('');
const customClass = ref('');
customClass.value = !theme.global.current.value.dark ? 'bg-color' : '';
const projectPanel = ref<string[]>(['digital_wedding']);
themeIcon.value = theme.global.current.value.dark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
const toggleTheme = () => {
const isDarkMode = theme.global.current.value.dark;

 // Toggle theme name and icon
theme.global.name.value = isDarkMode ? 'light' : 'dark';
themeIcon.value = isDarkMode ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
customClass.value = isDarkMode ? 'bg-color' : '';
}
</script>
<style>
.fixed-layout {
    z-index: 1000;
    /* Adjust the z-index if necessary */
}

.v-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.v-bottom-navigation {
    z-index: 1000;
    /* Ensure it's on top */
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

.footer-text {
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