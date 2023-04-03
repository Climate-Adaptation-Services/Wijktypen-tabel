import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/3c8f7c2c02343e5c4858d84df337748dd90a5969/wijktypentabel.csv")
  return { data }
}

