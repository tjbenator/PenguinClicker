

$(function(){
    $('html').keydown(function(e){
       if (e.which == 119) {
            debug();
       }
    });
});

function message(msg) {
    $("<div class='message'>" + msg + "</div>").prependTo("#messages").hide().slideDown();
    if ($("#messages > div").length > 3) {
        $("#messages div:last").remove();
        $("#messages div:last").fadeOut(2000, function() {
               
        });
    }
}

/**
Displays
*/

function setDayDisplay() {
        $('#day').text(dayOfYear);
}

function setFishDisplay() {
        $('#fishCaught').text(fish);
}

function setPenguinsDisplay() {
        $('#Penguins').text(penguins.length);
}

function setPenguinCostDisplay() {
    $('#penguinCost').text(parseInt(penguinCost));
}

/**
Counts
*/

function getFishCount() {
    return fish;
}

function getPenguinsCount() {
    return penguins.length;
}

function useFish(count) {
    fish = fish - count;
}



function distanceToWater() {
    //minDistanceToWater
    //maxDistanceToWater
    //dayOfYear
    //distanceToWater = 
}

function incrementDay() {
    if (dayOfYear < 365) {
        dayOfYear++;
    } else {
        dayOfYear = 1;
    }

    for (var k in penguins) {
         penguins[k].age++;
         if (!penguins[k].health) {
            penguins.splice(k, 1);
            message("Death to #" + k + ". " + penguins.length + " still alive!");
            setPenguinsDisplay();
         }
    }
    
    setDayDisplay();
}

function catchFish(user) {
    if (!user) {
        penguins.forEach(function (penguin) { 
            if ( Math.floor((Math.random()*100)+1) <= catchChancePercentage * 100 ) {
                caught = Math.floor((Math.random()*3)+1);
                penguin.caughtFish(caught);
                fish = fish + caught;
            }
        });
    } else {
        if (fish == 1) {
            message("You have caught your first <strong>&#62;&#60;&#62;</strong>!!!");
        }
        fish++;
    }
    
    setFishDisplay();

}

function buyPenguin() {
    if (getFishCount() >= penguinCost) {
        useFish(penguinCost);
        penguins[penguins.length] = new Penguin();
        setPenguinsDisplay();
        if (penguinCost < 2) {
            penguinCost = 2;
        } else {
            penguinCost = Math.ceil(penguinCostMultiplier * penguinCost);
        }
        setPenguinCostDisplay();
    }
}

$('#catchFish').click(function() {
    catchFish(true);
});

$('#buyPenguin').click(function() {    
    buyPenguin();
});


function debug() {
    $('#debug').empty();
    $('#debug').append('<tr><th>age</th><th>distanceFromHome</th><th>fishCaught</th><th>milesTraveled</th></tr>');
    penguins.forEach(function (p) {
        data = '<tr><th>' + p.age + '</th><th>' + p.distanceFromHome + '</th><th>' + p.fishCaught + '</th><th>' + p.milesTraveled + '</th></tr>';
        $('#debug').append(data);
    });

}

setPenguinsDisplay();
setPenguinCostDisplay(penguinCost);
setFishDisplay();
setDayDisplay();
message("Welcome! Catch some <strong>&#62;&#60;&#62;</strong> <strong>&#62;&#60;&#62;</strong> to begin");
setInterval(function() {
    catchFish(false);
    incrementDay();
},1000);
