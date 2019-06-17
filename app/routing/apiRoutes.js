var friends = require("../data/friends.js");

//routes
module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
        var differences = [];

        if (friends.forEach(function () {
            var totalDiff = 0;

            for (var i = 0; i < newUser.answer.length; i++) {
                var answer1 = user.answer[i];
                var answer2 = newUser.answers[i];
                var differences = +answer1 - +answer2;
                totalDiff += Math.abs(differences);
            }

            differences.push(totalDiff);
        };

        var minDiff = Math.min.apply(null, differences);

        var match = [];
        for (var i = 0; i < differences.length; i++) {
            if (differences[i] === minDiff) {
                match.push(friends[i]);
            }
        }
        res.json(match)

        friends.push(newUser)
    })
};
