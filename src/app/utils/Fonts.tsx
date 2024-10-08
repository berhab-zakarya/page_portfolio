import { Updock } from "@next/font/google";
import { Bebas_Neue } from "@next/font/google";
import {Lora} from "@next/font/google";
import {Ubuntu} from "@next/font/google";

export const lora = Lora({
  weight: "400", 
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});

export const lora500 = Lora({
  weight: "500", 
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});


export const lora600 = Lora({
  weight: "600", 
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});
export const lora700 = Lora({
  weight: "700", 
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});
export const ubuntu_normal = Ubuntu({
  weight: "300", // Specify the weight
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});

export const ubuntu = Ubuntu({
  weight: "500", // Specify the weight
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});


export const ubuntuBold = Ubuntu({
  weight: "700", // Specify the weight
  subsets: ["latin"], // Latin subset
  display: "swap", // Optional, to control font rendering behavior
});