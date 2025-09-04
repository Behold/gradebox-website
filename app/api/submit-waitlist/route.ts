import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.email || !formData.firstName || !formData.lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send to Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL environment variable not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format the message for Slack
    const slackMessage = {
      text: "🎉 New Waitlist Signup!",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎉 New Waitlist Signup!"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${formData.firstName} ${formData.lastName}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${formData.email}`
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${formData.phone || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Position:*\n${formData.position || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Subject:*\n${formData.subject || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Grade Level:*\n${formData.gradeLevel || 'Not provided'}`
            }
          ]
        }
      ]
    };

    // Add message if provided
    if (formData.message) {
      slackMessage.blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Message:*\n${formData.message}`
        }
      });
    }

    // Add timestamp
    slackMessage.blocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `📅 Submitted: ${new Date().toLocaleString()}`
        }
      ]
    });

    // Send to Slack
    const slackResponse = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API error: ${slackResponse.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
