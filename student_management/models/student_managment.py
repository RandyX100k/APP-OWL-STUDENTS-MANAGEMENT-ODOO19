
from odoo import models, fields, api, _


class StudentsManagement(models.Model):
    _name = 'student.management'
    _description = _('student.management')
    
    
    name = fields.Char(string="Nombre")
    email = fields.Char(string="Email")
    age = fields.Integer(string="Edad")
    state = fields.Selection(
        [
            ("active","Activa"),
            ("inactive","Inactiva")
        ],
        default="active"
    )