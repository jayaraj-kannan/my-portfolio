<template>
    <v-container class="pa-0" id="goto-container">
        <v-card :ref="instance => cards.aboutme = instance" class="rounded-xl ma-1" variant="flat" max-width="100%">
            <v-img src="../assets/images/banner.jpg" loading="lazy" alt="Banner Image">
            </v-img>
            <v-fab active class="ms-4 mr-1" :icon="themeIcon" location="bottom end" size="x-small" absolute offset
                @click="toggleTheme"></v-fab>
            <v-list>

                <v-list-item>
                    <template v-slot:title>
                        <div sm="12" md="4" lg="2" v-html="userDetails.personal.welcome"></div>
                    </template>
                    <template v-slot:prepend>
                        <v-avatar size="130" image="../assets/images/color.png"></v-avatar>
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

                            <v-hover v-slot="{ isHovering, props }">
                                <v-list class="rounded-pill mb-1 cursor-pointer" :class="{ 'on-hover': isHovering }"
                                    :elevation="isHovering ? 4 : 0" v-bind="props">
                                    <v-list-item :title="tool.title">

                                        <template v-slot:prepend>
                                            <v-avatar rounded="0">
                                                <v-img :src="tool.prependAvatar" :alt="tool.title"
                                                    loading="lazy"></v-img>
                                            </v-avatar>
                                        </template>
                                        <!-- <template v-slot:subtitle>
                                <div v-html="tool.subtitle"></div>
                            </template> -->

                                    </v-list-item>
                                </v-list>
                            </v-hover>
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
            <v-card :ref="instance => cards.projects = instance" class="rounded-lg ma-1" :class="customClass"
                variant="flat" title="🫰🏼 work experience!">
                <v-card-text>
                    <v-row dense>
                        <v-col v-for="(company, index) in userDetails.experience" :key="index" cols="12" md="6">
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card class="rounded-lg exp cursor-pointer" variant="flat" :title="company.companyName"
                                    :subtitle="company.date" :class="{ 'on-hover': isHovering }"
                                    :elevation="isHovering ? 4 : 0" v-bind="props">
                                    <template v-slot:prepend>
                                        <v-avatar size="50" rounded="0">
                                            <v-img :src="company.logo" loading="lazy"
                                                :alt="company.companyName"></v-img>
                                        </v-avatar>
                                    </template>
                                    <template v-slot:text>
                                        <v-chip size="x-small" v-for="(tech, index) in company.skill" :key="index"
                                            class="ma-1">
                                            {{ tech }}
                                        </v-chip>
                                    </template>
                                </v-card>
                            </v-hover>
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
                                        <v-menu location="start">
                                            <template v-slot:activator="{ props: menu }">
                                                <v-btn icon variant="plain" v-bind="menu">
                                                    <v-icon>mdi mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>
                                            <v-list class="pa-0 rounded-xl">
                                                <v-list-item v-if="project.git" :href="project.git" target="_blank">
                                                    <template #prepend>
                                                        <v-icon color="#181717">mdi mdi-github</v-icon>
                                                        <span class="pl-2">Github</span>
                                                    </template>
                                                    </v-list-item>
                                                <v-list-item v-if="project.live" :href="project.live" target="_blank">
                                                    <template #prepend>
                                                        <v-icon color="#4285F4">mdi mdi-web</v-icon>
                                                        <span class="pl-2">Live Demo</span>
                                                    </template></v-list-item>
                                                <v-list-item v-if="project.blog" :href="project.blog" target="_blank">
                                                    <template #prepend>
                                                        <v-icon color="#00AB6C">mdi mdi-size-m</v-icon>
                                                        <span class="pl-2">Blog</span>
                                                    </template></v-list-item>
                                            </v-list>
                                        </v-menu>

                                    </v-col>
                                </v-row>
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-card-text>
                                    <span>{{ project.description }}</span>
                                    <div class="mt-2">
                                    <v-chip size="small" v-for="(tech, index) in project.tech" :key="index"
                                        class="mr-1">
                                        {{ tech }}
                                    </v-chip>
                                    </div>
                                </v-card-text>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card>
            <v-card :ref="instance => cards.connect = instance" class="rounded-lg ma-1" :class="customClass"
                variant="flat" title="💓 Connect with me!">
                <v-card-text>
                    <v-card v-show="!isEmailSent()" variant="flat" class="pa-2 align-center justify-center">
                        <v-row justify="center">
                            <v-col class="text-center">
                                <p class="text-subtitle-2"><span>let's collabrate !</span></p>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card v-show="!isEmailSent()" variant="flat" class="pa-2">
                        <form @submit.prevent="sendEmail">
                            <v-text-field max-width="350" required v-model="clientName" class="mx-auto"
                                density="compact" menu-icon="" placeholder="your name" label="name" clearable
                                prepend-inner-icon="mdi-account" theme="light" variant="solo" auto-select-first
                                item-props rounded>

                            </v-text-field>
                            <v-text-field max-width="350" required type="email" v-model="clientEmail" class="mx-auto"
                                density="compact" menu-icon="" placeholder="your name" label="email" clearable
                                prepend-inner-icon="mdi-email" theme="light" variant="solo" auto-select-first item-props
                                rounded>

                            </v-text-field>
                            <v-textarea max-width="350" required v-model="clientMessage" class="mx-auto" rows="2"
                                density="compact" menu-icon="" placeholder="your name" label="message" clearable
                                prepend-inner-icon="mdi mdi-message-text" theme="light" variant="solo" auto-select-first
                                item-props rounded></v-textarea>
                            <v-btn class="mx-auto gradient-btn" type="submit" min-width="300" rounded="lg"
                                color="#f0556b" block>send</v-btn>
                        </form>
                    </v-card>
                    <v-card v-if="isEmailSent()" variant="flat" class="pt-4 pb-4 d-flex justify-center align-center">
                        <v-row justify="center">
                            <v-col class="pa-2 text-center">
                                <span class="pa-1 text-caption">i got your message!</span>
                                <v-img src="../assets/images/handshake.gif" loading="lazy" alt="Handshake GIF"
                                    aspect-ratio="1" height="80"></v-img>
                                <span class="pa-1 text-caption">will connect you soon ✌🏻!</span>
                            </v-col>
                        </v-row>
                    </v-card>
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
            <v-bottom-navigation fixed v-model="value" bg-color="teal" mode="shift">
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
import { ref, computed, onBeforeMount } from "vue";
import userDetails from "../resources/profile";
import { useTheme, useGoTo } from 'vuetify';
import emailjs from '@emailjs/browser';
import { toast, type ToastOptions } from 'vue3-toastify';
const value = ref(0)
// const color = computed(() => {
//     switch (value.value) {
//         case 0: return 'teal'
//         case 1: return 'teal'
//         case 2: return 'teal'
//         default: return 'teal'
//     }
// })

onBeforeMount(() => {
    theme.global.name.value = 'light';
    customClass.value = 'bg-color';
    userDetails.personal.description = userDetails.personal.description.replace('[YEAR1]', calculateYears(5, 2016));
    userDetails.personal.description = userDetails.personal.description.replace('[YEAR2]', calculateYears(5, 2018));
});
const theme = useTheme()
const clientName = ref('');
const clientMessage = ref('');
const clientEmail = ref('');
const isEmailSent = () => {
    const storedValue = localStorage.getItem('email-sent');
    return storedValue ? JSON.parse(storedValue) : false;
}
const showSuccessToast = (msg: string) => {
    toast(msg, {
        autoClose: 2500,
        position: toast.POSITION.TOP_RIGHT,
    } as ToastOptions);
};
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
const sendEmail = () => {
    emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
            from_name: clientName.value,
            to_name: userDetails.personal.name,
            from_email: clientEmail.value,
            to_email: userDetails.personal.email,
            message: clientMessage.value
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then((response: any) => {
        //TODO
        localStorage.setItem('email-sent', "true");
        showSuccessToast("got your message, will connect you soon 🫡!")
        console.log('Email sent successfully!', response);
    }).catch((error: any) => {
        console.error('Failed to send email', error);
    });

}
const themeIcon = ref('');
const customClass = ref('');
customClass.value = !theme.global.current.value.dark ? 'bg-color' : '';
const projectPanel = ref<string[]>(['sem_app']);
themeIcon.value = theme.global.current.value.dark ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
const toggleTheme = () => {
    const isDarkMode = theme.global.current.value.dark;

    // Toggle theme name and icon
    theme.global.name.value = isDarkMode ? 'light' : 'dark';
    themeIcon.value = isDarkMode ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny';
    customClass.value = isDarkMode ? 'bg-color' : '';
}
function calculateYears(month: number, year: number) {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear();
    const currentMonth: number = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1

    // Calculate year and month difference
    let yearDifference: number = currentYear - year;
    let monthDifference: number = currentMonth - month;

    // Adjust if monthDifference is negative
    if (monthDifference < 0) {
        yearDifference -= 1;
        monthDifference += 12;
    }

    // Calculate the total difference in years as a decimal
    const totalYears: number = yearDifference + monthDifference / 12;

    // Return the result as a string with one decimal precision
    return totalYears.toFixed(1);
}
</script>
<style>
.fixed-layout {
    z-index: 1000;
    /* Adjust the z-index if necessary */
}

.gradient-btn:hover {
    background: linear-gradient(45deg, #ff3a4a, #ffb0bc);
}

/* Waving animation */
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(14deg);
    }

    40% {
        transform: rotate(-8deg);
    }

    60% {
        transform: rotate(14deg);
    }

    80% {
        transform: rotate(-4deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.waving-hand {
    display: inline-block;
    animation: wave 1.5s infinite;
    transform-origin: 70% 70%;
    /* Adjust the origin for a more natural waving motion */
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

.handshake-container {
    position: relative;
    width: 200px;
    height: 100px;
    margin: 20px auto;
}

.hand {
    width: 50px;
    height: 50px;
    background-color: #f1c40f;
    /* Hand color */
    border-radius: 10px;
    position: absolute;
}

.left-hand {
    left: 0;
    animation: shakeLeft 1.5s infinite ease-in-out;
}

.right-hand {
    right: 0;
    animation: shakeRight 1.5s infinite ease-in-out;
}

@keyframes shakeLeft {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(30px);
    }

    50% {
        transform: translateX(0);
    }

    75% {
        transform: translateX(30px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes shakeRight {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-30px);
    }

    50% {
        transform: translateX(0);
    }

    75% {
        transform: translateX(-30px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>