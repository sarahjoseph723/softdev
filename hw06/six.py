nums = []
for x in range(8):
    nums.append(x)
 
nums2 = [x for x in range(8)]

squares = []
for x in range(8):
    squares.append(x**2)

squares2 = [x*x for x in range(8)]

squares3 = [(x, x*x, x*x*x) for x in range(8)]

uc = [x for x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
lc = [x for x in "abcdefghijklmnopqrstuvwxyz"]
nb = [x for x in "0123456789"]

def first(pw):
    ret = [1 if x in uc else 2 if x in lc else 3 if x in nb else 0 for x in pw]
    print pw
    print ret
    return 1 in ret and 2 in ret and 3 in ret

def strength(pw):
    ret = [1 if x in uc else 2 if x in lc else 3 if x in nb else 4 if x in [x for x in ".?!&#,;:-_*"] else 0 for x in pw]
    print pw
    print ret
    u= ret.count(1)
    l = ret.count(2)
    n = ret.count(3)
    o = ret.count(4)
    s = 0
    if u > 0 and l > 0:
        s +=1
    if n > 0:
        s +=1
    if o >0:
        s+=1
    return s

print first("hello")
print first("hello123")
print first("Hello123")

print strength("hello")
print strength("hello123")
print strength("Hello")
print strength("Hello123")
print strength("Hello123!")
