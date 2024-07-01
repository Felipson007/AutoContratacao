from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Configuração do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'

# Inicialização do banco de dados e do Marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Modelo de Postagem
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    summary = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String(200))

    def __init__(self, title, summary, content, category, image_url=None):
        self.title = title
        self.summary = summary
        self.content = content
        self.category = category
        self.image_url = image_url

# Schema de Postagem
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field

class PostSchema(SQLAlchemySchema):
    class Meta:
        model = Post
        load_instance = True

    id = auto_field()
    title = auto_field()
    summary = auto_field()
    content = auto_field()
    category = auto_field()
    image_url = auto_field()

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

# Rota para listar todas as postagens
@app.route('/api/posts', methods=['GET'])
def get_posts():
    all_posts = Post.query.all()
    return jsonify(posts_schema.dump(all_posts))

# Rota para obter uma postagem específica
@app.route('/api/posts/<int:id>', methods=['GET'])
def get_post(id):
    post = Post.query.get(id)
    return jsonify(post_schema.dump(post))

# Rota para adicionar uma nova postagem
@app.route('/api/posts', methods=['POST'])
def add_post():
    if 'image' not in request.files:
        return jsonify({"error": "No image file"}), 400

    image = request.files['image']
    title = request.form['title']
    summary = request.form['summary']
    content = request.form['content']
    category = request.form['category']
    image_filename = image.filename
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], image_filename)

    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    image.save(image_path)

    new_post = Post(title=title, summary=summary, content=content, category=category, image_url=image_filename)
    db.session.add(new_post)
    db.session.commit()

    return jsonify(post_schema.dump(new_post))

# Rota para atualizar uma postagem existente
@app.route('/api/posts/<int:id>', methods=['PUT'])
def update_post(id):
    post = Post.query.get(id)
    if not post:
        return jsonify({"error": "Post not found"}), 404

    if 'image' in request.files:
        image = request.files['image']
        image_filename = image.filename
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], image_filename)
        if not os.path.exists(app.config['UPLOAD_FOLDER']):
            os.makedirs(app.config['UPLOAD_FOLDER'])
        image.save(image_path)
        post.image_url = image_filename

    post.title = request.form['title']
    post.summary = request.form['summary']
    post.content = request.form['content']
    post.category = request.form['category']

    db.session.commit()

    return jsonify(post_schema.dump(post))

# Rota para deletar uma postagem
@app.route('/api/posts/<int:id>', methods=['DELETE'])
def delete_post(id):
    post = Post.query.get(id)
    if not post:
        return jsonify({"error": "Post not found"}), 404

    db.session.delete(post)
    db.session.commit()

    return jsonify(post_schema.dump(post))

# Rota para servir arquivos estáticos
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Exemplo de uso para criar tabelas
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
