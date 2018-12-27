// sum of range
function range(arg1, arg2, step)
{
    var arr = [];
    for (let i = arg1; i <= arg2; i += step)
    {
        arr.push(i);
    }

    return arr;
}

function sum(arr)
{
    var sum = 0;

    for (let num = 0; num < arr.length; num++)
    {
        sum += arr[num];
    }
    return sum;
}

var arr = range(1, 10, 2);
var sum = sum(arr);
console.log("\nSum of Range");
console.log(arr);
console.log(sum);

// reversing an array
function reverseArr(arr)
{
    var newArr = [];
    for (let i = arr.length - 1; i >= 0; --i)
    {
        newArr.push(arr[i]);
    }

    return newArr;
}

function reverseArrInPlace(arr)
{
    for (let cnt = 0; cnt < arr.length / 2; ++cnt)
    {
        var end = arr[arr.length -1 - cnt];
        var beg = arr[cnt];
        arr[cnt] = end;
        arr[arr.length - 1 - cnt] = beg;
    }
    return arr;
}

console.log("\nReversing an array");
console.log(reverseArrInPlace(arr));

// a list
function arrayToList(arr)
{
    var list = {};
    var tmp = list;

    for (let i = 0; i < arr.length; ++i)
    {
        let node = {
            val: arr[i],
            next: null
        };

        while (tmp.next != null)
        {
            tmp = tmp.next;
        }

        tmp.next = node;
    }

    return list;
}

function listToArr(list)
{
    var arr = [];
    list = list.next;

    while (1)
    {
        arr.push(list.val);

        if (list.next == null)
        {
            break;
        }

        list = list.next;
    }

    return arr;
}

function prepend(elem, list)
{
    var node = {
        val: elem,
        next: null
    }

    node.next = list;
    return node;
}

// function nth(list, index)
// {
//     var counter = 0;
//     while (counter != index)
//     {
//         list = list.next;
//     }
//     return list.val;
// }

var tmpArr = [0, 1, 2, 3, 4, 5];
var list = arrayToList(tmpArr);
var newArr = listToArr(list);
var elem = 9;
console.log("\nA list");
console.log(list);
console.log(newArr);
console.log(prepend(9, list));
// console.log(nth(list, 3));

// deep comparison
function deepEqual(el1, el2)
{
    if ((typeof el1) == (typeof el2))
    {
        if ((typeof el1) === 'object')
        {
            if ((el1 == null) && (el2 == null))
            {
                console.log("Both null");
                return true;
            }
            else
            {
                //compares number of properties from each object
                if (Object.keys(el1).length != Object.keys(el2).length)
                {
                    return false;
                }

                var match = true;
                for (var elem in el1)
                {
                    //makes sure that the property is from object, not from prototype
                    if (el1.hasOwnProperty(elem) && (el2[elem] != undefined))
                    {
                        if (el1[elem] != el2[elem])
                        {
                            match = false;
                        }
                    }
                }
                return match;
            }
        }
        else
        {
            return el1 === el2;
        }
    }
    else
    {
        console.log("Not the same type");
        return false;
    }
}

var obj1 = {
    val1: 1,
    val2: 2
}
var obj2 = {
    val1: 1,
    val2: 2
}
console.log(deepEqual(obj1, obj2));