import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/d2f6baa6184c3224cba217705856b75fdf75a944/wijktypentabel.csv")
  return { data }
}

