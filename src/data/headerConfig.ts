export interface HeaderNavItem {
  name: string;
  href: string;
  children?: HeaderNavItem[];
}

export const headerNavItems: HeaderNavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Project",
    href: "/project",
    children: [
      {
        name: "Background",
        href: "/project#background",
      },
      {
        name: "Problem",
        href: "/project#problem",
      },
      {
        name: "Challenges",
        href: "/project#challenges",
      },
      {
        name: "Solution",
        href: "/project#solution",
      },
      {
        name: "Goals",
        href: "/project#goals",
      },
      {
        name: "Feasibility",
        href: "/project#feasibility",
      },
    ],
  },
  {
    name: "Design",
    href: "/design",
    children: [
      {
        name: "Overview",
        href: "/design#overview",
      },
      {
        name: "Plasmid",
        href: "/design#plasmid",
      },
      {
        name: "Crimson Crisader",
        href: "/design#crimson-crisader",
      },
    ],
  },
  {
    name: "Experiment",
    href: "/experiment",
  },
  {
    name: "Future",
    href: "/future",
  },
  {
    name: "ELSI",
    href: "/elsi",
  },
  {
    name: "Team",
    href: "/team",
  },
];
