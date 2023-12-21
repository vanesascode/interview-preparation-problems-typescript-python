m = 6
    
# for i in range(m):
  # print(i)
  
# 1
# 2
# 3
# 4
# 5

####################################

n = 5

array = []

for i in range(1, n+1):
  array.append(str(i))
        
result = ''.join(array)
# print(result)

# 12345


#######################################

arr = [2, 3, 6, 6, 5]

sorted_arr = sorted(arr, reverse=True)

# print(sorted_arr) # [6, 6, 5, 3, 2]

#######################################

example = set([10, 2, 8, 4, 5, 5, 5, 5]) #it has to be an array
print(example) # {2, 4, 5, 8, 10}

#######################################

scores = [2, 3, 6, 6, 5]
unique_scores = list(set(scores))
unique_scores.sort()
runner_up_score = unique_scores[-2]
print(runner_up_score)


####################################

s = "Pythonist 2"

output = []

for i in range(len(s)):
  if s[i] == s[i].upper():
    output.append(s[i].lower())
  else:
    output.append(s[i].upper())

print("".join(output)) # pYTHONIST 2

# SIMPLER: 

output = ""

for char in s:
    if char.isupper():
        output += char.lower()
    else:
        output += char.upper()

print(output)  # pYTHONIST 2
