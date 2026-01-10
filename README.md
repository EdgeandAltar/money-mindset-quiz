# Money Mindset Quiz - Netlify Deployment Package

## 🎯 What's in This Package

Everything you need to deploy your Money Mindset Quiz to Netlify and embed it in Wix:

- `package.json` - Dependencies and build configuration
- `public/index.html` - HTML wrapper with SEO meta tags
- `src/index.js` - React app launcher
- `src/MoneyMindsetQuiz.jsx` - Your complete quiz component

## 🚀 Deployment Steps (45 Minutes Total)

### STEP 1: Create GitHub Account (5 mins)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username, email, password
4. Verify your email

**Skip this if you already have a GitHub account!**

---

### STEP 2: Upload This Folder to GitHub (10 mins)

**Option A: Via Web Interface (Easiest)**

1. Log into GitHub
2. Click the "+" in top right → "New repository"
3. Repository name: `money-mindset-quiz`
4. Description: "Money Mindset Type Quiz for Edge & Altar"
5. Make it **Public**
6. Click "Create repository"
7. Click "uploading an existing file"
8. Drag ALL files from this folder into the browser
9. Scroll down, click "Commit changes"

**Option B: Via GitHub Desktop (If You Want)**

1. Download GitHub Desktop
2. Clone your new repository
3. Copy all these files into the cloned folder
4. Commit and push

---

### STEP 3: Deploy to Netlify (10 mins)

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub" to sign in
3. Click "Add new site" → "Import an existing project"
4. Click "GitHub" → Authorize Netlify
5. Find and select `money-mindset-quiz` repository
6. Build settings (Netlify usually auto-detects):
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
7. Click "Deploy site"
8. Wait 2-3 minutes for deployment
9. 🎉 Your quiz is live!

**Your URL will be:** `random-name-123456.netlify.app`

---

### STEP 4: Add ConvertKit Integration (10 mins)

**You'll need:**
- ConvertKit Form ID
- ConvertKit API Secret

**Important Security Note:**
Don't put your API secret directly in the code (it's client-side). Instead:

**Option A: Use ConvertKit's Direct Form Submit (Simpler)**

1. In ConvertKit, go to your form
2. Click "Share" → "Embed"
3. Copy the form URL
4. Replace the fetch call in the quiz with a simple form post

**Option B: Use Netlify Functions (More Secure)**

Create a serverless function to handle the API call.
(I can provide code for this if needed - just ask!)

**For now, you can test without ConvertKit:**
The quiz will work, it just won't capture emails yet.

---

### STEP 5: Embed in Wix (10 mins)

1. Log into Wix, edit your site
2. Go to the page where you want the quiz
3. Click **Add** (+) button
4. Click **Embed** → **HTML iframe**
5. Drag the iframe element onto your page
6. Make it full width of your content area
7. Click the iframe → Click "Enter Code"
8. Paste this code:

```html
<iframe 
  src="https://YOUR-NETLIFY-URL.netlify.app" 
  width="100%" 
  height="1000px" 
  frameborder="0"
  style="border: none;"
  scrolling="yes"
  title="Money Mindset Quiz"
></iframe>
```

9. Replace `YOUR-NETLIFY-URL` with your actual Netlify URL
10. Adjust height if needed (900px - 1200px usually works)
11. Click "Update" → "Publish" your Wix site

**Done! Your quiz is now live on Wix!**

---

## 🎨 Optional: Custom Domain

Instead of `random-name.netlify.app`, use `quiz.edgeandaltar.com`:

1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `quiz.edgeandaltar.com`
4. Netlify will give you DNS instructions
5. Add DNS records in your domain provider (where you bought edgeandaltar.com)
6. Wait 24-48 hours for DNS to propagate

---

## 🔧 Making Updates

**To update the quiz after deployment:**

1. Edit the file in GitHub (click file → pencil icon)
2. Make your changes
3. Scroll down → "Commit changes"
4. Netlify automatically rebuilds (2-3 minutes)
5. Changes are live!

**No need to re-embed in Wix** - the iframe will show the updated version automatically.

---

## 🆘 Troubleshooting

### "Build Failed" in Netlify

**Check the build log:**
1. Click on the failed deployment
2. Read the error message
3. Common issues:
   - Missing files → Make sure all files uploaded
   - Syntax error → Check for typos in code
   - Wrong build command → Should be `npm run build`

**Fix:**
1. Make correction in GitHub
2. Netlify will auto-deploy again

---

### Quiz Not Showing in Wix

**Checklist:**
- [ ] Is the Netlify URL correct in iframe code?
- [ ] Is the Netlify site deployed successfully?
- [ ] Try opening the Netlify URL directly in a browser
- [ ] Clear your browser cache
- [ ] Try a different browser
- [ ] Increase iframe height to 1200px
- [ ] Make sure iframe width is 100%

---

### Quiz Looks Weird in Mobile

1. In Wix editor, switch to mobile view
2. Adjust iframe size for mobile
3. May need different height on mobile vs desktop
4. Test on actual phone before going live

---

### ConvertKit Not Capturing Emails

**Test it first:**
1. Take the quiz yourself
2. Use your own email
3. Check if you receive anything
4. Check ConvertKit dashboard for new subscriber

**If not working:**
1. Check Form ID is correct
2. Verify API credentials
3. Look at browser console for errors (F12 → Console tab)
4. Check ConvertKit API logs

---

## 📊 Analytics

**Track quiz performance:**

1. **Netlify Analytics** (built-in)
   - See pageviews, unique visitors
   - Free tier includes basic stats

2. **Google Analytics**
   - Add tracking code to `public/index.html`
   - Track quiz completions as events

3. **ConvertKit**
   - See how many people convert
   - Which result types are most common

---

## 💡 Pro Tips

**Before going live:**
- [ ] Test the quiz yourself 3+ times
- [ ] Try on mobile
- [ ] Have someone else test it
- [ ] Make sure all links work
- [ ] Verify product link goes to right page
- [ ] Test social share buttons

**After launch:**
- [ ] Monitor first 10 completions closely
- [ ] Fix any issues immediately
- [ ] Adjust height if quiz cuts off
- [ ] Get feedback from test users

---

## 🎯 Next Steps After Deployment

1. **Create Pinterest pins** (use the templates I provided)
2. **Set up email sequences** in ConvertKit
3. **Add quiz link to your site navigation**
4. **Link from blog posts**
5. **Share with email list**

---

## 📞 Need Help?

**Stuck on something?**

Option 1: **Hire on Fiverr**
- Search "deploy React app to Netlify"
- Cost: $20-50
- Done in 24 hours

Option 2: **Post in communities**
- Reddit r/webdev
- Netlify Community Forums
- Wix Community Forums

Option 3: **Watch tutorials**
- "How to deploy React to Netlify" on YouTube
- "Embed iframe in Wix" on YouTube

---

## 🎉 You've Got This!

This might look like a lot, but each step is actually pretty simple. Most people get stuck on GitHub the first time, but once you've done it once, it's easy.

**Time breakdown:**
- GitHub setup: 5 mins
- File upload: 5 mins
- Netlify deployment: 5 mins (mostly waiting)
- Wix embed: 5 mins
- Testing: 10 mins

**Total active time: ~30 minutes**

The quiz is ready to go - you just need to get it online!

Good luck! 🎯✨
