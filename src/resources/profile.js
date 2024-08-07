//personal details

const userDetails = {
    skill: [
        {
            label: 'core java',
            icon: 'mdi mdi-language-java'
        },
        {
            label: 'J2EE',
            icon: 'mdi mdi-language-java'
        },
        {
            label: 'Spring Boot',
            icon: 'mdi mdi-spring'
        },
        {
            label: 'HTML5',
            icon: 'mdi mdi-language-html5'
        },
        {
            label: 'CSS',
            icon: 'mdi mdi-language-css3'
        },
        {
            label: 'Github',
            icon: 'mdi mdi-github'
        },
        {
            label: 'javascript',
            icon: 'mdi mdi-language-javascript'
        },
        {
            label: 'type script',
            icon: 'mdi mdi-language-typescript',
        },
        {
            label: 'Spring Security',
            icon: 'mdi mdi-lock'
        },
        {
            label: 'Oauth2',
            icon: 'mdi mdi-shield-lock'
        },
        {
            label: 'Vue.js',
            icon: 'mdi mdi-vuejs'
        },
        {
            label: 'Vuetify',
            icon: 'mdi mdi-vuetify'
        },
        {
            label: 'react.js',
            icon: 'mdi mdi-react'
        },
        {
            label: 'REST Api',
            icon: 'mdi mdi-api'
        },
        {
            label: 'MySQL',
            icon: 'mdi mdi-database'
        },
        {
            label: 'PostgreSQL',
            icon: 'mdi mdi-database'
        },
        {
            label: 'node js',
            icon: 'mdi mdi-nodejs'
        }
    ],
    tool: [

        {
            title: 'PLM 3DExperience',
            prependAvatar: new URL(`../assets/images/icons/3DS_White_RGB.svg`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
            title: 'Inteliji',
            prependAvatar: new URL(`../assets/images/icons/intellijiIdea.png`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
            title: 'VS Code',
            prependAvatar: new URL(`../assets/images/icons/vscode.png`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
            title: 'Eclipse',
            prependAvatar: new URL(`../assets/images/icons/eclipse.png`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
            title: 'Figma',
            prependAvatar: new URL(`../assets/images/icons/figma.png`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
            title: 'PhotoShop',
            prependAvatar: new URL(`../assets/images/icons/photoshop.png`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
            title: 'Bruno Api Tester',
            prependAvatar: new URL(`../assets/images/icons/bruno.svg`,import.meta.url).href,
            subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        }
    ],
    experience: [
        {
            companyName: 'Renault Nissan',
            logo: new URL(`../assets/images/icons/rntbci.jpg`,import.meta.url).href,
            role: 'Assistant Manager - Lead Developer',
            place: 'Chengalpattu, Tamilnadu, India.',
            date: 'Aug 2023 - Till',
            description: `As a Lead Developer analyis the requirement from product team, build and develop the custom widgets using vuejs,
            ,based on the requiremnt develop a spring boot REST application to integrate with 3dexperience application and other application.`,
            skill: ['R24x', '3DExperience Cloud', 'google cloud', 'github', 'CI/CD', 'widgets', 'vue.js', 'spring boot', 'REST Api']
        },
        {
            companyName: 'Dassault Systems',
            logo: new URL(`../assets/images/icons/ds.png`,import.meta.url).href,
            place: 'Bangalore, Karnataka, India.',
            role: 'Senior Software Engineer',
            date: 'Aug 2021 - Aug 2023',
            description: `I prepared technical documents for upgrade processes, 
            including migration analysis and upgrade assessment. I used the 3DS Environment 
            Integration tool for code comparison and merging, and developed custom shell scripts 
            for automated upgrades. I wrote custom code for testing using the IIR tool, understood 
            use cases, and conducted testing. I ran unit tests, fixed testing issues, and supported 
            bug fixing. I developed custom functionalities and worked on triggers, JPO, JSP, and JS 
            customizations. Additionally, I reviewed and standardized code, and developed widgets.`,
            skill: ['3DExperience', 'R21x', 'R22x', 'R23x', 'widget', 'upgrade', 'migration'],
            project: [
                {
                    title: 'Ball Aerospace Upgrade (R19x to R21x)',
                    domain: 'PLM',
                    description: `Developed and tested custom code using the IIR tool, 
                    fixed bugs, created custom functionalities, customized triggers, 
                    JPOs, JSPs, and JS, reviewed and standardized code, and developed widgets.`,
                    tech: ['R19x', 'R21x', 'migration', 'IIR', 'unit test', 'trigger', 'jsp', 'tcl', 'Linux', 'mql']
                },
                {
                    title: 'Sikorsky Upgrade (3dx 21x to 22x)',
                    domain: 'PLM',
                    description: `I prepared technical documents for upgrade processes, 
                    including migration analysis and upgrade assessment. 
                    I used the 3DS Environment Integration tool for code comparison and merging. 
                    I developed custom shell scripts for automated upgrades, supported bug fixing, 
                    and developed custom functionalities. I worked on triggers, JPO, JSP, and JS 
                    customizations, reviewed and standardized code, and developed widgets.`,
                    tech: ['R21x', 'R22x', 'migration', 'code compare', 'code merge', 'jsp', 'tcl', 'Linux', 'mql']
                }
            ]
        },
        {
            companyName: 'Intelizign Engineering Services',
            logo: new URL(`../assets/images/icons/iz.jpg`,import.meta.url).href,
            role: 'Senior Software Engineer',
            place: 'Chennai, Tamilnadu, India',
            date: 'Sep 2018 - Aug 2021',
            description: `In intelizign got an opportunity to work on PLM domian and got trained as a Enovia developer. 
            woked for Mahindra & Mahindra . done multiple role and projects digital manufacturing using 3dexperience `,
            skill: ['3DExperience', 'R17x', 'R18x', 'R19x', 'XPDM', 'Teamcenter Integration'],
            project: [
                {
                    title: 'Digital Manufacturing Using 3DExperience'
                }
            ]
        },
        {
            companyName: 'AVFA Technologies',
            logo: new URL(`../assets/images/icons/avfa.jpg`,import.meta.url).href,
            role: 'Software Engineer',
            place: 'Cuddalore, Tamilnadu, India',
            date: 'May 2016 - Aug 2018',
            description: `As a full-stack developer, I learned and developed both the frontend and 
            backend by myself, maintained all requirements, and delivered the final product to the 
            client. It was a small-scale startup company at the time, which is now closed`,
            project: [
                {
                    title: 'Hospital Management System',
                    description: `HMS keeps track of its day-to-day activities & records of its patients, 
                    doctors, nurses, ward boys and other staff personals that keep the hospital running smoothly & successfully`,
                    domain: 'Web app',
                    tech: ['J2EE', 'Hibernate', 'Spring', 'Spring-Security', 'HTML', 'Bootstrap', 'JSP', 'CSS', 'MySQL'],
                },
                {
                    title: 'User Onboard System',
                    domain: 'Web app',
                    description: `The user module supports user roles, which can be set up 
                    with fine-grained permissions allowing each role to do only what the 
                    administrator permits. Each user is assigned one or more roles. By default there are three roles: anonymous (a user who has not logged in) and authenticated (a user who is registered), and administrator (a signed in user who will be assigned site administrator permissions).`,
                    tech: ['J2EE', 'Hibernate', 'Spring', 'Spring-Security', 'HTML', 'Bootstrap', 'JSP', 'CSS', 'MySQL'],
                },
                {
                    title: 'E-Recuitment System',
                    domain: 'Web app',
                    description: `The project entitled “E-Recruitment System” is assigned by the organization. 
                    The aim is to provide services to both the Employer and the Graduate by recruiting Graduates according to the employer specifications.`,
                    tech: ['J2EE', 'Hibernate', 'Spring', 'Spring-Security', 'HTML', 'Bootstrap', 'JSP', 'CSS', 'MySQL'],
                },
            ],
            skill: []
        },

    ],
    personal: {
        welcome: `Hello ! 👋</br>
        Im <span class='name'>Jayaraj Kannan</span> 💻 </br>
        <i class='text-info text-wrap text-caption'>Full stack ● Enovia Developer</i>`,
        name: 'Jayaraj Kannan',
        description: `<div class='text-caption'>With over <span class='text-primary'> 8+ years </span>of experience in 
        full-stack development, I have spent the past 7+ years specializing in 
        the PLM domain as a Solution Architect for 3DExperience (Enovia). My expertise 
        includes Enovia customization and development, 3DExperience upgrade and migration 
        projects, widget development, and platform installation and configuration.</div>
        `,

    },
    links: {
        github: 'https://github.com/jayaraj-kannan',
        linkedin: 'https://www.linkedin.com/in/jayaraj-kannan-58922b111/',
        facebook: 'https://www.facebook.com/jrajfx/',
        instagram: 'https://www.instagram.com/jayaraj_creator',
        twitter: 'https://twitter.com/jrajfx'
    },
    role: 'Full stack Java Developer ● Enovia Developer'

}

export default userDetails;