s = open("2.txt").read()
min_len = 1
result = ""
for i in s:
    if s.count(i) <= min_len:
        result += i
        min_len = s.count(i)

print result
