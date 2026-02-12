
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const API_URL = 'http://localhost:4000/api';

async function testAttendance() {
    try {

        console.log('Logging in...');

        const loginRes = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'joao.professor@escola.com', password: 'password123' })
        });

        if (!loginRes.ok) {
            console.error('Login failed:', await loginRes.text());
            return;
        }

        const loginData: any = await loginRes.json();
        const token = loginData.token;
        console.log('Login successful, token obtained.');

        console.log('Marking attendance...');

        const classesRes = await fetch(`${API_URL}/classes`, {
             headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!classesRes.ok) {
             console.error('Failed to get classes:', await classesRes.text());
             return;
        }

        const classes: any = await classesRes.json();
        if (classes.length === 0) {
            console.log('No classes found to test with.');
            return;
        }

        const student = classes[0].students[0];
        if (!student) {
             console.log('No students found in first class.');
             return;
        }

        console.log(`Testing with student: ${student.name} (${student.id})`);

        const attendanceRes = await fetch(`${API_URL}/attendance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                studentId: student.id,
                status: 'PRESENT',
                date: new Date().toISOString().split('T')[0]
            })
        });

        if (!attendanceRes.ok) {
            console.error('Mark attendance failed:', await attendanceRes.text());
        } else {
            console.log('Mark attendance successful:', await attendanceRes.json());
        }

    } catch (error) {
        console.error('Test script error:', error);
    }
}

testAttendance();