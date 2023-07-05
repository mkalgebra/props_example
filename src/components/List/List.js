import ListItem from "../ListItem/ListItem"

export default function List({note}){
    const names = ['Miki Maus', 'Snjeguljica', 'Doktor Kroko']
    
    return (
        <>
            {names.map(i=><ListItem name={i} note={note}/>)}
        </>
    )
}