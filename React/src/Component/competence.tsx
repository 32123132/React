import style from "../App.module.css"
const information =[
  {all:'Linux', info:'Work in Kali Linux'},
  {all:'Python', info:'use library: proxy,socket and scapy' },
  {all:'MITM', info:"Hack WiFi sistem and steling password"},
  {all:"Love to study", info:'many times to study '}
] 
export function Card({props, info}){
  
    return (
    <div className={style.Card}>
        <img src="../images.png" alt="Avatar"/>
        <div className={style.container}>
          <h3>{props}</h3>
          <span>{info}</span>
        </div>
      </div> 
    )
}