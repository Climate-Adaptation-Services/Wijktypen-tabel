import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/1267d8986afe0c82d8f189e367b60339af82ed0c/wijktypentabel.csv")
  return { data }
}

