import { dsv } from 'd3'

export function load(){
  const data = dsv(';', "https://gist.githubusercontent.com/stichtingcas/1debcfcdee82f11b6875ed2f3acbe94d/raw/880bd021b229a1afafc478892f4e44b531ee46a3/wijktypentabel.csv")
  return { data }
}

