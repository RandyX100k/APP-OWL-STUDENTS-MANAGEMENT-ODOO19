from odoo.http import Controller,route,request


class StudentsController(Controller):
    @route("/students",type="http",csrf=False,auth="user",website=True)
    def students(self):
        return request.render("student_management.student_management_register")