def inc(x):
    return x + 1

f = inc

print f(10)

def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

def repeat(word):
    def repeatpeat(num):
        ret = ""
        for x in range(num):
            ret+=word
        print ret
    return repeatpeat

r1=repeat("hello")
r2=repeat("goodbye")

r1(2)
r2(2)
repeat("cool")(3)
