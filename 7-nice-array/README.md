# Alternating-Capitalization
https://www.codewars.com/kata/nice-array/train/javascript

## Partner:
Ryan/Antreo

## Problem:

"A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements."

## Process for Solving the Challenge:

1.  Get result of n+1 and n-1 relative to individual array items (numbers)
2.  Test whether or not the array includes at least one of those
3.  If not found, isNice returns false, otherwise return true