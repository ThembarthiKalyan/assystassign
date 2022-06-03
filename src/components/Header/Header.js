import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Menu from '../Menu/Menu';

library.add(faS, faFlag)

function Header(){
    const [visible,toggle]=useState(false);

    return(
        <div className='headerDiv'>
            <div Style={'width: 81px; height:24px; color: #2E98C5; margin: 21px 0px 0px 41px; font-style: normal; font-weight: 500; font-size: 16px;'}>likelihood</div>
            <FontAwesomeIcon icon={faFlag} className='flag' onClick={()=>toggle(!visible)} />
            {visible === true &&
            <Menu/>}
        </div>
    )
}

export default Header;