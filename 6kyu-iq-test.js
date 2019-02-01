// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  let nums = numbers.split(' ').map(n => Number(n));
  let iq = { even: { nums: [], index: null }, odd: { nums: [], index: null } };

  nums.forEach((n, i) => {
    if(n % 2 === 0) {
      iq.even.nums.push(n);
      iq.even.index = i + 1;
    }
    else {
      iq.odd.nums.push(n);
      iq.odd.index = i + 1;
    }
  });
  return iq.even.nums.length > 1 ? iq.odd.index : iq.even.index;
}