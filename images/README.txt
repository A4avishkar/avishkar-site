# Adding Your Profile Photo

Your profile photo has been added to the website! Here's what was done:

## Changes Made:

1. **Created images folder**: `e:\avishkarsite\images\`
2. **Updated HTML**: Added profile photo to About section
3. **Added CSS**: Circular design with hover effects

## To Complete Setup:

**Save your photo to the images folder:**

1. Right-click on the uploaded image
2. Save it as: `e:\avishkarsite\images\profile.jpg`

OR use PowerShell:
```powershell
# If you have the image file, copy it:
Copy-Item "path\to\your\photo.jpg" "e:\avishkarsite\images\profile.jpg"
```

## Then Deploy:

```powershell
cd e:\avishkarsite
git add .
git commit -m "Added profile photo to About section"
git push
```

Your photo will appear in the About section with a professional circular frame!

## Photo Specifications:
- **Size**: 200x200px (circular)
- **Format**: JPG recommended
- **Style**: Circular with gradient border
- **Effect**: Hover animation (scales up slightly)

The photo will be displayed prominently in the About section, making your website more personal and professional!
