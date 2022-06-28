import {Link} from 'react-router-dom';
import imgList from '../img/Lista.png';
import imgAlta from '../img/AltaWeb.jpg';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

const Home = () => {

    return(
        <>
        <div className='containerCard'>
            <div className='card'>
             <h1>Listar</h1>   
            <Link to ={"/Listar"}>
                    <button className='btn btn-primary'>
                        <img src={imgList} width="200"/>
                    </button>
            </Link>

            </div>
            <div className='card'>
                <h1>Alta</h1>   
                <Link to ={"/Alta"}>
                    <button className='btn btn-primary'>
                        <img src={imgAlta} width="200"/>
                    </button>
                </Link>
            </div>
        </div>


        </>
    )
};

export default Home;