import '../style/Complain.css';
import Navigation from './Navigation.js';

function Complain() {
    return (
		<>
        <Navigation />
			<div>
				<body className='border-chat'>
					<div className="card bg-transparent">
						<div className="row g-0">
							<div className="col-12 col-lg-5 col-xl-3 border-right">					
								<a href="#" className="list-group-item list-group-item-action border-0 bg-transparent" style={{ color: 'white' }}>
									<div className="d-flex align-items-start">
										<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
										<div className="flex-grow-1 ml-3 ms-3">
											Admin
											<div className="small"><span className="fas fa-circle chat-online" style={{ color: '#ABABAB'}}> Yes, Is there anything I can help</span>
											</div>
										</div>
									</div>
								</a>
								<hr className="d-block d-lg-none mt-1 mb-0"/>
							</div>

							<div className="col-12 col-lg-7 col-xl-9">					
								<div className="position-relative">
									<div className="chat-messages p-4">
										<div className="chat-message-right pb-4">								
											<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 me-3">									
												Hello Admin, I Need Your Help
											</div>
										</div>

										<div className="chat-message-left pb-4">
											<div>
												<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
											</div>
											<div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 ms-3">
												Yes, Is there anything I can help ?
											</div>
										</div>					
									</div>
								</div>

								<div className="flex-grow-0 py-3 px-4">
									<div className="input-group">
										<input type="text" className="form-control pt-3 pb-3" placeholder="  Send Message" style={{ color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)', border: 'none'}} />										
									</div>
								</div>
							</div>
						</div>
					</div>
				</body>
			</div>
		</>
    )
}

export default Complain