interface Props{
    number: string;
}
function PrintNumber({number}: Props){
    return(<>
    <h3>{number}</h3>
    </>)
}

export default PrintNumber;