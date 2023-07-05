export default function ListItem({name, note}){

    const nez = name + '.'

    return (
    <>
        <p>Ja sam {nez}</p>
        <p>{note}</p>
    </>
    )
}