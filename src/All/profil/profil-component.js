import { dataArray } from "../StudentArray";
import { MyProfile } from "./student-profil";

export const profileComponent = dataArray.map
( 
    prev =>
    {
        return <MyProfile key = { prev.id }  prev = {prev} />
    }
    
)

