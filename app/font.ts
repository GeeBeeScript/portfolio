
import { Bricolage_Grotesque, Space_Grotesk, Hanken_Grotesk, Cagliostro, Nunito } from "next/font/google";

export const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-bricolage',
})

export const space = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-space',
})

export const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    weight: ['200', '300', '500', '700'],
    variable: '--font-hanken'
})

export const caglio = Cagliostro({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-caglio'
})

export const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '500', '700'],
    variable: '--font-nunito'
})