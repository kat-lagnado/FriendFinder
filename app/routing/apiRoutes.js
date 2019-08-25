
var friends = require("../data/friends.js");
var path = require("path");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };


        var newUserInput = req.body;
        var newScores = newUserInput.scores;
        console.log(newScores);

        // var matchName = req.body;
        // var matchPhoto = userData.photo;

        var totalDiff = 0;

        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            totalDiff = 0;

            for (var j = 0; j < 10; j++) {
                totalDiff += Math.abs(parseInt(newScores[j]) - parseInt(friends[i].scores[j]));


                if (totalDiff <= bestMatch.friendDiff) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDiff = totalDiff;
                }
            }

        }
        friends.push(newUserInput);

        res.json(bestMatch)
    });
};