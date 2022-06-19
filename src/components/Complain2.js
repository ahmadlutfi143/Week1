import Client from '../assets/Client.png';
import Chat from '../assets/Chat.png';
import '../style/Complain2.css';
import Navigation from './Navigation';

function Complain2() {
    return (
		<>
        <Navigation />
			<div>
				<body className='border-chat2'>
					<div className="card bg-transparent">
						<div className="row g-0">
							<div className="col-12 col-lg-5 col-xl-3 border-right">					
								<a href="#" className="list-group-item list-group-item-action border-0 bg-transparent" style={{ color: 'white' }}>
									<div className="d-flex align-items-start">
										<img src={Client} className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
										<div className="flex-grow-1 ml-3 ms-3">
											egi_lol
											<div className="small"><span className="fas fa-circle chat-online" style={{ color: '#ABABAB'}}> Hello Admin, I Need Your Help</span>
											</div>
										</div>
									</div>
								</a>

								<a href="#" className="list-group-item list-group-item-action border-0 bg-transparent" style={{ color: 'white' }}>
									<div className="d-flex align-items-start">
										<img src={Chat} className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
										<div className="flex-grow-1 ml-3 ms-3">
											beach_lover
											<div className="small"><span className="fas fa-circle chat-online" style={{ color: '#ABABAB'}}> Hello Admin, This Problem Product to Me</span>
											</div>
										</div>
									</div>
								</a>
								<hr className="d-block d-lg-none mt-1 mb-0"/>
							</div>
							
							<div className="col-12 col-lg-7 col-xl-9">
								<div className="position-relative">
									<div className="chat-messages p-4">							
										<div className="chat-message-left pb-4">
											<div>
												<img src={Client} className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
											</div>
											<div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 ms-3">
												Hello Admin, I Need Your Help
											</div>
										</div>
									</div>
								</div>
								
								<div className="flex-grow-0 py-3 px-4">
									<div className="input-group">
										<input type="text" className="form-control pt-3 pb-3" placeholder="  Send message" style={{ color: 'white', backgroundColor: 'rgba(210, 210, 210, 0.25)', border: 'none'}} />
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

export default Complain2