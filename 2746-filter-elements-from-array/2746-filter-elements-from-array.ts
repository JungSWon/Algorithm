type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  let result : number[] = new Array();
	for(let i =0; i<arr.length; i++) fn(arr[i],i) && result.push(arr[i]);
  return result;
};