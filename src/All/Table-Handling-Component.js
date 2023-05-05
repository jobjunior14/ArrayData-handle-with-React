import { dataArray } from "./data/StudentArray";
import { useState, useEffect } from "react";
import { GeneralTable } from "./components/Table-Component-input";
import { BtnHandle } from "./components/Buttons";
import { profileComponent } from "./profil/profil-display";

export function PrincipalTableHandling ()
{
    let indexOFTable;
    const [DataFromArray, setDataFromArray] = useState(dataArray);
    const [form_filter, setform_filter] = useState({ search: '', filter: ''});
    const [modificationVerification, setmodificationVerification] = useState(false);
    
    // Searching Function on array................................................
    function FilterFunction (e) 
    {
        const {name, value} = e.target;
        setform_filter(
            prev =>
            {
                return {
                    ...prev, [name]: value
                }
            }
        )
    }


    //Must be change to a displaying a particule information..........................
    // function changeVerification(id) {
    //     setDataFromArray(
    //         prev => {
    //             return prev.map((square) => {
    //                 return square.id === id ? { ...square, clickVerification: !square.clickVerification } : square
    //             }
    //             )
    //         }
    //     )
    // }

    //Uptadate  data in form Function ...........................................
    function Uptading_Data_In_Form (id, name, value)
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

    // data Component ...................................................
    let displayInformation = DataFromArray.map 
    (
        prev => {
            
            return ( form_filter.search === '' && form_filter.filter === '')  ? (
            <GeneralTable 
                prev = {prev}   
                clickVerification = {prev.clickVerification}  
                key = {prev.id} 
                Uptading_Data_In_Form_f = {Uptading_Data_In_Form}
                onclick = {indexe}
                
            />) : ( form_filter.search === '' && form_filter.filter !== '' ) ?

            (
                prev.fac === form_filter.filter.toLowerCase() && (
                <GeneralTable 
                    prev = {prev}   
                    clickVerification = {prev.clickVerification}  
                    key = {prev.id} 
                    Uptading_Data_In_Form_f = {Uptading_Data_In_Form}
                    onclick = {indexe}
                /> )
            ) : 

            (
                (   ( form_filter.filter === '') ? ( prev.nom.toLowerCase().includes(form_filter.search.toLowerCase()) || prev.nom.toUpperCase().includes(form_filter.search.toUpperCase()) ) :
                ( ( prev.nom.toLowerCase().includes(form_filter.search.toLowerCase()) || prev.nom.toUpperCase().includes(form_filter.search.toUpperCase()) ) && prev.fac === form_filter.filter.toLowerCase())
                ) && 
               ( 
               <GeneralTable
                    prev={prev}
                    clickVerification={prev.clickVerification}
                    key={prev.id}
                    Uptading_Data_In_Form_f = {Uptading_Data_In_Form}
                    onclick={indexe}
                />)
            )  
        }
    )
    // Number of Student .............................................................
   let number = displayInformation.filter ((data) => data !== false);


    // Index on the Table ...................................................
    function indexe (index)
    {
        return indexOFTable = index;
    }
    
    //New Element on the Table .....................................................
    function New()
    {
        if ( form_filter.filter !== '' )
        {
            setDataFromArray (
                prev => {
                    return [...prev, {
                        nom: '',
                        age: '',
                        fac: form_filter.filter,
                        clickVerification: true,
                        id: prev[prev.length - 1].id + 1,
                        index: prev.length + 1,
                        payment: {
                            tranche_1:
                            {
                                valid: false,
                                amount: 0,
                            },
                            tranche_2:
                            {
                                valid: false,
                                amount: 0,
                            },
                            tranche_3:
                            {
                                valid: false,
                                amount: 0,
                            },
                            tranche_4:
                            {
                                valid: false,
                                amount: 0,
                            }
                        },
                        matricul: '',
                        picture: ''
                    }]
                }
            )
            setform_filter( prev => {
                return {...prev, search: ''}
            });
        }
        else 
        {
            setDataFromArray (
                prev => {
                    return [...prev, {
                        nom: '',
                        age: '',
                        fac: '',
                        clickVerification: true,
                        id: prev[prev.length - 1].id + 1,
                        index: prev.length + 1,
                        payment: {
                            tranche_1:
                            {
                                valid: false,
                                amount: 0,
                            },
                            tranche_2:
                            {
                                valid: false,
                                amount: 0,
                            },
                            tranche_3:
                            {
                                valid: false,
                                amount: 0,
                            },
                            tranche_4:
                            {
                                valid: false,
                                amount: 0,
                            }
                        },
                        matricul: '',
                        picture: ''
                    }]
                }
            )      
        }
        
    }

    //Delete a particular index from the array...........................................
    function Delete ()
    {
        setDataFromArray(
            prev => {
                prev = [...prev]
                if (indexOFTable !== undefined)
                {
                    prev.splice(indexOFTable, 1);
                    setmodificationVerification(true);
                }
                for ( let i = 0; i < prev.length; i++)
                {
                 prev[i].index = i
                }
                return prev;
            }
        )
    }

    //Save the current state of the array.............................................
    function saveInLocalStorage ()
    {
        setDataFromArray(
            prev => {
                prev = [...prev]
               for ( let i = 0; i < prev.length; i++)
               {
                prev[i].index = i
               }
                return prev;
            }
        )

        localStorage.setItem("myDataArray", JSON.stringify(DataFromArray));
        
        setmodificationVerification(false);
    }

    // Retunirng a array of objects......................................................
    
    return (
        <div>

            <form>
                <input
                    type='text'
                    placeholder="Search a particulaar student"
                    onChange={ FilterFunction }
                    className="search-form"
                    name = 'search'
                    value = {form_filter.search}
                />

                <select 
                    id = 'select'
                    name = 'filter'
                    onChange={ FilterFunction }
                    value = { form_filter.filter }
                >
                    <option value = "">Choose Fac</option>
                    <option value = 'tic'> TIC </option>
                    <option value = 'hec'> HEC </option>
                    <option value = 'emi' > EMI </option>
                    <option value = 'isia' > ISIA </option>
                    <option value = 'se' > SE </option>
                </select>
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
            <p> { number.length  } etudiant{number.length > 1 ? 's' : ''}  </p>
        </div>
    )
}