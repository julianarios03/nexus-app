# Generated by Django 4.2.6 on 2023-10-22 23:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empleados',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=100)),
                ('salario_mensual', models.DecimalField(decimal_places=0, max_digits=10, validators=[django.core.validators.MinValueValidator(0)])),
                ('deudas', models.BooleanField(default=False)),
                ('retefuente', models.DecimalField(decimal_places=2, max_digits=3)),
                ('correo', models.EmailField(max_length=254)),
                ('telefono', models.IntegerField()),
                ('cargo', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('costo_unitario', models.DecimalField(decimal_places=0, max_digits=10, validators=[django.core.validators.MinValueValidator(0)])),
                ('iva', models.DecimalField(decimal_places=2, max_digits=3)),
            ],
        ),
        migrations.CreateModel(
            name='Ventas',
            fields=[
                ('orden', models.AutoField(primary_key=True, serialize=False)),
                ('cliente', models.CharField(max_length=100)),
                ('costo', models.DecimalField(decimal_places=0, max_digits=10, validators=[django.core.validators.MinValueValidator(0)])),
            ],
        ),
    ]
