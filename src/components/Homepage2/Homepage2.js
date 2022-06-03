import '../Homepage/Homepage.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
function Homepage2(){
    return(
        <div Style={"width:1631px; height: 670px; background: #FFFFFF;; display: inline-flex; flex-direction: column; position: relative;"}>
            <Header/>
            {/* <div className='container1'>
            </div> */}
            <Menu Style={"position: absolute;"}/>
        </div>
    )
}

export default Homepage2;