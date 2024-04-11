import style from "../App.module.css"
import { Card } from "./competence.tsx"
import { Wanna } from "./wanna learn.tsx"
const information =[
  {keys : 1,all:'Linux', info:'Work in Kali Linux'},
  {keys : 2,all:'Python', info:'use library: proxy,socket and scapy' },
  {keys : 3,all:'MITM', info:"Hack WiFi sistem and steling password"},
  {keys : 4,all:"Love to study", info:'many times to study '}
] 
const wanna= [
  {key:1, all:'Js', info: "Want to learn js to perfection"},
  {key:2, all:'React', info: "Want to learn React basic"},
  {key:3, all:'Node', info: "My dream to learn Node js"},
  {key:4, all:'XSS', info: "Want to learn XSS atack"},
  {key:5, all:'Python', info: "Want to start learn Django"},
  {key:6, all:'Fiber', info: "Want to know, what is it"},
  {key:7, all:'Hook', info: "Want to know more hook"},
  {key:8, all:'Git', info: "Want to learn work with commands"},
  {key:9, all:'Css', info: "Want to learn make up on css"},
  {key:10, all:'Mysql', info: "Want to learn work with database"},
]

export function Comp(){
    return information.map( item => ( <span key={item.keys}><Card props={item.all} info = {item.info}/> </span>));       
}
export function WannaLearn(){
  return wanna.map(item => (<span key={item.key}><Wanna props={item.all} info = {item.info}/></span>))
}