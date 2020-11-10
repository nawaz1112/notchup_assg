import React from 'react';
import './main.css'

const Footer = () => {
	return (
		<>
			<section id="footer">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
							<ul className="list-unstyled list-inline social text-center">
								<li className="list-inline-item"><a href=""><i className="fa fa-facebook"></i></a></li>
								<li className="list-inline-item"><a href=""><i className="fa fa-twitter"></i></a></li>
								<li className="list-inline-item"><a href=""><i className="fa fa-instagram"></i></a></li>
								<li className="list-inline-item"><a href=""><i className="fa fa-google-plus"></i></a></li>
								<li className="list-inline-item"><a href=""><i className="fa fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
							<p><u><a href="https://www.notchup.com/">NotchUp.com</a></u> </p>
							<p className="h6">&copy; All right Reversed.<a className="text-green ml-2" href="https://www.notchup.co" target="_blank">NotchUp</a></p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer