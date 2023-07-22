import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";

const navLinks = [
  {
    id: "home",
    url: "/",
    title: "Home",
    icon: TbTruckDelivery,
  },
  {
    id: "favorites",
    url: "/favorites",
    title: "Favorites",
    icon: MdFavorite,
  },
  {
    id: "wallet",
    url: "/wallet",
    title: "Wallet",
    icon: FaWallet,
  },
  {
    id: "help",
    url: "/help",
    title: "Help",
    icon: MdHelp,
  },
  {
    id: "promotions",
    url: "/promotions",
    title: "Promotions",
    icon: AiFillTag,
  },
  {
    id: "bestOnes",
    url: "/bestOnes",
    title: "Best Ones",
    icon: BsFillSaveFill,
  },
  {
    id: "inviteFriends",
    url: "/inviteFriends",
    title: "Invite Friends",
    icon: FaUserFriends,
  },
];

export { navLinks };
