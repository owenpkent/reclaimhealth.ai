# Google Forms Setup Guide

## Quick Setup

### 1. Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. Name it "ReclAIm Waitlist Signup"

### 2. Add Form Fields

Add these questions to your form:

1. **Name** (Short answer, required)
2. **Email** (Short answer, required) 
3. **I'm a...** (Multiple choice, required)
   - Patient
   - Caregiver
   - Advocate
   - Hospital Admin
   - Investor
   - Other
4. **Message** (Paragraph, optional)

### 3. Get the Embed URL

1. Click the "Send" button in your Google Form
2. Click the "Embed" tab
3. Copy the URL that looks like:
   ```
   https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
   ```

### 4. Update the Landing Page

1. Open `components/sections/GoogleFormSignup.tsx`
2. Replace `YOUR_FORM_ID` with your actual form ID:
   ```tsx
   src="https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?embedded=true"
   ```

### 5. Test the Form

1. Deploy your site
2. Test the form submission
3. Check your Google Forms responses

## Benefits of Google Forms

- ✅ **No backend needed** - Google handles everything
- ✅ **Free** - No additional costs
- ✅ **Easy to manage** - Responses in Google Sheets
- ✅ **Spam protection** - Built-in Google protection
- ✅ **Mobile friendly** - Works on all devices
- ✅ **Analytics** - See response rates and trends

## Customization Options

### Form Styling
You can customize the form appearance by:
- Adding custom CSS to the form
- Adjusting the iframe height/width
- Changing the form theme in Google Forms

### Response Management
- Responses automatically go to Google Sheets
- Set up email notifications for new responses
- Export data to CSV for analysis

### Integration
- Connect to other tools via Google Apps Script
- Automate follow-up emails
- Sync with CRM systems

## Troubleshooting

**Form not showing up?**
- Check the form URL is correct
- Make sure the form is published
- Verify the form ID in the URL

**Responses not coming through?**
- Check form settings in Google Forms
- Verify email notifications are enabled
- Check spam folder for notifications

**Mobile issues?**
- Test on different devices
- Adjust iframe height if needed
- Check responsive design

## Next Steps

1. **Deploy your site** to Netlify/Vercel
2. **Test the form** on different devices
3. **Set up notifications** in Google Forms
4. **Monitor responses** and adjust as needed
5. **Consider A/B testing** different form layouts
