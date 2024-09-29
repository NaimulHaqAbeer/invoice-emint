'use client';

import React, { FC, useEffect, useState } from 'react';
import './invoice.css';
import policyData from '@/data.json';

type pageProps = {};

const page: FC<pageProps> = ({}) => {
	const [policy, setPolicy] = useState({});

	// Fetching data from the JSON file on component mount
	useEffect(() => {
		setPolicy(policyData?.policy);
	}, []);
	return (
		<div className='invoice-container'>
			<div className='header'>
				<img src='./nexaimage.png' alt='Bata Logo' className='logo' />
				{/* <h2>Government of the People's Republic of Bangladesh</h2>
				<h3>National Board of Revenue</h3>
				<h4>Tax Invoice [[Mushak-6.3]]</h4>
				<p>[See clause (c) and (f) of Sub-Rule (1) of Rule 40]</p>
				<h4>Name of the registered person:</h4>
				<p>
					Bata Shoe Company (Bangladesh) Limited.
					<br />
					000000318-0003
				</p>
				<h4>Address of the invoice issuer:</h4>
				<p>TAJMAHAL ROAD, CITY</p> */}
			</div>

			<hr />

			<div className='contact-info'>
				<p>15/9, Tajmahal Road, Block-C, Mohammadpur, Dhaka.</p>
				<p>For Any Queries:</p>
				<p>
					Phone: 09666200300
					<br />
					(From 9:00 am - 9:00 pm)
					<br />
					WhatsApp: 01313772013
					<br />
					Email: bd.customercare@bata.com
					<br />
					Online Shop: <a href='https://www.batabd.com'>www.batabd.com</a>
				</p>
			</div>

			<hr />

			<div className='invoice-details'>
				<table>
					<tbody>
						<tr>
							<td>Invoice No:</td>
							<td>2451346C1008391</td>
						</tr>
						<tr>
							<td>VAT Invoice No:</td>
							<td>51346C1016958</td>
						</tr>
						<tr>
							<td>Date:</td>
							<td>06/06/2024</td>
						</tr>
						<tr>
							<td>Time:</td>
							<td>21:19</td>
						</tr>
						<tr>
							<td>Cust. Name:</td>
							<td>asif</td>
						</tr>
						<tr>
							<td>Mobile No:</td>
							<td>01828398225</td>
						</tr>
					</tbody>
				</table>
			</div>

			<hr />

			<div className='invoice-details-container'>
				<div className='item-header'>
					<span>Product No</span>

					<span>Qty</span>
					<span>Price</span>
					<span>VAT</span>
					<span>Sub Total</span>
				</div>
				<div className='item-row'>
					<span>9000092</span>

					<span>1</span>
					<span>0</span>
					<span>0</span>
					<span>0.00</span>
				</div>
				<div className='item-row'>
					<span>9000092</span>

					<span>1</span>
					<span>0</span>
					<span>0</span>
					<span>0.00</span>
				</div>
				<div className='item-row'>
					<span>9900022</span>

					<span>1</span>
					<span>433.91</span>
					<span>65.09</span>
					<span>499.00</span>
				</div>
				<div className='item-row'>
					<span>9900060</span>

					<span>1</span>
					<span>346.96</span>
					<span>52.04</span>
					<span>399.00</span>
				</div>

				<div className='summary-row'>
					<span>Amount (Including VAT):</span>
					<span>898.00</span>
					<span>Paid VAT:</span>
					<span>117.13</span>
					<span>Total Discount:</span>
					<span>0.00</span>
				</div>
				<div className='summary-row'>
					<span>Net Amount:</span>
					<span>898.00</span>
				</div>
				<div className='summary-row'>
					<span>UCB POS:</span>
					<span>898.00</span>
				</div>

				<div className='summary-row' style={{ marginTop: '30px' }}>
					<span>Change Due:</span>
					<span>0.00</span>
				</div>
				<hr />
				<div className='policy-container'>
					<h3>= {policyData?.policy?.title} =</h3>
					<h4>{policyData?.policy?.subTitle1}</h4>
					<h4>{policyData?.policy?.subTitle2}</h4>

					<h3>= {policyData?.policy?.policyTitle} =</h3>
					<ol>
						{policyData?.policy?.items &&
							policyData?.policy?.items?.map((item, index) => (
								<li key={index}>{item}</li>
							))}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default page;
