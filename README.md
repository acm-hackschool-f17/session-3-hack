# Hackschool Hack Session 3: Node.js

**Location**: Covel 227

**Time:** 6:15 - 8:15

**Teachers:**

- Kevin Tan
- Shannon Phu

## Resources

**Slides:**

- [Session 3 - Node.js](https://docs.google.com/presentation/d/1gZQVm8quus5uuoqkaZKu8ktjhSpQC_Evp2l9YnzwYRw/edit)

**Cheat Sheets:**

* [Bootstrap/Javascript Review](https://github.com/acm-hackschool-f17/Resources/blob/master/Learn-Session-2-README.md)
* [Node.js and Handlebars.js Setup and Review](https://github.com/acm-hackschool-f17/Resources/blob/master/nodejs-handlebars-README.md)

**Course Overview Table of Contents**:

- [Course Schedule](https://github.com/acm-hackschool-f17/Resources/blob/master/README.md#basic-curriculum)

**Mentor Voting Form**:

- [Mentor Voting Form]\(TBD)

**Attendance Code:** #FullStack

## What we'll be learning today

- Back-End Web Development
  - What is back-end vs. front-end?
  - What is a client-server relationship?
  - What is a route/endpoint?
- Node.js
  - Using NPM
  - Creating a server
  - Callbacks and endpoints

## What we'll be building today: An e-Library

### Step 1: Download the Starter Code

Option 1 - Via Download

- Click on the green button at the top right corner of this page
- Click "Download ZIP"
- Open the starter folder in your preferred editor

Option 2 - Via Git

- Run the following in your terminal:

```
$ git clone https://github.com/acm-hackschool-f17/session-3-learn.git
$ cd session-3-learn/elibrary-starter
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

---

You'll notice that all of the front-end has already been made for you!

#### In `views/library.hbs`:

This file has been created using [Handlebars.js](https://www.npmjs.com/package/handlebars). Handlebars is a logic-less templating engine that **dynamically** generates your HTML page.

Nowadays the majority of the Web consists of dynamic applications in which the data keep changing frequently (e.g. stock prices that fluctuate often).

As a result, there is a continuous need to update the data rendered on the browser. 

This is where JavaScript templating engines come to the rescue and become so useful: 

- They simplify the process of manually updating the **view** (what the user sees) 
- They improve the structure of the application by allowing developers to separate the business logic from the rest of the code.

To learn more about Handlebars click [here](https://www.sitepoint.com/a-beginners-guide-to-handlebars/).

#### In `public`: 

Here you'll find all CSS files used to style the page, including external fonts and image resources.
