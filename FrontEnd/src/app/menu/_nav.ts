import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    title: true,
    name: "Ativos"
  },
  {
    name: "Zona de Mineração",
    url: "/company-assets/mining-zone",
    icon: "icon-puzzle"
  },
  {
    name: "Barragens",
    url: "/buttons",
    icon: "icon-cursor"
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
