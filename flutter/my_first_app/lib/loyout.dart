import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  const Button({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration:const  BoxDecoration(
        border: Border(
          top: BorderSide(
            width: 1.0, color: Colors.white
          ),
          left: BorderSide(
            width: 1.0, color: Colors.white
          ),

        )
      ),
      child: const Text("continue"), 
      
    );
  }
}