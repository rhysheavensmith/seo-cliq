import logo from '../assets/cliq-logo.webp';

const CalculatorResults = ({ results }) => {
	return (
		<div className='flex-1 bg-[#0b0b0b] text-white rounded-lg p-6 border border-[#ff8c02]'>
			<div className='flex flex-col items-center gap-4 mb-4'>
				<img src={logo} alt='Cliq Logo' className='h-12' />
				<p className='text-lg text-center'>
					Based on these numbers, here is what you could expect for return on
					investment*
				</p>
			</div>
			<div className='space-y-3'>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Visitors:</span> <span>{results.visitors}</span>
				</div>
				{results.leads !== undefined && (
					<div className='flex justify-between border-b border-gray-700 pb-2'>
						<span>Leads:</span> <span>{results.leads}</span>
					</div>
				)}
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Conversions:</span> <span>{results.conversions}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Average Order Value:</span>{' '}
					<span>${results.averageOrderValue}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Net Revenue (Monthly):</span> <span>${results.netRevenue}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Total Lifetime Value:</span>{' '}
					<span>${results.totalLifetimeValue}</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-xl font-bold'>Monthly ROI</span>{' '}
					<span className='text-xl font-bold'>${results.monthlyROI}</span>
				</div>
			</div>
		</div>
	);
};

export default CalculatorResults;
