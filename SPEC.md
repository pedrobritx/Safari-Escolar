# SPEC.md — Safari Escolar

## 1. Overview

Safari Escolar is a classroom management web application designed for Brazilian public-school conditions, where instructional time is scarce, connectivity is inconsistent, and administrative demands are structurally high. The system is organized around a **teacher-first operational sequence**—attendance registration, formative feedback, assignment distribution and correction, and family communication—while enforcing stringent privacy guarantees and providing guardians with transparent, child-scoped visibility.

The interaction and visual system intentionally blends two complementary paradigms:

- **Skeuomorphic interaction cues** to maximize affordance legibility, reduce action ambiguity, and minimize cognitive friction in time-critical classroom workflows.
- **Glassmorphic layout architecture** to support contemporary visual hierarchy, modular navigation, and scalable information structuring.

---

## 2. Product Scope

### 2.1 In Scope (MVP)

#### Teacher

- **Classroom roster**
  - Student tiles and/or list views
  - Student identity represented by animal avatar and user-selected color background
- **Attendance**
  - Status set: present / late / absent
  - Fast mode via gesture and/or single-tap interactions
  - Bulk actions (e.g., mark all present)
  - Immediate undo capability
  - Offline persistence with deferred synchronization
- **Formative feedback points**
  - Two semantic categories: Positive reinforcement and Growth-oriented (constructive) feedback
  - Template-first issuance (single-tap application)
  - Optional qualitative note
  - Configurable daily caps per student to reduce inflation and bias
- **Student profile timeline**
  - Attendance history
  - Feedback event history
  - Homework/assignment history
- **Assignments via posts feed**
  - Create assignment with due date
  - Attachments and/or links
  - Audience targeting: class, group, or selected students
- **Messaging**
  - Teacher ↔ parent/guardian threads scoped to a specific child

#### Parent/Guardian

- **Child dashboard**
  - Today’s attendance state
  - Recent feedback summary
  - Homework due list
- **Timeline**
  - Attendance
  - Feedback events
  - Homework/assignments
- **Messaging**
  - Child-scoped conversation thread with the teacher

#### Admin/Coordinator (minimum operational tooling)

- Create schools and classrooms
- Provision users (teacher/coordinator/admin)
- Create/import students and link guardians to students

---

### 2.2 In Scope (v1)

- **Gradebook**
  - Categories (optionally weighted)
  - Spreadsheet-like entry and revision
  - Parent-facing simplified grade visibility
- **Calendar views**
  - Attendance by date
  - Assignment due dates
- **At-risk list (rule-based)**
  - Chronic absence/tardiness signals
  - Recurrent growth-feedback patterns
  - Missing-assignment patterns
- **Exports**
  - Attendance
  - Feedback
  - Grades

---

### 2.3 In Scope (v1.5)

- Seating chart and grouping tools
- Badges and class goals (collective, non-competitive emphasis)
- Weekly guardian digest (summary)
- Coordinator analytics dashboard (trends, highlights)
- Performance controls (reduced-glass / low-complexity mode)

---

## 3. User Roles and Permissions

### 3.1 Roles

- **Administrator**: institutional configuration, user provisioning, global settings
- **Coordinator**: oversight, auditing, analytics, school-level monitoring
- **Teacher**: classroom operations, attendance, feedback, assignments, grading, communication
- **Parent/Guardian**: read-only access to their child(ren), messaging with teacher
- **Student (future)**: assignment access, achievement visibility, submission workflows

### 3.2 Permission Model (Hard Constraints)

- Parents/guardians may access **only** explicitly linked student records.
- No family-to-family visibility or communication is permitted.
- Teachers are strictly scoped to assigned classrooms.
- Coordinators retain read-only and oversight access across classrooms.
- Sensitive actions must generate audit events (see §7).

---

## 4. Key Flows

### 4.1 Teacher: Start Session (MVP Core Loop)

1. Open “Today” and select classroom
2. Launch Attendance Fast Mode
3. Register attendance (bulk present + exceptions)
4. Issue formative feedback points (template-first, optional notes)
5. Publish homework/assignment (as needed)
6. Review timeline and/or message guardians (as needed)
7. End session

#### **Acceptance characteristics**

- Attendance marking for a full class is feasible in under 60 seconds.
- Feedback issuance minimizes typing and privileges templates.

---

### 4.2 Teacher: Attendance Fast Mode

- Tap/gesture per student sets status (present/late/absent)
- Optional reason chips for late arrivals
- Undo last action
- Offline save with background synchronization upon connectivity restoration

---

### 4.3 Teacher: Award Feedback Points

- Select student(s)
- Choose category (Positive or Growth)
- Tap template to instantiate feedback event
- Optionally add note
- Timeline updates immediately

---

### 4.4 Teacher: Create Homework/Assignment Post

- Select post type (Homework/Assignment)
- Provide title and description
- Set due date
- Attach file/link
- Define audience (class/group/selected)

---

### 4.5 Parent/Guardian: View Child Status

- Open dashboard
- Review today’s attendance
- Review recent feedback events
- View homework due list
- Open timeline for longitudinal history

---

### 4.6 Parent/Guardian: Messaging

- Open child-scoped thread
- Read messages
- Send message to teacher

---

### 4.7 Coordinator: Oversight (v1)

- View school/classroom indicators
- Review at-risk list
- Access audit logs and exports

---

## 5. Non-Goals

The following are explicitly out of scope for the MVP and should not be implemented without formal roadmap promotion:

- Full LMS functionality (learning modules, quizzes, SCORM, learning pathways)
- Parent-visible leaderboards, rankings, or social comparison mechanisms
- Family-to-family messaging, community feeds, or social spaces
- Predictive behavioral analytics or automated disciplinary recommendations
- Payments, billing, or monetization features
- Public student profiles or shareable achievements outside institutional context
- Real-time student chat or synchronous classroom social features

---

## 6. Success Criteria

### 6.1 Primary Success Metrics (MVP)

- **Attendance completion time**: mean < 60 seconds per classroom session.
- **Feedback frequency**: sustained weekly usage by teachers with equitable distribution across students.
- **Parent engagement**: weekly active rate among guardians linked to active classrooms.
- **Constraint resilience**: attendance and feedback workflows remain usable under intermittent connectivity.

### 6.2 Quality Bars

- Mobile-first usability validated via timed, task-based testing with practicing teachers.
- Core screens meet performance budgets on mid- and low-range mobile devices.
- Accessibility checks pass for contrast, target size, reduced motion, and non-color-only encoding.

### 6.3 Secondary Success Indicators (v1+)

- Reduction in missing assignments and improved visibility of due work.
- Increased responsiveness in teacher–family communication.
- Effective early identification via rule-based at-risk signals, assessed qualitatively by coordinators.

---

## 7. Security, Privacy, and Auditability

### 7.1 Controls

- Role-based access control (RBAC)
- Row-level authorization checks for student-scoped records
- Data minimization (store only necessary personally identifiable information)
- Secure authentication and session management

### 7.2 Audit Events (Minimum)

- Attendance edits (including retroactive changes)
- Grade changes (v1)
- Guardian linkage/unlinkage
- Permission and role changes
- Export generation

---

## 8. Performance and Accessibility Requirements

### 8.1 Performance

- Attendance interface loads in < 2 seconds on mobile.
- Offline caching supports daily classroom operations.
- Reduced-glass mode available to lower GPU/CPU cost when necessary.

### 8.2 Accessibility

- High-contrast option
- Reduced-motion option
- Non-color-only encoding for status and meaning (icons + labels)
- Large tap targets (≥ 44px)

---

## 9. Release Gate Criteria

### MVP Release Gate

- End-to-end loop functional: roster → attendance → feedback → homework → parent view → messaging
- Offline-first behavior verified for attendance and feedback
- Permissions verified (no data leakage across families or classrooms)
- Exports and audit logging available at minimum for attendance and feedback

### v1 Release Gate

- Gradebook with exports
- Rule-based at-risk list
- Calendar views
- Coordinator oversight dashboards
