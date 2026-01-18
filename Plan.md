# PLAN.md — Safari Escolar

## 1. Purpose

Safari Escolar is a classroom management web application conceived to address the structural, cognitive, and operational demands of Brazilian public-school teaching. The system is designed to provide teachers with a **highly efficient, cognitively economical, and pedagogically aligned** environment for managing attendance, formative feedback, assignments, assessment, and communication with families. From a design standpoint, the product deliberately integrates **skeuomorphic interaction cues**—to enhance affordance recognition and reduce interaction ambiguity—with **glassmorphic layout structures**, which support contemporary visual hierarchy and modular scalability. Usability, instructional flow, and reliability take precedence over feature proliferation.

---

## 2. Product Vision

The long-term vision of Safari Escolar is grounded in educational technology research and classroom realities:

- Substantially reduce in-class cognitive load and administrative friction for teachers.
- Reinforce positive behavioral norms through growth-oriented, formative feedback mechanisms.
- Provide families with transparent, contextualized, and emotionally neutral insight into their child’s academic routine.
- Operate within the practical constraints of public education systems, including limited time, inconsistent connectivity, heterogeneous devices, and strict privacy requirements.

---

## 3. Core Principles (Non‑Negotiables)

- **Teacher‑first workflow**: All critical classroom actions must be executable within a single minute, without task switching or modal complexity.
- **Mobile‑first interaction design**: Interfaces are optimized for one‑handed use, large touch targets, and real-time classroom mobility.
- **Offline‑first classroom operations**: Attendance, feedback, and assignment correction must remain functional under unstable or absent network conditions, with deferred synchronization.
- **Privacy‑by‑design architecture**: Access control, data minimization, and contextual visibility are enforced at the data‑model level.
- **Universal accessibility**: High-contrast visual modes, reduced motion, and multimodal cues ensure compliance with accessibility best practices.

---

## 4. Target Users and Role Structure

### User Roles

- **Administrator**: Oversees institutional configuration, user provisioning, and system-wide policies.
- **Coordinator**: Performs pedagogical oversight, monitors aggregated indicators, and audits classroom activity.
- **Teacher**: Executes all instructional and evaluative actions within assigned classrooms, including grading and family communication.
- **Parent/Guardian**: Accesses read‑only, child‑specific information related to attendance, feedback, assignments, and grades.
- **Student**: Consults assignments, receives feedback, and submits academic artifacts (textual or visual).

### Permission Constraints

- Guardians may access only the records of explicitly linked students.
- No lateral visibility or communication exists between families.
- Teachers are strictly scoped to their assigned classrooms.
- Coordinators retain read-only supervisory access across classrooms.

---

## 5. MVP Core Instructional Loop (Teacher)

The minimum viable experience is structured around a tightly bounded instructional loop:

1. Open classroom session
2. Register attendance via fast interaction mode
3. Review and correct assignments
4. Issue formative feedback points
5. Communicate with guardians when necessary
6. Close session

All secondary features are evaluated exclusively by their capacity to support or streamline this loop.

---

## 6. Feature Scope by Development Phase

### Phase 1 — MVP

#### **Teacher Capabilities**

- Classroom roster displayed as tiles or lists, each student represented by an animal avatar, color identity, and performance indicator
- Attendance fast mode (present, late, absent) with bulk operations
- Formative feedback system with positive and growth-oriented templates, including customization
- Individual student timelines aggregating attendance, feedback, and assignment submissions
- Assignment and homework posts with due dates, attachments, and evaluative scoring
- Bidirectional messaging with guardians and coordinators

#### **Parent/Guardian Capabilities**

- Daily child overview dashboard
- Chronological timeline of attendance and feedback
- Homework and assignment list
- Direct messaging with teachers

#### **Administrator/Coordinator Capabilities**

- School and classroom configuration
- Student importation and guardian linkage
- Teacher analytics dashboard (risk indicators, chronic absenteeism, tardiness patterns)
- Communication channels with teachers and families

---

### Phase 2 — Version 1

- Structured gradebook with categorical weighting, spreadsheet-style input, and export (CSV/PDF)
- Enhanced content feed supporting assignments, announcements, and instructional materials
- Integrated calendar view for attendance and due dates
- Rule-based at‑risk identification (attendance, behavior, submission patterns)
- Formal reporting and archival exports

---

### Phase 3 — Version 1.5

- Seating charts and pedagogical grouping tools
- Badge systems and collective classroom goals
- Automated weekly guardian summaries
- Advanced coordinator analytics dashboards
- Performance tuning and visual theme configuration

---

## 7. UX and Navigation Architecture

### Teacher Interfaces

- Home (Daily overview)
- Classroom workspace
- Attendance (Fast Mode)
- Feedback management
- Content feed
- Gradebook (v1)
- Messaging center
- Assignment review and correction
- Student profile (timeline and private pedagogical notes)

### Parent Interfaces

- Home (child selector)
- Activity timeline
- Homework and assignments
- Grades
- Messaging

---

## 8. Interaction Design Patterns

### Attendance Fast Mode

- Gesture- or tap-based student marking (present, late, absent)
- Bulk completion actions
- Immediate undo capability
- Optional late-arrival categorization via predefined chips

### Feedback Issuance

- Dual classification: positive reinforcement and growth-oriented feedback
- Single-tap template application
- Optional qualitative comments
- Daily feedback caps to prevent inflation and bias

---

## 9. Gamification Framework

- Absence of public comparative rankings for families
- Emphasis on collective classroom objectives
- Achievement badges anchored in behavioral consistency
- Growth feedback framed explicitly as skill development
- Periodic instructional summaries for teachers

---

## 10. Data Model Overview

- Users, institutions, and classrooms
- Student profiles (visual identity, guardianship)
- Attendance records
- Feedback templates and instantiated events
- Content posts (assignments and announcements)
- Assessment structures (categories, items, entries)
- Messaging threads
- Comprehensive audit logs

---

## 11. Security and Privacy Architecture

- Role-based access enforcement
- Row-level permission checks
- Immutable audit trails for sensitive operations
- Minimal personally identifiable information storage
- Secure authentication and session management

---

## 12. Performance and Accessibility Requirements

- Sub‑2‑second load time for attendance interfaces on mobile devices
- Local caching for daily classroom operations
- Optional low‑visual‑complexity mode for constrained hardware
- High‑contrast and reduced‑motion accessibility options

---

## 13. Success Metrics

- Mean time to complete classroom attendance (< 60 seconds)
- Frequency and distribution of feedback usage
- Weekly guardian engagement rate
- Assignment visibility and completion ratios

---

## 14. Delivery Roadmap (High Level)

1. Core infrastructure (authentication, roles, classrooms)
2. Attendance MVP
3. Feedback MVP
4. Guardian access layer
5. Assignment and correction workflow
6. System hardening (exports, auditing, accessibility)
7. Version 1 expansions (gradebook, analytics)

---

## 15. Risks and Mitigation Strategies

- **Scope expansion** → Enforced phase gating and loop-centric evaluation
- **Performance degradation** → Visual complexity throttling and offline prioritization
- **Teacher adoption resistance** → Optimization for speed, templates, and minimal typing
- **Guardian anxiety** → Neutral language, contextual framing, and elimination of comparative metrics

---

## 16. Immediate Next Steps

- Validate the MVP instructional loop through high-fidelity interactive prototypes
- Conduct timed usability testing with practicing teachers focusing on attendance and feedback flows
