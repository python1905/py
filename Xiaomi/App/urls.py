from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^login/$', views.login, name='login'),
    url(r'^verify_login/$', views.verify_login, name='verify_login'),
    url(r'^enroll/$', views.user_enroll, name='enroll'),
    url(r'^is_sms/$', views.is_sms, name='is_sms'),
    url(r'^password/$', views.password, name='password'),
    url(r'^user/$', views.user, name='user'),
]