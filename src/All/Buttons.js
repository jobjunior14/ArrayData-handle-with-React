
export function BtnHandle (props)
{
    
    return (
        <div>
            <button onClick={props.NewData} className="newBtn"> New </button>
            <button onClick={props.save} className="saveBtn"> Save </button>
            <button onClick={props.Delete} className="deleteBtn"> Delete </button>
        </div>
    )
}