function addfunc(v1,v2)
{
    return v1+v2;
}
function subfunc(v1,v2)
{
    return v1-v2;
}  
function mulfunc(v1,v2)
{
    return v1*v2;
}  
function divfunc(v1,v2)
{
    return v1/v2;
}  
function squarefunc(v1)
{
    return mulfunc(v1,v1);
}  
function sqrtfunc(v1)
{
    return Math.sqrt(v1);
}
function performOperation(v1,v2,operation)
{
    switch(operation)
        {
            case "Add":
            return addfunc(v1,v2);
            case "Subtract":
            return subfunc(v1,v2);
            case "Multiply":
            return mulfunc(v1,v2);
            case "Divide":
            return divfunc(v1,v2);
            case "Square":
            return squarefunc(v1);
            case "SqRt":
            return sqrtfunc(v1);
            
        }
}