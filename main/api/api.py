# flask files
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app, origins="http://localhost:3000", allow_headers=['Access-Control-Allow-Credentials', 'Authorization', 'Content-type'])
parser = reqparse.RequestParser()
# adding arguments

class Test(Resource):
    def get(self):
        return {'status': 200}

api.add_resource(Test, '/Test')
if __name__ == '__main__':
    app.run(debug=True)