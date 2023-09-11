import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/729e7aad23354e8e1981ae295a7f1473241ac716/wijktypentabel.csv")
  return { data }
}

