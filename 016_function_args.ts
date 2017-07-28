// function printAddress(street: string, streetTwo?: string, state = 'AZ') {  //# the question mark makes it optional, third item is a default because we're setting it here.  Can't have a required value after an optional value.
// 	console.log(street);
// 	if (streetTwo) {  // # print the second street line if there is one
// 		console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Suite 540');
// printAddress('123 Any St', 'Suite 540', 'UT');

function lineupCard(team: string, ...players: string[]) { // # the ellipsis takes the remaining values and converts them into an array
	console.log('Team: ' + team);
	for (let playername of players) {
		console.log(playername);
	}
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');