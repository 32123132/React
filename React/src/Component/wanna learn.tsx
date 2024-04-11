import style from '../App.module.css'

export function Wanna({props,info}){
    return (
        <div className={style.pad}>
            <img src="../0baeebc6-5a7c-4f62-844a-ae2d8268f911.png" alt="Avatar" width={100}/>
            
              <h3>{props}</h3>
              <span>{info}</span>
            
          </div> 
        )
}