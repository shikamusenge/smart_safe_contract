# Project Title: Agreement Management Application

## Description

The Agreement Management Application is a decentralized application (dApp) built on the Internet Computer using the Motoko programming language. The application allows users to register and manage agreements between multiple parties securely and efficiently. Each agreement includes details such as the title, description, and the involved parties.

## Features

- **User Registration**: Users can register with a unique `Principal` identifier, email, full name, and profile picture.
- **Agreement Creation**: Users can create agreements specifying the title, description, and involved parties.
- **CRUD Operations**: The application supports Create, Read, Update, and Delete (CRUD) operations for both users and agreements.

## Technologies Used

- **Motoko**: The primary programming language used to develop the backend canister on the Internet Computer.
- **JavaScript**: Used for frontend development to interact with the Motoko backend.
- **HTML/CSS**: Basic web technologies for building the user interface.
- **Internet Computer SDK**: Provides tools and libraries to develop and deploy the dApp.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed to run the frontend.
- **DFX SDK**: The DFINITY SDK (dfx) is required to develop and deploy the application on the Internet Computer.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shikamusenge/smart_safe_contract.git
   cd agreement-management-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Local Replica**:

   ```bash
   dfx start --background
   ```

4. **Deploy the Canisters**:

   ```bash
   dfx deploy
   ```

5. **Run the Frontend**:
   ```bash
   npm start
   ```

## Usage

### Register a User

1. Navigate to the user registration form in the application.
2. Fill in the required details: Full Name, Email, and Profile Picture URL.
3. Click the "Register" button to create a new user.

### Create an Agreement

1. Navigate to the agreement creation form.
2. Fill in the required details: Agreement Title, Description, and Parties (list of Principals).
3. Click the "Create Agreement" button to store the agreement.

### Manage Agreements

- **View Agreements**: Users can view a list of all agreements they are part of.
- **Edit Agreements**: Users can edit the details of an agreement they have created.
- **Delete Agreements**: Users can delete an agreement.

## Project Structure

```
agreement-management-app/
├── src/
│   ├── backend/
│   │   ├── main.mo
│   │   └── ... (other Motoko files)
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── index.html
│   │   │   ├── index.js
│   │   │   ├── style.css
│   │   │   └── ... (other frontend files)
├── dfx.json
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- The DFINITY Foundation for providing the Internet Computer and SDK.
- The Motoko language developers for their extensive documentation and support.
- All contributors and users who provided feedback and suggestions.

---

## Contact

For any inquiries or support, please contact [shikamusenge@tyaza.org](shikamusenge@tyaza.org).

---

This `README.md` file provides a comprehensive overview of the Agreement Management Application, its features, and usage instructions. Feel free to customize and expand it as needed for your specific project.
