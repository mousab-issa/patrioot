import { I18nManager } from "react-native"

//importing images

const promos = require("./../../assets/images/images/promos.png")
const home = require("./../../assets/images/images/home.png")
const chat = require("./../../assets/images/images/chat.png")
const search = require("./../../assets/images/images/search.png")
const man = require("./../../assets/images/images/man.png")
const med = require("./../../assets/images/images/med.png")
const coffee = require("./../../assets/images/images/coffee.png")
const food = require("./../../assets/images/images/food.png")
const market = require("./../../assets/images/images/market.png")
const MainBackground = require("./../../assets/images/MainBackground.png")
const PoweredByGoogle = require("./../../assets/images/powered_by_google_on_white_hdpi.png")
const Time = require("./../../assets/images/Time.png")
const Delivery= require("./../../assets/images/Delivery.png")
const Chatting= require("./../../assets/images/Chatting.png")
const Tracking= require("./../../assets/images/Tracking.png")


export default {
  dark: false,

  //default colors
  white: "#fff",
  primary: "#14682D",
  primaryLight: "#1D9440",
  primaryExtraLight: '#06B160',
  red: '#ee2233',
  redLight: '#ff4444',
  

  poppins: I18nManager.isRTL ? "Tajawal-Regular" : "Roboto-Medium",
  poppinsbold: I18nManager.isRTL ? "Tajawal-Regular" : "Roboto-SemiBold",
  
  //assets
  chat,
  promos,
  home,
  search,
  man,
  med,
  coffee,
  food,
  market,
  MainBackground,
  PoweredByGoogle,

  Time,
  Delivery,
  Chatting,
  Tracking
};
