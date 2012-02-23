# liverail-api 

## Purpose

This is a super-basic set of bindings to git called through child-process. All this does is call out to whatever happens to be installed on your system that responds to 'git' in the path.

If you have really serious work to be doing, there are a few packages out there that provide bindings from node to libgit2, implementations of git in pure js and so on. If you just want to knock something together super fast, this might be what you want. 

All this does is call git as a child process and provide some very basic helpers to make it easier to access the stdout, errors, etc.

## Installation

npm install simple-git-child 

## Demo

```javascript
var git = require('simple-git-child');

git.pull('./', function(res) {
	if ( res.error ) {
		console.error("Oh noes! "+res.error);
	} else {
		console.log("Yay! "+res.stdout);
	}
});
```

## API

### git.pull(path, callback) 
Calls git pull

### git.push(path, callback) 
Calls git push

### git.addAll(path, callback) 
Calls git add -A. This is a pretty blunt tool.

### git.exec(path, command, callback) 
Calls an arbitrary git command.
