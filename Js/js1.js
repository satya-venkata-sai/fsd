
// var a = 10;
// var b = 20;
// var c = 30;
// var d = "Sai"
// d+=" N"
// alert("danger")
// document.write(a)
// document.write(" Welcome to javascript <br>")
// document.write("The a value is",a)
// document.write("<br>"+d);
// document.write(d.length+"<br>")
// console.log(c)
// var a = "ramya"
// a+= " ananya"
// a+= " & Yasaswi"
// document.write(a)
// var arr = ['sai','shannu','murthy','aditya']
// document.write(arr[1])
// document.write("<br> "+arr[2])
// document.write("<br>"+arr[1]+" "+arr[2])
// object
var obj = [{
	'name':'sai',
	'roll_no':1234,
	'college':'AEC',
	'branch':'cse'
},
{
	'name':'Shannu',
	'roll_no':1234,
	'college':'AEC',
	'branch':'cse'
}
,
{
	'name':'murthy',
	'roll_no':1234,
	'college':'AEC',
	'branch':'cse'
},
{
	'name':'Aditya',
	'roll_no':1234,
	'college':'AEC',
	'branch':'cse'
},{
	'name':'Ganesh',
	'roll_no':1234,
	'college':'AEC',
	'branch':'cse'
}
]
// document.write("<br>"+Object.values(obj[1]))
// document.write("<br>"+Object.keys(obj[1]))
// document.write("<br>"+Object.values(obj[0]))
// document.write("<br>"+Object.keys(obj[0]))
// document.write("<br>"+obj[1].name);
for(i=0;i<obj.length;i++)
{
	
	document.write("<br>"+Object.values(obj[i]))
}
for(i=0;i<obj.length;i++)
{
	
	document.write("<br>"+Object.keys(obj[i]))
}document.write("<br>")

// for(let i=0;i<obj.length;i++)
// {
	
// 	document.write("<br>"+obj[i].name)
// }
