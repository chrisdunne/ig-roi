const roi = require("../index.js");

describe('check response is accurate', () => {
    it('should return 3.5', () => {
        roi.getROI({
            "engagement" : 1.5,
            "followers" : 1000,
            "conversion" : 3,
            "aov" : 80,
            "cost" : 50,
            "payment" : 10
        }, 3.5);
    });
});