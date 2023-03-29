import { dataArray } from "./StudentArray";
import { useState } from "react";
import { GeneralTable } from "./TableComponent";
import { BtnHandle } from "./Buttons";
export function PrincipalTableHandling ()
{
    const [clickVerificationState, setclickVerificationState] = useState(dataArray);

    function changeVerification(id) {
        setclickVerificationState(
            prev => {
                return prev.map((square) => {
                    return square.id === id ? { ...square, clickVerification: !square.clickVerification } : square
                }
                )
            }
        )
    }

    function saveData (id, name, value)
    { 
        
        setclickVerificationState (
            prev => {
                return prev.map ( (data)=> {
                    return data.id === id ? {...data, [name]:value} :data
                }
                )
            }
        )
        console.log (clickVerificationState, id, name);
    }

    let displayInformation = clickVerificationState.map 
    (
        prev => {
            return <GeneralTable 
                prev = {prev}   
                clickVerification = {prev.clickVerification}  
                key = {prev.id} 
                changeState = {changeVerification} 
                saveData = {saveData}
                
            />
        }
    )

    function New()
    {
        setclickVerificationState (
            prev => {
                return [...prev, {
                    nom: '',
                    age: '',
                    fac: '',
                    clickVerification: true,
                    id: prev.length + 1
                }]
            }
        )
    }

    function Delete (e)
    {
        const {id} = e.target
        console.log (id);
    }
    return (

        <div>
            <div>
                <tr>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Fac</th>
                </tr>
                {displayInformation}
            </div>
            <BtnHandle NewData = {New} Delete = {Delete} />
        </div>
    )

}