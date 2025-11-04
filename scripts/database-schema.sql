CREATE DATABASE SUST_Research_Portal;

USE SUST_Research_Portal;

CREATE TABLE departments (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    head_id VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'student',
    department_id VARCHAR(36),
    phone VARCHAR(20),
    profile_image_url TEXT,
    is_approved BOOLEAN DEFAULT FALSE,
    approval_date TIMESTAMP,
    approved_by_admin_id VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,

    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (approved_by_admin_id) REFERENCES users(id)
);

ALTER TABLE departments ADD CONSTRAINT fk_dept_head FOREIGN KEY (head_id) REFERENCES users(id);

CREATE TABLE supervisor_students (
    id VARCHAR(36) PRIMARY KEY,
    supervisor_id VARCHAR(36) NOT NULL,
    student_id VARCHAR(36) NOT NULL,
    assigned_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (supervisor_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_supervisor_student (supervisor_id, student_id)
);

CREATE TABLE theses (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    student_id VARCHAR(36) NOT NULL,
    supervisor_id VARCHAR(36) NOT NULL,
    department_id VARCHAR(36) NOT NULL,
    abstract TEXT,
    year INT,
    submitted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'draft' NOT NULL,
    approval_date TIMESTAMP,
    rejection_reason TEXT,
    views INT DEFAULT 0,
    downloads INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (supervisor_id) REFERENCES users(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE thesis_keywords (
    id VARCHAR(36) PRIMARY KEY,
    thesis_id VARCHAR(36) NOT NULL,
    keyword VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (thesis_id) REFERENCES theses(id) ON DELETE CASCADE,
    UNIQUE KEY unique_thesis_keyword (thesis_id, keyword)
);


CREATE TABLE thesis_files (
    id VARCHAR(36) PRIMARY KEY,
    thesis_id VARCHAR(36) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size BIGINT,
    file_url TEXT NOT NULL,
    storage_path VARCHAR(500),
    uploaded_by_id VARCHAR(36) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_primary BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (thesis_id) REFERENCES theses(id) ON DELETE CASCADE,
    FOREIGN KEY (uploaded_by_id) REFERENCES users(id)
);


CREATE TABLE reviews (
    id VARCHAR(36) PRIMARY KEY,
    thesis_id VARCHAR(36) NOT NULL,
    reviewer_id VARCHAR(36) NOT NULL,
    review_status VARCHAR(50) DEFAULT 'pending',
    feedback_text TEXT,
    rating INT,
    suggested_changes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,

    FOREIGN KEY (thesis_id) REFERENCES theses(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewer_id) REFERENCES users(id)
);


CREATE TABLE registration_requests (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    requested_role VARCHAR(50) NOT NULL,
    department_id VARCHAR(36),
    phone VARCHAR(20),
    purpose_statement TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    admin_notes TEXT,
    admin_id VARCHAR(36),
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP,

    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (admin_id) REFERENCES users(id)
);


CREATE TABLE notifications (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    notification_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT,
    related_thesis_id VARCHAR(36),
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (related_thesis_id) REFERENCES theses(id) ON DELETE SET NULL
);


CREATE TABLE audit_log (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id VARCHAR(36),
    description TEXT,
    old_values JSON,
    new_values JSON,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_approved ON users(is_approved);
CREATE INDEX idx_users_department ON users(department_id);
CREATE INDEX idx_theses_student ON theses(student_id);
CREATE INDEX idx_theses_supervisor ON theses(supervisor_id);
CREATE INDEX idx_theses_status ON theses(status);
CREATE INDEX idx_theses_department ON theses(department_id);
CREATE INDEX idx_theses_submitted ON theses(submitted_date);
CREATE INDEX idx_theses_year ON theses(year);
CREATE INDEX idx_supervisor_students_supervisor ON supervisor_students(supervisor_id);
CREATE INDEX idx_supervisor_students_student ON supervisor_students(student_id);
CREATE INDEX idx_thesis_keywords_thesis ON thesis_keywords(thesis_id);
CREATE INDEX idx_thesis_keywords_keyword ON thesis_keywords(keyword);
CREATE INDEX idx_thesis_files_thesis ON thesis_files(thesis_id);
CREATE INDEX idx_thesis_files_type ON thesis_files(file_type);
CREATE INDEX idx_reviews_thesis ON reviews(thesis_id);
CREATE INDEX idx_reviews_reviewer ON reviews(reviewer_id);
CREATE INDEX idx_registrations_status ON registration_requests(status);
CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(is_read);
CREATE INDEX idx_audit_user ON audit_log(user_id);
CREATE INDEX idx_audit_entity ON audit_log(entity_type);
