type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/"
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false
        }
      ]
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/amankumar1804",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg",
          leavesWebsite: true
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/aman-kumar-594a7a220/",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
          leavesWebsite: true
        },
        {
          name: "Email",
          link: "mailto:amankr18042000@gmail.com",
          icon: "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_128px.png",
          leavesWebsite: true
        }
      ]
    }
  ]
};
