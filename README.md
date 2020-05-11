![npm](https://img.shields.io/npm/v/@cdunne/ig-roi)

# ig-roi

*Provides Return On Investment for Instagram Influencers*

Provide the following information to get a calculation:

- Engagement: the influencers engagment percentage
- Followers: the influencers follower count
- conversion: your average conversion rate percentage
- AOV: your average order value
- Cost: your average cost per product
- Payment: what you plan on spending

The calculated response will be a monetary value in the form of a floating point number.

## Install:

```
    npm install @cdunne/ig-roi
```

## Example Usage:

```
    const ROI = require("@cdunne/ig-roi");

    let returnOnInvestment = new ROI();

    let result = returnOnInvestment.get({
        "engagement" : 1.5,
        "followers" : 1000,
        "conversion" : 3,
        "aov" : 80,
        "cost" : 50,
        "payment" : 10
    });
    //=> 3.5
```