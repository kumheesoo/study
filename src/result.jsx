import EX from'./ex'

export default function Result(){
    const data = {
        id:1,
        pw:3,
    }
    return(
        <div>
            <EX props={data}/>
        </div>
    )
}