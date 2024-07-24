import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

async function sendEmail(formData) {


  let emailBody;
  let emailSubject;

  if (formData.companyWebsite) {
   
    emailSubject = 'New Developer Form Submission';
    emailBody = `
      Full Name: ${formData.fullName}
      Phone Number: ${formData.phoneNumber}
      Email: ${formData.email}
      Job Title: ${formData.jobTitle}
      Company Website: ${formData.companyWebsite}
      Industry: ${formData.industry}
      Company Size: ${formData.companySize}
      Project Name: ${formData.projectName}
      Project Description: ${formData.projectDescription}
      Expected Volume: ${formData.expectedVolume}
      Comments: ${formData.comments}
    `;
  } else {
    emailSubject = 'New Contact Form Submission';
    emailBody = `
      Full Name: ${formData.fullName}
      Phone Number: ${formData.phoneNumber}
      Email: ${formData.email}
      Preferred Contact Method: ${formData.contactMethod}
      Message: ${formData.message}
    `;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'isaacwambiri254@gmail.com', 
    subject: emailSubject,
    text: emailBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    
    return info;
  } catch (error) {
    
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

export async function POST(request) {


  try {
    const text = await request.text();
    if (!text) {
      throw new Error('Request body is empty');
    }

    let formData;
    try {
      formData = JSON.parse(text);
    } catch (parseError) {
     
      throw new Error('Invalid JSON in request body');
    }

    
    let requiredFields;
    if (formData.companyWebsite) {
      // Developers Form
      requiredFields = ['fullName', 'phoneNumber', 'email', 'companyWebsite', 'industry', 'companySize'];
    } else {
      // Get In Touch Form
      requiredFields = ['fullName', 'phoneNumber', 'email', 'contactMethod'];
    }

    for (const field of requiredFields) {
      if (!formData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    await sendEmail(formData);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    

    let statusCode = 500;
    if (error.message.includes('Missing required field') || error.message.includes('Invalid JSON')) {
      statusCode = 400;
    }

    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: statusCode });
  }
}