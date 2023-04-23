import { dataArray } from "./StudentArray";
import { useState } from "react";
import { GeneralTable } from "./TableComponent";
import { BtnHandle } from "./Buttons";

let indexOFTable; 

export function PrincipalTableHandling ()
{
    const [DataFromArray, setDataFromArray] = useState(dataArray);
    const [searchValue, setSearchValue] = useState('');
    const [modificationVerification, setmodificationVerification] = useState(false)

    function searchFunction (e) 
    {
        setSearchValue(
            prev => prev = e.target.value
        )
    }
    
    function changeVerification(id) {
        setDataFromArray(
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
        setDataFromArray (
            prev => {
                return prev.map ( (data)=> {
                    return data.id === id ? {...data, [name]:value} :data
                }
                )
            }
        )

        setmodificationVerification (true)
    }

    let displayInformation = DataFromArray.map 
    (
        prev => {
            return searchValue === '' ? 
            <GeneralTable 
                prev = {prev}   
                clickVerification = {prev.clickVerification}  
                key = {prev.id} 
                changeState = {changeVerification} 
                saveData = {saveData}
                onclick = {index}
                
            /> :
                ((prev.nom.toLowerCase().includes(searchValue.toLowerCase()) || prev.nom.toUpperCase().includes(searchValue.toUpperCase()) ) && 
                <GeneralTable
                    prev={prev}
                    clickVerification={prev.clickVerification}
                    key={prev.id}
                    changeState={changeVerification}
                    saveData={saveData}
                    onclick={index}
                />
            )  
        }
    )

    function index (e)
    {
        const {id} = e.target
        console.log (id);
        return indexOFTable = id;
    }

    function New()
    {
        setDataFromArray (
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

    function Delete ()
    {
        setDataFromArray(
            prev => {
                prev = [...prev]
                const array = prev.splice(indexOFTable, 1);
                for ( let i = 0; i < prev.length; i++)
                {
                    prev[i].id = i
                }
                return prev;
            }
        )
        setmodificationVerification(true);
    }

    function saveInLocalStorage ()
    {
        setDataFromArray(
            prev => {
                prev = [...prev]
                for (let i = 0; i < prev.length; i++) {
                    prev[i].id = i
                }
                return prev;
            }
        )

        localStorage.setItem("myDataArray", JSON.stringify(DataFromArray));
        
        setmodificationVerification(false);
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder="Search a particulaar student"
                    onChange={searchFunction}
                />
            </form>
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Number</th>
                    <th>Fac</th>
                </tr>
                {displayInformation}
            </table>

            {modificationVerification && <p color="red" >Si vous enregistrez pas, les modifictions apportées seront perdues </p>}
            <BtnHandle NewData = {New} Delete = {Delete} save = {saveInLocalStorage} />
           
        </div>
    )
}