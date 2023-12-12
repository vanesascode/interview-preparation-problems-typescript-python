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