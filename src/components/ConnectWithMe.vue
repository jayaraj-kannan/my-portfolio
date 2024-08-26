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
            <v-card class="rounded-lg ma-1" :class="customClass" variant="flat" title="💓 Connect with me!">
                <v-card-text>
                    <v-row dense>
                        <v-col>
                            <v-card class="rounded-lg exp" variant="flat" color="#black">
                                <v-form ref="form" v-model="valid" lazy-validation>

                                    <v-text-field class="ml-6 mr-6 mt-6 mb-1" variant="solo" label="Name"
                                        :rules="[rules.required]" required clearable></v-text-field>

                                    <v-text-field class="ml-6 mr-6 mt-1 mb-1" variant="solo" label="Email"
                                        :rules="[rules.required, rules.email]" required clearable></v-text-field>

                                    <v-textarea class="ml-6 mr-6 mt-1 mb-1" variant="solo" label="Message"
                                        :rules="[rules.required]" required auto-grow clearable></v-textarea>
                                </v-form>
                                <template v-slot:actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="success">
                                        Connect

                                        <v-icon icon="mdi-chevron-right" end></v-icon>
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
        <BottomNavBar />
    </v-container>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import userDetails from "../resources/profile";
import { useTheme } from 'vuetify'
import BottomNavBar from '@/components/BottomNavBar.vue';

// Define types for the form data and validation rules
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface Rules {
    required: (value: string) => boolean | string;
    email: (value: string) => boolean | string;
}

// Form data and validation rules
const form = ref<InstanceType<typeof VForm>>();
const valid = ref(false);
const formData = reactive<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const rules: Rules = {
    required: (value: string) => !!value || 'Required.',
    email: (value: string) => {
        const pattern = /^[^@]+@[^@]+\.[^@]+$/;
        return pattern.test(value) || 'Invalid e-mail.';
    }
};

// Methods for handling form submission and clearing
function submit() {
    if (form.value?.validate()) {
        // Handle form submission
        console.log('Form submitted with:', formData);
        clear();
    }
}

function clear() {
    form.value?.reset();
}
const theme = useTheme()
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