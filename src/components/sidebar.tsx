import { Button } from "@mui/material";

const SideBar = (props: any) => {

    const { changeScreens } = props;

    return (
        <>
            <Button variant="outlined" onClick={() => { changeScreens('mining') }}>Mining</Button>
            <Button variant="outlined" onClick={() => { changeScreens('crafting') }}>Crafting</Button>
        </>
    )
}

export { SideBar };