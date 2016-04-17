def names( f ):
    def inner(*arg):
        print f.func_name + ": " + str(arg)
        return f(*arg)
    return inner

def exectime( f ):
    def inner(*arg):
        start = time.time()
        f(*arg)
        end = time.time()
        print "Time: " +str(end-start)
        return f(*arg)
    return inner

