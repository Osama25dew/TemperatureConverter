function calTemp(){
    let tempNum=document.getElementById("tempNum").value
    let tempSelect=document.getElementById("tempSelect")
    let result=document.getElementById("result")
    let tempSelectValue=tempSelect.options[tempSelect.selectedIndex].value
    const celTofah=(tempInCel)=>{
        let ansInFah=Math.round((tempInCel*9/5)+32)
        return ansInFah;
    }
    const fahTocel=(tempInFah)=>{
        let ansInCel=Math.round((tempInFah-32)*5/9)
        return ansInCel;
    }
    let rslt;
    if(tempSelectValue=='cel')
    {
        rslt=celTofah(tempNum)
        console.log(tempNum)
        result.innerHTML=`${rslt}°F`;
    }
    else
    {
        rslt=fahTocel(tempNum)
        result.innerHTML=`${rslt}°C`
    }
}