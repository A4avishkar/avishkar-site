# 🚀 Avishkar.site - Deployment Guide

## ✅ What You Have Now

Your website is ready! Here's what I've created:

- **index.html** - Modern landing page with hero section, about, skills, and contact
- **style.css** - Beautiful dark theme with vibrant gradients and glassmorphism
- **script.js** - Smooth scrolling and interactive animations

## 🎯 Free Deployment Options

### Option 1: Cloudflare Pages (Recommended - Current)

**Why Cloudflare Pages?**
- ✅ Higher free limits than Netlify
- ✅ Global edge network (extremely fast)
- ✅ Integrated "Pages Functions" for your OAuth backend
- ✅ Automatic SSL & custom domains

**Steps:**

1. **Push Changes to GitHub**
   - Push the updated `avishkarsite` folder (with `functions/` subfolder)
2. **Go to Cloudflare Dashboard**
   - Click "Workers & Pages" -> "Create application" -> "Pages" -> "Connect to Git"
3. **Configure Project**
   - **Framework preset**: None
   - **Build command**: (Leave blank)
   - **Build output directory**: `avishkarsite`
4. **Set Environment Variables**
   - Go to Project Settings -> Variables & Secrets
   - Add `CLIENT_ID` and `CLIENT_SECRET` (from your Google Cloud Console)
5. **Connect Domain**
   - Go to "Custom domains" and add `avishkar.site`

4. **Configure DNS in Namecheap**
   - Log into Namecheap: https://www.namecheap.com/myaccount/login/
   - Go to Domain List → Manage (next to avishkar.site)
   - Click "Advanced DNS" tab
   - Delete any existing A/CNAME records
   - Add these records:

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | A Record | @ | 75.2.60.5 | Automatic |
   | CNAME Record | www | [your-site-name].netlify.app | Automatic |

5. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes (can take up to 48 hours)
   - Check status: https://dnschecker.org/
   - Enter: `avishkar.site`

6. **Enable SSL (Automatic)**
   - Cloudflare automatically provisions SSL certificates for all Pages sites.
   - Your site will be accessible at `https://avishkar.site`

---

### Option 2: GitHub Pages (Free, Requires Git)

**Why GitHub Pages?**
- ✅ 100% Free
- ✅ Automatic SSL
- ✅ Version control with Git
- ✅ Easy updates via Git push

**Steps:**

1. **Create GitHub Account**
   - Visit: https://github.com/signup
   - Create account if you don't have one

2. **Create Repository**
   - Click "+" → "New repository"
   - Name: `avishkar-site` (or any name)
   - Make it Public
   - Click "Create repository"

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop: index.html, style.css, script.js
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root)
   - Click Save
   - Your site will be at: `https://yourusername.github.io/avishkar-site/`

5. **Add Custom Domain**
   - In Pages settings, add custom domain: `avishkar.site`
   - Create a file named `CNAME` in your repository with content: `avishkar.site`

6. **Configure DNS in Namecheap**
   - Log into Namecheap
   - Advanced DNS → Add records:

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | A Record | @ | 185.199.108.153 | Automatic |
   | A Record | @ | 185.199.109.153 | Automatic |
   | A Record | @ | 185.199.110.153 | Automatic |
   | A Record | @ | 185.199.111.153 | Automatic |
   | CNAME Record | www | yourusername.github.io | Automatic |

---

### Option 3: Vercel (Free, Similar to Netlify)

**Steps:**

1. Visit: https://vercel.com/signup
2. Sign up with GitHub/GitLab/email
3. Click "Add New" → "Project"
4. Import your GitHub repository OR drag & drop files
5. Add custom domain: `avishkar.site`
6. Configure DNS in Namecheap (Vercel will provide instructions)

---

## 🔧 DNS Configuration Details

### What You'll Add in Namecheap:

1. **Log into Namecheap**
   - URL: https://www.namecheap.com/myaccount/login/
   - Username: `Avishkar27`

2. **Navigate to DNS Settings**
   - Domain List → Click "Manage" next to avishkar.site
   - Click "Advanced DNS" tab

3. **Add DNS Records**
   - Click "Add New Record"
   - Choose record type (A or CNAME)
   - Fill in Host, Value, TTL
   - Click the checkmark to save

### For Netlify:
```
Type: A Record
Host: @
Value: 75.2.60.5
TTL: Automatic

Type: CNAME Record
Host: www
Value: your-site-name.netlify.app
TTL: Automatic
```

---

## ✅ Verification Checklist

After deployment:

- [ ] Website deployed to hosting platform
- [ ] Custom domain added in hosting dashboard
- [ ] DNS records added in Namecheap
- [ ] DNS propagation complete (check at dnschecker.org)
- [ ] Site accessible at http://avishkar.site
- [ ] SSL certificate active (https://avishkar.site shows padlock)
- [ ] All pages and links working correctly
- [ ] Repo has NO git submodules (Cloudflare Pages should deploy plain folders like `phozi/` and `tradeless/`)

---

## 🎨 Preview Your Site Locally (Optional)

Before deploying, you can preview your site locally:

### Method 1: Using Python
```powershell
# Navigate to your site folder
cd e:\avishkarsite

# Start local server
python -m http.server 8000

# Open browser to: http://localhost:8000
```

### Method 2: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Click "Open with Live Server"

---

## 📝 Next Steps

1. **Choose your deployment method** (I recommend Netlify for easiest setup)
2. **Follow the steps above** to deploy your site
3. **Configure DNS** in Namecheap
4. **Wait for DNS propagation** (5-30 minutes typically)
5. **Visit your live site** at https://avishkar.site

---

## 🆘 Need Help?

If you run into any issues:
1. Check DNS propagation: https://dnschecker.org/
2. Verify DNS records in Namecheap match exactly
3. Wait 24-48 hours for full DNS propagation
4. Check hosting platform status page

---

## 🎉 What's Next After Deployment?

Once your site is live, you can:
- Add more content and pages
- Customize colors and design
- Add a blog section
- Integrate contact forms
- Add analytics (Google Analytics)
- Connect social media links
- Add your portfolio projects

Let me know when you're ready to deploy, and I can guide you through the specific steps!
