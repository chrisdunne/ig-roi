const ROI = require("../index");
const assert = require("assert").strict;

describe('check response is accurate', () => {
    it('should return 3.5', () => {
        let roi = new ROI();

        let result = roi.get({
            "engagement" : 1.5,
            "followers" : 1000,
            "conversion" : 3,
            "aov" : 80,
            "cost" : 50,
            "payment" : 10
        });

        assert.equal(result, (3.5).toFixed(2));
    });
});