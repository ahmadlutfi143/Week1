import Profil from '../assets/Profil.png';
import Mouse from '../assets/Mouse.png';
import DumbMerchLogo from '../assets/DumbMerch_Logo.png';
import '../style/Profile.css';
import Navigation from './Navigation';

function Profile() {
    return (
      <>
      <Navigation />
        <div>
          <body className='border-profile'>
            <div className='container h-100'>
              <div className='container h-100'>
                <div className='row alin-items-center h-100 pt-5 pb-5'>
                  <form className='col-12 wow fadeInUp mt-3 border-0 bg-transparent' data-wow-delay='0.2s'>
                    <div className='row g-0'>                 
                      <form className='col-8 wow fadeInUp border-0 bg-transparent' data-wow-delay='0.2s'>
                        <h1 className='title-profile mb-5' style={{ color: '#F74D4D'}}>My Profile</h1>
                          <div className='card border-0 bg-transparent'>
                            <div className='card mb-3 border-0 bg-transparent'>
                              <div className='row g-0'>
                                <div className='col-md-5'>
                                  <img src={Profil} className="rounded float-start mb-4" alt=""  width='100%'/>
                                </div>
                                <div className='col-md-7 border-0'>
                                  <div className='card-body'>
                                    <div className='mb-4'>
                                      <h5 style={{ color: '#F74D4D'}}>Name</h5> 
                                      <h5 style={{ color: 'white'}}>Yosep</h5>                             
                                    </div>
                                    <div className='mb-4'>
                                      <h5 style={{ color: '#F74D4D'}}>Email</h5> 
                                      <h5 style={{ color: 'white'}}>yosepgans@gmail.com</h5>                             
                                    </div>
                                    <div className='mb-4'>
                                      <h5 style={{ color: '#F74D4D'}}>Phone</h5> 
                                      <h5 style={{ color: 'white'}}>083896833122</h5>                             
                                    </div>
                                    <div className='mb-4'>
                                      <h5 style={{ color: '#F74D4D'}}>Gender</h5> 
                                      <h5 style={{ color: 'white'}}>Male</h5>                             
                                    </div>
                                    <div className='mb-4'>
                                      <h5 style={{ color: '#F74D4D'}}>Adress</h5> 
                                      <h5 style={{ color: 'white'}}>Lorem, ipsum dolor sit consectetur adipisicing elit. Quas magnam ea atque, deserunt sed odit doloribus ratione quibusdam rerum sequi.</h5>                             
                                    </div>                            
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                    
                    
                        <form className='col-4 wow fadeInUp border-0 bg-transparent' data-wow-delay='0.2s'>
                          <h1 className='title-profile mb-5' style={{ color: '#F74D4D'}}>My Transaction</h1>
                          <div style={{ width: '600px' }}>
                            <div className="card pt-3 ps-3 pe-3 register-custom" style={{ backgroundColor: '#303030', borderRadius: '5px', width: '80%'}}>
                              <div className='card border-0 bg-transparent'>
                                <div className='card border-0 bg-transparent'>
                                  <div className='row g-0'>
                                    <div className='col-md-3'>
                                      <img src={Mouse} className="rounded float-start" alt=""  width='90%'/>
                                    </div>
                                    <div className='col-md-6 border-0'>
                                      <div className='card-body'>
                                        <div className='data-transaction'>
                                          <li style={{ color: '#F74D4D', fontSize: '15px'}}>Mouse</li> 
                                          <li style={{ color: '#F74D4D', fontSize: '11px'}}>Saturday, 14 Juli 2021</li>
                                          <li style={{ color: 'white', fontSize: '11px'}}>Price : Rp.500.000</li> 
                                          <p style={{ color: 'white', fontSize: '13px', marginTop: '25px'}}>Sub Total : 500.000</p>                             
                                        </div>                            
                                      </div>
                                    </div>
                                  <div className='col-md-3'>
                                    <img src={DumbMerchLogo} className="rounded float-end mt-4" alt=""  width='65%'/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </body>
        </div>
      </>
    )
}

export default Profile