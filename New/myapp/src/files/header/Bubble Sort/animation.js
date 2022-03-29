function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
export default function bubbleSort(arr,anim,n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
        anim.push([j,j+1]);
        anim.push(false);  
        }
    }
    anim[anim.length-1] = true;
}
}