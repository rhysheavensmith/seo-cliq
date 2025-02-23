import { useState } from 'react';
import EcommerceROICalculator from './EcommerceROICalculator';
import ServiceROICalculator from './ServiceROICalculator';

// Define tabs for service-based and e-commerce SEO calculators
const TABS = {
	service: {
		label: 'Service-Based SEO',
		component: ServiceROICalculator,
	},
	ecommerce: {
		label: 'E-Commerce SEO',
		component: EcommerceROICalculator,
	},
};

const CalculatorTabs = () => {
	const [activeTab, setActiveTab] = useState('service');
	const ActiveTabComponent = TABS[activeTab].component;

	return (
		<div className='w-full max-w-[95%] mx-auto bg-slate-100 shadow-md p-8'>
			<div className='relative w-[300px] mx-auto mb-6'>
				<span
					className={`
            absolute top-0 left-0 h-full w-1/2 bg-[#0a63ed] rounded-md
            transform transition-transform duration-300 ease-in-out
            ${activeTab === 'ecommerce' ? 'translate-x-full' : 'translate-x-0'}
          `}
				/>
				<div className='relative z-10 flex text-sm font-semibold text-[#001738]'>
					<button
						onClick={() => setActiveTab('service')}
						className={`
              flex-1 py-2 rounded-md text-center
              ${activeTab === 'service' ? 'text-white' : 'text-[#001738]'}
            `}
					>
						{TABS.service.label}
					</button>
					<button
						onClick={() => setActiveTab('ecommerce')}
						className={`
              flex-1 py-2 rounded-md text-center
              ${activeTab === 'ecommerce' ? 'text-white' : 'text-[#001738]'}
            `}
					>
						{TABS.ecommerce.label}
					</button>
				</div>
			</div>
			<ActiveTabComponent />
		</div>
	);
};

export default CalculatorTabs;
