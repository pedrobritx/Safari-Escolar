export interface GradeCategory {
    id: string;
    name: string;
    weight?: number;
    classroom_id: string;
}

export interface GradeItem {
    id: string;
    category: string; // ID
    category_name?: string;
    title: string;
    max_score: number;
    graded_at: string;
}

export interface GradeEntry {
    id: string;
    grade_item: string; // ID
    student: string; // ID
    student_name?: string;
    score: number;
}

export interface TeacherGradebook {
    categories: GradeCategory[];
    items: GradeItem[];
    entries: GradeEntry[];
}
