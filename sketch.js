function setup() {
  createCanvas(1, 1);
}

function draw() {
  background(220);
}

function freq2Len(fMhz){
// this function handles the button to calculate dipole length
    unitFeet=' feet'
    unitInch=' inches'
    unitMeter=' meters'
    unitcm='  centimeters'
  
    f=parseFloat(fMhz)
    feetInch=234/fMhz
    
    Feet=Math.trunc(feetInch)
    Inch=((feetInch-Feet)*12).toFixed(2)
    
    metersCm=feetInch*0.3048
    
    Meters=Math.trunc(metersCm)
    cm=((metersCm-Meters)*100).toFixed(2)
    
    // b1p.innerHTML=(234/(In1.value)).toString()
   // b1p.innerHTML=String(234/(In1.value))
    topLine.innerHTML='For frequency of '+In1.value+' Mhz'
    L1.innerHTML=' Each Side ='+String(Feet)+'    '+' feet'+'   and '+Inch+' inches'
    L2.innerHTML=' Each Side ='+String(Meters)+'    '+" meters "+'   and '+cm+' cm'
    //L3.innerHTMLfeetInch+' feet'
  
}// end of freq2Len()

function swr2RLoss(mySWR){
  
  swr=parseFloat(mySWR)
  swrm1=swr-1
  swrp1=swr+1
  
  //alert('swrm1= '+swrm1+'  swrp1= '+swrp1)
  RL=-20*Math.log10(swrm1/swrp1)
  
  
                    
  RL=RL.toFixed(2)

  L3.innerHTML=' The RL for VSWR of '+mySWR+'    is  :'
  L4.innerHTML=' RL = '+RL
  
   
  
}//end of function swr2RLoss()

function myDate(){
 
deco=''
document.getElementById("current_date").innerHTML =deco + Date()+deco;

  
}
