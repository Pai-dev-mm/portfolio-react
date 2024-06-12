import htmlIcon from "./asset/icons8-html.svg";
import cssIcon from "./asset/icons8-css.svg";
import jsIcon from "./asset/icons8-js.svg";
import gitIcon from "./asset/icons8-git.svg";
import gitHubIcon from "./asset/icons8-github.svg";
import reactIcon from "./asset/icons8-react-native.svg";
import postgreIcon from "./asset/icons8-postgresql.svg";
import prismaIcon from "./asset/icons8-prisma-orm.svg";
import figmaIcon from "./asset/icons8-figma.svg";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface ServiceItem {
  id: number;
  name: string;
  icon: React.ElementType<SvgIconProps>; // Use React.ElementType for components
  text: string;
}

export const IconData = [
  {
    id: 1,
    name: "HTML",
    icon: htmlIcon,
  },
  {
    id: 2,
    name: "CSS",
    icon: cssIcon,
  },
  {
    id: 3,
    name: "JS",
    icon: jsIcon,
  },
  {
    id: 4,
    name: "React",
    icon: reactIcon,
  },
  {
    id: 5,
    name: "Git",
    icon: gitIcon,
  },
  {
    id: 6,
    name: "Github",
    icon: gitHubIcon,
  },
  {
    id: 7,
    name: "PostgreSql",
    icon: postgreIcon,
  },
  {
    id: 8,
    name: "Figma",
    icon: figmaIcon,
  },
  {
    id: 9,
    name: "Prisma",
    icon: prismaIcon,
  },
];

export const serviceData: ServiceItem[] = [
  {
    id: 1,
    name: "Web Developement",
    icon: WebIcon,
    text: "Short the description of the project was carried out in this portfolio.",
  },
  {
    id: 2,
    name: "Web Design",
    icon: DesignServicesIcon,
    text: "Short the description of the project was carried out in this portfolio.",
  },
  {
    id: 3,
    name: "Responsive Web Design",
    icon: SmartphoneIcon,
    text: "Short the description of the project was carried out in this portfolio.",
  },
  {
    id: 4,
    name: "Seo(Web Page)",
    icon: ScreenSearchDesktopIcon,
    text: "Short the description of the project was carried out in this portfolio.",
  },
];
