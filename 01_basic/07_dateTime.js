let myDate=new Date();
console.log(myDate); //2025-05-26T12:23:02.971Z

console.log(myDate.toString());  //Mon May 26 2025 12:24:34 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon May 26 2025
console.log(myDate.toLocaleString()); //5/26/2025, 12:24:34 PM
console.log(myDate.toJSON());//2025-05-26T12:25:50.617Z
console.log(typeof myDate);  //object

let myCreateDate3=new Date(2003,0,14);
//console.log(myCreateDate3.toDateString());  //Tue Jan 14 2003


let myCreateDate=new Date(2003,0,14,5,8);
console.log(myCreateDate.toLocaleString());  //1/14/2003, 5:08:00 AM

let myCreateDate1=new Date("2026-01-15");
console.log(myCreateDate1.toLocaleString());//1/15/2026, 12:00:00 AM

let myTimeStemp=Date.now();
console.log(myTimeStemp);//1748262982670 in ms  (1 jan 1997 to up to)time
console.log(myCreateDate3.getTime()); //1042502400000
console.log(Math.floor(Date.now()/1000));  //to get in sec --- 1748263298

