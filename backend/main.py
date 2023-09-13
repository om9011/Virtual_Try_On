from flask import Flask, request, render_template

app = Flask(__name__)
app.debug = True


@app.route("/", methods=["GET"])
def hello_world():
    return render_template("D:\\.STUDY\\TY\\EDI\\EDI\\frontend\\public\\index.html")


if __name__ == "__main__":
    app.run()
