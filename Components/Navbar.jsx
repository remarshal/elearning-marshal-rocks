import { Menu } from 'antd';
import Link from 'next/link';

const { Item } = Menu;

const Navbar = () => {
    return (
        <Menu>
            <Item>
                <Link href="/">
                    <a>App</a>
                </Link>
            </Item>
            <Item>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </Item>
            <Item>
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </Item>
        </Menu>
    );
};

export default Navbar;