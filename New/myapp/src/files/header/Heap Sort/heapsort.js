
export default function sort(arr)
{
    let n = arr.length;
    let anim = [];
    
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i,anim);

    for (var k = n - 1; k > 0; k--) {
        var temp = arr[0];
        arr[0] = arr[k];
        arr[k] = temp;
        anim.push([0,k]);
        heapify(arr, k, 0,anim);
    }
    return anim;
}

function heapify(arr, n, i,anim)
{
    let largest = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest !== i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
       anim.push([i,largest]);
        heapify(arr, n, largest,anim);
    }
}
