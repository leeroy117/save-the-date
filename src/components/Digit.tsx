interface Props{
    digit: string;
}

function Digit({digit} : Props) {
    return ( 
        <div className="flex flex-row justify-center items-center w-8 bg-[#ddd4c0] p-1 rounded-lg shadow-sm">{digit} </div>
     );
}

export default Digit;