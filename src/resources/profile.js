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
            title: 'Canva',
            prependAvatar: new URL(`../assets/images/icons/canva.svg`,import.meta.url).href,
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
            skill: ['R24x','R13x', '3DExperience Cloud', 'google cloud', 'github', 'CI/CD', 'widgets', 'vue.js', 'spring boot','J2EE','Java', 'REST Api','JSP','JPO','MQL','TCL']
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
            skill: ['3DExperience', 'R21x', 'R22x', 'R23x', 'widget', 'upgrade', 'migration','java','JSP','MQL','TCL','UI3 components','Linux','widget','vue'],
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
            skill: ['3DExperience', 'R17x', 'R18x', 'R19x', 'XPDM', 'Teamcenter Integration','HTML5','CSS','JSP','Tcl','trigger','UI3 Components','REST Api','Web Services'],
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
            skill: ['core Java', 'J2EE', 'HTML','JSP', 'CSS', 'Servlet', 'web app','Spring framework','Spring-Security','Hibernate','MySQL','fullstack','Bootstrap'],
        },

    ],
    personal: {
        welcome: `Hello ! <i class='waving-hand'>👋</i></br>
        Im <span class='name'>Jayaraj Kannan</span> 💻 </br>
        <i class='text-info text-wrap text-caption'>Full stack ● Enovia Developer</i>`,
        name: 'Jayaraj Kannan',
        description: `<div class='text-caption'>With over <span class='text-primary'> [YEAR1] years </span>of experience in 
        full-stack development, I have spent the past [YEAR2] years specializing in 
        the PLM domain as a Solution Architect for 3DExperience (Enovia). My expertise 
        includes Enovia customization and development, 3DExperience upgrade and migration 
        projects, widget development, and platform installation and configuration.</div>
        `,
        email: 'jayarajkannan95@gmail.com'

    },
    certification:[
        {
            title:'',
        }
    ],
    projects:[
        {
            title:'Smart Expense Manager - Powered by chatbot AI',
            key:'sem_app',
            icon:'mdi mdi-semantic-web',
            git:'https://github.com/jayaraj-kannan/Smart-Expense-Manager.git',
            blog:`https://medium.com/@jrajfx/smart-expense-manager-powered-by-chatbot-ai-9a5c19618a25`,
            live:'https://sem-app-800933239910.us-central1.run.app/',
            description:`Managing personal or business expenses can often feel like navigating a financial labyrinth. Receipts pile up, 
            categorization takes hours, and manual errors sneak in. Enter the Smart Expense Manager — a game-changing tool designed to automate and 
            simplify expense management using cutting-edge AI and cloud technologies. In this blog, we’ll explore how the Smart Expense Manager empowers users to effortlessly track, 
            categorize, and analyze expenses, offering insights for better financial decision-making.`,
            tech:[`Vue.js`,`Vuetify`,`Gemini 2.O flash`,`Google Cloud`,`Firebase DB`,`Firebase Authentication`,`Firebase Admin`]
        },
        {
            title:'Digital Invitation',
            key:'digital_wedding',
            icon:'mdi mdi-semantic-web',
            git:'https://github.com/jayaraj-kannan/digital-wedding-invitation',
            live:'https://jayaraj-kannan.github.io/digital-wedding-invitation/',
            description:`I developed a responsive website for my wedding event. 
            It features an event day countdown, event details, a "Save the Date" option for adding the 
            event to Apple Calendar or Google Calendar, event venue map integration, and a form for collecting 
            guest attendance details.`,
            tech:['HTML5','CSS','google forms']
        },
        {
            title:'Expense Manager',
            key:'expense_manager',
            icon:'mdi mdi-api',
            git:'https://github.com/jayaraj-kannan/expensive_report',
            description:`I've developed an API for managing user details using Spring Security. 
            The API includes two modules: User and Expense. In the User module, 
            there are two roles: admin and user. Admins have full CRUD (Create, Read, Update, Delete) capabilities, 
            while all users can create and track their expenses based on categories. 
            Users can also generate reports to track expenses on a yearly, monthly, or weekly basis. 
            This project is currently under continuous development.`,
            tech:['j2EE','Spring Boot','Spring Security','Postgres DB','OAuth','microservices','REST Api']
        },
        {
            title:'Portfolio',
            key:'portfolio',
            icon:'mdi mdi-semantic-web',
            git:'https://github.com/jayaraj-kannan/my-portfolio.git',
            live:'https://jayaraj-kannan.github.io/my-portfolio/',
            description:`developed a portfolio using vue with vuetify, customized some style and componets.`,
            tech:['Vuejs','Vuetify','Javascript','CSS','HTML5','emailjs']
        },
        {
            title:'Image Editor',
            key:'imagee_editor',
            icon:'mdi mdi-semantic-web',
            git:'https://github.com/jayaraj-kannan/Image-Editor.git',
            description:`developed a image editor using React js, convert the image size to prefered size.`,
            tech:['Reactjs','Javascript','CSS','HTML5']
        }
    ],
    links: {
        github: 'https://github.com/jayaraj-kannan',
        linkedin: 'https://www.linkedin.com/in/jayaraj-kannan-58922b111/',
        facebook: 'https://www.facebook.com/jrajfx/',
        instagram: 'https://www.instagram.com/jayaraj_creator',
        twitter: 'https://twitter.com/jrajfx'
    },
    role: 'Full stack Java Developer ● Enovia Developer'

}
function actualYrsOfExp(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1

    // Calculate year and month difference
    let yearDifference = currentYear - 2016;
    let monthDifference = currentMonth - 5;

    // Adjust if monthDifference is negative
    if (monthDifference < 0) {
        yearDifference -= 1;
        monthDifference += 12;
    }

    // Calculate the total difference in years as a decimal
    const totalYears = yearDifference + monthDifference / 12;

    // Return the result as a string with one decimal precision
    return totalYears.toFixed(1);
}
export default userDetails;