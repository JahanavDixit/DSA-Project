let tempa=[];
let temppiv = [];
const Partition=(temp,low,high)=>{
    let pivot = temp[high];
    //temppiv.push(high);
    //setpiv(piv=>[...piv,high]);
    let a;
    let i  = low-1;

    for (let j = low; j <= high - 1; j++) 
    {
        if (temp[j] <= pivot) 
        {
          tempa.push([i,j],false); 
          temppiv.push(high);
            i++;
            if(i!==j)
            {
            a = temp[i];  
            temp[i] = temp[j];
            temp[j] = a;
            tempa[tempa.length-2][0]+=1;
            tempa[tempa.length-1] = true;
            }
            //setanim(anim=>[...anim,[i,j]]); 
        } 
        else
        {
          tempa.push([i,j],false);
          temppiv.push(high);
        }
    } 
            let b = temp[i+1];  
            temp[i+1] = temp[high];
            temp[high] = b;
            temppiv.push(high);
            tempa.push([i+1,high],true);
            //setanim(anim=>anim.push(high));
          return (i + 1)
  }
  
 export function QuickSort(temp,low,high){

  const javaScriptSortedArray = temp.slice().sort((a, b) => a - b);
  if(arraysAreEqual(javaScriptSortedArray,temp))
   { 
   return {'anim': tempa, 'piv' : temppiv};
   }
   else
   {
   if(high>low)
  {
    let pi = Partition(temp, low, high);
    QuickSort(temp, low, pi - 1); 
    QuickSort(temp, pi + 1, high);
  }
 }
}
function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
export function reset(){
  tempa = [];
  temppiv = [];
}
