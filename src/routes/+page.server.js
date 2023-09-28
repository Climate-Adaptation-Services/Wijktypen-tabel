import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/d56457671dce98b290e8eafadf386be065979eba/wijktypentabel.csv")
  return { data }
}

