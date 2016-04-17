# a and b are lists

def union(a,b):
    return a + [x for x in b if x not in a]

def intersection(a,b):
    return [x for x in a if x in b]

def set_dif(a,b):
    return [x for x in a if x not in b]

def sym_dif(a,b):
    return set_dif(a,b) + set_dif(b,a)

def cart_pro(a,b):
    return [(x,y) for x in a for  y in b]

a = [1,2,3]
b = [4,5,6]
c = [1,3,5]
d = [2,4,6]

print union(a,b)
print union(a,c)
print intersection(d,b)
print intersection(a,c)
print intersection(c,d)
print set_dif(a,c)
print sym_dif(a,c)
print cart_pro(a,b)
