// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a - b);
    return args[0];
  }
}