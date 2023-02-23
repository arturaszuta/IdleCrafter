import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../redux/counterSlice";

const SideBar = (props: any) => {

    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    const { changeScreens } = props;

    return (
        <>
            <Button variant="outlined" onClick={() => { changeScreens('mining'); dispatch(increment()) }}>Mining</Button>
            <Button variant="outlined" onClick={() => { changeScreens('crafting'); dispatch(decrement()) }}>Crafting</Button>
        </>
    )
}

export { SideBar };