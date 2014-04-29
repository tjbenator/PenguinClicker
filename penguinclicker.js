
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
         if (!penguins[k].health()) {
            penguins.splice(k, 1);
            UI.message("Death to #" + k + ". " + penguins.length + " still alive!");
            UI.setPenguins();
         }
    }
    
    UI.setDay();
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
            UI.message("You have caught your first <strong>&#62;&#60;&#62;</strong>!!!");
        }
        fish++;
    }
    
    UI.setFish();

}

function buyPenguin() {
    if (getFishCount() >= penguinCost) {
        useFish(penguinCost);
        penguins[penguins.length] = new Penguin();
        UI.setPenguins();
        if (penguinCost < 2) {
            penguinCost = 2;
        } else {
            penguinCost = Math.ceil(penguinCostMultiplier * penguinCost);
        }
        UI.setPenguinCost();
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
    $('#debug').append('<tr><th>age</th><th>distanceFromHome</th><th>fishCaught</th><th>milesTraveled</th><th>DeathDay</th></tr>');
    penguins.forEach(function (p) {
        data = '<tr><th>' + Math.ceil((p.age / 365) * 100) / 100 + ' years old</th><th>' + p.distanceFromHome + ' Miles</th><th>' + p.fishCaught + '</th><th>' + p.milesTraveled + ' Miles</th><th>' + Math.ceil((p.deathDay / 365) * 100) / 100 + ' years old</th></tr>';
        $('#debug').append(data);
    });

}

UI.setPenguinCost(penguinCost);
UI.setPenguins();
UI.setFish();
UI.setDay();
UI.message("Welcome! Catch some <strong>&#62;&#60;&#62;</strong> <strong>&#62;&#60;&#62;</strong> to begin");
setInterval(function() {
    catchFish(false);
    incrementDay();
    //debug();
},1000);
