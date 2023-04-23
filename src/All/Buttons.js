
export function BtnHandle (props)
{
    
    return (
        <div>
            <button onClick={props.NewData}> New </button>
            <button onClick={props.save}> Save </button>
            <button onClick={props.Delete}> Delete </button>
        </div>
    )
}