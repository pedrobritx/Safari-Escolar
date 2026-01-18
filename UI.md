# UI.md — Safari Escolar

> **Governance Policy:** This document constitutes the normative specification for Safari Escolar’s user-interface system. Design tokens, component taxonomies, interaction primitives, and layout constraints defined herein are **binding**. Introducing new visual primitives, interaction patterns, or component variants—whether via ad hoc CSS, bespoke UI elements, or library substitutions—SHALL NOT occur without updating this document and, where architectural in scope, recording the rationale and consequences in an ADR.

---

## 1. System-Level Design Intent

Safari Escolar operationalizes a deliberate bifurcation of visual language in service of usability under classroom conditions:

- **Glassmorphism as informational infrastructure**: translucent structural surfaces (navigation, panels, cards, headers) that establish hierarchy and spatial grouping without competing for attentional bandwidth.
- **Skeuomorphism as interaction truth**: primary action surfaces (buttons, toggles, attendance controls) that provide unambiguous affordances through tactile metaphors (elevation, press depth, and state transitions).

This synthesis is not aesthetic experimentation; it is a throughput- and cognition-driven approach calibrated to the realities of Brazilian public-school teaching contexts (time scarcity, heterogeneous devices, intermittent connectivity).

### 1.1 UX Requirements (Non-Negotiable)

- **Teacher-throughput constraint**: the sequence “Start class → attendance → feedback” MUST be executable rapidly, with minimal mode switching and minimal text entry.
- **Mobile primacy**: the UI MUST be optimized for one-handed use, thumb-zone action placement, and **≥ 44px** touch targets.
- **State legibility**: every user action MUST result in a perceivable state transition (pressed, selected, committed, or undone), eliminating ambiguity.
- **Accessibility by default**: contrast safety, reduced motion, and redundant encodings (text/icon + color) MUST be systematically enforced.

---

## 2. Design Tokens (Canonical Vocabulary)

Tokens are expressed as CSS variables and consumed via Tailwind utilities and component styles. Tokens are the only permissible interface to the visual system; direct color literals and hard-coded shadows are prohibited outside of token definitions.

### 2.1 Color System

#### 2.1.1 Brand allocation (macro)

- **Primary base (60%)**: Khaki (institutional warmth, safari reference)
- **Secondary (30%)**: Green (education/nature association)
- **Accent (10%)**: Orange (salience for primary calls to action)

#### 2.1.2 Palette tokens (recommended)

- `--khaki-50 .. --khaki-900`
- `--green-50 .. --green-900`
- `--orange-50 .. --orange-900`
- `--neutral-0 .. --neutral-950`

#### 2.1.3 Semantic tokens (required)

- `--bg` (application background)
- `--surface` (base opaque surface)
- `--surface-glass` (standard glass surface)
- `--surface-glass-strong` (glass surface for headers and nav)
- `--text` / `--text-muted`
- `--border` / `--border-strong`
- `--primary` (khaki)
- `--secondary` (green)
- `--accent` (orange)
- `--success` / `--warning` / `--danger` / `--info`

#### 2.1.4 Student identity coloration

Student color is stored as `student.color_hex` and applied with guardrails:

- **Tile/Avatar background**: rendered as a tinted overlay (not a flat fill) to preserve legibility and prevent chroma dominance.
- **Focus ring**: derived from `color_hex` (lightened/darkened) to meet contrast requirements.

**Constraint:** Color MUST NOT encode meaning alone. Attendance status and feedback types MUST also include iconographic and/or textual cues.

### 2.2 Typography

- Font family: `--font-sans`
- Scale:
  - `--text-xs` (metadata)
  - `--text-sm` (supporting text)
  - `--text-base` (default body)
  - `--text-lg` (section titles)
  - `--text-xl` (screen headline)

**Constraint:** Teacher-facing views default to `--text-base` for readability; avoid dense paragraphs and preserve scannability.

### 2.3 Spacing and Grid

- Base unit: `--space-1 = 4px` (4/8 rhythm)
- Permitted increments: 4, 8, 12, 16, 24, 32
- Default padding:
  - Cards/panels: 16–20px
  - Screen edges: 16px (mobile), 24px (desktop)

### 2.4 Radii

- `--radius-sm: 10px` (chips)
- `--radius-md: 14px` (buttons)
- `--radius-lg: 18px` (cards)
- `--radius-xl: 22px` (major panels)

### 2.5 Elevation (Skeuomorphic Tactility)

Skeuomorphic components MUST explicitly communicate elevation and press using consistent shadow and offset semantics.

- `--elev-0` (flat)
- `--elev-1` (raised)
- `--elev-2` (primary raised)
- `--elev-pressed` (pressed state)

**Constraint:** Pressed state always reduces elevation and slightly darkens the surface to convey physical depression.

### 2.6 Glass Parameters (Structural Surfaces)

- `--glass-blur: 10–18px` (hard cap)
- `--glass-opacity: 0.55–0.75`
- `--glass-border-opacity: 0.18–0.28`

**Performance constraint:** Glass blur is prohibited on full-screen scrolling surfaces and long lists.

### 2.7 Motion

- Default duration: 120–180ms
- Easing: standard ease-out
- Reduced motion mode MUST disable non-essential animations.

---

## 3. Token Implementation (CSS Variables)

Illustrative reference implementation:

```css
:root {
  --bg: var(--khaki-50);
  --surface: rgba(255, 255, 255, 0.92);
  --surface-glass: rgba(255, 255, 255, 0.62);
  --border: rgba(0, 0, 0, 0.10);
  --text: rgba(18, 18, 18, 0.92);

  --primary: var(--khaki-500);
  --secondary: var(--green-600);
  --accent: var(--orange-500);

  --radius-lg: 18px;
  --glass-blur: 14px;
}

[data-theme="reduced-glass"] {
  --surface-glass: rgba(255, 255, 255, 0.88);
  --glass-blur: 0px;
}
```

---

## 4. Component System (Permitted Components)

Components are organized as a controlled vocabulary. Product teams SHALL compose user experiences exclusively from the component set below; introducing bespoke variants requires formalization in this document.

### 4.1 Foundations

- **GlassPanel**: structural glass container for headers and panels
- **Card**: opaque or lightly translucent content container
- **Divider**: low-salience separators
- **Badge**: categorical tags
- **Tooltip** (desktop): optional, non-critical

### 4.2 Navigation

- **TopAppBar**: title + primary actions
- **BottomNav (mobile)**: primary navigation for teacher/parent modes
- **RoleSwitcher** (admin/coordinator)
- **Breadcrumb** (desktop): optional, informational

**Constraint:** Mobile primary navigation MUST be bottom-based; avoid hamburger menus for teacher core flows.

### 4.3 Inputs (Skeuomorphic)

- **PrimaryButton / SecondaryButton / GhostButton**
- **IconButton** (≥ 44px)
- **SegmentedControl** (mode selection; e.g., attendance)
- **Toggle / Switch**
- **TextField / TextArea** (discouraged; templates preferred)
- **Select** (chips first; dropdown second)

### 4.4 Attendance and Feedback Primitives

- **StudentTile**: animal avatar + name + embedded status chips
- **AttendanceChip**: PRESENT/LATE/ABSENT control primitive
- **UndoToast**: immediate undo affordance for reversible operations
- **FeedbackTemplateChip**: single-tap feedback issuance
- **DailyCapMeter**: subtle cap indicator (teacher-only)

### 4.5 Lists and Feeds

- **ListRow**: consistent row layout
- **TimelineEventCard**: normalized rendering for attendance/feedback/post events
- **PostCard**: homework/assignment item
- **AttachmentRow**: link/file representation

### 4.6 Messaging

- **ThreadListRow**
- **MessageBubble** (teacher/guardian)
- **Composer** (single-line with controlled expansion)

### 4.7 Gradebook (v1)

- **GradebookTable**: spreadsheet-like grid
- **ScoreCell**: numeric entry with validation constraints
- **CategoryTabs**

### 4.8 Coordinator Analytics

- **MetricCard**
- **AtRiskRow**
- **FilterBar** (chips + date/window selection)

---

## 5. Explicitly Prohibited UI Patterns

- Nested modals (modal within modal)
- Multi-step wizards within the teacher core loop
- Hit targets below 44px
- Color-only meaning (no redundant encoding)
- Infinite or persistent animations (pulsing, bouncing, attention traps)
- Heavy blur overlays over long lists

---

## 6. Layout Rules

### 6.1 Default Screen Scaffold

- **Header**: GlassPanel (title, date, primary actions)
- **Body**: scrollable content; low visual noise
- **Primary CTA**: pinned bottom for teacher mode, contextual and singular

### 6.2 Responsiveness

- Mobile target: 360–430px
- Tablet: two-column layouts permitted (e.g., roster + student details)
- Desktop: max content width 1120–1280px, centered

### 6.3 Teacher “Fast Mode” (Attendance)

- Roster grid/list composed of StudentTiles
- Fixed bottom action strip:
  - mode selector (P/L/A)
  - bulk action (Mark all present)
  - undo/confirm affordances

**Constraint:** Attendance MUST be completable without leaving the screen.

### 6.4 Parent Layout

- Persistent child selector
- Timeline as the primary reading surface
- Neutral language and contextual grouping to reduce anxiety and prevent comparative framing

---

## 7. Interaction Rules

### 7.1 Perceptible State Transitions

Every actionable control MUST implement:

- focus/hover (desktop)
- pressed (pointer down)
- selected/toggled (when applicable)
- committed feedback (toast, chip state, counters, or inline confirmation)

### 7.2 Bulk Actions and Reversibility

- Bulk operations MUST provide undo until a clear commit boundary.
- Commit boundary MUST be explicit (manual “Save”) or visibly time-bounded (e.g., auto-commit after N seconds with a persistent toast).

### 7.3 Templates Over Typing

- Default workflows rely on chip/template selection.
- Free-text entry is optional and minimized; it must never be required for core flows.

---

## 8. Accessibility Requirements

- Touch targets: **≥ 44px**
- Contrast: WCAG AA for text where feasible
- Reduced motion: disable non-essential animation
- Screen reader labels: mandatory for icon-only controls
- Redundant status encoding: icon + label + color

---

## 9. Performance Constraints

- Blur MUST be capped and disabled in reduced-glass mode.
- Avoid overdraw: do not stack multiple translucent layers on large lists.
- Use virtualization for rosters exceeding ~40 students.
- Animal assets must be optimized, cached, and delivered in appropriate formats.

---

## 10. Naming, Ownership, and Repository Placement

- Tokens: `packages/ui/tokens/`
- Shared components: `packages/ui/components/`
- Domain components: `apps/web/src/features/<domain>/components/`

**Constraint:** Product-specific components SHALL NOT migrate into the shared UI package unless they are reused across multiple domains and have stable, documented variants.
