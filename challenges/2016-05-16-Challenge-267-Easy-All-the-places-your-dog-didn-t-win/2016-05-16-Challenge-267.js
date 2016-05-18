function placings(myPlace) {
	var placementArray = [];
	for(var i = 0; i < 101; i++) {
		if(i % 10 == 1) {
			placementArray[i] = i + 'st';
		}
		else if(i % 10 == 2) {
			placementArray[i] = i + 'nd';
		}
		else if(i % 10 == 3 ) {
			placementArray[i] = i + 'rd';
		}
		else {
			placementArray[i] = i + 'th';
		}
	}
	var removedMyPlace = placementArray.splice(myPlace, 1);
	return placementArray;
}

placings(2);