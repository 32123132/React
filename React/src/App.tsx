import { Images } from "./Component/Images";
import { Ln } from "./Component/full name";
import { Card } from "./Component/competence";
import { Wanna } from "./Component/wanna learn";
import {Comp} from "./Component/INFO.tsx"

export function App(){
    return(
        <>
            <Ln/>
            <Images/>
            <Comp/>
            <Wanna props={'123'}  info ={'work'}/>
            
        </>
    )
}