import Mouse2 from '../assets/Mouse2.jpg';
import Mouse3 from '../assets/Mouse3.jpg';
import Mouse4 from '../assets/Mouse4.jpg';
import '../style/Detail.css';
import { Carousel } from 'react-bootstrap';
import Navigation from './Navigation';

function Detail() {
    return (
      <>
      <Navigation />
        <div>
          <body className='border-detail'>
            <div className='container h-100'>
              <div className='container h-100'>
                <div className='row alin-items-center h-100 pt-5 pb-5'>                  
                  <form className='col-12 wow fadeInUp border-0 bg-transparent' data-wow-delay='0.2s'>
                    <div className='card border-0 bg-transparent'>
                      <div className='card mb-3 border-0 bg-transparent'>
                        <div className='row g-0'>
                          <div className='col-md-6'>
                          
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block rounded ms-5"
                                src={Mouse2}
                                alt="First slide"
                                width='80%'
                              />                              
                            </Carousel.Item>

                            <Carousel.Item>
                              <img
                                className="d-block rounded ms-5"
                                src={Mouse3}
                                alt="Second slide"
                                width='80%'
                              />                             
                            </Carousel.Item>

                            <Carousel.Item>
                              <img
                                className="d-block rounded ms-5"
                                src={Mouse4}
                                alt="Third slide"
                                width='80%'
                              />                            
                            </Carousel.Item>
                          </Carousel>
                          </div>
                          
                          <div className='col-md-6 border-0'>
                            <div className='card-body'>
                              <div className='title-product' style={{ color: '#F74D4D'}}>
                                <h1>Mouse</h1>                              
                              </div>
                              <div className='stock mb-5 text-white'>
                                <p>Stock : 600</p>                              
                              </div>
                              <div className='fitur text-white'>
                                <li>-Wireless Mouse</li>
                                <li>-Konektivitas wireless 2.4 GHz</li>
                                <li>-Jarak wireless hingga 10m</li>
                                <li>-Plug and Play</li>
                                <li>-Baterai tahan hingga 12 bulan</li>
                              </div>
                              <div className='description mt-5 text-white'>
                                <p>Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>
                              </div>
                              <div className='price mt-5 mb-5 text-white'>
                                <h4 style={{ color: '#F74D4D'}}>Rp.300.900</h4>
                              </div>
                              <div className='d-grid gap-2'>
                                <button class="btn btn-danger" type="button" style={{ color: 'white', backgroundColor: '#F74D4D'}}>Buy</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Detail