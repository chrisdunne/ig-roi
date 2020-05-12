class ROI {
    get(props) {
        const influencerEngagment = props.engagement;
        const influencerFollowers = props.followers;
        const conversionRate = props.conversion;
        const averageOrderValue = props.aov;
        const averageProductCost = props.cost;
        const proposedPayment = props.payment;
    
        let activeFollowers = ((influencerFollowers * influencerEngagment) / 100);
        let potentialSales = ((activeFollowers * conversionRate) / 100);
        let potentialRevenue = (potentialSales * averageOrderValue);
        let predictedProductCost = (averageProductCost * potentialSales);
        let predictedSales = potentialRevenue - predictedProductCost;
    
        return (predictedSales - proposedPayment).toFixed(2);
    }
}

module.exports = ROI; 