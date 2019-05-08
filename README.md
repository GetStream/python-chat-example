![Chat with Python, Django and React](https://i.imgur.com/EF8yFCQ.jpg)

# Chat with Python, Django and React

Building chat with Python can be a time consuming task. [Stream Chat](https://getstream.io/chat/) provides the necessary SDK and underlying infrastructure to allow anyone to build chat with Python.

This repository hosts the codebase for the [Python Chat Tutorial with Django and React](https://dev.to/nickparsons/tutorial-chat-with-python-django-and-react-1cpk).

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
