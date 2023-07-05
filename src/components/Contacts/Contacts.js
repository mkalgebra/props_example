import List from "../List/List"

export default function Contacts({title, author, timestamp, note}){

    const localAuthor = author + '--' + author;

    function random(arg){
        return arg/2
    }

    return(
        <>
            <p>TITLE: {title}</p>
            <p>AUTHOR: {localAuthor}</p>
            <p>TIME: {random(timestamp)}</p>
            <p>-----------------------</p>
            <List note={note}/>
        </>
    )
}