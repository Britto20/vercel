# GitHub Repository Setup Instructions

Follow these steps to create a GitHub repository for your portfolio and upload all the code:

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in to your account (Priya2993)
2. Click the green "New" button or the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `portfolio-website` (or any name you prefer)
   - **Description**: "Modern responsive portfolio website built with React, TypeScript, and Express.js"
   - **Visibility**: Choose "Public" (recommended for portfolios)
   - **Initialize repository**: Leave unchecked (we'll upload existing code)
5. Click "Create repository"

## Step 2: Download Your Code from Replit

Since you're working in Replit, you need to download all your code:

1. In your Replit project, click on the three dots menu (⋯) in the file explorer
2. Select "Download as zip"
3. Extract the downloaded zip file to a folder on your computer

## Step 3: Upload Code to GitHub

### Option A: Using GitHub Web Interface (Easier)

1. In your new GitHub repository, click "uploading an existing file"
2. Drag and drop all your project files (except node_modules, .replit, and replit.nix)
3. Write a commit message: "Initial portfolio website setup"
4. Click "Commit changes"

### Option B: Using Git Commands (Recommended)

Open terminal/command prompt in your extracted project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio website setup"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/Priya2993/portfolio-website.git

# Push to GitHub
git push -u origin main
```

## Step 4: Set Up Repository Settings

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

## Step 5: Update Repository Description

1. Go to your repository main page
2. Click the gear icon next to "About"
3. Add description: "Modern responsive portfolio website showcasing my software development skills"
4. Add website URL (if you deploy it)
5. Add topics: `portfolio`, `react`, `typescript`, `express`, `web-development`
6. Click "Save changes"

## Important Files Included

✓ `README.md` - Comprehensive project documentation
✓ `.gitignore` - Proper Git ignore rules
✓ All source code files
✓ Package.json with all dependencies
✓ Database schema and configuration

## Next Steps After Upload

1. **Star your own repository** to show it's an active project
2. **Add it to your LinkedIn** under projects section
3. **Consider deploying** to Vercel, Netlify, or similar platforms
4. **Keep updating** as you add new projects and skills

## Deployment Options

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Similar to Vercel, great for frontend projects
- **Railway**: Good for full-stack apps with database
- **Replit Deployments**: Deploy directly from your Replit

Your portfolio will be live at: `https://priya2993.github.io/portfolio-website/` (if using GitHub Pages)

## Need Help?

If you encounter any issues:
1. Check GitHub's documentation
2. Make sure all files are uploaded correctly
3. Verify the .gitignore excludes unnecessary files
4. Ensure package.json has all required dependencies