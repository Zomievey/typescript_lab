"use strict";
var dice = [];
var btnGenerate = $("#btn-generate");
var btnRoll = $("#btn-roll");
var btnSum = $("#btn-sum");
var removeAllButton = $("#removeAll");
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = $("<img></img>");
        this.roll();
        $(this.div).appendTo("#dice-container");
        dice.push(this);
        $(this.div).on("click", function () {
            _this.roll();
        });
        $(this.div).on("dblclick", function () {
            $(_this.div).remove();
            dice.splice($.inArray(_this, dice), 1);
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.getChar();
        $(this.div).attr("src", this.char);
        $(this.div).addClass("die");
    };
    Die.prototype.getChar = function () {
        if (this.value === 1) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792211/LVvXOVNLv2SguyPhKUrk3A/med.png?1436869068";
        }
        else if (this.value === 2) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792217/G0fQyv0TDKglQ-Zab-y_og/original.png?1436869098";
        }
        else if (this.value === 3) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792219/3ALTwO66cnSxZ04aHjfvAw/med.png?1436869118";
        }
        else if (this.value === 4) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792220/9ift2VCT1ZBx6VLMEZiecA/med.png?1436869134";
        }
        else if (this.value === 5) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792222/Q8Fj0G7piWiABpyn8vh3Ug/original.png?1436869150";
        }
        else {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792224/s3YtQyR72rDw6wJvMmTD-g/med.png?1436869166";
        }
    };
    return Die;
}());
$(function () {
    $(removeAllButton).on("click", function () {
        swal({
            title: "Are you sure?",
            text: "This will remove all dice from the board",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(function (willDelete) {
            if (willDelete) {
                dice = [];
                $("#dice-container").html("");
                swal("Poof! Dice Removed!", {
                    icon: "success",
                });
            }
        });
    });
    $(btnGenerate).on("click", function () {
        var die = new Die();
    });
    $(btnRoll).on("click", function () {
        for (var i = 0; i < dice.length; i++) {
            dice[i].roll();
        }
    });
    $(btnSum).on("click", function () {
        var sum = 0;
        for (var i = 0; i < dice.length; i++) {
            sum += dice[i].value;
        }
        swal("The sum of the values of all dice on the screen is " + sum + ".");
    });
});
function swal(arg0) {
    throw new Error("Function not implemented.");
}
