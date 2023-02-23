import { useSelector, useDispatch } from 'react-redux'

const TopBar = () => {

    const count = useSelector((state: any) => state.counter.value)
    

    return (
        <div>{count}</div>
    )
}

export { TopBar };