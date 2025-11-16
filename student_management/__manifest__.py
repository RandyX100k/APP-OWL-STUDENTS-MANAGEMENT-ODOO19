{
    'name': "Estudiantes",

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """
        Long description of module's purpose
    """,

    'author': "Randy Ciprian",
    'website': "https://www.yourcompany.com",

    'category': 'Uncategorized',
    'version': '0.1',

    'depends': ['base','portal','web','website'],

    'data': [
        'views/views.xml',
        'views/student_view.xml',
        'security/ir.model.access.csv',
       
    ],
    
    'assets':{
        'web.assets_frontend':[
            'student_management/static/src/xml/**/*.xml',
            'student_management/static/src/css/**/*.css',
            'student_management/static/src/components/**/*.js',
        ]
    }
    
}

