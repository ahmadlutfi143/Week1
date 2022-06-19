import '../style/Edit2.css';
import Navigation from './Navigation.js';



function Edit2() {
    return (
        <>
        <Navigation />
            <div>
                <body className='border-edit2'>
                    <div>                    
                        <div className="card-body">
                            <h4 className='fw-bold card-title mb-5' style={{ color: 'white' }}>Edit Product</h4>
                            <form>
                                <div className="mb-4">
                                    <input type="file" id="real-file" hidden="hidden" />
                                    <button type="button" id="custom-button" style={{ color: 'white', backgroundColor: '#F74D4D' }}>Upload Image</button>
                                    <span id="custom-text" style={{ color: 'white' }}>Mouse.jpg</span>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control p-2 form-input" placeholder='Product Name' id="exampleInputText" aria-describedby="textHelp" style={{ borderRadius: '5px', color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)' }} />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control" id="exampleInputTextarea" placeholder='Description' rows="4" style={{ borderRadius: '5px', color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)' }} ></textarea>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control p-2 form-input" placeholder='Price' id="exampleInputText" aria-describedby="textHelp" style={{ borderRadius: '5px', color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)' }} />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control p-2 form-input" placeholder='Stock' id="exampleInputText" aria-describedby="textHelp" style={{ borderRadius: '5px', color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)' }} />
                                </div>                                
                                <div className="d-grid gap-2 pt-5">
                                    <button class="btn p-2" type="button" style={{ borderRadius: '5px', color: 'white', backgroundColor: '#56C05A' }} ><a className='save' href="/product">Save</a></button>
                                </div>
                            </form>
                        </div>                    
                    </div>
                </body>
            </div>
        </>
    )
}

export default Edit2