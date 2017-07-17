var result;
var weight;
var height;

function calculate()
{
 var temp = convertHeightInMeters(height);
 var temp_height = temp * temp;
 var temp_weight = convertWeightInkgs(weight);
 result = temp_weight/temp_height;
 document.getElementById("val").innerHTML += result;
}

function convertWeightInkgs(weight)
{
 this.weight = weight*0.45;
 return this.weight;
}

function convertHeightInMeters(height)
{
 this.height = height*0.025;
 return this.height;
}


function start()
{
  weight = parseInt(prompt("Enter your weight in pounds"));
  height = parseInt(prompt("Enter your height in inches"));
  calculate();
};
  window.onload = start;
