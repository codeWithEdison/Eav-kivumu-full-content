import 'package:flutter/material.dart';
import './rating_box.dart';

class ProductBox extends StatelessWidget {
   const  ProductBox(
    {
      Key? key,
      required this.name,
       required this.description,
        required this.price,
        required  this.image
          }
          ):super(key: key);

  final  String name;
  final  String description;
  final  String price;
  final  String image;


  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const  EdgeInsets.all(2),
      height: 120,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Image.asset('images/$image'),
          Expanded(child: Container(
            padding: const  EdgeInsets.all(5),
            child: Column(
              children: [
                Text(name, style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                Text(description),
                Text('price : $price'),
                RatingBox()
              ],
            ),
          ),)
        ],
      ),
    );
  }
}