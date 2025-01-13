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
    ],
  },

  {
    name: "Frameworks",
    icon: { type: "lucide", value: "shapes" },
    resources: [
      {
        name: "Next.js",
        description:
          "A React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications.",
        url: "https://nextjs.org/",
        logo: "https://nextjs.org/static/favicon/favicon.ico",
      },
      {
        name: "Gatsby",
        description:
          "A React-based open-source framework for creating fast, secure, and powerful websites using modern web technologies.",
        url: "https://www.gatsbyjs.com/",
        logo: "https://www.gatsbyjs.com/favicon-32x32.png",
      },
      {
        name: "Remix",
        description:
          "A full stack web framework that lets you focus on the user interface and works seamlessly with React.",
        url: "https://remix.run/",
        logo: "https://remix.run/favicon.ico",
      },
      {
        name: "Blitz.js",
        description:
          "A framework built on top of Next.js, providing a full-stack experience with a focus on developer productivity.",
        url: "https://blitzjs.com/",
        logo: "https://blitzjs.com/favicon.ico",
      },
      {
        name: "RedwoodJS",
        description:
          "An opinionated, full-stack, serverless web application framework built on React, GraphQL, and Prisma.",
        url: "https://redwoodjs.com/",
        logo: "https://redwoodjs.com/favicon.ico",
      },
      {
        name: "React Admin",
        description:
          "A frontend Framework for single-page applications on top of REST/GraphQL APIs, using TypeScript, React and Material Design.",
        url: "https://marmelab.com/react-admin/",
        logo: "https://marmelab.com/react-admin/favicon.ico",
      },
      {
        name: "Refine",
        description:
          "A React Framework for building internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.",
        url: "https://refine.dev/",
        logo: "https://refine.dev/img/refine_favicon.png",
      },
    ],
  },

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
        name: "Firebase Authentication",
        description:
          "Provides backend services to help authenticate users in your app.",
        url: "https://firebase.google.com/docs/auth",
        logo: "https://www.gstatic.com/devrel-devsite/prod/v2210075187f059b839246c2c03840474501c3c6024a99fb78f6293c1b4c0f664/firebase/images/favicon.png",
      },
      {
        name: "Auth0",
        description:
          "A platform for securing access to your applications, devices, and users.",
        url: "https://auth0.com/",
        logo: "https://cdn.auth0.com/website/new-homepage/dark-favicon.png",
      },
      {
        name: "Okta",
        description:
          "A complete identity management solution for your web and mobile apps.",
        url: "https://developer.okta.com/docs/guides/sign-into-spa/react/before-you-begin/",
        logo: "https://developer.okta.com/favicon.ico",
      },
      {
        name: "AWS Amplify Auth",
        description:
          "Provides authentication APIs and building blocks for developers who want to create secure applications.",
        url: "https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/",
        logo: "https://docs.amplify.aws/assets/favicon.ico",
      },
      {
        name: "Supabase Auth",
        description:
          "An open-source Firebase alternative that offers authentication services.",
        url: "https://supabase.io/docs/guides/auth",
        logo: "https://supabase.com/favicon.ico",
      },
      {
        name: "Clerk",
        description:
          "Authentication and user management for modern applications.",
        url: "https://clerk.dev/",
        logo: "https://clerk.dev/favicon.ico",
      },
    ],
  },

  {
    name: "Routing",
    icon: { type: "lucide", value: "route" },
    resources: [
      {
        name: "Wouter",
        description:
          "A minimalist alternative to React Router with a small footprint.",
        url: "https://github.com/molefrog/wouter",
        logo: "https://github.com/favicon.ico",
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
        logo: "https://reach.tech/favicon.ico",
      },
    ],
  },

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
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React DnD",
        description:
          "A set of React utilities to help you build complex drag-and-drop interfaces.",
        url: "https://react-dnd.github.io/react-dnd/about",
        logo: "https://react-dnd.github.io/react-dnd/favicon.ico",
      },
      {
        name: "SortableJS",
        description:
          "A React wrapper for SortableJS, a library for reorderable drag-and-drop lists.",
        url: "https://github.com/SortableJS/react-sortablejs",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Dragula",
        description: "A drag-and-drop library for React based on Dragula.",
        url: "https://github.com/bevacqua/react-dragula",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Complex Tree",
        description:
          "Unopinionated Accessible Tree Component with Multi-Select and Drag-And-Drop.",
        url: "https://rct.lukasbach.com/",
        logo: "https://rct.lukasbach.com/favicon.ico",
      },
      {
        name: "FormKit's Drag and Drop",
        description:
          "A small library for adding data-first drag and drop sorting and transferring for lists in your app.",
        url: "https://drag-and-drop.formkit.com/",
        logo: "https://formkit.com/favicon.png",
      },
    ],
  },

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
        logo: "https://www.ag-grid.com/favicon.ico",
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
        name: "React Virtualized",
        description:
          "A set of React components for efficiently rendering large lists and tabular data.",
        url: "https://github.com/bvaughn/react-virtualized",
        logo: "https://github.com/favicon.ico",
      },
    ],
  },

  {
    name: "Forms",
    icon: { type: "lucide", value: "form-input" },
    resources: [
      {
        name: "React Hook Form",
        description:
          "Performant, flexible, and extensible forms with easy-to-use validation.",
        url: "https://react-hook-form.com/",
        logo: "https://react-hook-form.com/favicon.ico",
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
        logo: "https://formik.org/favicon.ico",
      },
      {
        name: "React Json Schema Form",
        description:
          "A React component for building Web forms from JSON Schema.",
        url: "https://rjsf-team.github.io/react-jsonschema-form/docs/",
        logo: "https://rjsf-team.github.io/react-jsonschema-form/favicon.ico",
      },
      {
        name: "Formily",
        description: "Alibaba Group Unified Form Solution.",
        url: "https://formilyjs.org/",
        logo: "https://formilyjs.org/favicon.ico",
      },
    ],
  },

  {
    name: "Hooks",
    icon: { type: "lucide", value: "anchor" },
    resources: [
      {
        name: "usehooks-ts",
        description: "React hook library, ready to use, written in Typescript.",
        url: "https://usehooks-ts.com/",
        logo: "https://usehooks-ts.com/favicon.ico",
      },
      {
        name: "Novajs",
        description: "A collection of dependency-free React hooks.",
        url: "https://novajs.co/",
        logo: "https://novajs.co/favicon.ico",
      },
      {
        name: "useHooks",
        description: "A collection of reusable React hooks.",
        url: "https://usehooks.com/",
        logo: "https://usehooks.com/favicon.ico",
      },
      {
        name: "React Use",
        description: "A library of essential React hooks.",
        url: "https://github.com/streamich/react-use",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "ahooks",
        description: "A set of high-quality and reliable React hooks.",
        url: "https://ahooks.js.org/",
        logo: "https://ahooks.js.org/favicon.ico",
      },
    ],
  },

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
        logo: "https://react-hot-toast.com/favicon.ico",
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
    ],
  },

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
        logo: "https://recoiljs.org/img/favicon.ico",
      },
    ],
  },

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
        name: "Fetch API",
        description:
          "A modern interface for making HTTP requests in the browser.",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        logo: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
      },
      {
        name: "SWR",
        description: "React Hooks library for remote data fetching.",
        url: "https://swr.vercel.app/",
        logo: "https://swr.vercel.app/favicon.ico",
      },
      {
        name: "Tanstack Query",
        description:
          "Powerful asynchronous state management, server-state utilities, and data fetching for TS/JS, React, Solid, Vue, Svelte, and more.",
        url: "https://tanstack.com/query/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
      {
        name: "GraphQL Request",
        description:
          "A minimal GraphQL client for making requests to GraphQL endpoints.",
        url: "https://github.com/graffle-js/graffle",
        logo: "https://github.com/favicon.ico",
      },
    ],
  },

  {
    name: "Styling",
    icon: { type: "lucide", value: "paintbrush" },
    resources: [
      {
        name: "TailwindCSS",
        description:
          "A utility-first CSS framework for rapidly building custom user interfaces.",
        url: "https://tailwindcss.com/",
        logo: "https://tailwindcss.com/favicon.ico",
      },
      {
        name: "Styled Components",
        description:
          "Utilizes tagged template literals to style your components.",
        url: "https://styled-components.com/",
        logo: "https://styled-components.com/favicon.ico",
      },
      {
        name: "Emotion",
        description: "A performant and flexible CSS-in-JS library.",
        url: "https://emotion.sh/docs/introduction",
        logo: "https://emotion.sh/favicon.ico",
      },
      {
        name: "Vanilla Extract",
        description: "Zero-runtime Stylesheets-in-TypeScript",
        url: "https://vanilla-extract.style/",
        logo: "https://vanilla-extract.style/favicon.ico",
      },
    ],
  },

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
        logo: "https://uber.github.io/react-vis/favicon.ico",
      },
      {
        name: "ECharts for React",
        description: "A React wrapper for Apache ECharts.",
        url: "https://git.hust.cc/echarts-for-react/",
        logo: "https://git.hust.cc/echarts-for-react/favicon.ico",
      },
      {
        name: "Visx",
        description:
          "A collection of low-level visualization components for React.",
        url: "https://airbnb.io/visx/",
        logo: "https://airbnb.io/visx/favicon.ico",
      },
      {
        name: "React Flow",
        description:
          "A customizable React component for building node-based editors and interactive diagrams.",
        url: "https://reactflow.dev/",
        logo: "https://reactflow.dev/img/favicon.ico",
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
        logo: "https://unovis.dev/favicon.ico",
      },
      {
        name: "Mermaid Js",
        description:
          "JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.",
        url: "https://mermaid.js.org/",
        logo: "https://mermaid.js.org/favicon.ico",
      },
    ],
  },

  {
    name: "Virtualization",
    icon: { type: "lucide", value: "layers" },
    resources: [
      {
        name: "Virtua",
        description: "A virtual list and grid library for React.",
        url: "https://github.com/inokawa/virtua",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "Tanstack Virtual",
        description:
          "A powerful virtual list and grid library for React applications.",
        url: "https://tanstack.com/virtual/latest",
        logo: "https://tanstack.com/favicon.ico",
      },
    ],
  },

  {
    name: "UI Components",
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
        name: "Eldora UI",
        description:
          "An open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.",
        url: "https://www.eldoraui.site/",
        logo: "https://www.eldoraui.site/favicon.ico",
      },
      {
        name: "Radix UI",
        description:
          "An open source component library optimized for fast development, easy maintenance, and accessibility.",
        url: "https://www.radix-ui.com/",
        logo: "https://www.radix-ui.com/favicon.ico",
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
        logo: "https://evergreen.segment.com/favicon.ico",
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
        logo: "https://blueprintjs.com/assets/favicon.ico",
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
        logo: "https://react-bootstrap.github.io/favicon.ico",
      },
      {
        name: "Grommet",
        description:
          "Build responsive and accessible mobile-first projects for the web with an easy to use component library.",
        url: "https://v2.grommet.io/",
        logo: "https://v2.grommet.io/favicon.ico",
      },
      {
        name: "Reakit",
        description: "Toolkit for building accessible web apps with React.",
        url: "https://reakit.io/",
        logo: "https://reakit.io/favicon.ico",
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
        logo: "https://zenui.net/favicon.ico",
      },
      {
        name: "FlyonUI",
        description:
          "An open-source Tailwind CSS Components Library with semantic classes and powerful JS plugins.",
        url: "https://flyonui.com/",
        logo: "https://flyonui.com/favicon.ico",
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
        logo: "https://headlessui.dev/favicon.ico",
      },
      {
        name: "React Email",
        description:
          "An open source component library optimized for fast development, easy maintenance, and accessibility.",
        url: "https://react.email/",
        logo: "https://react.email/favicon.ico",
      },
    ],
  },

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
        logo: "https://ionicons.com/favicon.ico",
      },
      {
        name: "Material Icons",
        description: "Material design icons by Google.",
        url: "https://material.io/resources/icons/",
        logo: "https://material.io/favicon.ico",
      },
      {
        name: "Bootstrap Icons",
        description: "Official open-source SVG icon library for Bootstrap.",
        url: "https://icons.getbootstrap.com/",
        logo: "https://icons.getbootstrap.com/favicon.ico",
      },
    ],
  },

  {
    name: "Animations",
    icon: { type: "lucide", value: "play" },
    resources: [
      {
        name: "Framer Motion",
        description: "A production-ready motion library for React.",
        url: "https://www.framer.com/motion/",
        logo: "https://www.framer.com/favicon.ico",
      },
      {
        name: "React Spring",
        description: "A spring-physics-based animation library for React.",
        url: "https://www.react-spring.dev/",
        logo: "https://www.react-spring.dev/favicon.ico",
      },
    ],
  },

  {
    name: "Maps",
    icon: { type: "lucide", value: "map" },
    resources: [
      {
        name: "react-google-maps",
        description:
          "React components and hooks for the Google Maps JavaScript API",
        url: "https://visgl.github.io/react-google-maps/",
        logo: "https://visgl.github.io/react-google-maps/favicon.ico",
      },
      {
        name: "React Leaflet",
        description:
          "A React wrapper for Leaflet, an open-source JavaScript library for mobile-friendly interactive maps.",
        url: "https://react-leaflet.js.org/",
        logo: "https://react-leaflet.js.org/favicon.ico",
      },
      {
        name: "Google Maps React",
        description:
          "A library for embedding Google Maps into React applications.",
        url: "https://github.com/google-map-react/google-map-react",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Map GL",
        description: "A React wrapper for Mapbox GL JS.",
        url: "https://visgl.github.io/react-map-gl/",
        logo: "https://visgl.github.io/react-map-gl/favicon.ico",
      },
    ],
  },

  {
    name: "File Uploads",
    icon: { type: "lucide", value: "upload" },
    resources: [
      {
        name: "React Dropzone",
        description: "Simple HTML5 drag-and-drop zone with React.",
        url: "https://react-dropzone.js.org/",
        logo: "https://react-dropzone.js.org/favicon.ico",
      },
      {
        name: "Uppy",
        description: "Sleek, modular file uploader for React.",
        url: "https://uppy.io/",
        logo: "https://uppy.io/favicon.ico",
      },
    ],
  },

  {
    name: "Real-time Communication",
    icon: { type: "lucide", value: "message-circle" },
    resources: [
      {
        name: "Socket.IO",
        description:
          "Enables real-time, bidirectional and event-based communication.",
        url: "https://socket.io/",
        logo: "https://socket.io/favicon.ico",
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

  {
    name: "Audio & Video",
    icon: { type: "lucide", value: "video" },
    resources: [
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

  {
    name: "Validations",
    icon: { type: "lucide", value: "check-circle" },
    resources: [
      {
        name: "Yup",
        description:
          "A JavaScript schema builder for value parsing and validation.",
        url: "https://www.npmjs.com/package/yup",
        logo: "https://static.npmjs.com/favicon.ico",
      },
      {
        name: "Joi",
        description:
          "A powerful schema description language and data validator for JavaScript.",
        url: "https://joi.dev/",
        logo: "https://joi.dev/favicon.ico",
      },
      {
        name: "Validator",
        description: "A library for string validation and sanitization.",
        url: "https://github.com/validatorjs/validator.js",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "Superstruct",
        description:
          "A simple and composable way to validate data in JavaScript and TypeScript.",
        url: "https://docs.superstructjs.org/",
        logo: "https://docs.superstructjs.org/favicon.ico",
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
        logo: "https://zod.dev/favicon.ico",
      },
    ],
  },

  {
    name: "GraphQL",
    icon: { type: "lucide", value: "git-branch" },
    resources: [
      {
        name: "Apollo Client",
        description:
          "A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.",
        url: "https://www.apollographql.com/docs/react/",
        logo: "https://www.apollographql.com/favicon.ico",
      },
      {
        name: "Relay",
        description:
          "A JavaScript framework for building data-driven React applications powered by GraphQL.",
        url: "https://relay.dev/",
        logo: "https://relay.dev/favicon.ico",
      },
    ],
  },

  {
    name: "Bundlers",
    icon: { type: "lucide", value: "package" },
    resources: [
      {
        name: "Webpack",
        description:
          "A static module bundler for modern JavaScript applications.",
        url: "https://webpack.js.org/",
        logo: "https://webpack.js.org/favicon.ico",
      },
      {
        name: "Vite",
        description:
          "A next-generation frontend tooling that focuses on speed and performance.",
        url: "https://vitejs.dev/",
        logo: "https://vitejs.dev/favicon.ico",
      },
      {
        name: "Parcel",
        description: "A zero-configuration build tool for the web.",
        url: "https://parceljs.org/",
        logo: "https://parceljs.org/favicon.ico",
      },
    ],
  },

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
        logo: "https://prettier.io/favicon.ico",
      },
    ],
  },

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
        logo: "https://playwright.dev/favicon.ico",
      },
      {
        name: "Cypress",
        description:
          "Fast, easy and reliable testing for anything that runs in a browser.",
        url: "https://www.cypress.io/",
        logo: "https://www.cypress.io/favicon.ico",
      },
    ],
  },

  {
    name: "Documentation",
    icon: { type: "lucide", value: "book-open" },
    resources: [
      {
        name: "Storybook",
        description:
          "A tool for UI development that allows you to create and test components in isolation.",
        url: "https://storybook.js.org/",
        logo: "https://storybook.js.org/favicon.ico",
      },
      {
        name: "Docz",
        description:
          "It makes it easy to write and publish beautiful interactive documentation for your code.",
        url: "https://www.docz.site/",
        logo: "https://www.docz.site/favicon.ico",
      },
      {
        name: "Docusaurus",
        description:
          "A project for building, deploying, and maintaining open source project websites easily.",
        url: "https://docusaurus.io/",
        logo: "https://docusaurus.io/favicon.ico",
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
        logo: "https://react-styleguidist.js.org/favicon.ico",
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

  {
    name: "Internationalization",
    icon: { type: "lucide", value: "globe" },
    resources: [
      {
        name: "Format.JS",
        description:
          "Internationalization library for React, part of FormatJS.",
        url: "https://formatjs.github.io/",
        logo: "https://formatjs.github.io/favicon.ico",
      },
      {
        name: "i18next",
        description:
          "A powerful internationalization framework for JavaScript, including React.",
        url: "https://www.i18next.com/",
        logo: "https://www.i18next.com/favicon.ico",
      },
    ],
  },

  {
    name: "Performance Optimization",
    icon: { type: "lucide", value: "zap" },
    resources: [
      {
        name: "React Lazy Load",
        description:
          "A library that helps you defer loading content in your React application until it becomes visible in the viewport.",
        url: "https://github.com/loktar00/react-lazy-load",
        logo: "https://github.com/favicon.ico",
      },
      {
        name: "React Window",
        description:
          "A library for rendering large lists and tabular data efficiently.",
        url: "https://react-window.vercel.app/",
        logo: "https://react-window.vercel.app/favicon.ico",
      },
      {
        name: "React Scan",
        description:
          "Scan for React performance issues and eliminate slow renders in your app.",
        url: "https://react-scan.million.dev/",
        logo: "https://react-scan.million.dev/favicon.ico",
      },
      {
        name: "Million",
        description:
          "A React performance tool that helps you identify and fix performance issues in your React applications.",
        url: "https://million.dev/",
        logo: "https://million.dev/favicon.ico",
      },
    ],
  },

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
        logo: "https://sentry.io/favicon.ico",
      },
    ],
  },

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
        logo: "https://www.gstatic.com/devrel-devsite/prod/v2210075187f059b839246c2c03840474501c3c6024a99fb78f6293c1b4c0f664/firebase/images/favicon.png",
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
];
