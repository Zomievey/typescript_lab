let dice: this[] | { value: number; }[] = [];
let btnGenerate = $("#btn-generate");
let btnRoll = $("#btn-roll");
let btnSum = $("#btn-sum");
let removeAllButton = $("#removeAll")

class Die {
    div: any;
    value: number | undefined;
    char: string | undefined;
    constructor() {
        this.div = $("<img></img>");
        this.roll();
        $(this.div).appendTo("#dice-container");
        dice.push(this);
        $(this.div).on("click",() => {
            this.roll();
        });
        $(this.div).on("dblclick",() => {
            $(this.div).remove();
            dice.splice($.inArray(this, dice),1);
        });
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.getChar();
        $(this.div).attr("src", this.char);
        $(this.div).addClass("die");
    }

    getChar() {
        if (this.value === 1) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792211/LVvXOVNLv2SguyPhKUrk3A/med.png?1436869068";
        } else if (this.value === 2) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792217/G0fQyv0TDKglQ-Zab-y_og/original.png?1436869098";
        } else if (this.value === 3) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792219/3ALTwO66cnSxZ04aHjfvAw/med.png?1436869118";
        } else if (this.value === 4) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792220/9ift2VCT1ZBx6VLMEZiecA/med.png?1436869134";
        } else if (this.value === 5) {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792222/Q8Fj0G7piWiABpyn8vh3Ug/original.png?1436869150";
        } else {
            this.char = "https://s3.amazonaws.com/files.d20.io/images/10792224/s3YtQyR72rDw6wJvMmTD-g/med.png?1436869166";
        }
    }
}

$(()=>{
    $(removeAllButton).on("click", ()=>{
        swal({
            title: "Are you sure?",
            text: "This will remove all dice from the board",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete: any) => {
            if (willDelete) {
                dice = [];
                $("#dice-container").html("");
                swal("Poof! Dice Removed!", {
                    icon: "success",
                });
            }
          });
    })
    
    $(btnGenerate).on("click",() => {
        let die = new Die();
    });
    
    $(btnRoll).on("click", () => {
        for (let i = 0; i < dice.length; i++) {
            dice[i].roll();
        }
    });
    
    $(btnSum).on("click",() => {
        let sum = 0;
        for (let i = 0; i < dice.length; i++) {
            sum += dice[i].value;
        }
        swal(`The sum of the values of all dice on the screen is ${sum}.`)
    });
})

function swal(arg0: { title: string; text: string; icon: string; buttons: boolean; dangerMode: boolean; }) {
    throw new Error("Function not implemented.");
}
