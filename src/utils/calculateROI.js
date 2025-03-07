export const calculateROI = ({
	searchVolume,
	ctr,
	conversionRate,
	averageOrderValue,
	lifetimeValue,
	closeRate,
}) => {
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
