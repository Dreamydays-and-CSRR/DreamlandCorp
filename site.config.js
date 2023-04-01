module.exports = {
    base: 'https://Dreamland.corp',
    siteMetadata: {
        title: 'Dreamland Corp | Website | Develorper Corp',
        description: 'We Are Dreamland, a pro full stack developer',
        author: 'Exclusive Moose',
        authorImage: "https://cdn.discordapp.com/icons/828173576296595476/139a82567e2410a784b76b1b678d8cf6.png?size=512",
        image: '/banner.png',
        favicon: '/favicon.png',
        url: 'https://Dreamland.corp',
        themeColor: '#0055ff',
        email: 'emansavage242@gmail.com',
    },
    
    IndexPage: {
        lanyard: {
            enabled: true,
            id: '762725542705233950',
        }
    },

    AboutMePage: {
        yourLand: 'US',
        developerGrade: 'Full Stack Developer',
        developerGrade2: 'Full Stack',
    },

    github: {
        enabled: true,
        username: 'Dreamland Corp',
    },

    social: {
        twitter: '',
        github: 'https://github.com/Dreamydays-and-CSRR',
        linkedin: '',
        instagram: '',
        facebook: '',
        discord: ' https://discord.gg/BcckeQ8hKU',
    },

    projects: {
        enabled: true,
        data: [
            { 
                id: 1,
                image: "", 
                slug: "Looking for Dev's",
                name: "Looking for Dev's", 
                github: false,
                githubLink: "",
                website: false,
                websiteLink: "",
                invite: false,
                inviteLink: "",
                description: "Looking for Dev's.",
              },
              { 
                id: 2,
                image: "", 
                slug: "Looking for Dev's",
                name: "Looking for Dev's", 
                github: false,
                githubLink: "",
                website: false,
                websiteLink: "",
                invite: false,
                inviteLink: "",
                description: "Looking for Dev's.",
              },
              { 
                id: 3,
                image: "", 
                slug: "Looking for Dev's",
                name: "Looking for Dev's", 
                github: false,
                githubLink: "",
                website: false,
                websiteLink: "",
                invite: false,
                inviteLink: "",
                description: "Looking for Dev's.",
              },
              { 
                id: 4,
                image: "", 
                slug: "Looking for Dev's",
                name: "Looking for Dev's", 
                github: false,
                githubLink: "",
                website: false,
                websiteLink: "",
                invite: false,
                inviteLink: "",
                description: "Looking for Dev's.",
              }
        ]
    },

    skills: {
        enabled: true,
        data: [
        { name: "HTML", src: "/images/html.svg" },
        { name: "Bootstrap", src: "/images/bootstrap.svg" },
        { name: "CSS", src: "/images/css.svg" },
        { name: "Javascript", src: "/images/javascript.svg" },
        { name: "Node.js", src: "/images/nodejs.svg" },
        { name: "Sass", src: "/images/sass.svg" },
        { name: "C#", src: "/images/csharp.svg" },
        { name: "Mongo DB", src: "/images/mongodb.svg" },
        { name: "Prisma", src: "/images/prisma.svg" },
        { name: "PHP", src: "/images/php.svg" },
        { name: "TailwindCSS", src: "/images/tailwindcss.svg" },
        { name: "Next.js", src: "/images/nextjs.svg" },
        { name: "MySQL", src: "/images/mysql.svg" },
        { name: "Express", src: "/images/expressjs.svg" },
        { name: "Fastify", src: "/images/fastify.svg" },
        { name: "React", src: "/images/react.svg" },
        { name: "Bulma", src: "/images/bulmacss.svg" },
        { name: "Git", src: "/images/git.svg" },
        { name: "Alpine.js", src: "/images/alpinejs.svg" },
        { name: "Yarn", src: "/images/yarn.svg" },
        { name: "Sails.js", src: "/images/sailsjs.png" },
        { name: "Figma", src: "/images/figma.svg" },
        { name: "Photoshop CC", src: "/images/photoshop.svg" },
        { name: "Github", src: "/images/github.svg" },
        { name: "Firebase", src: "/images/firebase.svg" },
        { name: "Heroku", src: "/images/heroku.svg" },
        { name: "pnpm", src: "/images/pnpm.svg" },
        { name: "Webpack", src: "/images/webpack.svg" },
        { name: "Iconscout", src: "/images/iconscout.png" },
        { name: "Typescript", src: "/images/typescript.svg" },
        { name: "Nest.js", src: "/images/nestjs.svg" }
        ]
    },

    socials: [
        { name: "Discord", src: "/images/discord.svg", link: " https://discord.gg/BcckeQ8hKU" },
        { name: "Twitter", src: "/images/twitter.svg", link: "" },
        { name: "Github", src: "/images/github.svg", link: "https://github.com/JanjyTapYT" },
        { name: "Instagram", src: "/images/instagram.svg", link: "" },
        { name: "Twitch", src: "/images/twitch.svg", link: "t" },
    ],

    pages: [
        {
            id: 1,
            name: "Home",
            href: "/",
            icon: {
                default: 'fal fa-home',
                active: 'fas fa-home'
            },
            current: false,
        },
        {
            id: 2,
            name: "About",
            href: "/about",
            icon: {
                default: 'fal fa-user',
                active: 'fas fa-user'
            },
            current: false,
        },
        {
            id: 3,
            name: "Projects",
            href: "/projects",
            icon: {
                default: 'fal fa-project-diagram',
                active: 'fas fa-project-diagram'
            },
            current: false,
        },
        {
            id: 4,
            name: "Contact",
            href: "/contact",
            icon: {
                default: 'fal fa-envelope',
                active: 'fas fa-envelope'
            },
            current: false,
        }
    ],
};
