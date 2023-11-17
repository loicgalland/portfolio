export default function Cta({text, classname}){
    return(
        <button className={`cta ${classname}`}>{text}</button>
    )
}