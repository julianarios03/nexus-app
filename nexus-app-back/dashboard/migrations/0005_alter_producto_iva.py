# Generated by Django 4.2.6 on 2023-10-23 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0004_alter_venta_orden'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='iva',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
