1. \w = [a-zA-Z0-9] it includes all the alphabets and all the numbers and underscore (everything between a to z and 0to 9 will be included)

\W =[^a-zA-Z0-9] it is for not a word so only characters.

\w (metacode)=[0-9a-z]

2. metacode 9AM =>

9[Aa][Mm]

metacode 4pm and 9 am etc
[0-12][AaPp][Mm]

3. negation[^5-9] etc

4. \w{1,3} a ab abc (acceptable)
but abcd(not acceptable)

5. \w{1,} (it means any string from 1 character to infinite..) like a abhbjhgdfjzrgjfge fg

6. Define the string boundaries:

Input String: I have 1 apple and 2 oranges.

^=>start char
$=>end char

^a => ave apple and anges
e$ => have apple 

^a e$ => ave apple ange

7.  Provides alternative:

www\.\w{1,}\.(net|com|de|etc) (www thn a dot(\.) thn alphanumeric(\w{1,}ans thn dot(\.)and thn combination of any one))
 
8. [a-zA-Z] a b c ! web (! and web is not allowed because web is not a single character)

9. \s white spaces:

10 am
[1-12]\s[aApP][Mm]

9A.M
[1-12][aApP]\.[Mm]\.

9 a.m
[1-12]\s[aApP]\.[Mm]\.

10. \d Any digit
    \D Any non digit

11. 