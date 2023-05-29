var arr=[56,87,90,54,13,15,11,66,85,77];
var sum=0,average;
for(let i=0;i<arr.length;i++)
{
	sum=sum+arr[i];
	average=sum/arr.length;
}
document.write("Average of numbers in array is"+" "+average);