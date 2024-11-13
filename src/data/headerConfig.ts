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
        name: "Challenge",
        href: "/project#challenge",
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
        name: "Gold nanoparticles (AuNPs)",
        href: "/design#gold-nanoparticles-aunps",
      },
      {
        name: "Crimson Crusader",
        href: "/design#crimson-crusader",
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
