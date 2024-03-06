import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import classe from './Navigation.module.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1, width: screen }}>
            <AppBar position="static">
                <Toolbar>
                    <div className='container'>
                        <div className={classe.wrapper}>
                            <div className={classe.title}>
                                <p >Gihub Searh</p>
                            </div>
                            <div className={classe.nav}>
                                <Link className={classe.link} to='/'>Home</Link>
                                <Link className={classe.link} to='/favorites'>Favorites</Link>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
