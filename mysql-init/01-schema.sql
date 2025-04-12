
-- Create tables
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  technologies VARCHAR(255),
  image_url VARCHAR(255),
  project_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data for projects
INSERT INTO projects (title, description, technologies, image_url, project_url) 
VALUES 
  ('Cloud Migration Project', 'Migrated on-premises infrastructure to AWS cloud', 'AWS, Terraform, Docker', '', 'https://example.com/project1'),
  ('Kubernetes Deployment', 'Implemented containerized microservices architecture', 'Kubernetes, Docker, Helm', '', 'https://example.com/project2'),
  ('CI/CD Pipeline', 'Automated build and deployment process', 'Jenkins, GitHub Actions, Ansible', '', 'https://example.com/project3');
