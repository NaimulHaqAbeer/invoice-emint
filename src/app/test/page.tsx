import { Button, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import './invoice.css';

type pageProps = {};

const page: FC<pageProps> = ({}) => {
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
					<h3>= Thank You For Shopping at NexaStyle =</h3>
					<h4>GOODS SOLD ARE NOT REFUNDABLE</h4>
					<h4>PROMO ITEMS ARE NOT EXCHANGE/REFUNDABLE</h4>

					<h3>= NexaStyle Claims Policy =</h3>
					<ol>
						<li>This receipt must be submitted with any claim.</li>
						<li>Goods purchased are not exchangeable for cash.</li>
						<li>
							Exchange of goods is allowed within 7 days at their original state
							& packaging.
						</li>
						<li>
							No claim will be entertained on factory second & price reduced
							items.
						</li>
						<li>
							100% replacement for major manufacturing defect if the concerned
							product is brought to the same store with this receipt within 30
							days from the date of purchase.
						</li>
						<li>Bata reserves the right to reject any fraudulent claim.</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default page;
