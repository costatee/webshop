import { Poppins, Inter} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });