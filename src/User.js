import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
  this.name = name;
  this.date = date;
  this.myBooks = [];
  this.friends = [];
  this.likes = [];


  this.addToFriends = function(friend){
    if(this.friends.includes(friend.name, 0)){
      this.friends = this.friends.filter((friend) => friend !== friend.name)

    }
    else {
      this.friends.push(friend.name);
      friend.friends.push()
    }

  }

}

