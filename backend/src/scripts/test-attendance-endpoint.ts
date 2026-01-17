
import dotenv from 'dotenv';
import path from 'path';

// Load env from root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const API_URL = 'http://localhost:4000/api';

async function testAttendance() {
    try {
        // 1. Login to get token
        console.log('Logging in...');
        // Note: You might need to adjust these credentials to match a valid user in your DB
        const loginRes = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'joao.professor@escola.com', password: 'password123' }) 
        });

        if (!loginRes.ok) {
            console.error('Login failed:', await loginRes.text());
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const loginData: any = await loginRes.json();
        const token = loginData.token;
        console.log('Login successful, token obtained.');

        // 2. Mark Attendance
        console.log('Marking attendance...');
        // We need a valid student ID. Detailed verification might require fetching a class first.
        // For now, let's try to fetch a class and pick a student.
        
        const classesRes = await fetch(`${API_URL}/classes`, {
             headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!classesRes.ok) {
             console.error('Failed to get classes:', await classesRes.text());
             return;
        }
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
