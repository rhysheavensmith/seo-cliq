export const calculateROI = ({
	searchVolume,
	ctr,
	conversionRate,
	averageOrderValue,
	lifetimeValue,
	closeRate, // optional: only for service-based
}) => {
	// Calculate visitors from search volume and CTR
	const visitors = Math.floor(searchVolume * (ctr / 100));

	if (typeof closeRate !== 'undefined') {
		// Service-Based SEO: conversionRate converts visitors to leads, then closeRate converts leads to customers
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
	} else {
		// E-Commerce SEO: conversionRate directly converts visitors to customers
		const conversions = Math.floor(visitors * (conversionRate / 100));
		const netRevenue = conversions * averageOrderValue;
		const totalLifetimeValue = conversions * lifetimeValue;
		const monthlyROI = netRevenue;
		return {
			visitors,
			conversions,
			averageOrderValue,
			netRevenue,
			totalLifetimeValue,
			monthlyROI,
		};
	}
};
