//Donut Shop constructor
var DonutShop = function(shopName, minCustPH, maxCustPH, avgDonutsPerCust) {
  this.shopName = shopName;
  this.minCustPH = minCustPH;
  this.maxCustPH = maxCustPH;
  this.avgDonutsPerCust = avgDonutsPerCust;
  this.donutsPerDay = 0;
  this.donutsPerHour = [];
};
//this calculates donuts per hour / per day(11 hours per day)
DonutShop.prototype.CalculateDonuts = function(){
  console.log("Donutsperhour");
  for (var i = 0; i < 12; i++){
    var x = Math.floor( (Math.random() * (this.maxCustPH - this.minCustPH) + this.minCustPH) * this.avgDonutsPerCust);
    this.donutsPerHour.push(x);
    }
  console.log(this.donutsPerHour)
  return this.donutsPerHour
 }

DonutShop.prototype.render = function() {
  var perDay = 0;
  var addDonutShop = document.createElement("tr");
  var main = document.getElementById('Shop-Table');
  addDonutShop.innerHTML = this.shopName;
  main.appendChild(addDonutShop);
  var perHour = this.CalculateDonuts();
  for (var i = 0; i < perHour.length; i++){
    var td = document.createElement("td");
    td.innerHTML = perHour[i];
    addDonutShop.appendChild(td);
    perDay += perHour[i];
  }console.log(perDay)
  var th = document.createElement("td");
  th.innerHTML = perDay;
  addDonutShop.appendChild(th);
}


var downtown = new DonutShop("Downtown", 8, 43, 4.5);
  downtown.render();

var capitolHill = new DonutShop("Capitol Hill", 4, 37, 2);
  capitolHill.render();

var southLakeUnion = new DonutShop("South Lake Union", 9, 23, 6.33);
  southLakeUnion.render();

var wedgewood = new DonutShop("Wedgewood", 2, 28, 1.25);
  wedgewood.render();

var ballard = new DonutShop("Ballard", 8, 58, 3.75);
  ballard.render();

