from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Configure your OpenAI API key here
openai.api_key = "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"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/lesson')
def lesson():
    return render_template('lesson.html')

@app.route('/homework')
def homework():
    return render_template('homework.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json['question']
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a friendly Python tutor for children."},
            {"role": "user", "content": user_input}
        ]
    )
    return jsonify(response['choices'][0]['message']['content'])

@app.route('/configure', methods=['POST'])
def configure():
    global openai
    openai.api_key = request.json['api_key']
    return jsonify({"status": "success", "message": "API key updated successfully."})

if __name__ == '__main__':
    app.run(debug=True)