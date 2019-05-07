# Chat with Python, Django and React

This is the accompanying GitHub repository for the blog post [Chat with Python, Django and React](https://getstream.io/blog).

## To get started, follow these steps:

**1. Clone the Repository**

`git clone git@github.com:GetStream/python-chat-example.git`

**2. Setup Dependencies**

- `brew install python3`
- `brew install node && brew install yarn`
- `python3 -m venv chatexample`
- `source chatexample/bin/activate`
- `cd python-chat-example/chat-frontend && yarn && yarn start`

**3. Replace Stream Chat API Credentials**

- `mychat/settings.py` on line `47` and `48`
- `chat-frontend/src/Chat.js` on line `17`
