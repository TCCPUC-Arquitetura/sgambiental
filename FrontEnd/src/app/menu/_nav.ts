import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    title: true,
    name: "Ativos"
  },
  {
    name: "Zona de Mineração",
    url: "/base",
    icon: "icon-puzzle",
    children: [
      {
        name: "Incluir",
        url: "/base/forms",
        icon: "icon-puzzle"
      },
      {
        name: "Pesquisar",
        url: "/base/carousels",
        icon: "icon-puzzle"
      },
      {
        name: "Test",
        url: "/base/dam-create",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Barragens",
    url: "/buttons",
    icon: "icon-cursor",
    children: [
      {
        name: "Incluir",
        url: "/buttons/buttons",
        icon: "icon-cursor"
      },
      {
        name: "Pesquisar",
        url: "/buttons/dropdowns",
        icon: "icon-cursor"
      }
    ]
  },
  {
    name: "Equipamentos",
    url: "/icons",
    icon: "icon-pie-chart",
    children: [
      {
        name: "Incluir",
        url: "/icons/coreui-icons",
        icon: "icon-cursor"
      },
      {
        name: "Pesquisar",
        url: "/icons/flags",
        icon: "icon-cursor"
      }
    ]
  },
  {
    title: true,
    name: "Processos Minerários"
  },
  {
    title: true,
    name: "Segurança e Comunicação"
  },
  {
    title: true,
    name: "Monitoramento de Barragens"
  },
  {
    title: true,
    name: "Inteligência do Negócio"
  },
  {
    title: true,
    name: "Relatórios"
  }
];
