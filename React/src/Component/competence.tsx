import style from "../App.module.css"
export function Card(){
    return (
    <div className={style.card}>
        <img src="../images.png" alt="Avatar"/>
        <div className={style.container}>
          <h4><b>HTML CSS</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div> 
    )
}