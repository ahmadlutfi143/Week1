import Navigation from './Navigation.js';
import '../style/Edit.css';

function Edit() {
    return (
        <>
        <Navigation />
            <div>
                <body className='border-edit'>
                    <div>                    
                        <div className="card-body">
                            <h4 className='fw-bold card-title mb-4' style={{ color: 'white' }}>Edit Category</h4>
                            <form>
                                <div className="mb-5">
                                    <input type="text" className="form-control p-2 form-input" placeholder='Mouse' id="exampleInputText" aria-describedby="textHelp" style={{ borderRadius: '5px', color:'white', backgroundColor: 'rgba(210, 210, 210, 0.25)' }} />
                                </div>                                
                                <div class="d-grid gap-2">
                                    <button class="btn p-2" type="button" style={{ borderRadius: '5px', color: 'white', backgroundColor: '#56C05A' }} ><a className='save' href="/category">Save</a></button>
                                </div>
                            </form>
                        </div>                    
                    </div>
                </body>
            </div>
        </>
    )
}

export default Edit