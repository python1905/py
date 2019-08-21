import re

from django.shortcuts import render
from App.models import Index, Paymenu, List, Detail


# Create your views here.


def index(request):
    menus = Index.objects.all()
    title = Paymenu.objects.all()

    return render(request, "../../../Xiaomi/templates/app/index.html", context={"menus": menus, 'title': title})


def list(request):
    title = Paymenu.objects.all()
    list = List.objects.all()
    return render(request, '../../../Xiaomi/templates/app/list.html', {'titles': title, 'lists': list})


def detail(request):
    detail = Index.objects.all()
    image = Detail.objects.all()
    id = request.GET.get('id')
    parameter = int(id)
    return render(request, '../../../Xiaomi/templates/app/details.html', context={'details': detail, 'parameter_id': parameter,'image':image})


def shopping_cart(request):
    return render(request, '../../../Xiaomi/templates/app/shopping_cart.html')


def settlement(request):
    return render(request, '../../../Xiaomi/templates/app/settlement.html')
