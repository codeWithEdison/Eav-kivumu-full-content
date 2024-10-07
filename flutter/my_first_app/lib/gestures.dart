import 'package:flutter/material.dart';

void main() {
  runApp(const MyGest());
}

class MyGest extends StatelessWidget {
  const MyGest({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GEST APP',
      theme: ThemeData(primaryColor: Colors.blue),
      home: const MyHome(title: 'Home Page'),
    );
  }
}

class MyHome extends StatelessWidget {
  const MyHome({
    super.key,
    required this.title,
  });

  final String title;

  // Corrected showDialog function
  void _showDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text("Message"),
          content: const Text("Hello World"),
          actions: <Widget>[
            TextButton(
              child: const Text("Close"),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            _showDialog(context);
          },
          child: const Text('Show Dialog'),
        ),
      ),
    );
  }
}
