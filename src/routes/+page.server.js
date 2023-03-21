import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/db282037078d711b1f8eb55acf736a3545bbe2e2/wijktypentabel.csv")
  return { data }
}

