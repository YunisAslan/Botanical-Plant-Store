import { AlertTriangle, MoonIcon } from "lucide-react";
import {
  ArrowRight,
  Carrot,
  ChevronDown,
  ChevronRight,
  CreditCard,
  DollarSign,
  Edit2,
  Eye,
  Fingerprint,
  Flower,
  Github,
  Image,
  LeafIcon,
  LucideIcon,
  MenuIcon,
  MoreVertical,
  PlusCircle,
  Search,
  Send,
  ShoppingBag,
  ShoppingCart,
  ShovelIcon,
  SproutIcon,
  Sun,
  Trash,
  TreePineIcon,
  User,
  X,
} from "lucide-react";

export const Icons: { [key: string]: LucideIcon } = {
  logo: Carrot, //temporary
  search: Search,
  X: X,
  cart: ShoppingCart,
  menu: MenuIcon,
  arrowRight: ArrowRight,
  leaf: LeafIcon,
  sprout: SproutIcon,
  tree: TreePineIcon,
  github: Github,
  fingerPrint: Fingerprint,
  send: Send,
  sun: Sun,
  moon: MoonIcon,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  shovel: ShovelIcon,
  flower: Flower,
  person: User,
  card: CreditCard,
  bag: ShoppingBag,
  dollar: DollarSign,
  image: Image,
  moreVertical: MoreVertical,
  edit: Edit2,
  view: Eye,
  delete: Trash,
  new: PlusCircle,
  warning: AlertTriangle,
};
