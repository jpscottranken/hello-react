import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';

function AboutMe() {
	return (
		<div>
			<h1>Jeff Scott</h1>
			<p>
				Information Technology Instructor in the 
				Application and Website Development (AWD)
				Program at Ranken Technical College in
				Wentzville MO.
			</p>
			<p>
				Places I'd like to visit:
			</p>
			<ul>
				<li>
					Scotland
				</li>
				<li>
					Boston, MA
				</li>
				<li>
					Colombia, South America
				</li>
			</ul>
		</div>
	)
}

export default AboutMe