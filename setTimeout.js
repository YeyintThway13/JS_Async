// Async

console.log("From top of the file");

const signup = (name, cb) => {
  setTimeout(() => {
    console.log(`Sign Up Complete for ${name}`);
    cb(reTweet);
  }, 2000);
};

const getTweets = (cb) => {
  setTimeout(() => {
    console.log("Yay! you got the tweets");
    cb();
  }, 3000);
};

const reTweet = () => {
  setTimeout(() => {
    console.log("Done retweeting");
  }, 2000);
};

signup("Yeyint", getTweets);
