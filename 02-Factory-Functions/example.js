
 // https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/57a4a79730dc9b03004ac267/text
 // https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/57a4b04cfda8d1030029dc95/text
 // https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/57a49bd330dc9b03004abf79/text
 // https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/57a3799bb664a60300f626e4/text
 // https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/57a379c5b664a60300f626ec/text
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

 // When a function returns an object, we call it a factory function.
// function newUser(username) {
// 	var twitterUser = {
// 		username: username,
// 		followers: [],
// 		addFollower: function(folower){
// 			twitterUser.followers.push(follower);
// 		}
// 	}

// 	return twitterUser;
// }

function newUser(username) {
	return {
		username: username,
		followers: [],
		addFollower: function(follower) {
			this.followers.push(follower)
		}
	}
}

var boki = newUser('Boki');
boki.addFollower('Miki');
console.log(boki);
