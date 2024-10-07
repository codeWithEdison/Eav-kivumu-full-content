void main(){
print("THIS IS IUR FIRST DAT CODE ");
// VARIABLE 
var name = 'edison';
var a = 10;

// we can use final and const to declare variable too
final x ;
const  y = 10;
x= 30;
print(x);

// data types 
/*
1. numbers
2. string
3. boolean
4. list and map

 */

var list = [1,2,3,4,5,6,7,8];
print(List);

dynamic map = {
  'name':'edison','age':30};

// loops
for(var i =0; i < 10; i++){
  // print even numbers 
  if(i % 2 == 0){
    print(i);
  }
}
print('welocome \n to our session');

// functions in dart 

add(10,20);

// object creation
Employees emp1 = new Employees();
emp1.name = 'Employ1';
print(emp1.name);
}

void add(int a, int b){
  int c;
  c = a + b;
  print(c);
  var resultss = fibonacci(20);
  print(resultss);
}
// 0 1 1 2 3 5 8 11
int fibonacci(int n){
if(n == 0 || n == 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

// object  oriented  programming
class Employees{
  var name;
  // getter funtions
  String get emp_name{
    return name;
  }

  // settter functin
  void  set emp_name(String name){
    this.name = name;
  }
  

}

