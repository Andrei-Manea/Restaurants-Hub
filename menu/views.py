from django.shortcuts import render


def menu_retro(request):
    return render(request, 'retro_menu.html')
