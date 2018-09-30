module.exports = function check(str, bracketsConfig) {
   const result = [];
   let isStrBroken = false;
   let array = str.split("");

   array.forEach(function(item, index){
   	if(index === 0) {
   		result.push(item);
   		return;
   	};

   	let isBracketOpen = checkIsBracketOpen(item);
   	let isBracketClose = checkIsBracketClose (item);

   	 if (isBracketOpen && !isBracketClose) {
   	 	result.push(item);
   	 } else {
   	 	if(isBracketOpen && isBracketClose) {
   	 		if ( result.length === 0 ) {
   	 			result.push(item);
   	 		} else {
	   	 		let isBracketsComplianed = checkBracketsCompliance (result[result.length-1], item);
	   	 		if(isBracketsComplianed) {
	   	 			result.pop();
	   	 		} else {
	   	 			isStrBroken = true;
	   	 		}
	   	 	}
   	 	} else {
	   	 	if ( isBracketClose ) {
	   	 		if ( result.length === 0 ) {
	   	 			isStrBroken = true;
	   	 		}
	   	 		let isBracketsComplianed = checkBracketsCompliance (result[result.length-1], item);

	   	 		if ( isBracketsComplianed ) {
	   	 			result.pop();
	   	 		}

	   	 	}
	   	}
   	 } 
   });

function checkIsBracketOpen(bracket){
	return bracketsConfig.some(function(bracketConfig){
		return bracket === bracketConfig[0];
	})
}

function checkIsBracketClose(bracket){
	return bracketsConfig.some(function(bracketConfig){
		return bracket === bracketConfig[1];
		})
    }

function checkBracketsCompliance(bracket1,bracket2){
	return bracketsConfig.some(function(bracketConfig){
		return bracket1 === bracketConfig[0] && bracket2 === bracketConfig[1];
		})
	
}
	return  result.length === 0 && !isStrBroken;
}
