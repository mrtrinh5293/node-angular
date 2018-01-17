function starString(num)
{
    str = "";
    for (var i = 0; i < num; i++)
    {
        str += "*";
    }
    return str;
}
let stars = starString(50);
console.log(stars);