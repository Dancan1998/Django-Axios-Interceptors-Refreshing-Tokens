from rest_framework.decorators import renderer_classes, api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
@renderer_classes((JSONRenderer,))
def home(request):
    data = {
        'name': 'Dancan Chibole'
    }
    return Response(data)
