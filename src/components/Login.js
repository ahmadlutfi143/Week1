import '../style/Login.css'
import DumbMerchLogo from '../assets/DumbMerch_Logo.png';

function Login() {
    return (
        <div>
            <body className='border-login'>
                <div className="container text-white mt-5 custom">
                    <div className="row mt-5 mb-5 ms-auto me-auto ">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column justify-content-between w-100">
                                <img src={DumbMerchLogo} className="rounded float-start mb-4" alt=""  width='250'/>
                                <h1 className='fw-bold mb-3' style={{ fontSize: '56px' }}>Easy, Fast and Reliable</h1>
                                <p className='col-md-9' style={{ fontWeight: 400, color: '#6A6A6A', fontSize: '18px' }}>Go shopping for merchandise, just go to dumb merch shopping, the biggest merchandise in <b>Indonesia</b></p>
                                <div className="d-flex justify-content-between mt-5" style={{ width: '18rem' }}>                                                             
                                    <a className="btn p-2 rounded me-2 w-50 submit-button" style={{ color: 'white', backgroundColor: '#F74D4D'}}>Login</a>
                                    <a className="btn p-2 rounded w-50" href='/register' style={{ fontWeight: '800', color: '#B7B7B7' }}>Register</a>
                                </div>
                            </div>

                            <div style={{ width: '800px' }}>
                                <div className="card m-5 p-4 pt-2 register-custom" style={{ backgroundColor: '#181818', borderRadius: '10px', width: '80%'}}>
                                    <div className="card-body">
                                        <p className='fw-bold card-title mb-4' style={{ fontSize: '36px' }}>Login</p>
                                        <form>
                                            <div className="mb-3">
                                                <input type="email" className="form-control p-2 form-input" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" style={{ color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)'}} />
                                            </div>
                                            <div className="mb-5">
                                                <input type="password" className="form-control p-2 form-input" placeholder='Password' id="exampleInputPassword1" style={{ color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)'}} />
                                            </div>
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-danger" type="button" style={{ color: 'white', backgroundColor: '#F74D4D'}} ><a className='tombol' href='/homepage'>Login</a></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Login