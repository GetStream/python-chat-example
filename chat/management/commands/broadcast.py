from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
from stream_chat import StreamChat


class Command(BaseCommand):
    help = 'Broadcast the message on your channel'

    def add_arguments(self, parser):
        parser.add_argument('--message')

    def handle(self, *args, **options):
        client = StreamChat(api_key=settings.STREAM_API_KEY, api_secret=settings.STREAM_API_SECRET)
        client.update_user({"id": "system", "name": "The Server"})
        channel = client.channel("messaging", "kung-fu")
        channel.create("system")
        response = channel.send_message({"text": "AMA about kung-fu"}, 'system')
        self.stdout.write(self.style.SUCCESS('Successfully posted a message with id "%s"' % response['message']['id']))