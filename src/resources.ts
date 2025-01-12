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
        description: "The official React website with documentation and guides",
        url: "https://reactjs.dev",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Github Repository",
        description: "The official React repository on GitHub",
        url: "https://github.com/facebook/react",
        logo: "/media/logos/official/github.svg",
      },
      {
        name: "React Community",
        description: "The React community from official React website",
        url: "https://react.dev/community",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Blog",
        description: "The official React blog, with news and updates",
        url: "https://react.dev/blog",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Conferences",
        description: "React conferences from official React website",
        url: "https://react.dev/community/conferences",
        logo: "/media/logos/official/react.svg",
      },
      {
        name: "React Quick Start",
        description: "The official React Quick Start tutorial",
        url: "https://react.dev/learn",
        logo: "/media/logos/official/react.svg",
      },
    ],
  },

  {
    name: "Frameworks",
    icon: { type: "lucide", value: "layers" },
    resources: [
      {
        name: "Next.js",
        description:
          " A React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications.",
        url: "https://nextjs.org/",
        logo: "/media/logos/frameworks/nextjs.svg",
      },
      {
        name: "Gatsby",
        description:
          " A React-based open-source framework for creating fast, secure, and powerful websites using modern web technologies.",
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
        name: "Blitz",
        description:
          "A framework built on top of Next.js, providing a full-stack experience with a focus on developer productivity.",
        url: "https://blitzjs.com/",
        logo: "/media/logos/frameworks/blitz.svg",
      },
    ],
  },

  // {
  //   name: "Componentes",
  //   icon: { type: "lucide", value: "layout" },
  //   resources: [
  //     {
  //       name: "React Bootstrap",
  //       description: "Componentes de Bootstrap reconstruidos para React",
  //       url: "https://react-bootstrap.github.io/",
  //       logo: "https://react-bootstrap.github.io/img/logo.svg",
  //     },
  //     {
  //       name: "Material-UI",
  //       description:
  //         "Componentes de React para un desarrollo web más rápido y fácil",
  //       url: "https://material-ui.com/",
  //       logo: "https://mui.com/static/logo.png",
  //     },
  //   ],
  // },
  // {
  //   name: "Estado",
  //   icon: { type: "lucide", value: "database" },
  //   resources: [
  //     {
  //       name: "Redux",
  //       description: "Contenedor de estado predecible para aplicaciones JS",
  //       url: "https://redux.js.org/",
  //       logo: "https://redux.js.org/img/redux.svg",
  //     },
  //     {
  //       name: "MobX",
  //       description: "Administración de estado simple y escalable",
  //       url: "https://mobx.js.org/",
  //       logo: "/media/mobx-logo.png",
  //     },
  //   ],
  // },
  // {
  //   name: "Enrutamiento",
  //   icon: { type: "lucide", value: "git-branch" },
  //   resources: [
  //     {
  //       name: "React Router",
  //       description: "Enrutamiento declarativo para React",
  //       url: "https://reactrouter.com/",
  //       logo: "https://reactrouter.com/logo.svg",
  //     },
  //     {
  //       name: "Reach Router",
  //       description: "Router accesible para React",
  //       url: "https://reach.tech/router/",
  //       logo: "/media/reach-router-logo.png",
  //     },
  //   ],
  // },
];
