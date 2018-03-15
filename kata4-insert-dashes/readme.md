Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

I turned the number into a string and split it.

I created an incrementing for loop that tests if both the current character and the next character is odd.

If both are odd, I splice in a dash between them.

I join the array back into a string and then return the string.
