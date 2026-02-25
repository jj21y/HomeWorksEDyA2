interface Props {
    message: String;
}

function PrintMessage({message}: Props){
return(<>
<h3>{message}</h3>
</>)
}

export default PrintMessage;