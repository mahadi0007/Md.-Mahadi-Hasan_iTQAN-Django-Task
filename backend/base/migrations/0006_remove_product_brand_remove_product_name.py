# Generated by Django 4.0.1 on 2022-01-23 12:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_remove_product_countinstock_remove_product_createat_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='brand',
        ),
        migrations.RemoveField(
            model_name='product',
            name='name',
        ),
    ]
