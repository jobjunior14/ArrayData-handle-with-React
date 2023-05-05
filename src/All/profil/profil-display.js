import { dataArray } from "../data/StudentArray";
import { MyProfile } from "../components/student-profil";

export const profileComponent = dataArray.map
( 
    prev =>
    {
        return <MyProfile key = { prev.id }  prev = {prev} />
    }
    
)

