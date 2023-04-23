

export function MyProfile (props)
{

    return (
        <div>
            <img src= 'C:/Users/junio/OneDrive/Documents/JavaSciprt/student-project/src/All/hey.jpg' alt = 'profile image'  width={300} height={400}/>
            <h4> { props.prev.nom } </h4>
            <pre> { props.prev.matricul } </pre>
            <div>
                <p> { props.prev.payment.tranche_1.amount } { props.prev.payment.tranche_1.valid ? 'valid' : 'not valid'} </p>
                <p> { props.prev.payment.tranche_2.amount } { props.prev.payment.tranche_2.valid ? 'valid' : 'not valid'} </p>
                <p> { props.prev.payment.tranche_3.amount } { props.prev.payment.tranche_3.valid ? 'valid' : 'not valid'} </p>
                <p> { props.prev.payment.tranche_4.amount } { props.prev.payment.tranche_4.valid ? 'valid' : 'not valid'} </p>
            </div>
        </div>
    )
}