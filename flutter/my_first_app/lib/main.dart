import 'package:flutter/material.dart';
import './loyout.dart';
import './productbox.dart';
import './gestures.dart';
import './pruduct_page.dart';
import './hrrp.dart'; 



void main(){
 runApp(MyApi()); 
}

class MyApp extends StatefulWidget {
   MyApp({super.key});

  @override 
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String buttonText = "click me ";  

  @override
  Widget build(BuildContext context) {
    return const  MaterialApp(
      debugShowCheckedModeBanner: false, 
      home: ProductList()
    );
  }
}
 
 class ProductList extends StatefulWidget {
   const ProductList({super.key});

  @override
  State<ProductList> createState() => _ProductListState();
}

class _ProductListState extends State<ProductList> {
   int activeIndex = 0;
   @override

   Widget build(BuildContext context) {

    // ssample data 
    final products = [
      {
        "name": "Laptop",
        "description": "A high-end laptop",
        "price": "1200",
        "image": "mac.jpeg"
      },
      {
        "name": "Smartphone",
        "description": "Latest smartphone",
        "price": "800",
        "image": "iphone.jpeg"
      },
    ];

     return Scaffold(
        appBar: AppBar(
          title:  const Center(
            child:  Text("my App")
        
            ),
            backgroundColor: Colors.blueAccent,
          
          ),
          body:  ListView.builder(
            itemCount: products.length,
            itemBuilder: (context, index) {
              final product = products[index];
              return GestureDetector(
                onTap: (){
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) =>ProductPage(
                    name: product['name']!,
                     description: product['description']!,
                      price: product['price']!,
                       image: product['image']!))
                    );
                    
                },
                child: ProductBox(
                 name: product['name']!,
                     description: product['description']!,
                      price: product['price']!,
                       image: product['image']!),
              );

              
            }
          ),
          bottomNavigationBar: BottomNavigationBar(
            // type: BottomNavigationBarType.fixed,
            items: const [
              
            BottomNavigationBarItem(icon: Icon(Icons.home,), label: 'Home',
          
            ),
            // BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
            BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Favorite'),
            BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

          ],
          backgroundColor: Colors.blue,
          currentIndex: activeIndex, 
          onTap: (int index) => {
            setState(() {
            activeIndex = index;  
            })
          },
          ),
               
                
                
        
          );
          
          
      ;
   }
}