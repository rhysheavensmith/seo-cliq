export const calculateROI = ({
	searchVolume,
	ctr,
	conversionRate,
	averageOrderValue,
	lifetimeValue,
	closeRate,
}) => {
	// If the key input is 0, return default results.
	if (searchVolume <= 0) {
		return {
			visitors: 0,
			leads: 0,
			conversions: 0,
			averageOrderValue,
			netRevenue: 0,
			totalLifetimeValue: 0,
			monthlyROI: 0,
		};
	}

	const visitors = Math.floor(searchVolume * (ctr / 100));
	const leads = Math.floor(visitors * (conversionRate / 100));
	const conversions = Math.floor(leads * (closeRate / 100));
	const netRevenue = conversions * averageOrderValue;
	const totalLifetimeValue = conversions * lifetimeValue;
	const monthlyROI = netRevenue;

	return {
		visitors,
		leads,
		conversions,
		averageOrderValue,
		netRevenue,
		totalLifetimeValue,
		monthlyROI,
	};
};
