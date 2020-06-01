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
    title: true,
    name: "Processos Minerários"
  },
   {
    title: true,
    name: "Segurança e Comunicação"
  },  
  {
    name: "Moradores",
    url: "/securityandcomunication/affected",
    icon: "icon-puzzle"
  },
  {
    name: "Planos de Evacuação",
    url: "/securityandcomunication/evacuationplan",
    icon: "icon-puzzle"
  },
  {
    title: true,
    name: "Monitoramento de Barragens"
  },
  {
    name: "Leitura de Sensores",
    url: "/base/choose-dam",
    icon: "icon-puzzle"
  },
  {
    name: "Ocorrências",
    url: "/base/ocurrences",
    icon: "icon-puzzle"
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
