# from django.contrib.auth.hashers import make_password, check_password
import hashlib

from django.contrib.auth.hashers import make_password, check_password
from django.db import models

# Create your models here.
from django.http import request


class User(models.Model):
    uid = models.AutoField(primary_key=True)
    cellphone = models.CharField(max_length=11, unique=True)
    password = models.CharField(max_length=200)
    xiaomiid = models.CharField(max_length=200, null=True)
    orderformid = models.IntegerField(null=True)
    collectid = models.IntegerField(null=True)
    site = models.IntegerField(null=True)

    class Meta:
        managed = True
        db_table = 'mi_user'

    # @property
    # def password(self):
    #     # 把加密后的密码返回到数据库
    #     return self.password_hash
    #
    #
    # @password.setter
    # def password(self, value):
    #     self.password_hash = hashlib.sha1(value.encode('utf8')).hexdigest()


    # # 第一个参数是提交的密码   第二个参数是数据库的密码
    # def check_login(self,newpassword,database_password):
    #     # 验证密码是否相等 返回的布尔值
    #     return check_password(newpassword,database_password)

    # user=User()
    # password = request.POST.get('password')
    # if check_login(password,user.password):
    #     pass
    # else:


