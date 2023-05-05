
export function GeneralTable (props)
{
    return (
        <tr >
            {
                <td id={props.prev.id} name={`nom${props.prev.id}`}   >
                    <input
                        defaultValue={props.prev.nom}
                        id={props.prev.id}
                        name={`nom`}
                        placeholder='Nom Complet'
                        onChange={(e) => {
                            const { name, value } = e.target
                            return props.Uptading_Data_In_Form_f(props.prev.id, name, value)
                        }
                        }
                        onFocus= { (e) =>{ return props.onclick(props.prev.index) } }
                    /> 
                </td>
            }

            {
                <td id={props.prev.id} name={`age${props.prev.id}`}  >
                    <input
                        defaultValue={props.prev.age}
                        id={props.prev.id}
                        placeholder='Age'
                        type='number'
                        name={`age`}
                        onChange=
                        {(e) => {
                            const { name, value } = e.target
                            return props.Uptading_Data_In_Form_f(props.prev.id, name, value)
                        }
                        }
                        onFocus= { (e) =>{ return props.onclick(props.prev.index) } }
                    />
                </td>
            }

            {
                <td id={props.prev.id} name={`age${props.prev.id}`}  >
                    <input
                        defaultValue={props.prev.number}
                        id={props.prev.id}
                        placeholder='Phone Number'
                        type='number'
                        name={`number`}
                        onChange=
                        {(e) => {
                            const { name, value } = e.target
                            return props.Uptading_Data_In_Form_f(props.prev.id, name, value)
                        }
                        }
                        onFocus= { (e) =>{ return props.onclick(props.prev.index) } }
                    />
                </td>
            }

            {
                <td id={props.prev.id} name={`fac${props.prev.id}`} index = {props.prev.index} >
                    <input
                        defaultValue={props.prev.fac}
                        id={props.prev.id}
                        placeholder='Fac'
                        type='text'
                        name={`fac`}
                        onChange={(e) => {
                            const { name, value } = e.target
                            return props.Uptading_Data_In_Form_f(props.prev.id, name, value)
                        }
                        }
                        onFocus= { (e) =>{ return props.onclick(props.prev.index) } }
                    />
                </td>
            }
        </tr>
    )
}