// #Gotta start somewhere - Code Tracker #1 Timmy has been programming for years but he still has the bad habbit of forgetting what he's coded, saving over code or breaking existing code. He's figured out that to fix the issue he needs some Code Tracking. Timmy has asked you his best and only friend to create some Code Tracking software to track his changes.
// ##Task Your task is to 'start somewhere' You need to add a method init to CodeTracker which will take a string it should then return an object which has the methods add which takes a string and commit which takes no arguments.
// In the add method you must return the argument entered and in the commit method you must return the argument from the add method.

const CodeTracker = {
  data: null,

  init(str) {
    return {
      add(str) {
        this.data = str;
        return str;
      },
      commit() {
        return this.data;
      }
    }
  }
};