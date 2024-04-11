import style from "../App.module.css"
import { Card } from "./competence.tsx"
const information =[
  {keys : 1,all:'Linux', info:'Work in Kali Linux'},
  {keys : 2,all:'Python', info:'use library: proxy,socket and scapy' },
  {keys : 3,all:'MITM', info:"Hack WiFi sistem and steling password"},
  {keys : 4,all:"Love to study", info:'many times to study '}
] 
export function Comp(){
    return information.map(item => (<Card props={item.all} info = {item.info}/>));       
}