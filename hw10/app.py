from flask import Flask, render_template, redirect, request
import time
import utils

app = Flask(__name__)
#Wrapper for function names and args
def names( f ):
    def inner(*arg):
        print f.func_name + ": " + str(arg)
        return f(*arg)
    return inner

#Wrapper for function execution time
def exectime( f ):
    def inner(*arg):
        start = time.time()
        f(*arg)
        end = time.time()
        print "Time: " +str(end-start)
        return f(*arg)
    return inner

@app.route("/",methods = ["GET","POST"])
@exectime
@names
def home():
    if request.method == "GET":
        return render_template("home.html")
    else:
        return redirect('/{}'.format(request.form.get('location').replace(" ","_")))

#decorator doesn't work here
@app.route("/<location>",methods = ["GET","POST"])
#@exectime
#@names
def page(location):
    info = utils.getWiki(location)
    if info:
        info = info.decode("utf-8")
    coord = utils.coordinates(location)
    return render_template("page.html", location = location, info = info, coord = coord)
    
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Idk"
    app.run(host = "0.0.0.0", port = 8000)
