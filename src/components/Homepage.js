import Mouse from '../assets/Mouse.png';
import Keyboard from '../assets/Keyboard.png';
import '../style/Homepage.css';
import Navigation from './Navigation';

function Homepage() {
    return (
        <>
        <Navigation />
            <div>
                <body className='border-homepage'>
                    <h1 className='Title ms-5 mb-5' style={{ color: '#F74D4D'}}>Product</h1>
                    <div className="row ms-1">
                        <div className="card ms-5 register-custom" style={{ backgroundColor: '#212121', borderRadius: '10px', width: '15%'}}>
                            <div className="card-body">
                                <a href='/detail'><img src={Mouse} className="rounded float-start mb-4" alt=""  width='100%'/></a>
                                    <h3 style={{ color: '#F74D4D'}}>Mouse</h3>
                                    <h4 style={{ color: 'white'}}>Rp.500.000</h4>
                                    <h4 style={{ color: 'white'}}>Stock : 600</h4>                                   
                            </div>
                        </div>

                        <div className="card ms-4 register-custom" style={{ backgroundColor: '#212121', borderRadius: '10px', width: '15%'}}>
                            <div className="card-body">
                                <img src={Keyboard} className="rounded float-start mb-4" alt=""  width='100%'/>
                                    <h3 style={{ color: '#F74D4D'}}>Keyboard</h3>
                                    <h4 style={{ color: 'white'}}>Rp.700.000</h4>
                                    <h4 style={{ color: 'white'}}>Stock : 600</h4>                                   
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </>
    )
}

export default Homepage