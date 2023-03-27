import { dataArray } from "./StudentArray";

export function BtnHandle (props)
{
    
    return (
        <div>
            <button onClick={props.NewData}> New </button>
            <button> Save </button>
            <button onClick={props.Delete}> Delete </button>
        </div>
    )
}