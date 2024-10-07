import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(MyApi());
}

class MyApi extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HTTP Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<dynamic> _posts = [];

  @override
  void initState() {
    super.initState();
    fetchPosts();
  }

  // Function to fetch posts from the API (GET request)
  Future<void> fetchPosts() async {
    final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));

    if (response.statusCode == 200) {
      setState(() {
        _posts = jsonDecode(response.body);
      });
    } else {
      throw Exception('Failed to load posts');
    }
  }

  // Function to create a new post (POST request)
  Future<void> createPost() async {
    final response = await http.post(
      Uri.parse('https://jsonplaceholder.typicode.com/posts'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'title': 'New Post',
        'body': 'This is the body of the new post.',
        'userId': '1',
      }),
    );

    if (response.statusCode == 201) {
      // Successfully created a new post
      fetchPosts(); // Refresh the list
    } else {
      throw Exception('Failed to create post');
    }
  }

  // Function to update an existing post (PUT request)
  Future<void> updatePost(int postId) async {
    final response = await http.put(
      Uri.parse('https://jsonplaceholder.typicode.com/posts/$postId'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'id': '$postId',
        'title': 'Updated Post',
        'body': 'This post has been updated.',
        'userId': '1',
      }),
    );

    if (response.statusCode == 200) {
      // Successfully updated the post
      fetchPosts(); // Refresh the list
    } else {
      throw Exception('Failed to update post');
    }
  }

  // Function to partially update a post (PATCH request)
  Future<void> patchPost(int postId) async {
    final response = await http.patch(
      Uri.parse('https://jsonplaceholder.typicode.com/posts/$postId'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'title': 'Partially Updated Post',
      }),
    );

    if (response.statusCode == 200) {
      // Successfully patched the post
      fetchPosts(); // Refresh the list
    } else {
      throw Exception('Failed to patch post');
    }
  }

  // Function to delete a post (DELETE request)
  Future<void> deletePost(int postId) async {
    final response = await http.delete(Uri.parse('https://jsonplaceholder.typicode.com/posts/$postId'));

    if (response.statusCode == 200) {
      // Successfully deleted the post
      fetchPosts(); // Refresh the list
    } else {
      throw Exception('Failed to delete post');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('HTTP Example with JSONPlaceholder'),
      ),
      body: ListView.builder(
        itemCount: _posts.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(_posts[index]['title']),
            subtitle: Text(_posts[index]['body']),
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                IconButton(
                  icon: Icon(Icons.edit),
                  onPressed: () => updatePost(_posts[index]['id']),
                ),
                IconButton(
                  icon: Icon(Icons.delete),
                  onPressed: () => deletePost(_posts[index]['id']),
                ),
              ],
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: createPost,
        tooltip: 'Add Post',
        child: Icon(Icons.add),
      ),
    );
  }
}
