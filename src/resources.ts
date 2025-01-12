export interface Resource {
  name: string;
  description: string;
  url: string;
  logo?: string; // URL o ruta relativa al logo
}

export interface Category {
  name: string;
  resources: Resource[];
  icon: string;
}

export const categories: Category[] = [
  {
    name: "Componentes",
    icon: "layout",
    resources: [
      {
        name: "React Bootstrap",
        description: "Componentes de Bootstrap reconstruidos para React",
        url: "https://react-bootstrap.github.io/",
        logo: "https://react-bootstrap.github.io/img/logo.svg",
      },
      {
        name: "Material-UI",
        description:
          "Componentes de React para un desarrollo web más rápido y fácil",
        url: "https://material-ui.com/",
        logo: "https://mui.com/static/logo.png",
      },
    ],
  },
  {
    name: "Estado",
    icon: "database",
    resources: [
      {
        name: "Redux",
        description: "Contenedor de estado predecible para aplicaciones JS",
        url: "https://redux.js.org/",
        logo: "https://redux.js.org/img/redux.svg",
      },
      {
        name: "MobX",
        description: "Administración de estado simple y escalable",
        url: "https://mobx.js.org/",
        logo: "/media/mobx-logo.png",
      },
    ],
  },
  {
    name: "Enrutamiento",
    icon: "git-branch",
    resources: [
      {
        name: "React Router",
        description: "Enrutamiento declarativo para React",
        url: "https://reactrouter.com/",
        logo: "https://reactrouter.com/logo.svg", // Added logo for React Router
      },
      {
        name: "Reach Router",
        description: "Router accesible para React",
        url: "https://reach.tech/router/",
        logo: "/media/reach-router-logo.png", // Added logo for Reach Router
      },
    ],
  },
];
