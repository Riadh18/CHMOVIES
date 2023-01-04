import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovie=({setTitre,setEtoile,titre,etoile})=>{
    const handleReset=()=>{
        setTitre('')
        setEtoile(0)
    }
    return(
        
        <div className="filter">
            <input className="in" value={titre} type="text" placeholder="Search " onChange={(e)=>setTitre(e.target.value)}/>
            <Rating value={etoile} name="simple-controlled" onChange={(e)=>setEtoile(e.target.value)}/>
            <Button onClick={handleReset} variant="outline-warning">Reset</Button>{' '}
        </div>
        
    )
}

export default FilterMovie