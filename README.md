# 🧠 ICP CRUD DApp

A basic CRUD (Create, Read, Update, Delete) decentralized application built on the [Internet Computer](https://internetcomputer.org) using:

- 🦀 Rust for backend canisters
- ⚛️ React.js with Vite for frontend
- 🧪 Local deployment using DFX

---

## 📦 Features

- Add, view, update, and delete items (CRUD)
- Backend built using Rust smart contracts (canisters)
- Frontend using React with Vite
- Local development & deployment with DFX

---

## 🚀 Getting Started

### 1. Clone the repository

2. Install Dependencies
Install DFX: Install DFX SDK

Install Rust: Install Rust

Install Node.js (v16+)

Then:

bash
Copy
Edit
cd src/my_crud_dapp_frontend
npm install
3. Start ICP local replica
bash
Copy
Edit
dfx start --background
4. Deploy the DApp locally
From the root directory:

bash
Copy
Edit
dfx deploy
🌐 Accessing the App
After successful deployment, run:

bash
Copy
Edit
dfx canister id my_crud_dapp_frontend
Then open the URL:

ruby
Copy
Edit
http://localhost:4943/?canisterId=<frontend_canister_id>
Replace <frontend_canister_id> with the ID from the command above.

🛠 Project Structure
bash
Copy
Edit
icp-crud-dapp/
├── src/
│   ├── my_crud_dapp_backend/     # Rust backend canister
│   └── my_crud_dapp_frontend/    # React frontend (Vite)
├── dfx.json                      # DFX config
├── README.md
📄 CRUD API (Rust Canister)
create_item(name: String) -> Item

read_item(id: u64) -> Option<Item>

update_item(id: u64, name: String) -> Option<Item>

delete_item(id: u64) -> bool

get_all() -> Vec<Item>

🤝 Contributing
PRs and issues are welcome! If you find a bug or want to add a feature, feel free to open a pull request.

📜 License
This project is licensed under the MIT License.

✨ Acknowledgments
DFINITY

Internet Computer Docs

Rust Lang

Vite + React

yaml
Copy
Edit

---

Let me know if you want to:
- Add screenshots or a demo GIF
- Add Internet Identity authentication
- Deploy to the mainnet/testnet and update the readme accordingly
```bash
git clone https://github.com/your-username/icp-crud-dapp.git
cd icp-crud-dapp

s
