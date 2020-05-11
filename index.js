class ROI {
    get(props) {
        const influencerEngagment = props.engagement;
        const influencerFollowers = props.followers;
        const conversionRate = props.conversion;
        const averageOrderValue = props.aov;
        const averageProductCost = props.cost;
        const proposedPayment = props.payment;
    
        let activeFollowers = ((influencerFollowers * influencerEngagment) / 100).toFixed(2);
        let potentialSales = ((activeFollowers * conversionRate) / 100).toFixed(2);
        let potentialRevenue = (potentialSales * averageOrderValue).toFixed(2);
        let predictedProductCost = (averageProductCost * potentialSales).toFixed(2);
        let predictedSales = potentialRevenue - predictedProductCost;
    
        return predictedSales - proposedPayment;
    }
}

module.exports = ROI; 