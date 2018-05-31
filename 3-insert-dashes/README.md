# Insert-Dashes
https://www.codewars.com/kata/55960bbb182094bc4800007b

## Partner:
Ryan Luras

## Problem:

"Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number."

## Process for Solving the Challenge:

1.  Array of numbers
1.  .toString()
1.  .split into array of single numbers
1.  Loop to test if arr[i] && arr[i + 1] are odd
1.  If odd, splice '-' in between at desired position (i + 1)