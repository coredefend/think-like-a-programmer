let qsort = function(arr) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j > 0 && arr[j] < arr[j-1]; j--) {
			let temp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = temp;
    }
  }
	return arr;
}

let xi = [4, 1, 45, -100, 9, 2];
let sorted = qsort(xi);
console.log('sorted:', sorted);
