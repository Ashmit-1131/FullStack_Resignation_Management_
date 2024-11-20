Resignation Management System - Backend
A backend system for managing employee resignations, approvals, and exit interviews, with email notifications for status updates.

Features
User Authentication: JWT-based authentication for employees and admins.
Resignation Management: Employees can submit resignations; admins can view, approve, or reject them.
Exit Interviews: Employees can submit exit questionnaire responses.
Email Notifications: Sends emails using NodeMailer when resignations are approved or rejected.
Branch Names and Functionalities
1. Main Branch
Branch Name: main
Contains the production-ready code.
2. Feature Branches
User Authentication (Backend/user-authentication)
Implements user registration and login endpoints.

Resignation Submission (Backend/employee-resignation)
Allows employees to submit resignation requests.

View Resignations (Backend/view-resignations)
Enables admins to view all resignation requests.

Resignation Approval (Backend/resignation-approval)
Admins can approve/reject resignations. Sends status updates via NodeMailer.

Exit Questionnaire (backend/exit-questionnaire)
Employees can submit exit questionnaire responses; admins can view them.

Endpoints Overview
Authentication
POST /api/auth/register - User registration.
POST /api/auth/login - User login.
Employee Endpoints
POST /api/user/resign - Submit a resignation request.
POST /api/user/responses - Submit exit questionnaire responses.
Admin Endpoints
GET /api/admin/resignations - View all resignations.
PUT /api/admin/conclude_resignation - Approve/reject resignations (with email notifications).
GET /api/admin/exit_responses - View exit questionnaire responses.

Branch creations and handling:-
git checkout main
git pull origin main
git checkout -b backend/<new-branch-name>

