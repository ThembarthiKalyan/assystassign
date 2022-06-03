import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faS, faCircle)

function Menu(){
    return(
        <div className="card" Style={"width: 18rem; border-radius: 10px;  border-style: solid; border-width: medium; left:55px; top: 107px;"}>
            <ul className="list-group list-group-flush" Style={"font-size: 20px; border-style: solid; border-width: medium; "}>
                <li className="list-group-item" Style={" border-style: solid; border-width: medium; "}><FontAwesomeIcon icon={faCircle} />Low</li>
                <li className="list-group-item" Style={" border-style: solid; border-width: medium; "}><FontAwesomeIcon icon={faCircle} />Medium</li>
                <li className="list-group-item" Style={" border-style: solid; border-width: medium; "}><FontAwesomeIcon icon={faCircle} />High</li>
                <li className="list-group-item" Style={" border-style: solid; border-width: medium; "}><FontAwesomeIcon icon={faCircle} />Critical</li>
                <li className="list-group-item" Style={" border-style: solid; border-width: medium; "}><FontAwesomeIcon icon={faTimes} />Clear</li>
            </ul>
        </div>
        // <div>Hello</div>
    )
}

export default Menu;