/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

*/

enum Day{
Sun,
Mon,
Tue,
Wed,
Th,
Fr,
Sat,

}
function isWeekend(day:Day):boolean{
return day===Day.Sun||day===Day.Sat
}