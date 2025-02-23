import logo from '../assets/Logotype_White.svg';

/**
 * Displays the results from the SEO ROI calculation.
 * @param {Object} props
 * @param {Object} props.results - The object containing visitors, (leads), conversions, AOV, net revenue, lifetime value, and monthly ROI.
 */
const CalculatorResults = ({ results }) => {
	return (
		<div className='flex-1 bg-[#0a63ed] text-[#d7e7ff] rounded-lg p-4'>
			<div className='flex flex-col items-center gap-4'>
				<img src={logo} alt='logo' className='h-12' />
				<p className='text-lg font-forma-regular mb-4'>
					Based on these numbers, here is what you could expect for return on
					investment*
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p className='text-md flex justify-between border-b border-white pb-2'>
					<span>Visitors:</span> <span>{results.visitors}</span>
				</p>
				{results.leads !== undefined && (
					<p className='text-md flex justify-between border-b border-white pb-2'>
						<span>Leads:</span> <span>{results.leads}</span>
					</p>
				)}
				<p className='text-md flex justify-between border-b border-white pb-2'>
					<span>Conversions:</span> <span>{results.conversions}</span>
				</p>
				<p className='text-md flex justify-between border-b border-white pb-2'>
					<span>AOV:</span> <span>${results.averageOrderValue}</span>
				</p>
				<p className='text-md flex justify-between border-b border-white pb-2'>
					<span>Net Revenue (Monthly):</span> <span>${results.netRevenue}</span>
				</p>
				<p className='text-md flex justify-between border-b border-white pb-2'>
					<span>Total Lifetime Value:</span>{' '}
					<span>${results.totalLifetimeValue}</span>
				</p>
				<p className='text-xl font-bold flex justify-between text-white font-forma-bold'>
					<span>Monthly ROI</span> <span>${results.monthlyROI}</span>
				</p>
			</div>
		</div>
	);
};

export default CalculatorResults;
