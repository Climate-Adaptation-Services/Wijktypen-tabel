import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/3006f9ed15e6227d3dcd09e9ab423f3ac4feb390/wijktypentabel.csv")
  return { data }
}

