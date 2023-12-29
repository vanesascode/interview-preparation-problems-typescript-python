# 1 - Plus Minus

def plusMinus(arr):
    positiveCount = 0
    negativeCount = 0
    zeroCount = 0
    
    for number in arr:
        if number > 0:
            positiveCount += 1
        elif number < 0:
            negativeCount += 1
        elif number == 0:
            zeroCount += 1
            
    positiveRatio = positiveCount / len(arr)
    negativeRatio = negativeCount / len(arr)
    zeroRatio = zeroCount / len(arr)

    print(format(positiveRatio, ".6f"))
    print(format(negativeRatio, ".6f"))
    print(format(zeroRatio, ".6f"))

arr = [1, -2, 0, 3, 1, 0]
plusMinus(arr)

# 0.500000
# 0.166667
# 0.333333


##############################################################################

# 2 - Mini-Max Sum

def miniMaxSum(arr):
    ordered_arr = sorted(arr)
    
    minNumber = 0
    maxNumber = 0
    
    for i in range(4):
        minNumber += ordered_arr[i]
        
    for i in range(1, 5):
        maxNumber += ordered_arr[i]
        
    result = f"{minNumber} {maxNumber}"
    print(result)

inputArray = [5, 3, 9, 1, 7]
miniMaxSum(inputArray)

##############################################################################

# 3 - Given a time in -hour AM/PM format, convert it to military (24-hour) time.

def timeConversion(s):
    amPmFormat = s[-2:]
    h12 = s[0:2]
    
    if amPmFormat == "AM":
        if h12 == "12":
            h12 = "00"
    else:
        if h12 != "12":
            h12 = str(int(h12) + 12).zfill(2)
    
    h24str = str(h12).zfill(2)
    return h24str + s[2:-2]

print(timeConversion("08:30:45PM"))
# 20:30:45

##############################################################################

# 4 - Breaking the records: 

def breakingRecords(scores):
    min_score = max_score = scores[0]
    min_breaks = max_breaks = 0
    
    for score in scores[1:]:
        if score > max_score:
            max_score = score
            max_breaks += 1
        elif score < min_score:
            min_score = score
            min_breaks += 1
    
    return [max_breaks, min_breaks]

print(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

# [2, 4]

##############################################################################

# 5 - Counting Duplicates

# Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits:

inputString = "aabBbcde"

def countDuplicates(inputString):
    charCount = {}  # Dictionary to store the count of each character
    duplicates = 0  # Variable to keep track of the number of duplicates

    # Loop through each character in the input string
    for char in inputString:
        char = char.lower()  # Convert the character to lowercase

        # Check if the character is an alphabet (a-z) or a numeric digit (0-9)
        if char.isalpha() or char.isdigit():
            # If the character already exists in the charCount dictionary
            if char in charCount:
                charCount[char] += 1  # Increment the count of the character
                # If the count becomes 2, it means the character is a duplicate
                if charCount[char] == 2:
                    duplicates += 1  # Increment the duplicates count
            else:
                charCount[char] = 1  # Initialize the count for the character as 1

    print(charCount)  # Not necessary, just to see what's going on: { a: 2, b: 2, c: 1, d: 1, e: 1 }

    return duplicates  # Return the total number of duplicates found

print(countDuplicates(inputString))

# 2

##############################################################################

# 6 - Staircase pattern

def staircase(n):
    for i in range(1, n + 1):
        # Print spaces
        print(" " * (n - i), end="")
        # Print "#" symbols
        print("#" * i)

# Example usage
staircase(4)

   #
  ##
 ###
####

# By default, the print function in Python adds a newline character (\n) at the end of each line. This causes the next line to be printed on a new line. However, by setting end="", we override the default behavior and specify that we want to print nothing ("") at the end of the line. This ensures that the next print statement will continue on the same line.