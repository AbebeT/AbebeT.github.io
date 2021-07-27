describe("sum", function () {

    it("adds all elements of the array", function () {
        assert.equal(sum([2, 3]), 5);
    });

});

describe("multiply", function () {

    it("multiplies all the elements of the array", function () {
        assert.equal(multiply([2, 3]), 6);
    });

});

describe("reverse", function () {

    it("reverse the given string", function () {
        assert.equal(reverse("abebe"), "ebeba");
    });

});

describe("filterLongWords", function () {

    it("filters words that have a length of i or more", function () {
        assert.equal(filterLongWords(["abebe", "be", "betty"], 3).toString(), ["abebe", "betty"].toString());
    });

})

