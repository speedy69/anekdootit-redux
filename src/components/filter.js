import { useDispatch } from "react-redux"
import { filter } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()
    
    return(
        <div>
            filter <input type='text' name='filter' onChange={(e) => dispatch(filter(e.target.value))} />
        </div>
    )
}

export default Filter