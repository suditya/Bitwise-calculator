function and()
{
    var array=document.getElementById("quantity").value;
    // console.log(array);
    var res = array.split(" ");
    console.log(res);
    for (var i=0; i<res.length; i++)
    {
        res[i] = parseInt(res[i], 10);
    }
    var ans=res[0];
    for(let i =1;i<res.length;i++)
    {
        // console.log(typeof( array[i]));
        // ans=(ans & (parseInt(array[i])));
        // console.log(ans);
        var x=res[i];
        if(typeof(x)!="NaN")
        {
        // console.log((x));
        ans= ans&x;
        }
    }
    document.getElementById("ans").innerText="the 'AND' of all given numbers is:"+
    ans;
}
function or()
{
    var array=document.getElementById("quantity").value;
    // console.log(array);
    var res = array.split(" ");
    console.log(res);
    for (var i=0; i<res.length; i++)
    {
        res[i] = parseInt(res[i], 10);
    }
    var ans=res[0];
    for(let i =1;i<res.length;i++)
    {
        // console.log(typeof( array[i]));
        // ans=(ans & (parseInt(array[i])));
        // console.log(ans);
        var x=res[i];
        if(typeof(x)!="NaN")
        {
        // console.log((x));
        ans= ans|x;
        }
    }
    document.getElementById("ans").innerText="the 'OR' of all given numbers is:"+
    ans;
}
function xor()
{
    var array=document.getElementById("quantity").value;
    // console.log(array);
    var res = array.split(" ");
    console.log(res);
    for (var i=0; i<res.length; i++)
    {
        res[i] = parseInt(res[i], 10);
    }
    var ans=res[0];
    for(let i =1;i<res.length;i++)
    {
        // console.log(typeof( array[i]));
        // ans=(ans & (parseInt(array[i])));
        // console.log(ans);
        var x=res[i];
        if(typeof(x)!="NaN")
        {
        // console.log((x));
        ans= ans^x;
        }
    }
    document.getElementById("ans").innerText="the XOR' of all given numbers is:"+
    ans;
}