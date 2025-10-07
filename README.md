# 🎓 Academic Archive System

## 🛠️ Setup Your Own Academic Archive System

### 📋 Prerequisites

- Node.js 18+ installed
- Google Cloud Project with Drive API enabled
- Firebase project
- Git installed

### 🔧 Step 1: Fork and Clone the Repository

```bash
# Fork this repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/Academic-Archive-System.git
cd Academic-Archive-System

# Install dependencies
npm install
```

### 🔥 Step 2: Firebase Setup

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Realtime Database
   - Set database rules to allow read/write (adjust for production)

2. **Get Firebase Configuration**:
   - Go to Project Settings → General → Your apps
   - Add a web app and copy the config object

3. **Update `lib/firebase.js`**:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     databaseURL: "https://your-project-default-rtdb.firebaseio.com",
     projectId: "your-project-id",
     storageBucket: "your-project.firebasestorage.app",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
     measurementId: "your-measurement-id"
   };
   ```

### 🔑 Step 3: Google Drive API Setup

1. **Enable Google Drive API**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google Drive API
   - Enable Google Sheets API (if needed)

2. **Create Service Account**:
   - Go to IAM & Admin → Service Accounts
   - Create new service account
   - Generate JSON key file
   - Share your Google Drive folders with the service account email

3. **Update `credentials.json`**:
   Replace the entire content with your service account JSON:
   ```json
   {
     "type": "service_account",
     "project_id": "your-project-id",
     "private_key_id": "your-private-key-id",
     "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
     "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
     "client_id": "your-client-id",
     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
     "token_uri": "https://oauth2.googleapis.com/token",
     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com",
     "universe_domain": "googleapis.com"
   }
   ```

4. **Configure Drive Root Folder**:
   - Create a main folder in Google Drive for your archive
   - Share it with your service account email (Editor access)
   - Get the folder ID from the URL: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Update `lib/drive-config.js`:
   ```javascript
   export const DRIVE_CONFIG = {
     ROOT_FOLDER_ID: "YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE",
   };
   ```

### ⚙️ Step 4: Customize Your Institution Details

Update `details/details.js`:
```javascript
// Database node name - use your institution's identifier
const nodename = "YourUniversity_Archive"; 

// Admin panel password - use a strong password
const password = "your_secure_admin_password_2024"; 

// Your institution name
const title = 'Your University Archive System';

export { nodename, password, title };
```

### 🎨 Step 5: Customize Branding and Content

1. **Update Institution Information** in `app/layout.jsx`:
   ```javascript
   export const metadata = {
     title: {
       default: "Your University Archive - Complete Resource Hub",
       template: "%s | Your University Archive",
     },
     description: "The ultimate archive of academic resources for Your University students...",
     // Update all metadata fields
   };
   ```

2. **Replace Images**:
   - Add your logo to `public/images/logo.png`
   - Update `app/icon.png` with your institution's icon
   - Replace images in `public/images/` folder

3. **Update Colors and Styling**:
   - Modify CSS variables in `app/globals.css`
   - Update theme colors in `tailwind.config.js`

### 🚀 Step 6: Development and Deployment

1. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see your archive system

2. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

3. **Deploy to Vercel** (Recommended):
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```
   - Add environment variables in Vercel dashboard if needed
   - Your credentials.json is automatically secured

### 🔒 Security Considerations

1. **Environment Variables**: For production, consider using environment variables instead of committing credentials
2. **Firebase Security Rules**: Implement proper security rules for your database
3. **Admin Panel**: Change the default admin password immediately
4. **API Rate Limits**: Implement rate limiting for production use

### 📚 Adding Content to Your Archive

1. **Organize Google Drive**:
   ```
   📁 Your Archive Root Folder
   ├── 📁 Computer Science
   │   ├── 📁 Year 1
   │   ├── 📁 Year 2
   │   └── 📁 Projects
   ├── 📁 Mathematics
   ├── 📁 Physics
   └── 📁 Resources
   ```

2. **Admin Panel**: Access `/admin/maintain` to manage content and analytics

3. **Content Types Supported**:
   - 📄 PDFs, Documents
   - 📊 Spreadsheets
   - 🖼️ Images
   - 🎥 Videos
   - 💻 Code files
   - 📁 Organized folders

### 🔧 Advanced Configuration

1. **Custom Resource Categories**: Modify `components/resources/resources-data.js`
2. **Analytics Integration**: The system includes Vercel Analytics and Speed Insights
3. **SEO Optimization**: Built-in structured data and meta tags
4. **Performance**: Optimized with image optimization and lazy loading

### 🆘 Troubleshooting

**Common Issues:**

1. **"No folders found"**: Check your Drive folder ID and service account permissions
2. **Firebase errors**: Verify your Firebase configuration and database rules
3. **Build errors**: Ensure all dependencies are installed with `npm install`
4. **Permission denied**: Make sure the service account has access to your Drive folders

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### 📝 License

This project is open source and available under the [MIT License](LICENSE).

### 🌟 Support

If you find this project helpful, please give it a ⭐ on GitHub!

For questions and support:
- 📧 Create an issue on GitHub
- 💬 Join our community discussions
- 📖 Check the documentation

---

**Built with ❤️ for the academic community**

Transform your institution's knowledge sharing with this powerful, modern archive system that puts students and educators first!
