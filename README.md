# Hackschool Learn Session 3: Node.js

**Location**: Covel 227

**Time:** 6:15 - 8:15

**Teachers:**

- Kevin Tan
- Shannon Phu

## Resources

**Slides:**

- [Session 3 - Node.js](https://docs.google.com/a/g.ucla.edu/presentation/d/1FSnDzv5pqx_z3kASIP1T6GiKT-IQxnfAYim4jhZUer4/edit?usp=sharing)

**Cheat Sheets:**

* [Bootstrap/Javascript Review](https://github.com/acm-hackschool-f17/Resources/blob/master/Learn-Session-2-README.md)
* [Node.js Setup and Review](https://github.com/acm-hackschool-f17/Resources/blob/master/nodejs-README.md)

**Course Overview Table of Contents**:

- [Course Schedule](https://github.com/acm-hackschool-f17/Resources/blob/master/README.md#basic-curriculum)

**Mentor Voting Form**:

- [Vote here before the end of this session!]\(TBD)

**Attendance Code:** TBD

## What we'll be learning today

- Intro to Command Line
  - Navigating through the directory hierarchy
  - Creating directories
- Back-End Web Development
  - What is back-end vs. front-end?
  - What is a client-server relationship?
  - What is a route/endpoint?
- Node.js
  - Using NPM
  - Creating a server
  - Callbacks and endpoints

## What we'll be building today: An e-Library

### Step 1: Download starter code

Option 1 - Via Download

- Click on the green button at the top right corner of this page
- Click "Download ZIP"
- Open the starter folder in your preferred editor

Option 2 - Via Git

- Run the following in your terminal:

```
$ git clone https://github.com/acm-hackschool-f17/session-3-learn.git
$ cd session-2-learn/starter
```

### Step 2: Familiarize yourself with the starter code

#### In `server.js`:

This is the file that will eventually become the code for our server. Things marked with `TODO` are what you will be filling in. 

The file empty except for a pre-written helper function `initbooks()`. It returns an **array** (as denoted by the square \[] brackets) of information on books. 

##### Extra Reading: JSON

This data is represented using **JSON**, which stands for **J**ava**S**cript **O**bject **N**otation. Each individual object (in this case, a book) is represented as a block surrounded by curly \{} braces.

When exchanging data between a browser and a server, the data can only be text. JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

Inside the curly braces are a **key-value** format that associates a **key** with a certain **value**.

For example:

```
myObj = { 
	"name":"John", 
	"age":31, 
	"city":"New York" 
};
```

**Keys**

- **must** be strings
- **must** be written with double quotes ("")

**Values**

- **must** be one of the following data types:
  - a string
  - a number
  - an object (JSON object)
  - an array
  - a boolean
  - null