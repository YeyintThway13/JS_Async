// Promises
// resolve and reject

const signup = (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name === "Jame") {
          reject(`You can't create account as Jame`);
        }
  
        resolve(`Sign up success for user ${name}`);
      }, 2000);
    });
  };
  
  const getTweets = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["Tweet1", "Tweet2"]);
      }, 3000);
    });
  };
  
  const shareTweet = () => {};
  
  const main = async (name) => {
    try {
      console.log("before");
      const result = await signup(name);
      console.log(result);
  
  
      const tweets = await getTweets();
      console.log(tweets);
    } catch (error) {
      console.log(error);
    }
  };
  
  main("Dora");
  
  console.log("Down there");
  
  
  
  //   signup(name)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  