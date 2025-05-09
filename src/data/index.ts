import eventIcon from "../assets/icons/events.svg";
import gymIcon from "../assets/icons/gym.svg";
import wifiIcon from "../assets/icons/wifi.svg";
import teaIcon from "../assets/icons/tea.svg";
import currencyIcon from "../assets/icons/currency.svg";
import loungeIcon from "../assets/icons/lounge.svg";
import timeIcon from "../assets/icons/time.svg";
import sportsIcon from "../assets/icons/sports.svg";
import type { FeatureCardProps } from "../types";

export const features: FeatureCardProps[] = [
  { id: 1, icon: eventIcon, title: "Community Events" },
  { id: 2, icon: gymIcon, title: "Gym Facilities" },
  { id: 3, icon: wifiIcon, title: "Highspeed WiFi" },
  { id: 4, icon: teaIcon, title: "Café & Tea Bar" },
  { id: 5, icon: currencyIcon, title: "Affordable" },
  { id: 6, icon: loungeIcon, title: "Comfort Lounges" },
  { id: 7, icon: timeIcon, title: "Quick Booking" },
  { id: 8, icon: sportsIcon, title: "Sports Area" },
];
