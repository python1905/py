import hashlib

from django.contrib.auth import logout
from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.utils.crypto import random

from App.verification_code import send_sms

# 登录页面
from django.urls import reverse

from App.forms import UserForm, PW
from App.models import User
from xiaomi.settings import maxage


def login(request):
    return render(request, 'app/login.html')

# 验证用户登录
def verify_login(request):
    user = request.POST.get('user')
    password = request.POST.get('password')
    password1 = hashlib.sha1(password.encode()).hexdigest()
    print(password1)
    # 查询出数据库是否有这个用户名  返回的就是一个的字典
    user1 = User.objects.values('password').filter(Q(cellphone=user)|Q(xiaomiid=user)).first()
    # print(user1, type(user1))
    # print(user1['password'])

    if user1:
        if user1['password'] == password1:
            return HttpResponse('成功')

    return render(request, 'app/login.html', {'error': '·  密码或用户名错误'})


# 退出登录
# def loginout(request):
#     logout()
#     return render(request, 'app/index')




# 用户注册
def user_enroll(request):
    if request.method == 'POST':
        print("post")
        # 获取提交的表单类
        form = UserForm(request.POST)
        if form.is_valid():
            print("a")
            # 获取电话号码
            p = request.POST.get('phone')
            # 随机生成验证码
            a = str()
            for i in range(5):
                num = str(random.randint(0, 9))
                a = a + num

            # 向用户发送验证码
            # send_sms(p, {'number': a})
            # 将验证码写入session
            request.session['yzm'] = a
            request.session['phone'] = p
            f = request.session.get('yzm')
            print(f)
            # 设置过期时间
            request.session.set_expiry(maxage)

            b = 1
            return render(request, 'app/enroll.html', {'a': b, 'phone': p})

        return render(request, 'app/enroll.html', {'form': form})
    return render(request, 'app/enroll.html')


# 判断验证码
def is_sms(request):
    phone = request.session.get('phone')
    # 获取提交的验证码
    sms = request.POST.get('ticket')
    # print(sms, type(sms))
    yzm = request.session.get('yzm')
    if sms == yzm:
        c=2
        return render(request, 'app/enroll.html', {'c1': c, 'phone': phone})

    else:
        b = 1
        return render(request, 'app/enroll.html', {'a': b, 'error': '验证码错误或以过期'})

# 保存密码
def password(request):
    print(2222222222222222222222222222)
    form1 = PW(request.POST)
    if form1.is_valid():
        # 将手机号存入数据库
        phone = request.session.get('phone')
        # User.objects.create(cellphone=p)
        #
        # 删除多余的repassword
        # del form1.cleaned_data['repassword']
        # 保存到数据库密码
        p = request.POST.get('password')
        p1 = hashlib.sha1(p.encode()).hexdigest()
        # 保存小米id
        xiaomiid = str()
        for i in range(10):
            num = str(random.randint(0, 9))
            xiaomiid = xiaomiid + num

        User.objects.create(cellphone=phone, password=p1, xiaomiid=xiaomiid)
        # User.objects.create(**form1.cleaned_data)

        win = 'yes'
        return render(request, 'app/enroll.html', {'win': win, 'xiaomiid': xiaomiid})

    c = 2
    return render(request, 'app/enroll.html', {'c1': c, 'form1': form1})


def user(request):
    return render(request, 'app/user.html')