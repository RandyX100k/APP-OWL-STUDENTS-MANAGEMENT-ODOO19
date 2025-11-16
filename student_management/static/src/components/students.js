console.log("Student Management Component Loaded");

import { Component, onWillStart, useState } from '@odoo/owl';
import { registry } from '@web/core/registry';
import { useService } from '@web/core/utils/hooks';

export class Students extends Component {
    static template = 'student_management.StudentsTemplate';


    setup() {

        this.state = useState({ students: [], view_alert: false, all_studentes: [] })
        this.orm = useService('orm');

        onWillStart(async () => {
            const data = await this.orm.searchRead('student.management', [], ['id', 'name', 'age', 'state']);


            if (data) {
                this.state.students = data;
                this.state.all_studentes = data;
            } else {
                this.state.view_alert = true;
            }
        })
    }


    filter_name(ev) {

        if (ev.target.value === "") {
            this.state.students = this.state.all_studentes;
        };
        const result = this.state.students.filter((st) => st.name.includes(ev.target.value));

        if (result) {
            this.state.students = result;
        }
    };

    async loadStudents() {
        this.state.students = await this.orm.searchRead(
            "student.management",
            [],
           ['id', 'name', 'age', 'state']
        );
    }


    async change_state(ev) {

        const id = parseInt(ev.currentTarget.dataset.id);

        if (ev.currentTarget.textContent.trim() === "Desactivar") {
            await this.orm.write("student.management", [id], {
                state: "inactive"
            })
        } else {
            await this.orm.write("student.management", [id], {
                state: "active"
            })
        }

        await this.loadStudents();
   

    }
}



registry.category('public_components').add('Students', Students);