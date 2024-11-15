import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import SwitchColorMode from "./SwitchColorMode";

const NavBar = () => {
    return <HStack justifyContent={'space-between'} padding={'10px 20px'}>
        <Image src={logo} height={'60px'}/>
        <SwitchColorMode />
    </HStack>
}
export default NavBar;