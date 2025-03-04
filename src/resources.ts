export interface Resource {
  name: string;
  description: string;
  url: string;
  logo?: string;
}

export interface Category {
  name: string;
  resources: Resource[];
  icon: {
    type: "lucide" | "url" | "local";
    value: string;
  };
}

export const categories: Category[] = [
  // Official Resources
  {
    name: "Official Resources",
    icon: { type: "lucide", value: "badge-check" },
    resources: [
      {
        name: "React Website",
        description: "Official React documentation and resources",
        url: "https://react.dev/",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Repository",
        description: "Official React GitHub repository",
        url: "https://github.com/facebook/react",
        logo: "/media/logos/official/github.svg",
      },
      {
        name: "React Community",
        description: "Official React community resources",
        url: "https://react.dev/community",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Blog",
        description: "Official React blog",
        url: "https://react.dev/blog",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Conferences",
        description: "Information about React conferences",
        url: "https://react.dev/community/conferences",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Discord",
        description: "Official React Discord community",
        url: "https://www.reactiflux.com/",
        logo: "/media/logos/official/discord.svg",
      },
      {
        name: "React Quick Start Tutorial",
        description: "Official React quick start guide",
        url: "https://react.dev/learn",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "Using React in VS Code Tutorial",
        description: "Official VS Code tutorial about using React",
        url: "https://code.visualstudio.com/docs/nodejs/reactjs-tutorial",
        logo: "/media/logos/official/vscode.svg",
      },
    ],
  },

  // Forums
  {
    name: "Forums",
    icon: { type: "lucide", value: "message-square" },
    resources: [
      {
        name: `DEV's React Community`,
        description:
          "Official tag for Facebook's React JavaScript library for building user interfaces.",
        url: "https://dev.to/t/react",
        logo: "/media/logos/forums/dev-react.png",
      },
      {
        name: "Hashnode",
        description: "A friendly and inclusive dev community.",
        url: "https://hashnode.com/n/react",
        logo: "/media/logos/forums/hashnode.png",
      },
    ],
  },

  // Frameworks
  {
    name: "Frameworks",
    icon: { type: "lucide", value: "shapes" },
    resources: [
      {
        name: "Next.js",
        description:
          "A React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications.",
        url: "https://nextjs.org/",
        logo: "/media/logos/frameworks/nextjs.svg",
      },
      {
        name: "Gatsby",
        description:
          "A React-based open-source framework for creating fast, secure, and powerful websites using modern web technologies.",
        url: "https://www.gatsbyjs.com/",
        logo: "/media/logos/frameworks/gatsby.svg",
      },
      {
        name: "Remix",
        description:
          "A full stack web framework that lets you focus on the user interface and works seamlessly with React.",
        url: "https://remix.run/",
        logo: "/media/logos/frameworks/remix.svg",
      },
      {
        name: "Blitz.js",
        description:
          "A framework built on top of Next.js, providing a full-stack experience with a focus on developer productivity.",
        url: "https://blitzjs.com/",
        logo: "/media/logos/frameworks/blitz.svg",
      },
      {
        name: "RedwoodJS",
        description:
          "An opinionated, full-stack, serverless web application framework built on React, GraphQL, and Prisma.",
        url: "https://redwoodjs.com/",
        logo: "/media/logos/frameworks/redwoodjs.svg",
      },
      {
        name: "Refine",
        description:
          "A React Framework for building internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.",
        url: "https://refine.dev/",
        logo: "/media/logos/frameworks/refine.svg",
      },
      {
        name: "Tuono",
        description:
          "A full-stack web framework for building React applications using Rust as the backend with a strong focus on usability and performance.",
        url: "https://tuono.dev/",
        logo: "https://tuono.dev/favicon.ico",
      },
    ],
  },

  // Authentication
  {
    name: "Authentication",
    icon: { type: "lucide", value: "key" },
    resources: [
      {
        name: "Auth.js",
        description: "Authentication for the Web. Free and open source.",
        url: "https://authjs.dev/",
        logo: "https://authjs.dev/favicon.ico",
      },
      {
        name: "Auth0",
        description:
          "A platform for securing access to your applications, devices, and users.",
        url: "https://auth0.com/",
        logo: "/media/logos/authentication/auth0.svg",
      },
      {
        name: "Okta",
        description:
          "A complete identity management solution for your web and mobile apps.",
        url: "https://developer.okta.com/docs/guides/sign-into-spa/react/before-you-begin/",
        logo: "/media/logos/authentication/okta.svg",
      },
      {
        name: "Clerk",
        description:
          "Authentication and user management for modern applications.",
        url: "https://clerk.dev/",
        logo: "/media/logos/authentication/clerk.png",
      },
    ],
  },

  // Routing
  {
    name: "Routing",
    icon: { type: "lucide", value: "route" },
    resources: [
      {
        name: "Wouter",
        description:
          "A minimalist-friendly ~2.1KB routing for React and Preact.",
        url: "https://github.com/molefrog/wouter",
        logo: "/media/logos/routing/wouter.svg",
      },
      {
        name: "Tanstack Router",
        description: "A powerful routing library for React applications.",
        url: "https://tanstack.com/router/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "React Router",
        description: "The standard routing library for React applications.",
        url: "https://reactrouter.com/",
        logo: "https://reactrouter.com/favicon-light.png",
      },
      {
        name: "Reach Router",
        description:
          "A routing library with a focus on accessibility and simplicity.",
        url: "https://reach.tech/router",
        logo: "/media/logos/routing/reach.png",
      },
    ],
  },

  // Drag & Drop
  {
    name: "Drag & Drop",
    icon: { type: "lucide", value: "move" },
    resources: [
      {
        name: "Swapy",
        description:
          "A framework-agnostic tool that converts any layout into a drag-to-swap one with just a few lines of code.",
        url: "https://swapy.tahazsh.com/",
        logo: "https://swapy.tahazsh.com/favicon.ico",
      },
      {
        name: "DnDKit",
        description:
          "A lightweight, performant, accessible and extensible drag & drop toolkit for React.",
        url: "https://dndkit.com/",
        logo: "https://dndkit.com/favicon.ico",
      },
      {
        name: "React Beautiful DnD",
        description:
          "A powerful and beautiful drag-and-drop library for lists with React.",
        url: "https://github.com/atlassian/react-beautiful-dnd",
        logo: "/media/logos/drag-and-drop/react-beautiful-dnd.png",
      },
      {
        name: "React DnD",
        description:
          "A set of React utilities to help you build complex drag-and-drop interfaces.",
        url: "https://react-dnd.github.io/react-dnd/about",
        logo: "/media/logos/drag-and-drop/react-dnd.png",
      },
      {
        name: "SortableJS",
        description:
          "A React wrapper for SortableJS, a library for reorderable drag-and-drop lists.",
        url: "https://github.com/SortableJS/react-sortablejs",
        logo: "/media/logos/drag-and-drop/react-sortablejs.png",
      },
      {
        name: "React Dragula",
        description: "A drag-and-drop library for React based on Dragula.",
        url: "https://github.com/bevacqua/react-dragula",
        logo: "https://bevacqua.github.io/react-dragula/favicon.ico",
      },
      {
        name: "React Complex Tree",
        description:
          "Unopinionated Accessible Tree Component with Multi-Select and Drag-And-Drop.",
        url: "https://rct.lukasbach.com/",
        logo: "/media/logos/drag-and-drop/react-complex-tree.svg",
      },
      {
        name: "FormKit's Drag and Drop",
        description:
          "A small library for adding data-first drag and drop sorting and transferring for lists in your app.",
        url: "https://drag-and-drop.formkit.com/",
        logo: "/media/logos/drag-and-drop/formkit-dnd.png",
      },
      {
        name: "react-movable",
        description: "Drag and drop for your React lists and tables.",
        url: "https://react-movable.pages.dev",
        logo: "/media/logos/drag-and-drop/react-movable.svg",
      },
    ],
  },

  // UI Frameworks & Libraries
  {
    name: "UI Frameworks & Libraries",
    icon: { type: "lucide", value: "layout" },
    resources: [
      {
        name: "Shadcn UI",
        description:
          "A modern UI framework for building responsive and accessible web applications.",
        url: "https://ui.shadcn.com/",
        logo: "https://ui.shadcn.com/favicon.ico",
      },
      {
        name: "Radix UI",
        description:
          "An open source component library optimized for fast development, easy maintenance, and accessibility.",
        url: "https://www.radix-ui.com/",
        logo: "/media/logos/ui-frameworks-libraries/radix-ui.svg",
      },
      {
        name: "Eldora UI",
        description:
          "An open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.",
        url: "https://www.eldoraui.site/",
        logo: "https://www.eldoraui.site/favicon.ico",
      },
      {
        name: "Material UI",
        description:
          "An open-source React component library that implements Google's Material Design.",
        url: "https://mui.com/material-ui/",
        logo: "https://mui.com/static/favicon.ico",
      },
      {
        name: "Material Tailwind",
        description:
          "An open-source library that uses the power of Tailwind CSS and React to help you build unique web projects faster and easier.",
        url: "https://www.material-tailwind.com/",
        logo: "https://www.material-tailwind.com/favicon.ico",
      },
      {
        name: "React Spectrum Libraries",
        description:
          "A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences.",
        url: "https://react-spectrum.adobe.com/",
        logo: "https://react-spectrum.adobe.com/favicon.ico",
      },
      {
        name: "Flowbite React",
        description:
          "An open-source UI component library built on top of Tailwind CSS with React components and based on the Flowbite Design System.",
        url: "https://flowbite-react.com/",
        logo: "https://flowbite-react.com/favicon.ico",
      },
      {
        name: "Next UI",
        description:
          "A modern design system for building beautiful React applications.",
        url: "https://nextui.org/",
        logo: "https://nextui.org/favicon.ico",
      },
      {
        name: "Evergreen",
        description:
          "A React UI Framework for building ambitious products on the web.",
        url: "https://evergreen.segment.com/",
        logo: "/media/logos/ui-frameworks-libraries/evergreen.svg",
      },
      {
        name: "Chakra UI",
        description:
          "A simple, modular, and accessible component library that gives you the building blocks to build your React applications.",
        url: "https://www.chakra-ui.com/",
        logo: "https://www.chakra-ui.com/favicon.ico",
      },
      {
        name: "Mantine",
        description:
          "A fully featured React components library with native dark theme support.",
        url: "https://mantine.dev/",
        logo: "https://mantine.dev/favicon.svg",
      },
      {
        name: "Ant Design",
        description:
          "A design system with values of Nature and Determinacy for better user experience of enterprise applications.",
        url: "https://ant.design/",
        logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      },
      {
        name: "Blueprint",
        description: "A React-based UI toolkit for the web.",
        url: "https://blueprintjs.com/",
        logo: "/media/logos/ui-frameworks-libraries/blueprintjs.svg",
      },
      {
        name: "FluentUI",
        description:
          "A collection of UX frameworks from Microsoft that help you build web apps that match the Microsoft Design Language",
        url: "https://react.fluentui.dev/?path=/docs/concepts-introduction--docs",
        logo: "https://react.fluentui.dev/favicon.ico",
      },
      {
        name: "Ariakit",
        description:
          "A modern React UI library that helps you build fast, accessible, and responsive web applications.",
        url: "https://ariakit.org/",
        logo: "https://ariakit.org/favicon.ico",
      },
      {
        name: "NativeBase",
        description:
          "Mobile-first, accessible components for React Native & Web to build consistent UI across Android, iOS and Web.",
        url: "https://nativebase.io/",
        logo: "https://nativebase.io/favicon.ico",
      },
      {
        name: "React Bootstrap",
        description: "Bootstrap components built with React.",
        url: "https://react-bootstrap.github.io/",
        logo: "/media/logos/ui-frameworks-libraries/react-bootstrap.svg",
      },
      {
        name: "Grommet",
        description:
          "Build responsive and accessible mobile-first projects for the web with an easy to use component library.",
        url: "https://v2.grommet.io/",
        logo: "/media/logos/ui-frameworks-libraries/grommet.png",
      },
      {
        name: "Reakit",
        description: "Toolkit for building accessible web apps with React.",
        url: "https://reakit.io/",
        logo: "/media/logos/ui-frameworks-libraries/reakit.png",
      },
      {
        name: "PrimeReact",
        description:
          "A comprehensive suite of customizable, feature-rich UI components.",
        url: "https://primereact.org/",
        logo: "https://primereact.org/favicon.ico",
      },
      {
        name: "ZenUI",
        description:
          "An Tailwind CSS components library for any needs. Comes with UI examples & blocks, templates, Icons, Color Palette and more.",
        url: "https://zenui.net/",
        logo: "/media/logos/ui-frameworks-libraries/zenui.png",
      },
      {
        name: "FlyonUI",
        description:
          "An open-source Tailwind CSS Components Library with semantic classes and powerful JS plugins.",
        url: "https://flyonui.com/",
        logo: "/media/logos/ui-frameworks-libraries/flyonui.png",
      },
      {
        name: "DaisyUI",
        description: "The most popular component library for Tailwind CSS.",
        url: "https://daisyui.com/",
        logo: "https://daisyui.com/favicon.ico",
      },
      {
        name: "Headless UI",
        description:
          "A set of completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
        url: "https://headlessui.dev/",
        logo: "/media/logos/ui-frameworks-libraries/headless-ui.svg",
      },
      {
        name: "React Email",
        description:
          "An open source component library optimized for fast development, easy maintenance, and accessibility.",
        url: "https://react.email/",
        logo: "/media/logos/ui-frameworks-libraries/react-email.webp",
      },
      {
        name: "Polaris",
        description:
          "Shopify’s design system to help us work together to build a great experience for all of our merchants.",
        url: "https://polaris.shopify.com/",
        logo: "/media/logos/ui-frameworks-libraries/polaris.svg",
      },
      {
        name: "Apsara",
        description:
          "An elegant and beautiful re-usable React UI components build using Radix UI and Stitches CSS-in-JS.",
        url: "https://apsara-raystack.vercel.app/",
        logo: "/media/logos/ui-frameworks-libraries/apsara.svg",
      },
      {
        name: "dotUI",
        description:
          "Minimalist component library focused on simplicity and performance.",
        url: "https://dotui.org/",
        logo: "/media/logos/ui-frameworks-libraries/dotui.png",
      },
      {
        name: "TailusUI",
        description:
          "Highly customizable React components for crafting modern, personalized websites and applications.",
        url: "https://ui.tailus.io/",
        logo: "/media/logos/ui-frameworks-libraries/tailus.png",
      },
      {
        name: "Aceternity UI",
        description:
          "Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
        url: "https://ui.aceternity.com/",
        logo: "/media/logos/ui-frameworks-libraries/aceternity-ui.webp",
      },
      {
        name: "Justd",
        description:
          "Accessible React UI components similar to Shadcn/ui but using React Area instead of Radix.",
        url: "https://getjustd.com/",
        logo: "/media/logos/ui-frameworks-libraries/justd.png",
      },
      {
        name: "rsuitejs",
        description:
          "A suite of React components, sensible UI design, and a friendly development experience.",
        url: "https://rsuitejs.com/",
        logo: "https://rsuitejs.com/favicon.ico",
      },
      {
        name: "Park UI",
        description:
          "Beautiful designed components build with Ark UI and Panda CSS.",
        url: "https://parkui.com/",
        logo: "/media/logos/ui-frameworks-libraries/park-ui.png",
      },
      {
        name: "Theme UI",
        description:
          "Build consistent, themeable React apps based on constraint-based design principles.",
        url: "https://theme-ui.com/",
        logo: "/media/logos/ui-frameworks-libraries/theme-ui.png",
      },
      {
        name: "Gestalt",
        description:
          "A set of React UI components that supports Pinterest’s design language.",
        url: "https://gestalt.pinterest.systems",
        logo: "/media/logos/ui-frameworks-libraries/gestalt.png",
      },
      {
        name: "Elastic UI",
        description:
          "The Elastic UI framework (EUI) is a design library in use at Elastic to build internal products that need to share our aesthetics.",
        url: "https://eui.elastic.co",
        logo: "/media/logos/ui-frameworks-libraries/elastic-ui.svg",
      },
      {
        name: "Tremor",
        description: "React components to build charts and dashboards.",
        url: "https://tremor.so",
        logo: "https://tremor.so/favicon.ico",
      },
      {
        name: "Sailboat UI",
        description: "A modern UI component library for Tailwind CSS.",
        url: "https://sailboatui.com/",
        logo: "https://sailboatui.com/favicon.ico",
      },
      {
        name: "Ring UI",
        description: "A collection of JetBrains Web UI components.",
        url: "https://jetbrains.github.io/ring-ui/master/index.html",
        logo: "/media/logos/ui-frameworks-libraries/ring-ui.png",
      },
      {
        name: "Orbit",
        description:
          "React components of open-source Orbit design system by Kiwi.com.",
        url: "https://orbit.kiwi/",
        logo: "/media/logos/ui-frameworks-libraries/orbit.png",
      },
      {
        name: "Preline",
        description:
          "An open-source Tailwind CSS components library for any needs.",
        url: "https://preline.co/",
        logo: "/media/logos/ui-frameworks-libraries/preline.png",
      },
      {
        name: "MagicUI",
        description:
          "150+ free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion.",
        url: "https://magicui.design/",
        logo: "/media/logos/ui-frameworks-libraries/magicui.png",
      },
      {
        name: "CuiCui",
        description:
          "A collection of components, tools, and hooks that are designed to be simple, customizable and educational.",
        url: "https://cuicui.day",
        logo: "https://cuicui.day/favicon.ico",
      },
      {
        name: "Kokonut UI",
        description:
          "Open Source UI components built with Tailwind CSS for React and Next.js.",
        url: "https://kokonutui.com/",
        logo: "/media/logos/ui-frameworks-libraries/kokonutui.svg",
      },
      {
        name: "EverUI",
        description:
          "Unstyled highly composable components that you can copy/paste in your own codebase.",
        url: "https://www.ever-ui.com/",
        logo: "/media/logos/ui-frameworks-libraries/everui.svg",
      },
      {
        name: "Indie UI",
        description:
          "Rich Styled UI Components built with Reactjs, shadcn and Framer Motion for animation.",
        url: "https://ui.indie-starter.dev/",
        logo: "/media/logos/ui-frameworks-libraries/indieui.ico",
      },
    ],
  },

  // Tables
  {
    name: "Tables",
    icon: { type: "lucide", value: "table" },
    resources: [
      {
        name: "Tanstack Table",
        description:
          "A headless UI for building powerful tables and datagrids.",
        url: "https://tanstack.com/table/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "Material-UI Table",
        description:
          "Tables built with Material-UI, a popular React UI framework.",
        url: "https://mui.com/components/tables/",
        logo: "https://mui.com/static/favicon.ico",
      },
      {
        name: "AG Grid",
        description:
          "A feature-rich datagrid designed for the major JavaScript frameworks.",
        url: "https://www.ag-grid.com/react-data-grid/",
        logo: "/media/logos/tables/ag-grid.png",
      },
      {
        name: "React Data Grid",
        description: "Excel-like grid component built with React.",
        url: "https://adazzle.github.io/react-data-grid/",
        logo: "https://adazzle.github.io/react-data-grid/favicon.ico",
      },
      {
        name: "Griddle",
        description: "A simple grid component for use with React.",
        url: "https://griddlegriddle.github.io/Griddle/",
        logo: "https://griddlegriddle.github.io/Griddle/favicon.ico",
      },
      {
        name: "Tabulator",
        description: "Interactive Tables and Data Grids.",
        url: "https://tabulator.info/",
        logo: "/media/logos/tables/tabulator.png",
      },
    ],
  },

  // Forms
  {
    name: "Forms",
    icon: { type: "lucide", value: "form-input" },
    resources: [
      {
        name: "React Hook Form",
        description:
          "Performant, flexible, and extensible forms with easy-to-use validation.",
        url: "https://react-hook-form.com/",
        logo: "/media/logos/forms/react-hook-form.png",
      },
      {
        name: "Tanstack Form",
        description: "A powerful form library for React applications.",
        url: "https://tanstack.com/form/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "Formik",
        description: "Build forms in React, without the tears.",
        url: "https://formik.org/",
        logo: "/media/logos/forms/formik.png",
      },
      {
        name: "React Json Schema Form",
        description:
          "A React component for building Web forms from JSON Schema.",
        url: "https://rjsf-team.github.io/react-jsonschema-form/docs/",
        logo: "/media/logos/forms/react-json-schema-form.png",
      },
      {
        name: "Formily",
        description: "Alibaba Group Unified Form Solution.",
        url: "https://formilyjs.org/",
        logo: "/media/logos/forms/formily.png",
      },
    ],
  },

  // Hooks
  {
    name: "Hooks",
    icon: { type: "lucide", value: "anchor" },
    resources: [
      {
        name: "useHooks",
        description: "A collection of reusable React hooks.",
        url: "https://usehooks.com/",
        logo: "/media/logos/hooks/use-hooks.svg",
      },
      {
        name: "usehooks-ts",
        description: "React hook library, ready to use, written in Typescript.",
        url: "https://usehooks-ts.com/",
        logo: "/media/logos/hooks/usehooksts.ico",
      },
      {
        name: "Novajs",
        description: "A collection of dependency-free React hooks.",
        url: "https://www.novajs.dev/",
        logo: "https://www.novajs.dev/favicon.ico",
      },
      {
        name: "React Use",
        description: "A library of essential React hooks.",
        url: "https://github.com/streamich/react-use",
        logo: "",
      },
      {
        name: "ahooks",
        description: "A set of high-quality and reliable React hooks.",
        url: "https://ahooks.js.org/",
        logo: "/media/logos/hooks/ahooks.svg",
      },
    ],
  },

  // Notifications
  {
    name: "Notifications",
    icon: { type: "lucide", value: "bell" },
    resources: [
      {
        name: "Sonner",
        description: "An opinionated toast component for React.",
        url: "https://sonner.emilkowal.ski/",
        logo: "https://sonner.emilkowal.ski/favicon.ico",
      },
      {
        name: "React Toastify",
        description:
          "A popular library for adding customizable and easy-to-use toast notifications to your React applications.",
        url: "https://fkhadra.github.io/react-toastify/introduction/",
        logo: "https://fkhadra.github.io/react-toastify/img/favicon.ico",
      },
      {
        name: "Notistack",
        description:
          "Highly customizable notification snackbars (toasts) that can be stacked on top of each other.",
        url: "https://notistack.com/",
        logo: "https://notistack.com/favicon.ico",
      },
      {
        name: "Reapop",
        description: "A simple and customizable React notifications system.",
        url: "https://louisbarranqueiro.github.io/reapop/",
        logo: "https://louisbarranqueiro.github.io/reapop/favicon.ico",
      },
      {
        name: "React Hot Toast",
        description: "A super easy toast library for React.",
        url: "https://react-hot-toast.com/",
        logo: "/media/logos/notifications/react-hot-toast.png",
      },
      {
        name: "React Notification System",
        description:
          "A complete and totally customizable component for notifications in React.",
        url: "https://igorprado.github.io/react-notification-system/",
        logo: "https://igorprado.github.io/react-notification-system/favicon.ico",
      },
      {
        name: "React Toast Notifications",
        description: "A toast notification system for react.",
        url: "https://jossmac.github.io/react-toast-notifications/",
        logo: "https://jossmac.github.io/react-toast-notifications/favicon.ico",
      },
      {
        name: "pheralb/toast",
        description: "An accessible and beautiful toast library for React.",
        url: "https://toast.pheralb.dev/",
      },
    ],
  },

  // State Management
  {
    name: "State Management",
    icon: { type: "lucide", value: "database" },
    resources: [
      {
        name: "Zustand",
        description:
          "A small, fast, and scalable bearbones state-management solution.",
        url: "https://zustand-demo.pmnd.rs/",
        logo: "https://zustand-demo.pmnd.rs/favicon.ico",
      },
      {
        name: "Tanstack Store",
        description:
          "A powerful state management library for React applications.",
        url: "https://tanstack.com/store/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "Redux Toolkit",
        description: "The official, recommended way to write Redux logic.",
        url: "https://redux-toolkit.js.org/",
        logo: "https://redux-toolkit.js.org/img/favicon/favicon.ico",
      },
      {
        name: "Recoil",
        description:
          "A state management library for React that makes it easy to share state across components.",
        url: "https://recoiljs.org/",
        logo: "/media/logos/state-management/recoil.svg",
      },
      {
        name: "Stan Js",
        description:
          "Fast and elegant state management solution with minimal configuration for your React, React Native and even vanilla-js apps.",
        url: "https://codemask-labs.github.io/stan-js/",
        logo: "/media/logos/state-management/stan-js.svg",
      },
      {
        name: "Jotai",
        description:
          "Primitive and flexible state management for React applications.",
        url: "https://jotai.org/",
        logo: "/media/logos/state-management/jotai.png",
      },
    ],
  },

  // Data Fetching
  {
    name: "Data Fetching",
    icon: { type: "lucide", value: "download" },
    resources: [
      {
        name: "Axios",
        description: "A promise-based HTTP client for the browser and Node.js.",
        url: "https://axios-http.com/",
        logo: "https://axios-http.com/assets/favicon.ico",
      },
      {
        name: "Tanstack Query",
        description:
          "Powerful asynchronous state management, server-state utilities, and data fetching for TS/JS, React, Solid, Vue, Svelte, and more.",
        url: "https://tanstack.com/query/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "Apollo Client",
        description:
          "A fully-featured, production ready caching GraphQL client.",
        url: "https://www.apollographql.com/docs/react/",
        logo: "/media/logos/data-fetching/apollo-client.svg",
      },
      {
        name: "SWR",
        description: "React Hooks library for remote data fetching.",
        url: "https://swr.vercel.app/",
        logo: "/media/logos/data-fetching/swr.png",
      },
      {
        name: "Relay",
        description:
          "A JavaScript framework for building data-driven React applications",
        url: "https://relay.dev/",
        logo: "/media/logos/data-fetching/relay.svg",
      },
      {
        name: "Fetch API",
        description:
          "A modern interface for making HTTP requests in the browser.",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        logo: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
      },
    ],
  },

  // Styling
  {
    name: "Styling",
    icon: { type: "lucide", value: "paintbrush" },
    resources: [
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework for rapidly building custom user interfaces.",
        url: "https://tailwindcss.com/",
        logo: "/media/logos/styling/tailwindcss.svg",
      },
      {
        name: "Styled Components",
        description:
          "Utilizes tagged template literals to style your components.",
        url: "https://styled-components.com/",
        logo: "/media/logos/styling/styled-components.svg",
      },
      {
        name: "Emotion",
        description: "A performant and flexible CSS-in-JS library.",
        url: "https://emotion.sh/docs/introduction",
        logo: "/media/logos/styling/emotion.png",
      },
      {
        name: "Vanilla Extract",
        description: "Zero-runtime Stylesheets-in-TypeScript",
        url: "https://vanilla-extract.style/",
        logo: "https://vanilla-extract.style/favicon.ico",
      },
      {
        name: "Stitches",
        description:
          "CSS-in-JS with near-zero runtime, SSR, multi-variant support.",
        url: "https://stitches.dev/",
        logo: "/media/logos/styling/stitches.svg",
      },
      {
        name: "Linaria",
        description: "Zero-runtime CSS in JS library.",
        url: "https://linaria.dev/",
        logo: "/media/logos/styling/linaria.png",
      },
      {
        name: "styletron",
        description: "Toolkit for component-oriented styling.",
        url: "https://styletron.org/",
        logo: "/media/logos/styling/styletron.png",
      },
    ],
  },

  // Charts
  {
    name: "Charts",
    icon: { type: "lucide", value: "bar-chart" },
    resources: [
      {
        name: "Recharts",
        description: "A composable charting library built on React components.",
        url: "https://recharts.org/en-US",
        logo: "https://recharts.org/favicon.ico",
      },
      {
        name: "Victory",
        description:
          "A collection of composable React components for building interactive data visualizations.",
        url: "https://formidable.com/open-source/victory/",
        logo: "https://formidable.com/favicon.ico",
      },
      {
        name: "Nivo",
        description:
          "Provides a rich set of data visualization components, built on top of D3 and React.",
        url: "https://nivo.rocks/",
        logo: "https://nivo.rocks/favicon.ico",
      },
      {
        name: "Chart.js",
        description:
          "Simple yet flexible JavaScript charting for designers & developers.",
        url: "https://www.chartjs.org",
        logo: "https://www.chartjs.org/favicon.ico",
      },
      {
        name: "React-Vis",
        description:
          "A collection of react components to render common data visualization charts.",
        url: "https://uber.github.io/react-vis/",
        logo: "/media/logos/charts/react-vis.ico",
      },
      {
        name: "ECharts for React",
        description: "A React wrapper for Apache ECharts.",
        url: "https://git.hust.cc/echarts-for-react/",
      },
      {
        name: "Visx",
        description:
          "A collection of low-level visualization components for React.",
        url: "https://airbnb.io/visx/",
        logo: "/media/logos/charts/visx.png",
      },
      {
        name: "React Flow",
        description:
          "A customizable React component for building node-based editors and interactive diagrams.",
        url: "https://reactflow.dev/",
        logo: "/media/logos/charts/reactflow.svg",
      },
      {
        name: "Apache ECharts",
        description:
          "Apache ECharts is a powerful, interactive charting and data visualization library for browser.",
        url: "https://echarts.apache.org/",
        logo: "https://echarts.apache.org/favicon.ico",
      },
      {
        name: "Unovis",
        description:
          "A modular data visualization framework for React, Angular, Svelte, Vue, Solid.",
        url: "https://unovis.dev/",
        logo: "/media/logos/charts/unovis.svg",
      },
      {
        name: "Mermaid Js",
        description:
          "JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.",
        url: "https://mermaid.js.org/",
        logo: "https://mermaid.js.org/favicon.ico",
      },
      {
        name: "React Google Charts",
        description:
          "A thin, typed, React wrapper over Google Charts Visualization and Charts API.",
        url: "https://www.react-google-charts.com/",
        logo: "/media/logos/charts/react-google-charts.svg",
      },
      {
        name: "React Timeseries Charts",
        description:
          "Declarative and modular timeseries charting components for React.",
        url: "https://software.es.net/react-timeseries-charts",
        logo: "https://software.es.net/react-timeseries-charts/favicon.ico",
      },
      {
        name: "Semiotic",
        description: "A data visualization framework for React.",
        url: "https://semiotic.nteract.io/",
      },
    ],
  },

  // Virtualization
  {
    name: "Virtualization",
    icon: { type: "lucide", value: "layers" },
    resources: [
      {
        name: "Tanstack Virtual",
        description:
          "A powerful virtual list and grid library for React applications.",
        url: "https://tanstack.com/virtual/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "Virtua",
        description: "A virtual list and grid library for React.",
        url: "https://github.com/inokawa/virtua",
        logo: "",
      },
      {
        name: "React Virtualized",
        description:
          "A set of React components for efficiently rendering large lists and tabular data.",
        url: "https://github.com/bvaughn/react-virtualized",
        logo: "/media/logos/virtualization/react-virtualized.png",
      },
    ],
  },

  // Icons
  {
    name: "Icons",
    icon: { type: "lucide", value: "image" },
    resources: [
      {
        name: "Lucide",
        description: "Beautiful and consistent icons made by the community.",
        url: "https://lucide.dev/",
        logo: "https://lucide.dev/favicon.ico",
      },
      {
        name: "React Icons",
        description: "Include popular icons in your React projects easily.",
        url: "https://react-icons.github.io/react-icons/",
        logo: "https://react-icons.github.io/react-icons/favicon.ico",
      },
      {
        name: "Font Awesome",
        description:
          "A comprehensive library of icons for use in web projects.",
        url: "https://fontawesome.com/",
        logo: "https://fontawesome.com/favicon.ico",
      },
      {
        name: "Heroicons",
        description:
          "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
        url: "https://heroicons.com/",
        logo: "https://heroicons.com/favicon.ico",
      },
      {
        name: "Feather Icons",
        description: "Simply beautiful open-source icons.",
        url: "https://feathericons.com/",
        logo: "https://feathericons.com/favicon.ico",
      },
      {
        name: "Ionicons",
        description:
          "Premium icons for use in web, iOS, Android, and desktop apps.",
        url: "https://ionicons.com/",
        logo: "/media/logos/icons/ionicons.png",
      },
      {
        name: "Material Icons",
        description: "Material design icons by Google.",
        url: "https://material.io/resources/icons/",
        logo: "/media/logos/icons/materialicons.svg",
      },
      {
        name: "Bootstrap Icons",
        description: "Official open-source SVG icon library for Bootstrap.",
        url: "https://icons.getbootstrap.com/",
        logo: "https://icons.getbootstrap.com/favicon.ico",
      },
      {
        name: "Svgl",
        description: "A beautiful library with SVG logos.",
        url: "https://svgl.app/",
        logo: "/media/logos/icons/svgl.svg",
      },
    ],
  },

  // Animations
  {
    name: "Animations",
    icon: { type: "lucide", value: "play" },
    resources: [
      {
        name: "Motion",
        description: "A modern animation library for JavaScript and React.",
        url: "https://motion.dev/",
        logo: "/media/logos/animations/motion.png",
      },
      {
        name: "React Spring",
        description: "A spring-physics-based animation library for React.",
        url: "https://www.react-spring.dev/",
        logo: "https://www.react-spring.dev/favicon.ico",
      },
      {
        name: "Reactbits",
        description:
          "An open source React.js snippet library for animated components.",
        url: "https://reactbits.dev/",
        logo: "https://reactbits.dev/favicon.ico",
      },
      {
        name: "simpleParallax.js",
        description:
          "simpleParallax.js is a lightweight and easy-to-use React and JS library that adds parallax animations to any image.",
        url: "https://simpleparallax.com/",
        logo: "https://simpleparallax.com/favicon.ico",
      },
      {
        name: "Blendy",
        description:
          "A framework-agnostic tool that smoothly transitions one element into another with just a few lines of code.",
        url: "https://blendy.tahazsh.com/",
        logo: "/media/logos/animations/blendy.svg",
      },
    ],
  },

  // Maps
  {
    name: "Maps",
    icon: { type: "lucide", value: "map" },
    resources: [
      {
        name: "react-google-maps",
        description:
          "React components and hooks for the Google Maps JavaScript API",
        url: "https://visgl.github.io/react-google-maps/",
        logo: "/media/logos/maps/react-google-maps.png",
      },
      {
        name: "React Leaflet",
        description:
          "A React wrapper for Leaflet, an open-source JavaScript library for mobile-friendly interactive maps.",
        url: "https://react-leaflet.js.org/",
        logo: "/media/logos/maps/react-leaflet.png",
      },
      {
        name: "Google Maps React",
        description:
          "A library for embedding Google Maps into React applications.",
        url: "https://github.com/google-map-react/google-map-react",
        logo: "/media/logos/maps/google-map-react.png",
      },
      {
        name: "React Map GL",
        description: "A React wrapper for Mapbox GL JS.",
        url: "https://visgl.github.io/react-map-gl/",
        logo: "/media/logos/maps/react-map-gl.png",
      },
    ],
  },

  // PDF's
  {
    name: "PDF's",
    icon: { type: "lucide", value: "file-text" },
    resources: [
      {
        name: "React PDF",
        description: " A React renderer for creating PDF files.",
        url: "https://react-pdf.org/",
        logo: "/media/logos/pdfs/react-pdf.png",
      },
      {
        name: "React PDF Viewer",
        description: "A PDF viewer for React applications.",
        url: "https://react-pdf-viewer.dev/",
        logo: "/media/logos/pdfs/react-pdf-viewer.svg",
      },
    ],
  },

  // File Handling
  {
    name: "File Handling",
    icon: { type: "lucide", value: "upload" },
    resources: [
      {
        name: "React Dropzone",
        description: "Simple HTML5 drag-and-drop zone with React.",
        url: "https://react-dropzone.js.org/",
        logo: "/media/logos/file-handling/react-dropzone.png",
      },
      {
        name: "Uppy",
        description: "Sleek, modular file uploader for React.",
        url: "https://uppy.io/",
        logo: "/media/logos/file-handling/uppy.svg",
      },
      {
        name: "react-uploady",
        description: "Modern file-upload components & hooks for React.",
        url: "https://react-uploady.org/",
        logo: "/media/logos/file-handling/react-uploady.png",
      },
      {
        name: "React Spreadsheet",
        description:
          "Simple, customizable yet performant spreadsheet for React.",
        url: "https://iddan.github.io/react-spreadsheet/",
      },
      {
        name: "Jspreadsheet",
        description:
          "Fully customizable JavaScript spreadsheet library, offering various components to enhance web development projects.",
        url: "https://bossanova.uk/jspreadsheet/",
        logo: "/media/logos/file-handling/jspreadsheet.png",
      },
    ],
  },

  // Real-time Communication
  {
    name: "Real-time Communication",
    icon: { type: "lucide", value: "message-circle" },
    resources: [
      {
        name: "Socket.IO",
        description:
          "Enables real-time, bidirectional and event-based communication.",
        url: "https://socket.io/",
        logo: "/media/logos/real-time-communication/socket-io.svg",
      },
      {
        name: "Pusher",
        description:
          "Provides hosted APIs to build real-time apps with WebSockets.",
        url: "https://pusher.com/",
        logo: "https://pusher.com/favicon.ico",
      },
    ],
  },

  // Audio & Video
  {
    name: "Audio & Video",
    icon: { type: "lucide", value: "video" },
    resources: [
      {
        name: "Remotion",
        description:
          "A framework for creating videos programmatically using React.",
        url: "https://www.remotion.dev/",
        logo: "/media/logos/audio-video/remotion.png",
      },
      {
        name: "React Player",
        description:
          "A React component for playing a variety of URLs, including YouTube, SoundCloud, and more.",
        url: "https://github.com/cookpete/react-player",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Webcam",
        description: "A React component for accessing the user's webcam.",
        url: "https://github.com/mozmorris/react-webcam",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Sound",
        description:
          "A sound component to play audio in your React applications.",
        url: "https://github.com/leoasis/react-sound",
        logo: "https://github.com/favicon.ico",
      },
    ],
  },

  // Seo
  {
    name: "Search Engine Optimization",
    icon: { type: "lucide", value: "search" },
    resources: [
      {
        name: "React Helmet",
        description:
          "A reusable React component that manages changes to the document head.",
        url: "https://github.com/nfl/react-helmet",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Meta Tags",
        description: "A library for managing meta tags in React applications.",
        url: "https://www.npmjs.com/package/react-meta-tags",
        logo: "https://static.npmjs.com/favicon.ico",
      },
      {
        name: "Next SEO",
        description:
          "A plugin that makes managing SEO easier in Next.js projects.",
        url: "https://github.com/garmeeh/next-seo",
        logo: "https://github.com/favicon.ico",
      },
    ],
  },

  // Validations
  {
    name: "Validations",
    icon: { type: "lucide", value: "check-circle" },
    resources: [
      {
        name: "Yup",
        description:
          "A JavaScript schema builder for value parsing and validation.",
        url: "https://www.npmjs.com/package/yup",
        logo: "/media/logos/validations/yup.png",
      },
      {
        name: "Joi",
        description:
          "A powerful schema description language and data validator for JavaScript.",
        url: "https://joi.dev/",
        logo: "/media/logos/validations/joi.png",
      },
      {
        name: "Validator",
        description: "A library for string validation and sanitization.",
        url: "https://github.com/validatorjs/validator.js",
        logo: "/media/logos/validations/validatorjs.png",
      },
      {
        name: "Superstruct",
        description:
          "A simple and composable way to validate data in JavaScript and TypeScript.",
        url: "https://docs.superstructjs.org/",
        logo: "/media/logos/validations/superstruct.avif",
      },
      {
        name: "Vest",
        description:
          "A validations framework inspired by unit testing libraries.",
        url: "https://vestjs.dev/",
        logo: "https://vestjs.dev/favicon.ico",
      },
      {
        name: "Zod",
        description:
          "A TypeScript-first schema declaration and validation library.",
        url: "https://zod.dev/",
        logo: "/media/logos/validations/zod.ico",
      },
    ],
  },

  // Bundlers
  {
    name: "Bundlers",
    icon: { type: "lucide", value: "package" },
    resources: [
      {
        name: "Webpack",
        description:
          "A static module bundler for modern JavaScript applications.",
        url: "https://webpack.js.org/",
        logo: "/media/logos/bundlers/webpack.svg",
      },
      {
        name: "Vite",
        description:
          "A next-generation frontend tooling that focuses on speed and performance.",
        url: "https://vitejs.dev/",
        logo: "/media/logos/bundlers/vitejs.svg",
      },
      {
        name: "Parcel",
        description: "A zero-configuration build tool for the web.",
        url: "https://parceljs.org/",
        logo: "/media/logos/bundlers/parcel.svg",
      },
    ],
  },

  // Linting & Formatting
  {
    name: "Linting & Formatting",
    icon: { type: "lucide", value: "check-square" },
    resources: [
      {
        name: "ESLint",
        description:
          "A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.",
        url: "https://eslint.org/",
        logo: "https://eslint.org/favicon.ico",
      },
      {
        name: "Prettier",
        description:
          "An opinionated code formatter that supports many languages and integrates with most editors.",
        url: "https://prettier.io/",
        logo: "/media/logos/linting/prettier.svg",
      },
    ],
  },

  // Dev Tools
  {
    name: "DevTools",
    icon: { type: "lucide", value: "square-dashed-mouse-pointer" },
    resources: [
      {
        name: "React Developer Tools",
        description:
          "Official React DevTools for inspecting React component hierarchy.",
        url: "https://react.dev/learn/react-developer-tools",
        logo: "https://react.dev/favicon.ico",
      },
      {
        name: "Redux DevTools",
        description:
          "DevTools for Redux to help debug application state changes.",
        url: "https://redux.js.org/tutorials/fundamentals/part-4-store#redux-devtools",
        logo: "https://redux.js.org/img/favicon/favicon.ico",
      },
    ],
  },

  // Testing
  {
    name: "Testing",
    icon: { type: "lucide", value: "flask-conical" },
    resources: [
      {
        name: "Jest",
        description:
          "Delightful JavaScript Testing Framework with a focus on simplicity.",
        url: "https://jestjs.io/",
        logo: "https://jestjs.io/img/favicon/favicon.ico",
      },
      {
        name: "Vitest",
        description: "A blazing fast unit test framework powered by Vite.",
        url: "https://vitest.dev/",
        logo: "https://vitest.dev/favicon.ico",
      },
      {
        name: "Playwright",
        description:
          "End-to-end testing framework for web apps, with support for multiple browsers.",
        url: "https://playwright.dev/",
        logo: "/media/logos/testing/playwright.svg",
      },
      {
        name: "Cypress",
        description:
          "Fast, easy and reliable testing for anything that runs in a browser.",
        url: "https://www.cypress.io/",
        logo: "/media/logos/testing/cypress.png",
      },
      {
        name: "React Testing Library",
        description:
          "Simple and complete testing utilities that encourage good testing practices",
        url: "https://testing-library.com/",
        logo: "/media/logos/testing/react-testing-library.png",
      },
    ],
  },

  // Documentation
  {
    name: "Documentation",
    icon: { type: "lucide", value: "book-open" },
    resources: [
      {
        name: "Storybook",
        description:
          "A tool for UI development that allows you to create and test components in isolation.",
        url: "https://storybook.js.org/",
        logo: "/media/logos/documentation/storybook.svg",
      },
      {
        name: "Docz",
        description:
          "It makes it easy to write and publish beautiful interactive documentation for your code.",
        url: "https://www.docz.site/",
        logo: "/media/logos/documentation/docz.png",
      },
      {
        name: "Docusaurus",
        description:
          "A project for building, deploying, and maintaining open source project websites easily.",
        url: "https://docusaurus.io/",
        logo: "/media/logos/documentation/docusaurus.svg",
      },
      {
        name: "MDX",
        description:
          "A format that lets you seamlessly use JSX in your Markdown documents.",
        url: "https://mdxjs.com/",
        logo: "https://mdxjs.com/favicon.ico",
      },
      {
        name: "Styleguidist",
        description:
          "Isolated React component development environment with a living style guide.",
        url: "https://react-styleguidist.js.org/",
        logo: "/media/logos/documentation/react-styleguidist.ico",
      },
      {
        name: "Nextra",
        description:
          "Simple, powerful and flexible site generation framework with everything you love from Next.js.",
        url: "https://nextra.site/",
        logo: "https://nextra.site/favicon.ico",
      },
    ],
  },

  // Internationalization
  {
    name: "Internationalization",
    icon: { type: "lucide", value: "globe" },
    resources: [
      {
        name: "Format.JS",
        description:
          "Internationalization library for React, part of FormatJS.",
        url: "https://formatjs.github.io/",
        logo: "/media/logos/internationalization/formatjs.svg",
      },
      {
        name: "i18next",
        description:
          "A powerful internationalization framework for JavaScript, including React.",
        url: "https://www.i18next.com/",
        logo: "/media/logos/internationalization/i18next.png",
      },
    ],
  },

  // Performance Optimization
  {
    name: "Performance Optimization",
    icon: { type: "lucide", value: "zap" },
    resources: [
      {
        name: "React Scan",
        description:
          "Scan for React performance issues and eliminate slow renders in your app.",
        url: "https://react-scan.million.dev/",
        logo: "/media/logos/performance/react-scan.svg",
      },
      {
        name: "Million",
        description:
          "A React performance tool that helps you identify and fix performance issues in your React applications.",
        url: "https://million.dev/",
        logo: "/media/logos/performance/million.svg",
      },
      {
        name: "React Lazy Load",
        description:
          "A library that helps you defer loading content in your React application until it becomes visible in the viewport.",
        url: "https://github.com/loktar00/react-lazy-load",
        logo: "",
      },
      {
        name: "React Window",
        description:
          "A library for rendering large lists and tabular data efficiently.",
        url: "https://react-window.vercel.app/",
        logo: "",
      },
    ],
  },

  // Error Handling
  {
    name: "Error Handling",
    icon: { type: "lucide", value: "bug" },
    resources: [
      {
        name: "React Error Boundary",
        description:
          "A React component that catches JavaScript errors anywhere in their child component tree, logs those errors, and displays a fallback UI.",
        url: "https://www.npmjs.com/package/react-error-boundary",
        logo: "https://static.npmjs.com/favicon.ico",
      },
      {
        name: "Sentry",
        description:
          "A monitoring platform that helps you identify and fix issues in your React applications in real-time.",
        url: "https://sentry.io/for/react/",
        logo: "/media/logos/error-handling/sentry.svg",
      },
    ],
  },

  // Code Splitting
  {
    name: "Code Splitting",
    icon: { type: "lucide", value: "split" },
    resources: [
      {
        name: "Loadable Components",
        description:
          "A library for code-splitting React components and loading them on demand.",
        url: "https://loadable-components.com/",
        logo: "https://loadable-components.com/favicon.ico",
      },
      {
        name: "React Loadable",
        description:
          "A higher order component for loading components with dynamic imports.",
        url: "https://github.com/jamiebuilds/react-loadable",
        logo: "https://github.com/favicon.ico",
      },
    ],
  },

  // Hosting
  {
    name: "Hosting",
    icon: { type: "lucide", value: "cloud" },
    resources: [
      {
        name: "Vercel",
        description:
          "A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.",
        url: "https://vercel.com/",
        logo: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
      },
      {
        name: "Netlify",
        description:
          "A platform for automating modern web projects, with continuous deployment, serverless functions, and more.",
        url: "https://www.netlify.com/",
        logo: "https://www.netlify.com/favicon.ico",
      },
      {
        name: "Firebase",
        description:
          "A comprehensive app development platform that provides hosting for static and dynamic content, as well as backend services.",
        url: "https://firebase.google.com/",
        logo: "/media/logos/hosting/firebase.svg",
      },
      {
        name: "AWS Amplify",
        description:
          "A set of tools and services that enables mobile and front-end web developers to build secure, scalable full-stack applications.",
        url: "https://aws.amazon.com/amplify/",
        logo: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
      },
    ],
  },

  // Utilities
  {
    name: "Utilities",
    icon: { type: "lucide", value: "wrench" },
    resources: [
      {
        name: "Axios",
        description: "A promise-based HTTP client for the browser and Node.js.",
        url: "https://axios-http.com/",
        logo: "https://axios-http.com/assets/favicon.ico",
      },
      {
        name: "Lodash",
        description:
          "A modern JavaScript utility library delivering modularity, performance & extras.",
        url: "https://lodash.com/",
        logo: "https://lodash.com/favicon.ico",
      },
      {
        name: "date-fns",
        description: "Modern JavaScript date utility library.",
        url: "https://date-fns.org/",
        logo: "/media/logos/utilities/date-fns.svg",
      },
      {
        name: "Day.js",
        description:
          "Fast 2kB alternative to Moment.js with the same modern API.",
        url: "https://day.js.org/",
        logo: "/media/logos/utilities/dayjs.png",
      },
      {
        name: "Winston",
        description: "A logger for just about everything.",
        url: "https://github.com/winstonjs/winston",
        logo: "/media/logos/utilities/winston.png",
      },
    ],
  },

  // Miscellaneous
  {
    name: "Miscellaneous",
    icon: { type: "lucide", value: "more-horizontal" },
    resources: [
      {
        name: "Awesome Loaders",
        description: "Free & Open source loading animations.",
        url: "https://awesome-loaders.netlify.app/",
        logo: "/media/logos/miscellaneous/awesome-loaders.png",
      },
      {
        name: "ReactSpinners",
        description:
          "Create high-quality, super-responsive and customizable loading animations to insert into your website.",
        url: "https://www.davidhu.io/react-spinners/",
        logo: "/media/logos/miscellaneous/react-spinners.png",
      },
      {
        name: "React Loader Spinner",
        description:
          "Collection sets of a spinners for async operations for ReactJS",
        url: "https://mhnpd.github.io/react-loader-spinner/",
        logo: "/media/logos/miscellaneous/react-loader-spinner.ico",
      },
      {
        name: "ReactTooltip",
        description: "Awesome React Tooltip component.",
        url: "https://react-tooltip.com/",
      },
      {
        name: "React Content Loader",
        description:
          "SVG-Powered component to easily create skeleton loadings.",
        url: "https://skeletonreact.com/",
      },
      {
        name: "Kbar",
        description:
          "Fast, portable, and extensible command+k interface for React.",
        url: "https://kbar.vercel.app/",
      },
      {
        name: "Cmdk",
        description: "Fast, composable, unstyled command menu for React.",
        url: "https://cmdk.paco.me/",
        logo: "https://cmdk.paco.me/favicon.ico",
      },
      {
        name: "React Compare Image",
        description: "React component to compare two images using slider.",
        url: "https://github.com/tam315/react-compare-image",
      },
      {
        name: "React Intense",
        description: "A React component for viewing large images up close.",
        url: "https://bryce.io/react-intense/",
      },
      {
        name: "React Youtube",
        description: "React.js powered YouTube player component.",
        url: "https://tjallingt.github.io/react-youtube/",
      },
      {
        name: "Video React",
        description:
          "The web video player built from the ground up for an HTML5 world using React library.",
        url: "https://video-react.js.org/",
      },
      {
        name: "Advanced Cropper",
        description:
          "The react cropper library that embraces power of the advanced cropper core to give the possibility to create croppers that exactly suited for your website design.",
        url: "https://advanced-cropper.github.io/react-advanced-cropper/",
        logo: "/media/logos/miscellaneous/advanced-cropper.svg",
      },
      {
        name: "React Easy Crop",
        description: "A React component to crop images with easy interactions.",
        url: "https://valentinh.github.io/react-easy-crop/",
      },
      {
        name: "React Image Crop",
        description: "A responsive image cropping tool for React.",
        url: "https://github.com/DominicTobias/react-image-crop",
      },
      {
        name: "Interweave",
        description:
          "React library to safely render HTML, filter attributes, autowrap text with matchers, render emoji characters, and much more.",
        url: "https://interweave.dev/",
        logo: "/media/logos/miscellaneous/interweave.svg",
      },
      {
        name: "React Blur",
        description:
          "React component for creating blurred backgrounds using canvas.",
        url: "https://javier.xyz/react-blur",
        logo: "/media/logos/miscellaneous/react-blur.ico",
      },
      {
        name: "Number Flow",
        description:
          "An animated number component. Dependency-free. Accessible and customizable.",
        url: "https://number-flow.barvian.me/",
        logo: "/media/logos/miscellaneous/number-flow.ico",
      },
      {
        name: "ui-snippets",
        description:
          "A collection of dark mode components and effects crafted with React and Tailwind CSS.",
        url: "https://ui.ibelick.com/",
        logo: "/media/logos/miscellaneous/ui-snippets.jpeg",
      },
      {
        name: "background-snippets",
        description:
          "A collection of modern, background snippets ready-to-use, simply copy and paste into your next project.",
        url: "https://bg.ibelick.com/",
        logo: "https://bg.ibelick.com/favicon.ico",
      },
    ],
  },
];
