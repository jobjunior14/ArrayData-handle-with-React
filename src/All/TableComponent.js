
export function GeneralTable (props)
{
    return (
        <tr onClick={props.onclick} onDoubleClick={() => props.changeState(props.prev.id)}>
            {(!props.clickVerification) ?
                <td id={props.prev.id} name={`nom${props.prev.id}`} > {props.prev.nom} </td> :
                <td id={props.prev.id} name={`nom${props.prev.id}`}  >
                    <input
                        defaultValue={props.prev.nom}
                        id={props.prev.id}
                        name={`nom`}
                        placeholder='Nom Complet'
                        onChange={(e) => {
                            const { name, value } = e.target
                            return props.saveData(props.prev.id, name, value)
                        }
                        }
                    />
                </td>
            }

            {(!props.clickVerification) ?
                <td id={props.prev.id} name={`age${props.prev.id}`}> {props.prev.age} </td> :
                <td id={props.prev.id} name={`age${props.prev.id}`} >
                    <input
                        defaultValue={props.prev.age}
                        id={props.prev.id}
                        placeholder='Age'
                        type='number'
                        name={`age`}
                        onChange=
                        {(e) => {
                            const { name, value } = e.target
                            return props.saveData(props.prev.id, name, value)
                        }
                        }
                    />
                </td>
            }

            {(!props.clickVerification) ?
                <td id={props.prev.id} name={`age${props.prev.id}`}> {props.prev.number} </td> :
                <td id={props.prev.id} name={`age${props.prev.id}`} >
                    <input
                        defaultValue={props.prev.number}
                        id={props.prev.id}
                        placeholder='Phone Number'
                        type='number'
                        name={`number`}
                        onChange=
                        {(e) => {
                            const { name, value } = e.target
                            return props.saveData(props.prev.id, name, value)
                        }
                        }
                    />
                </td>
            }

            {(!props.clickVerification) ?
                <td id={props.prev.id} name={`fac${props.prev.id}`} > {props.prev.fac} </td> :
                <td id={props.prev.id} name={`fac${props.prev.id}`} >
                    <input
                        defaultValue={props.prev.fac}
                        id={props.prev.id}
                        placeholder='Fac'
                        type='text'
                        name={`fac`}
                        onChange={(e) => {
                            const { name, value } = e.target
                            return props.saveData(props.prev.id, name, value)
                        }
                        }
                    />
                </td>
            }
        </tr>
    )
}