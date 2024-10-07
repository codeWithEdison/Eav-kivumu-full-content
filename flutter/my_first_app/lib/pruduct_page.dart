import 'package:flutter/material.dart';

class ProductPage extends StatelessWidget {
 final String name;
  final String description;
  final String price;
  final String image;

  const ProductPage({
    Key? key,
    required this.name,
    required this.description,
    required this.price,
    required this.image,
  }) : super(key: key); 

  @override
  Widget build(BuildContext context) {
    return 
    Scaffold(
      appBar: AppBar(
        title: Text(name),
      ),

      body: Padding(padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        
        children: [
          Image.asset('images/$image', height: 200,),
         const SizedBox(height: 16,),
          Text(name, style: const  TextStyle(fontSize: 24, fontWeight: FontWeight.bold),),
          const SizedBox(height: 16,),
          Text(description, style: const TextStyle(fontSize: 18),),
          const SizedBox(height: 16,),
          Text("price : $price", style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),)
        ],
      ),
      ),
      
    );
    
  }
}
